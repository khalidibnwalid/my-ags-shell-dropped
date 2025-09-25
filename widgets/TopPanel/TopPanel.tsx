import { Astal, Gdk, Gtk } from "ags/gtk4";
import app from "ags/gtk4/app";
import addHoverEvents from "../../utils/addHoverEvents";
import MediaPlayer from "./MediaPlayer";
import { Modal } from "../../components/Modal";

export default function TopPanel(gdkmonitor: Gdk.Monitor) {
    return (
        <>
            <TopEdge />
            <TopPanelBody gdkmonitor={gdkmonitor} />
        </>
    )
}

function TopPanelBody({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
    let revealer: Gtk.Revealer

    return (
        <Modal
            namespace="kshell-bar"
            name="toppanel-window"
            class="toppanel"
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.START}
            gdkmonitor={gdkmonitor}
            application={app}
            visible={false}
            onNotify={(self, property) => (property.name === "visible" && revealer) &&
                (revealer.revealChild = self.visible)
            }
        >
            <revealer
                revealChild={true}
                transitionType={Gtk.RevealerTransitionType.SLIDE_DOWN}
                transitionDuration={200}
                onRealize={(self) => (revealer = self)}
            >
                <box
                    class="toppanel"
                    widthRequest={550}
                    orientation={Gtk.Orientation.VERTICAL}
                    onRealize={(self) => addHoverEvents(self, undefined, async () => {
                        const toppanelWindow = app.get_window("toppanel-window")
                        if (toppanelWindow) {
                            toppanelWindow.visible = false
                        }
                    })}
                    visible
                >
                    <MediaPlayer />
                </box>
            </revealer>
        </Modal>
    )
}


function TopEdge() {
    const { RIGHT, LEFT, TOP } = Astal.WindowAnchor

    function onHover() {
        const quicksettingsWindow = app.get_window("toppanel-window")
        if (quicksettingsWindow) {
            quicksettingsWindow.visible = !quicksettingsWindow.visible
        }
    }

    return (
        <window
            anchor={TOP | LEFT | RIGHT}
            exclusivity={Astal.Exclusivity.IGNORE}
            namespace="kshell-bar"
            visible
        >
            <box halign={Gtk.Align.CENTER} cssName="top-panel-container" >
                <box
                    cssName="top-panel-hover"
                    heightRequest={2}
                    widthRequest={550}
                    css={"background-color: transparent;"}
                    onRealize={(self) => addHoverEvents(self, onHover)}
                />
            </box>
        </window >
    )
}