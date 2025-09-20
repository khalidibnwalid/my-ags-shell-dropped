import { Gtk } from "ags/gtk4"
import Bluetooth from "gi://AstalBluetooth"
import { createBinding, For, With } from "gnim"

const bluetooth = Bluetooth.get_default()

export default function BluetoothManager() {
    const enabledBinding = createBinding(bluetooth, "isPowered")
    const devicesBinding = createBinding(bluetooth, "devices")

    // TODO: icon if connected
    const bluetoothIcon = enabledBinding.as(enabled =>
        enabled ? "m-bluetooth" : "m-bluetooth-disabled"
    )

    return (
        <menubutton
            cssClasses={["ghost"]}
            direction={Gtk.ArrowType.LEFT}
        >
            <image
                iconName={bluetoothIcon}
                pixelSize={28}
            />
            <popover
                cssName="bluetooth-popover"
            >
                <box
                    orientation={Gtk.Orientation.VERTICAL}
                    spacing={8}
                >
                    <box spacing={8}>
                        <image iconName="m-bluetooth" pixelSize={20} />
                        <label label="Bluetooth" hexpand halign={Gtk.Align.START} />
                        <With value={enabledBinding}>
                            {(enabled: boolean) => (
                                <switch
                                    active={enabled}
                                    onStateSet={(_, state) => {
                                        bluetooth.adapter?.set_powered(state)
                                    }}
                                />
                            )}
                        </With>
                    </box>

                    <box cssName="separator" />

                    {/* Device List */}
                    <With value={enabledBinding}>
                        {(enabled: boolean) => enabled ? (
                            <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
                                <box spacing={8}>
                                    <label
                                        label="Devices"
                                        hexpand
                                        halign={Gtk.Align.START}
                                    />
                                    <button
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

                                <scrolledwindow
                                    maxContentHeight={300}
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
                </box>
            </popover>
        </menubutton>
    )
}


function DeviceItem({ device }: { device: Bluetooth.Device }) {
    const connectedBinding = createBinding(device, "connected")
    const pairedBinding = createBinding(device, "paired")

    return (
        <box spacing={8}>
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