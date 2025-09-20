import { Astal, Gdk, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Hyprland from "gi://AstalHyprland"
import BatteryStatus from "./BatteryStatus"
import BluetoothStatus from "./Bluetooth"
import Workspaces from "./Workspaces"
import { createBinding } from "gnim"

const hyprland = Hyprland.get_default()

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, BOTTOM, RIGHT } = Astal.WindowAnchor

  // add solid background to bar when a client is focused
  const isInClient = createBinding(hyprland, "focusedClient")

  return (
    <window
      visible
      name="bar"
      class="Bar"
      namespace="kshell-bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | BOTTOM | RIGHT}
      application={app}
    >
      <centerbox
        cssName="centerbox"
        cssClasses={isInClient.as(inClient => inClient && !inClient.floating ? ["in-client"] : [""])}
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
      cssName="start-section"
      cssClasses={["island"]}
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
      cssName="center-section"
      $type="center"
      halign={Gtk.Align.CENTER}
    >
      <Workspaces />
    </box>
  )
}

function EndSection() {
  return (
    <box
      cssName="end-section"
      $type="end"
      halign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
      spacing={10}
    >
      <box
        cssClasses={["island"]}
        halign={Gtk.Align.CENTER}
        orientation={Gtk.Orientation.VERTICAL}
        spacing={10}
      >
        <BluetoothStatus />
        <BatteryStatus />
        <Clock />
      </box>
    </box>
  )
}

function Clock() {
  const time = createPoll("", 1000, "date +%I:%M")

  return (
    <menubutton
      $type="end"
      direction={Gtk.ArrowType.LEFT}
      cssClasses={["ghost"]}
    >
      <label cssName="clock" label={time.as(t => t.replace(":", "\n"))} />
      <popover>
        <Gtk.Calendar />
      </popover>
    </menubutton>
  )
}
