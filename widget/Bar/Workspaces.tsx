import { Gtk } from "ags/gtk4"
import Hyprland from "gi://AstalHyprland"
import { createBinding, For } from "gnim"

const MAX_WORKSPACES = 10

const hyprland = Hyprland.get_default()

export default function Workspaces() {

  const workspaces = createBinding(hyprland, "workspaces")
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
      orientation={Gtk.Orientation.VERTICAL}
      spacing={4}
    >
      <For each={allWorkspaces}>
        {(wsId) => (
          <button
            cssClasses={activeWsBinding.as(active => active?.id === wsId
              ? ["active"]
              : [""]
            )}
            onClicked={() => {
              const ws = hyprland.get_workspace(wsId)
              if (ws) {
                ws.focus()
              } else {
                // Create and switch to workspace if it doesn't exist
                hyprland.dispatch("workspace", (wsId).toString())
              }
            }}
          />
        )}
      </For>
    </box>
  )
}
