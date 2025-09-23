import { Astal, Gdk, Gtk } from "ags/gtk4"
import app from "ags/gtk4/app"
import { execAsync } from "ags/process"
import { createPoll } from "ags/time"
import Hyprland from "gi://AstalHyprland"
import { createBinding } from "gnim"
import { NetworkStatus } from "../QuickSettings/pages/Network"
import { VolumeStatus } from "../QuickSettings/pages/VolumeSlider"
import Workspaces from "./Workspaces"
import { BluetoothStatus } from "../QuickSettings/pages/Bluetooth"
import { BatteryStatus } from "../QuickSettings/pages/Battery"

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

  function openQuickSettings() {
    const quicksettingsWindow = app.get_window("quicksettings-window")
    if (quicksettingsWindow) {
      quicksettingsWindow.visible = !quicksettingsWindow.visible
    }
  }

  return (
    <box
      cssName="end-section"
      $type="end"
      halign={Gtk.Align.CENTER}
      orientation={Gtk.Orientation.VERTICAL}
      spacing={10}
    >
      <button
        cssClasses={["ghost"]}
        onClicked={openQuickSettings}
      >
        <box
          cssClasses={["island"]}
          halign={Gtk.Align.CENTER}
          orientation={Gtk.Orientation.VERTICAL}
          spacing={10}
        >
          <NetworkStatus />
          <BluetoothStatus />
          <VolumeStatus />
          <BatteryStatus />
          <Date />
        </box>
      </button>
    </box >
  )
}

function Date() {
  const date = createPoll("", 60000, "date +%d'/'%m")
  const time = createPoll("", 1000, "date +%I:%M")

  return (
    <box
      orientation={Gtk.Orientation.VERTICAL}
      halign={Gtk.Align.CENTER}
      spacing={0}
    >
      <label cssName="clock-label" label={time.as(t => t.replace(":", "\n"))} />
      <label cssName="date-label" label={date} />
    </box>
  )
}