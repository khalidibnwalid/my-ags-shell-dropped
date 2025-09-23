import { Gtk } from "ags/gtk4";
import Bluetooth from "gi://AstalBluetooth";
import { createBinding, createComputed, For, With } from "gnim";
import { ButtonWithOptions } from "../QuickSettings";

const bluetooth = Bluetooth.get_default()

export function BluetoothStatus() {
    const enabledBinding = createBinding(bluetooth, "isPowered")
    // TODO: icon if connected

    return (
        <box
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
        >
            <With value={enabledBinding}>
                {(enabled) => (
                    <image
                        iconName={enabled ? "m-bluetooth" : "m-bluetooth-disabled"}
                        pixelSize={24}
                    />
                )}
            </With>
        </box>
    )
}

export function BluetoothButton() {
    const enabledBinding = createBinding(bluetooth, "isPowered")
    const connectingBinding = createBinding(bluetooth, "isConnected")

    const label = createBinding(bluetooth, "devices")
        .as(devices => {
            const device = devices.find(device => device.connected)
            if (!device) return "Bluetooth"

            const name = device.name || device.address
            return name.length > 5 ? name.slice(0, 7) + "…" : name
        })

    const connection = createComputed((get) => ({
        isConnected: get(connectingBinding), // I just want want it as a dependency for re-computation
        isPowered: get(enabledBinding),
        label: get(label),
    }))

    // TODO: icon if connected
    return (
        <box>
            <With value={connection}>
                {({ isPowered, label }) => (
                    <ButtonWithOptions
                        pageName="bluetoothpage"
                        onToggled={({ active }) =>
                            bluetooth.adapter?.set_powered(active)
                        }
                        label={label}
                        active={isPowered}
                        iconName={isPowered ? "m-bluetooth" : "m-bluetooth-disabled"}
                    />
                )}
            </With>
        </box>
    )
}

export function BluetoothPage({ returnToMain }: { returnToMain: () => void }) {
    const enabledBinding = createBinding(bluetooth, "isPowered")
    const devicesBinding = createBinding(bluetooth, "devices")

    return (
        <box
            name="bluetoothpage"
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
                <label class="header" label="Bluetooth" hexpand />

                <button
                    halign={Gtk.Align.END}
                    iconName="view-refresh-symbolic"
                    onClicked={() => {
                        bluetooth.adapter?.start_discovery()
                        setTimeout(() => {
                            bluetooth.adapter?.stop_discovery()
                        }, 10000) // Stop discovery after 10 seconds
                    }}
                    tooltipText="Scan for devices"
                />
            </box>
            <With value={enabledBinding}>
                {(enabled: boolean) => enabled ? (
                    <box orientation={Gtk.Orientation.VERTICAL} spacing={4} vexpand>
                        <scrolledwindow
                            maxContentHeight={400}
                            vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                            hscrollbarPolicy={Gtk.PolicyType.NEVER}
                            vexpand
                        >
                            <box orientation={Gtk.Orientation.VERTICAL} spacing={6}>
                                <For each={devicesBinding}>
                                    {(device) => <DeviceItem device={device} />}
                                </For>

                                <With value={devicesBinding}>
                                    {(devices: Bluetooth.Device[]) => devices.length === 0 && (
                                        <label
                                            label="No devices found\nClick refresh to scan"
                                            justify={Gtk.Justification.CENTER}
                                        />
                                    )}
                                </With>
                            </box>
                        </scrolledwindow>
                    </box>
                ) : (
                    <label
                        label="Bluetooth is disabled"
                    />
                )}
            </With>
            {/* ... */}
        </box>
    )
}


function DeviceItem({ device }: { device: Bluetooth.Device }) {
    const connectedBinding = createBinding(device, "connected")
    const connectingBinding = createBinding(device, "connecting")
    // const pairedBinding = createBinding(device, "paired")

    async function connect(connected: boolean) {
        try {
            if (connected) {
                device.disconnect_device(null)
            } else {
                if (!device.paired) device.pair()
                device.connect_device(null)
            }
        } catch (error) {
            console.error(`Bluetooth operation failed: ${error}`)
        }
    }

    return (
        <box
            spacing={8}
            cssName="device-item"
            cssClasses={connectedBinding.as(connected => connected ? ["active"] : [])}
        >
            <image
                iconName={device.icon || "m-bluetooth"}
                pixelSize={16}
            />
            {/* <box orientation={Gtk.Orientation.VERTICAL} spacing={2} hexpand> */}
            <label
                label={device.name || device.address}
                halign={Gtk.Align.CENTER}
                hexpand
            />
            {/* <With value={connectedBinding}>
                    {(connected: boolean) => (
                        <label
                            label={connected ? "Connected" : pairedBinding.as(paired => paired ? "Paired" : "Available")}
                            halign={Gtk.Align.START}
                        />
                    )}
                </With> */}
            {/* </box> */}
            <With value={connectedBinding}>
                {(connected: boolean) => (
                    <button
                        //TODO: add  "rotating" on connecting
                        cssClasses={connectingBinding.as(connecting => connecting
                            ? ["circle", "rotating"]
                            : ["circle"]
                        )}
                        onClicked={async () => connect(connected)}
                    >
                        <image
                            iconName={connected ? "m-link-off" : "m-link"}
                            pixelSize={16}
                        />
                    </button>
                )}
            </With>
        </box>
    )
}