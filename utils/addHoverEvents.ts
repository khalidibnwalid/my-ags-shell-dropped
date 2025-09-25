import { Gtk } from "ags/gtk4"

export default function addHoverEvents(
    widget: Gtk.Widget,
    onEnter?: () => void,
    onLeave?: () => void
) {
    const motionController = new Gtk.EventControllerMotion()
    onEnter && motionController.connect("enter", onEnter)
    onLeave && motionController.connect("leave", onLeave)
    widget.add_controller(motionController)
}
