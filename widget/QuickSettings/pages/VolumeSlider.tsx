import { Gtk } from "ags/gtk4";
import Wp from "gi://AstalWp";
import { createBinding, createComputed, With } from "gnim";

const wp = Wp.get_default()
const default_speaker = wp.audio.default_speaker;

const volumeState = createComputed((get) => {
    const volume = get(createBinding(default_speaker, "volume"));
    const isMuted = get(createBinding(default_speaker, "mute"));

    const iconName = isMuted ? "m-volume-muted" : volume === 0
        ? "m-volume-0"
        : volume < 0.5
            ? "m-volume-1"
            : "m-volume-2";

    return {
        volume,
        isMuted,
        iconName
    }
})

export function VolumeStatus() {
    return (
        <box
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
        >
            <With value={volumeState}>
                {({ iconName }) =>
                    <image
                        iconName={iconName}
                        pixelSize={24}
                    />
                }
            </With>
        </box>
    )
}

export function VolumeSlider() {
    const setVolume = default_speaker.set_volume.bind(default_speaker)
    const setMuted = default_speaker.set_mute.bind(default_speaker)

    return (
        <box
            orientation={Gtk.Orientation.HORIZONTAL}
            halign={Gtk.Align.CENTER}
            // spacing={2}
            hexpand
        >
            <button
                cssClasses={['circle', 'ghost']}
                onClicked={() => setMuted(!volumeState.get().isMuted)}
            >
                <With value={volumeState}>
                    {({ iconName }) =>
                        <image
                            iconName={iconName}
                            pixelSize={28}
                        />
                    }
                </With>
            </button>
            <slider
                value={volumeState.as(v => v.volume)}
                onChangeValue={self => setVolume(self.value)}
                min={0}
                max={1}
                hexpand
                widthRequest={400}
            />
        </box>

    )
}
