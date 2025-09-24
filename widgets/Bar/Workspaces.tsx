import { Gtk } from "ags/gtk4"
import Hyprland from "gi://AstalHyprland"
import Gio from "gi://Gio"
import { createBinding, For } from "gnim"

const MAX_WORKSPACES = 10

const hyprland = Hyprland.get_default()

export default function Workspaces() {
  const workspaces = createBinding(hyprland, "workspaces")
  const clients = createBinding(hyprland, "clients")
  const activeWsBinding = createBinding(hyprland, "focusedWorkspace")

  // show all workspaces from 1 to max existing workspace id
  // since hyprland workspaces will only show only used workspaces even if they are not continuous (e.g. 1, 4, 5)
  // this will make sure all workspaces are shown in a continuous manner (1, 2, 3, 4, 5)
  const allWorkspaces = workspaces.as(ws => {
    const maxId = Math.max(...ws.map(w => w.id), 0)
    return Array.from({ length: maxId == MAX_WORKSPACES ? maxId : maxId + 1 }, (_, i) => i + 1)
  })

  return (
    <box
      $type="center"
      cssName="workspaces"
      cssClasses={["island"]}
      orientation={Gtk.Orientation.VERTICAL}
      spacing={4}
    >
      <For each={allWorkspaces}>
        {(wsId) => {
          const isActive = activeWsBinding.as(active => active?.id === wsId)
          const wsClients = clients.as(clients => clients.filter(c => c.workspace?.id === wsId))
          // const hasClients = wsClients.as(e => e.length > 0)
          return (
            <button
              cssClasses={isActive.as(e => e ? ["active"] : [""])}
              onClicked={() => {
                const ws = hyprland.get_workspace(wsId)
                if (ws) {
                  ws.focus()
                } else {
                  // Create and switch to workspace if it doesn't exist
                  hyprland.dispatch("workspace", (wsId).toString())
                }
              }}
            >
              <For each={wsClients}>
                {(client) => {
                  // Get icon from desktop file with fallback
                  const iconName = getAppIcon(client);

                  return (
                    <image
                      iconName={iconName}
                      pixelSize={16}
                    />
                  )
                }}
              </For>
            </button>
          )
        }}
      </For>
    </box>
  )
}

const appiconMemo = new Map<string, string>()

// Helper function to get icon from desktop file
function getAppIcon(client: Hyprland.Client): string {
  if (!client.class) return "m-mini-circle-fill"

  if (appiconMemo.has(client.class)) return appiconMemo.get(client.class)!

  try {
    // Try different possible desktop file names
    const possibleNames = [
      `${client.class.toLowerCase()}.desktop`,
      `${client.class}.desktop`,
      `org.${client.class.toLowerCase()}.desktop`,
      `com.${client.class.toLowerCase()}.desktop`,
    ]

    for (const desktopName of possibleNames) {
      const desktopApp = Gio.DesktopAppInfo.new(desktopName)
      if (desktopApp) {
        const icon = desktopApp.get_icon()
        // get icon name from GIcon
        if (icon) {
          const iconString = icon.to_string()
          if (iconString && !iconString.startsWith('/')) {
            // a themed icon name
            appiconMemo.set(client.class, iconString)
            return iconString
          }
          // If it's a file path, extract the basename without extension
          if (iconString && iconString.startsWith('/')) {
            const basename = iconString.split('/').pop()?.replace(/\.[^/.]+$/, '')
            if (basename) {
              appiconMemo.set(client.class, basename)
              return basename
            }
          }
        }
      }
    }


    appiconMemo.set(client.class, client.class)
    return client.class // fallback
  } catch (error) {
    // final fallback
    return "m-mini-circle-fill"
  }
}