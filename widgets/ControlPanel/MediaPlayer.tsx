import { Gtk } from "ags/gtk4"
import Mpris from "gi://AstalMpris"
import Pango from "gi://Pango?version=1.0"
import { createBinding, createComputed, createState, For, With } from "gnim"

const mpris = Mpris.get_default()

const [currentPlayerIndex, setCurrentPlayerIndex] = createState(0)

export default function MediaPlayer() {
    const players = createBinding(mpris, "players")

    const playerCardInfo = createComputed((get) => ({
        players: get(players),
        currentPlayerIndex: get(currentPlayerIndex)
    }))

    const currentPlayerArtUrl = createComputed((get) => {
        const playersBind = get(players)
        if (playersBind.length === 0) return null

        const index = get(currentPlayerIndex)
        const safeIndex = Math.min(index, playersBind.length - 1)
        const currentPlayer = playersBind[safeIndex]

        return get(createBinding(currentPlayer, "artUrl"))
    })

    return (
        <overlay
            class="mediaplayer-body"
            heightRequest={210}
            visible={players.as((p) => p.length > 0)}
            overflow={Gtk.Overflow.HIDDEN}
        >
            <box
                cssClasses={["mediaplayer-backdrop"]}
                css={currentPlayerArtUrl.as((artUrl) => artUrl
                    ? `background-image: url('${artUrl || ''}');`
                    : ''
                )}
            />

            <box
                $type="overlay"
                class="mediaplayer-panel"
                orientation={Gtk.Orientation.VERTICAL}
                spacing={0}
            >
                {/* Current Player Card */}
                <box>
                    <With value={playerCardInfo}>
                        {({ currentPlayerIndex, players }) => {
                            if (players.length === 0) return (
                                <box>
                                    <label label="No media players available" />
                                </box>
                            )

                            const safeIndex = Math.min(currentPlayerIndex, players.length - 1)
                            const player = players[safeIndex]

                            if (safeIndex !== currentPlayerIndex)
                                setCurrentPlayerIndex(safeIndex)

                            return player
                                ? <PlayerCard player={player} />
                                : <box>
                                    <label label="No player available" />
                                </box>
                        }}
                    </With>
                </box>

                <box
                    orientation={Gtk.Orientation.HORIZONTAL}
                    halign={Gtk.Align.CENTER}
                    class="mediaplayer-controls"
                >
                    <button
                        onClicked={() => {
                            const totalPlayers = players.get().length
                            setCurrentPlayerIndex((prev) => prev > 0 ? prev - 1 : totalPlayers - 1)
                        }}
                        sensitive={players.as((p: Mpris.Player[]) => p.length > 1)}
                        tooltipText="Previous Player"
                    >
                        <image
                            iconName="m-arrow-left"
                            pixelSize={10}
                        />
                    </button>

                    <box
                        cssName="controls-dots"
                        orientation={Gtk.Orientation.HORIZONTAL}
                        halign={Gtk.Align.CENTER}
                        spacing={4}
                        hexpand
                    >
                        <For each={players}>
                            {(_, i) => (
                                <button
                                    cssName="dot"
                                    cssClasses={createComputed((get) => get(i) === get(currentPlayerIndex) ? ["active"] : [""])}
                                    onClicked={() => setCurrentPlayerIndex(i.get())}
                                />
                            )}
                        </For>
                    </box>


                    <button
                        onClicked={() => {
                            const totalPlayers = players.get().length
                            setCurrentPlayerIndex((prev) => (prev + 1) % totalPlayers)
                        }}
                        sensitive={players.as((p) => p.length > 1)}
                        tooltipText="Next Player"
                    >
                        <image
                            iconName="m-arrow-right"
                            pixelSize={10}
                        />
                    </button>
                </box>
            </box>
        </overlay >
    )
}

function formatMediaTime(seconds: number): string {
    if (!seconds || seconds <= 0) return "0:00"
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

function PlayerCard({ player }: { player: Mpris.Player }) {
    const titleBinding = createBinding(player, "title")
    const artistBinding = createBinding(player, "artist")
    const artUrlBinding = createBinding(player, "artUrl")
    const playbackStatusBinding = createBinding(player, "playbackStatus")
    const canGoNextBinding = createBinding(player, "canGoNext")
    const canGoPreviousBinding = createBinding(player, "canGoPrevious")
    const canPlayBinding = createBinding(player, "canPlay")
    const canPauseBinding = createBinding(player, "canPause")
    const loopStatusBinding = createBinding(player, "loopStatus")

    const positionBinding = createBinding(player, "position")
    const lengthBinding = createBinding(player, "length")

    const currentPlaybackInfo = createComputed((get) => {
        const position = get(positionBinding)
        const length = get(lengthBinding)

        return { position, length }
    })
    // maybe in future
    // const shuffleStatusBinding = createBinding(player, "shuffleStatus")
    // const canControlBinding = createBinding(player, "canControl")
    // const volumeBinding = createBinding(player, "volume")
    // const albumBinding = createBinding(player, "album")

    return (
        <box
            orientation={Gtk.Orientation.VERTICAL}
            spacing={6}
        >
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                spacing={12}
            >
                <box
                    class="mediaplayer-art"
                    css={artUrlBinding.as((url) => url ? `background-image: url('${url}');` : '')}
                />

                <box
                    orientation={Gtk.Orientation.VERTICAL}
                    valign={Gtk.Align.CENTER}
                    hexpand
                >
                    <label
                        class="title inner-label"
                        label={titleBinding.as((title) => title || "Unknown Title")}
                        halign={Gtk.Align.FILL}
                        ellipsize={Pango.EllipsizeMode.END}
                        lines={2}
                        wrap
                    />
                    <label
                        class="inner-label"
                        label={artistBinding.as((artist) => artist || "")}
                        halign={Gtk.Align.FILL}
                        ellipsize={Pango.EllipsizeMode.END}
                        lines={1}
                        wrap
                    />

                    <box
                        class="controls"
                        orientation={Gtk.Orientation.HORIZONTAL}
                        halign={Gtk.Align.CENTER}
                        spacing={8}
                    >
                        <button
                            onClicked={() => player.previous()}
                            sensitive={canGoPreviousBinding}
                            tooltipText="Previous"
                        >
                            <image
                                iconName="m-arrow-left"
                                pixelSize={32}
                            />
                        </button>

                        <button
                            onClicked={() => player.play_pause()}
                            sensitive={canPlayBinding.as((canPlay) =>
                                canPlay || canPauseBinding.get()
                            )}
                            tooltipText={playbackStatusBinding.as((status) =>
                                status === Mpris.PlaybackStatus.PLAYING ? "Pause" : "Play"
                            )}
                        >
                            <image
                                iconName={playbackStatusBinding.as((status) =>
                                    status === Mpris.PlaybackStatus.PLAYING ? "m-pause" : "m-play"
                                )}
                                pixelSize={32}
                            />
                        </button>

                        <button
                            onClicked={() => player.next()}
                            sensitive={canGoNextBinding}
                            tooltipText="Next"
                        >
                            <image
                                iconName="m-arrow-right"
                                pixelSize={32}
                            />
                        </button>

                        <button
                            cssClasses={loopStatusBinding.as((loop) => [
                                (loop !== Mpris.Loop.NONE && loop !== Mpris.Loop.UNSUPPORTED) ? "active" : ""
                            ])}
                            onClicked={() => player.loop()}
                            tooltipText={loopStatusBinding.as((loop) => {
                                switch (loop) {
                                    case Mpris.Loop.TRACK:
                                        return "Loop Track";
                                    case Mpris.Loop.PLAYLIST:
                                        return "Loop Playlist";
                                    case Mpris.Loop.UNSUPPORTED:
                                        return "Loop Unsupported";
                                    case Mpris.Loop.NONE:
                                    default:
                                        return "No Loop";
                                }
                            })}
                        >

                            <image
                                widthRequest={30}
                                heightRequest={24}
                                pixelSize={20}
                                iconName={loopStatusBinding.as((loop) => {
                                    switch (loop) {
                                        case Mpris.Loop.TRACK:
                                            return "m-repeat-1";
                                        case Mpris.Loop.PLAYLIST:
                                            return "m-repeat";
                                        case Mpris.Loop.UNSUPPORTED:
                                            return "m-question";
                                        case Mpris.Loop.NONE:
                                        default:
                                            return "m-off";
                                    }
                                })}
                            />
                        </button>
                    </box>
                </box>
            </box>

            {/* Progress Bar */}
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                halign={Gtk.Align.CENTER}
                spacing={4}
                widthRequest={420}
                hexpand
            >
                <label
                    label={positionBinding.as((pos) => formatMediaTime(pos))}
                    halign={Gtk.Align.START}
                />
                <slider
                    value={currentPlaybackInfo.as(({ position, length }) =>
                        length > 0 ? position / length : 0
                    )}
                    onChangeValue={(self) => {
                        const length = lengthBinding.get()
                        if (length > 0) {
                            const newPosition = self.value * length
                            player.set_position(newPosition)
                        }
                    }}
                    max={1}
                    hexpand
                />

                <label
                    label={lengthBinding.as((len) => formatMediaTime(len))}
                    halign={Gtk.Align.END}
                />
            </box>
        </box>
    )
}
