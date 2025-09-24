import { Astal, Gdk, Gtk } from "ags/gtk4"
import Graphene from "gi://Graphene"

type ModalProps = Omit<JSX.IntrinsicElements['window'], 'anchor' | 'keymode' | 'exclusivity'>

export function Modal({ children, halign, valign, ...props }: ModalProps) {
    let child: Gtk.Box

    const { BOTTOM, RIGHT, LEFT, TOP } = Astal.WindowAnchor

    function onPressed(
        { widget: win }: Gtk.GestureClick,
        _n: number,
        x: number,
        y: number,
    ) {
        if (!child || !(child instanceof Gtk.Widget)) {
            win.visible = false
            return true
        }

        const [, rect] = child.compute_bounds(win)
        const position = new Graphene.Point({ x, y })

        if (!rect.contains_point(position)) {
            win.visible = false
            return true
        }

        return false
    }

    function onKeyPressed({ widget: win }: Gtk.EventControllerKey, key: number) {
        if (key === Gdk.KEY_Escape) {
            win.hide()
            return true
        }
    }

    return (
        <window
            {...props}
            anchor={TOP | BOTTOM | LEFT | RIGHT}
            keymode={Astal.Keymode.EXCLUSIVE}
            exclusivity={Astal.Exclusivity.IGNORE}
        >
            <Gtk.GestureClick onPressed={onPressed} />
            <Gtk.EventControllerKey onKeyPressed={onKeyPressed} />
            <box
                $={(self) => (child = self)}
                // position with halign and valign
                halign={halign}
                valign={valign}
            >
                {children}
            </box>
        </window>
    )
}