import { Astal, Gdk, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Workspaces from "./Workspaces"
import BatteryStatus from "./BatteryStatus"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, RIGHT } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | BOTTOM | RIGHT}
      application={app}
    >
      <centerbox
        cssName="centerbox"
        orientation={Gtk.Orientation.VERTICAL}
        widthRequest={20}
      >
        <StartSection />
        <CenterSection />
        <EndSection />
      </centerbox>
    </window>
  )
}


function StartSection() {
  return (
    <box
      $type="start"
      valign={Gtk.Align.CENTER}
      halign={Gtk.Align.CENTER}
    >
      <button
        $type="start"
        cssClasses={["ghost"]}
        onClicked={() => execAsync("echo hello").then(console.log)}
      >
        <label label="@" />
      </button>
    </box>
  )
}

function CenterSection() {
  return (
    <box
      $type="center"
      halign={Gtk.Align.CENTER}
    >
      <Workspaces />
    </box>
  )
}

function EndSection() {
  const time = createPoll("", 1000, "date +%I:%M")

  return (
    <box
      $type="end"
      halign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
      spacing={10}
    >
      <BatteryStatus />
      <menubutton
        $type="end"
        direction={Gtk.ArrowType.LEFT}
      >
        <label cssName="clock" label={time.as(t => t.replace(":", "\n"))} />
        <popover>
          <Gtk.Calendar />
        </popover>
      </menubutton>
    </box>
  )
}
