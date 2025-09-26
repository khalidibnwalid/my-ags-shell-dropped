import { Astal, Gdk, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import Notifd from "gi://AstalNotifd"
import { createState, For } from "gnim"
import addHoverEvents from "../utils/addHoverEvents"

type NotificationData = {
    id: number
    notification: Notifd.Notification
    timeoutId?: ReturnType<typeof setTimeout>
}

const TIMEOUT_DELAY = 3000
const notifd = Notifd.get_default()
const [notifications, setNotifications] = createState<NotificationData[]>([])

notifd.connect("notified", (_, id) => {
    const notification = notifd.get_notification(id)
    if (notification) {
        const notifData: NotificationData = {
            id,
            notification,
        }

        setNotifications(prev => [...prev, notifData])
    }
})

notifd.connect("resolved", (_, id) => {
    setNotifications(prev => {
        const notifToRemove = prev.find(n => n.id === id)
        if (notifToRemove?.timeoutId) notifToRemove.timeoutId.destroy()

        return prev.filter(n => n.id !== id)
    })
})

export default function NotificationPopups(gdkmonitor: Gdk.Monitor) {
    return (
        <window
            class="notifications"
            name="notifications"
            namespace="kshell-bar"
            gdkmonitor={gdkmonitor}
            exclusivity={Astal.Exclusivity.IGNORE}
            keymode={Astal.Keymode.NONE}
            anchor={Astal.WindowAnchor.BOTTOM | Astal.WindowAnchor.RIGHT}
            application={app}
            marginRight={12 + 45}
            marginBottom={12}
            visible={notifications((ns) => ns.length > 0)}
        >
            <box
                orientation={Gtk.Orientation.VERTICAL}
                spacing={8}
                halign={Gtk.Align.END}
                valign={Gtk.Align.END}
            >
                <For each={notifications}>
                    {(notifData) =>
                        <NotificationWidget notifData={notifData} />
                    }
                </For>
            </box>
        </window>
    )
}

function NotificationIcon({ notification }: { notification: Notifd.Notification }) {
    const iconName = notification.app_icon || "m-notifications"
    return (
        <box
            halign={Gtk.Align.CENTER}
            valign={Gtk.Align.CENTER}
        >
            <image
                iconName={iconName}
                pixelSize={64}
            />
        </box>
    )
}

function NotificationWidget({ notifData }: { notifData: NotificationData }) {
    const { id, notification } = notifData
    let hovered = false

    const closeNotification = () => {
        notifData?.timeoutId?.destroy()
        notification.dismiss()
        setNotifications(prev => prev.filter(n => n.id !== id))
    }

    const resetTimeout = () => {
        notifData?.timeoutId?.destroy()
        if (!hovered) {
            notifData.timeoutId = setTimeout(() => {
                closeNotification()
            }, TIMEOUT_DELAY)
        }
    }

    const onHover = () => {
        hovered = true
        if (notifData?.timeoutId) {
            notifData.timeoutId.destroy()
            notifData.timeoutId = undefined
        }
    }

    const onHoverLost = () => {
        hovered = false
        resetTimeout()
    }

    // Initial timeout
    resetTimeout()

    return (
        <box
            cssClasses={["notification"]}
            // so it won't timeout on hover
            onRealize={(self) => addHoverEvents(self, onHover, onHoverLost)}
        >
            <box orientation={Gtk.Orientation.HORIZONTAL} spacing={12}>
                <NotificationIcon notification={notification} />

                <box
                    orientation={Gtk.Orientation.VERTICAL}
                    cssClasses={["content"]}
                    spacing={6}
                    hexpand
                >
                    <box
                        orientation={Gtk.Orientation.HORIZONTAL}
                    >
                        <label
                            cssClasses={["summary"]}
                            label={notification.summary}
                            halign={Gtk.Align.START}
                            maxWidthChars={30}
                            hexpand
                            wrap
                        />
                        <button
                            cssClasses={["close"]}
                            onClicked={closeNotification}
                        >
                            <image iconName="window-close-symbolic" pixelSize={16} />
                        </button>
                    </box>

                    {notification.body && (
                        <label
                            cssClasses={["body"]}
                            label={notification.body}
                            halign={Gtk.Align.START}
                            maxWidthChars={40}
                            hexpand
                            wrap
                        />
                    )}

                    {notification.actions.length > 0 && (
                        <box class="actions" spacing={6}>
                            {notification.actions.map((action) => (
                                <button
                                    onClicked={() => {
                                        notification.invoke(action.id)
                                        closeNotification()
                                    }}
                                >
                                    <label label={action.label} />
                                </button>
                            ))}
                        </box>
                    )}
                </box>
            </box>
        </box>
    )
}
