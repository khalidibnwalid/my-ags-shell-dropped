import { Gdk, Gtk } from "ags/gtk4";
import app from "ags/gtk4/app";
import { Modal } from "../../components/Modal";
import { QuickSettingsBody } from "./QuickSettings/QuickSettingsBody";

export default function QuickSettings(gdkmonitor: Gdk.Monitor) {
    return (
        <Modal
            visible={false}
            name="controlpanel-window"
            class="controlpanel"
            namespace="kshell-bar"
            gdkmonitor={gdkmonitor}
            application={app}
            halign={Gtk.Align.END}
            valign={Gtk.Align.END}
        >
            <box
                orientation={Gtk.Orientation.VERTICAL}
                spacing={4}
            >
                <QuickSettingsBody />
            </box>
        </Modal>
    )
}
