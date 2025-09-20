import { Gtk } from "ags/gtk4"
import Battery from "gi://AstalBattery"
import { createBinding, createComputed, With } from "gnim"

const battery = Battery.get_default()

export default function BatteryStatus() {
    const batteryPercentage = createBinding(battery, "percentage")
    const batteryState = createBinding(battery, "state")

    const betteryData = createComputed((get) => {
        return {
            percentage: get(batteryPercentage),
            state: get(batteryState),
        }
    })

    const getBatteryIconName = (percentage: number, state: Battery.State) => {
        const percentageValue = percentage * 100

        if (state === Battery.State.CHARGING || state === Battery.State.PENDING_CHARGE) {
            return "m-battery-charging"
        }

        if (percentageValue >= 90) {
            return "m-battery-full"
        } else if (percentageValue >= 75) {
            return "m-battery-75"
        } else if (percentageValue >= 60) {
            return "m-battery-60"
        } else if (percentageValue >= 25) {
            return "m-battery-25"
        } else if (percentageValue >= 10) {
            return "m-battery-almost-empty"
        } else {
            return "m-battery-empty"
        }
    }

    return (
        <box
            cssName="battery-box"
            orientation={Gtk.Orientation.VERTICAL}
            halign={Gtk.Align.CENTER}
            spacing={2}
        >
            <box>
                <With value={betteryData}>
                    {({ state, percentage }) => (
                        <image
                            $type="start"
                            iconName={getBatteryIconName(percentage, state)}
                            pixelSize={32}
                        />
                    )}
                </With>
            </box>
            <label
                $type="end"
                label={batteryPercentage.as(p => `${Math.round(p * 100)}%`)}
            />
        </box>
    )
}