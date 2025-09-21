import Bluetooth from "gi://AstalBluetooth"
import { createBinding, With } from "gnim"

const bluetooth = Bluetooth.get_default()

export default function BluetoothManager() {
    const enabledBinding = createBinding(bluetooth, "isPowered")
    // TODO: icon if connected

    return (
        <box>
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

