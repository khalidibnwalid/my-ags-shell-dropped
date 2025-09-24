import { Gtk } from "ags/gtk4";
import Battery from "gi://AstalBattery";
import PowerProfiles from "gi://AstalPowerProfiles";
import { createBinding, createComputed, With } from "gnim";
import { ButtonWithOptions } from "../QuickSettingsBody";
import { formatTime } from "../../../../utils/formatTime";

const battery = Battery.get_default();
const powerProfiles = PowerProfiles.get_default();

const percentageBinding = createBinding(battery, "percentage");
const stateBinding = createBinding(battery, "state");
const activeProfileBinding = createBinding(powerProfiles, "activeProfile");

const batteryInfo = createComputed((get) => {
    const percentage = get(percentageBinding) * 100
    const state = get(stateBinding)

    const isChanging = state === Battery.State.CHARGING || state === Battery.State.PENDING_CHARGE;
    const getBatteryIconName = (percentage: number, state: Battery.State) => {
        if (isChanging) return "m-battery-charging"

        if (percentage >= 90) {
            return "m-battery-full"
        } else if (percentage >= 75) {
            return "m-battery-75"
        } else if (percentage >= 60) {
            return "m-battery-60"
        } else if (percentage >= 25) {
            return "m-battery-25"
        } else if (percentage >= 10) {
            return "m-battery-almost-empty"
        } else {
            return "m-battery-empty"
        }
    }

    return {
        percentage,
        state,
        iconName: getBatteryIconName(percentage, state),
        isChanging,
    }
})

const PROFILE_DISPLAY_INFO = {
    "power-saver": {
        name: "Power Saver",
        description: "Extends battery life",
        iconName: "m-saving-energy-leaf"
    },
    "balanced": {
        name: "Balanced",
        description: "Switches between performance and battery life",
        iconName: "m-balance"
    },
    "performance": {
        name: "Performance",
        description: "Higher performance, reduced battery life",
        iconName: "m-electric-bolt"
    }
} as const

const getProfileInfo = (profile: string) =>
    PROFILE_DISPLAY_INFO?.[profile as keyof typeof PROFILE_DISPLAY_INFO] || ({
        name: profile,
        description: "Unknown profile",
        iconName: "battery-symbolic"
    }) as const;

export function BatteryStatus() {
    return (
        <box
            orientation={Gtk.Orientation.VERTICAL}
            halign={Gtk.Align.CENTER}
            spacing={2}
        >
            <box>
                <With value={batteryInfo}>
                    {({ iconName }) => (
                        <image
                            $type="start"
                            iconName={iconName}
                            pixelSize={24}
                        />
                    )}
                </With>
            </box>
            {/* <label
                $type="end"
                label={batteryPercentage.as(p => `${Math.round(p * 100)}%`)}
            /> */}
        </box>
    )
}

export function BatteryButton() {
    const buttonData = createComputed((get) => {
        const info = get(batteryInfo);
        const activeProfile = get(activeProfileBinding);

        return {
            label: `Battery - ${Math.round(info.percentage)}%`,
            iconName: getProfileInfo(activeProfile).iconName,
            activeProfile
        }
    })

    return (
        <box>
            <With value={buttonData}>
                {({ label, iconName, activeProfile }) => (
                    <ButtonWithOptions
                        pageName="batterypage"
                        label={label}
                        onToggled={() => {
                            // cycle through profiles
                            const profiles = Object.keys(PROFILE_DISPLAY_INFO)
                            const currentIndex = profiles.indexOf(activeProfile);
                            const nextIndex = (currentIndex + 1) % profiles.length;

                            powerProfiles.set_active_profile(profiles[nextIndex]);
                        }}
                        iconName={iconName}
                    />
                )}
            </With>
        </box>
    );
}

export function BatteryPage({ returnToMain }: { returnToMain: () => void }) {
    const timeToEmptyBinding = createBinding(battery, "timeToEmpty");
    const timeToFullBinding = createBinding(battery, "timeToFull");

    const info = createComputed((get) => ({
        ...get(batteryInfo),
        timeToEmpty: get(timeToEmptyBinding),
        timeToFull: get(timeToFullBinding),
    }))

    return (
        <box
            name="batterypage"
            class="page"
            orientation={Gtk.Orientation.VERTICAL}
            valign={Gtk.Align.FILL}
            spacing={16}
            vexpand
        >
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                halign={Gtk.Align.START}
                spacing={8}
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
                <label class="header" label="Battery" hexpand />
            </box>

            <box
                orientation={Gtk.Orientation.VERTICAL}
                spacing={12}
            >
                <With value={info}>
                    {({ percentage, iconName, timeToEmpty, timeToFull, isChanging }) => (
                        <box orientation={Gtk.Orientation.VERTICAL} spacing={8}>
                            <box
                                orientation={Gtk.Orientation.HORIZONTAL}
                                halign={Gtk.Align.CENTER}
                                spacing={12}
                            >
                                <image
                                    iconName={iconName}
                                    pixelSize={48}
                                />
                                <box orientation={Gtk.Orientation.VERTICAL} spacing={4}>
                                    <label label={`${Math.round(percentage)}%`} />
                                    <label label={isChanging ? "Charging" : "Discharging"} />
                                </box>
                            </box>
                            {/* Time remaining */}
                            <box halign={Gtk.Align.CENTER}>
                                <label
                                    label={isChanging
                                        ? (timeToFull > 0 ? `${formatTime(timeToFull)} until full` : "Time unknown")
                                        : (timeToEmpty > 0 ? `${formatTime(timeToEmpty)} remaining` : "Time unknown")
                                    } />
                            </box>
                            <levelbar
                                orientation={Gtk.Orientation.HORIZONTAL}
                                value={percentage / 100}
                                widthRequest={200}
                            />
                        </box>
                    )}
                </With>
            </box>

            <box orientation={Gtk.Orientation.VERTICAL} spacing={8}>
                <PowerProfileItem
                    profileName="power-saver"
                    activeProfile={activeProfileBinding}
                />
                <PowerProfileItem
                    profileName="balanced"
                    activeProfile={activeProfileBinding}
                />
                <PowerProfileItem
                    profileName="performance"
                    activeProfile={activeProfileBinding}
                />
            </box>
        </box>
    );
}

function PowerProfileItem({
    profileName,
    activeProfile
}: {
    profileName: keyof typeof PROFILE_DISPLAY_INFO;
    activeProfile: typeof activeProfileBinding;
}) {
    const profileInfo = getProfileInfo(profileName);
    const isActiveBinding = createComputed((get) =>
        get(activeProfile) === profileName
    );

    return (
        <button
            cssName="page-list-item"
            cssClasses={isActiveBinding.as(active => active ? ["active"] : [])}
            onClicked={() => {
                if (!isActiveBinding.get())
                    powerProfiles.set_active_profile(profileName);
            }}
        >
            <box
                cssClasses={isActiveBinding.as(active => active ? ["active"] : [])}
                spacing={12}
            >
                <image
                    iconName={profileInfo.iconName}
                    pixelSize={24}
                />
                <box orientation={Gtk.Orientation.VERTICAL} spacing={2} hexpand>
                    <label
                        label={profileInfo.name}
                        halign={Gtk.Align.START}
                    />
                    <label
                        label={profileInfo.description}
                        halign={Gtk.Align.START}
                    />
                </box>
                <With value={isActiveBinding}>
                    {(isActive) => (
                        <button
                            cssClasses={["circle"]}
                            sensitive={!isActive}
                        >
                            <image
                                iconName={isActive ? "object-select-symbolic" : "radio-symbolic"}
                                pixelSize={16}
                            />
                        </button>
                    )}
                </With>
            </box>
        </button>
    );
}

