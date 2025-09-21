import { Gtk } from "ags/gtk4";
import Bluetooth from "gi://AstalBluetooth";
import { createBinding, For, With } from "gnim";
import { ButtonWithOptions } from "../QuickSettings";

const bluetooth = Bluetooth.get_default()

export function BluetoothButton() {
    const enabledBinding = createBinding(bluetooth, "isPowered")

    // TODO: icon if connected
    return (
        <With value={enabledBinding}>
            {(enabled: boolean) => (
                <ButtonWithOptions
                    pageName="bluetoothpage"
                    onToggled={({ active }) =>
                        bluetooth.adapter?.set_powered(active)
                    }
                    label="Bluetooth"
                    active={enabled}
                    iconName={enabled ? "m-bluetooth" : "m-bluetooth-disabled"}
                />
            )}
        </With>
    )
}

export function BluetoothPage({ returnToMain }: { returnToMain: () => void }) {
    const enabledBinding = createBinding(bluetooth, "isPowered")
    const devicesBinding = createBinding(bluetooth, "devices")

    return (
        <box
            name="bluetoothpage"
            class="bluetoothpage"
            orientation={Gtk.Orientation.VERTICAL}
            valign={Gtk.Align.FILL}
            vexpand
            spacing={16}
        >
            <box orientation={Gtk.Orientation.HORIZONTAL} spacing={8} halign={Gtk.Align.START} >
                <button
                    onClicked={returnToMain}
                >
                    <image
                        iconName="m-arrow-left"
                        pixelSize={24}
                    />
                </button>
                <label label="Bluetooth" hexpand />

                <button
                    $type="end"
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
                    <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
                        <scrolledwindow
                            maxContentHeight={400}
                            vscrollbarPolicy={Gtk.PolicyType.AUTOMATIC}
                            hscrollbarPolicy={Gtk.PolicyType.NEVER}
                        >
                            <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
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
    const pairedBinding = createBinding(device, "paired")

    return (
        <box
            spacing={8}
            cssName="bluetooth-device-item"
        >
            <image
                iconName={device.icon || "m-bluetooth"}
                pixelSize={16}
            />
            <box orientation={Gtk.Orientation.VERTICAL} spacing={2} hexpand>
                <label
                    label={device.name || device.address}
                    halign={Gtk.Align.START}
                />
                <With value={connectedBinding}>
                    {(connected: boolean) => (
                        <label
                            label={connected ? "Connected" : pairedBinding.as(paired => paired ? "Paired" : "Available")}
                            halign={Gtk.Align.START}
                        />
                    )}
                </With>
            </box>
            <With value={connectedBinding}>
                {(connected: boolean) => (
                    <button
                        label={connected ? "Disconnect" : "Connect"}
                        onClicked={async () => {
                            try {
                                if (connected) {
                                    await device.disconnect_device()
                                } else {
                                    if (!device.paired) device.pair()
                                    device.connect_device(null)
                                }
                            } catch (error) {
                                console.error(`Bluetooth operation failed: ${error}`)
                            }
                        }}
                    />
                )}
            </With>
        </box>
    )
}