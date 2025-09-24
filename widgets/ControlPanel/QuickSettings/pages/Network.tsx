import { Gtk } from "ags/gtk4";
import { createBinding, createComputed, createState, For, With } from "gnim";
import Network from "gi://AstalNetwork";
import { ButtonWithOptions } from "../QuickSettingsBody";

const network = Network.get_default()

const networkState = createComputed((get) => {
    get(createBinding(network, "connectivity")); //just want it as a dependency for re-computation

    const primary = get(createBinding(network, "primary"));
    const isWifi = primary === Network.Primary.WIFI;
    const isWired = primary === Network.Primary.WIRED;

    let label = "Network";
    let iconName = "network-offline-symbolic";
    let active = false;

    if (isWifi && network.wifi) {
        const ssid = network.wifi.ssid || "";
        label = ssid.length > 7 ? ssid.slice(0, 10) + "…" : ssid;
        active = network.wifi.enabled;
        iconName = network.wifi.iconName || "network-wireless-symbolic"
    } else if (isWired && network.wired) {
        label = "Ethernet";
        active = network.wired.state === Network.DeviceState.ACTIVATED;
        iconName = network.wired.iconName || (active ? "network-wired-symbolic" : "network-wired-offline-symbolic");
    } else if (network.wifi) {
        label = "WiFi"
        active = network.wifi.enabled;
        iconName = network.wifi.iconName || "m-wifi-off-cut";
    }
    return {
        label,
        active,
        iconName
    }
})

export function NetworkButton() {

    return (
        <box>
            <With value={networkState}>
                {({ label, active, iconName }) => (
                    <ButtonWithOptions
                        pageName="networkpage"
                        onToggled={({ active }) => {
                            if (network.wifi) {
                                network.wifi.enabled = active;
                            }
                            // Wired connections can't be toggled like WiFi
                        }}
                        label={label}
                        active={active}
                        iconName={iconName}
                    />
                )}
            </With>
        </box>
    )
}

// for bar
export function NetworkStatus() {
    return (
        <box
            halign={Gtk.Align.CENTER}
        >
            <With value={networkState}>
                {({ iconName }) => (
                    <image
                        iconName={iconName}
                        pixelSize={18}
                    />
                )}
            </With>
        </box>
    )
}

export function NetworkPage({ returnToMain }: { returnToMain: () => void }) {
    const wifiBinding = createBinding(network, "wifi")
    const wiredBinding = createBinding(network, "wired")

    return (
        <box
            name="networkpage"
            class="page"
            orientation={Gtk.Orientation.VERTICAL}
            valign={Gtk.Align.FILL}
            vexpand
            spacing={16}
        >
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                spacing={8}
                halign={Gtk.Align.START}
                hexpand
            >
                <button
                    onClicked={returnToMain}
                    cssClasses={["circle"]}
                >
                    <image
                        iconName="m-arrow-left"
                        pixelSize={20}
                    />
                </button>
                <label class="header" label="Network" hexpand />

                <button
                    halign={Gtk.Align.END}
                    iconName="view-refresh-symbolic"
                    onClicked={() => {
                        if (network.wifi) network.wifi.scan();
                    }}
                    tooltipText="Scan for networks"
                />
            </box>

            <scrolledwindow
                maxContentHeight={400}
                vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                hscrollbarPolicy={Gtk.PolicyType.NEVER}
                vexpand
            >
                <box orientation={Gtk.Orientation.VERTICAL} spacing={8}>
                    <With value={wifiBinding}>
                        {(wifi) => wifi && (
                            <box orientation={Gtk.Orientation.VERTICAL} spacing={6}>
                                {wifi.enabled ? (
                                    <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
                                        <For each={createBinding(wifi, "accessPoints").as(accessPoints => {
                                            // Deduplicate access points by SSID, keeping the strongest signal
                                            const uniqueAPs = new Map<string, Network.AccessPoint>()
                                            accessPoints.forEach(ap => {
                                                const ssid = ap.ssid || "Hidden Network"
                                                const existing = uniqueAPs.get(ssid)
                                                if (!existing || ap.strength > existing.strength)
                                                    uniqueAPs.set(ssid, ap)
                                            })

                                            return Array
                                                .from(uniqueAPs.values())
                                                .sort((a, b) => b.strength - a.strength);
                                        })}>
                                            {(accessPoint: Network.AccessPoint) =>
                                                <AccessPointItem accessPoint={accessPoint} />
                                            }
                                        </For>
                                        {wifi.accessPoints.length === 0 && (
                                            <label
                                                label="No WiFi networks found\nClick refresh to scan"
                                                justify={Gtk.Justification.CENTER}
                                                cssClasses={["dim-label"]}
                                            />
                                        )}
                                    </box>
                                ) : (
                                    <label
                                        label="WiFi is disabled"
                                        cssClasses={["dim-label"]}
                                    />
                                )}
                            </box>
                        )}
                    </With>

                    <With value={wiredBinding}>
                        {(wired) => wired && (
                            <box orientation={Gtk.Orientation.VERTICAL} spacing={6}>
                                <box orientation={Gtk.Orientation.HORIZONTAL} spacing={8}>
                                    <image iconName="network-wired-symbolic" pixelSize={16} />
                                    <label label="Ethernet" cssClasses={["section-header"]} />
                                </box>
                                <WiredConnectionItem wired={wired} />
                            </box>
                        )}
                    </With>
                </box>
            </scrolledwindow>
        </box>
    )
}

function AccessPointItem({ accessPoint }: { accessPoint: Network.AccessPoint }) {
    const strengthBinding = createBinding(accessPoint, "strength")
    const isActiveBinding = createBinding(network.wifi!, "activeAccessPoint").as(active =>
        active?.ssid === accessPoint.ssid
    )

    const [showPasswordField, setShowPasswordField] = createState(false)
    // const [password, setPassword] = createState("")

    async function connect(passwordToUse?: string) {
        try {
            if (accessPoint.requiresPassword) {
                // If password is required but not provided, show password field
                if (!passwordToUse) {
                    setShowPasswordField(true);
                    return;
                }
                accessPoint.activate(passwordToUse, null);
            }
        } catch (error) {
            console.error(`WiFi connection failed: ${error}`)
        } finally {
            setShowPasswordField(false);
        }
    }

    return (
        <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
            <button
                cssName="page-list-item"
                cssClasses={isActiveBinding.as(active => active ? ["active"] : [])}
                onClicked={async () => {
                    try {
                        if (isActiveBinding.get() && network.wifi) {
                            network.wifi.deactivate_connection(null);
                        } else if (accessPoint.requiresPassword && !isActiveBinding.get()) {
                            // Check if we have any existing connections for this AP
                            const existingConnections = accessPoint.get_connections();
                            if (existingConnections.length > 0) {
                                // Network was connected before, try to connect directly
                                accessPoint.activate(null, null)
                            } else {
                                // New network, show password field
                                setShowPasswordField(true);
                            }
                        } else {
                            connect();
                        }
                    } catch (error) {
                        console.error(`WiFi toggle failed: ${error}`);
                    }
                }}
            >
                <box spacing={8}>
                    <image
                        iconName={accessPoint.iconName || "network-wireless-symbolic"}
                        pixelSize={16}
                    />
                    <box orientation={Gtk.Orientation.HORIZONTAL} spacing={2} hexpand>
                        <label
                            label={accessPoint.ssid || "Hidden Network"}
                            halign={Gtk.Align.START}
                        />
                        <With value={strengthBinding}>
                            {(strength) => (
                                <label
                                    label={`${strength}%`}
                                    cssClasses={["dim-label"]}
                                    halign={Gtk.Align.START}
                                />
                            )}
                        </With>
                        {accessPoint.requiresPassword && (
                            <image
                                iconName="m-lock-fill"
                                pixelSize={16}
                            />
                        )}
                    </box>
                    <button
                        cssClasses={["circle"]}
                    >
                        <image
                            iconName={isActiveBinding.as(isActive => isActive ? "m-wifi-off-cut" : "network-wireless-symbolic")}
                            pixelSize={16}
                        />
                    </button>
                </box>
            </button>

            <With value={showPasswordField}>
                {(showPasswordField) => showPasswordField && accessPoint.requiresPassword && (
                    <box
                        orientation={Gtk.Orientation.HORIZONTAL}
                        spacing={8}
                        cssClasses={["password-field"]}
                        marginStart={18}
                    >
                        <entry
                            placeholderText="Enter WiFi password"
                            hexpand
                            canFocus={true}
                            visibility={false}
                            onActivate={(self) => connect(self.text)}
                            onRealize={(entry) => {
                                setTimeout(() => entry.grab_focus(), 100);
                            }}
                        />
                        <button
                            cssClasses={["circle"]}
                            onClicked={() => {
                                setShowPasswordField(false);
                            }}
                            tooltipText="Cancel"
                        >
                            <image
                                iconName="window-close-symbolic"
                                pixelSize={14}
                            />
                        </button>
                    </box>
                )}
            </With>
        </box>
    )
}

// Not tested at all (my laptop has no ethernet port lol)
function WiredConnectionItem({ wired }: { wired: Network.Wired }) {
    const stateBinding = createBinding(wired, "state")
    const speedBinding = createBinding(wired, "speed")

    return (
        <box
            spacing={8}
            cssName="network-item"
            cssClasses={stateBinding.as(state => state === Network.DeviceState.ACTIVATED ? ["active"] : [])}
        >
            <image
                iconName={wired.iconName || "network-wired-symbolic"}
                pixelSize={16}
            />
            <box orientation={Gtk.Orientation.VERTICAL} spacing={2} hexpand>
                <label
                    label="Ethernet Connection"
                    halign={Gtk.Align.START}
                />
                <With value={stateBinding}>
                    {(state) => {
                        let statusText = "Unknown";
                        switch (state) {
                            case Network.DeviceState.ACTIVATED:
                                statusText = "Connected";
                                break;
                            case Network.DeviceState.DISCONNECTED:
                                statusText = "Disconnected";
                                break;
                            case Network.DeviceState.PREPARE:
                            case Network.DeviceState.CONFIG:
                            case Network.DeviceState.IP_CONFIG:
                                statusText = "Connecting";
                                break;
                            case Network.DeviceState.UNAVAILABLE:
                                statusText = "Unavailable";
                                break;
                        }

                        return (
                            <box orientation={Gtk.Orientation.HORIZONTAL} spacing={4}>
                                <label
                                    label={statusText}
                                    cssClasses={["dim-label"]}
                                    halign={Gtk.Align.START}
                                />
                                {state === Network.DeviceState.ACTIVATED && (
                                    <With value={speedBinding}>
                                        {(speed: number) => speed > 0 && (
                                            <label
                                                label={`${speed} Mbps`}
                                                cssClasses={["dim-label"]}
                                            />
                                        )}
                                    </With>
                                )}
                            </box>
                        );
                    }}
                </With>
            </box>
            <image
                iconName="network-wired-symbolic"
                pixelSize={16}
                cssClasses={stateBinding.as(state =>
                    state === Network.DeviceState.ACTIVATED ? [] : ["dim-label"]
                )}
            />
        </box>
    )
}