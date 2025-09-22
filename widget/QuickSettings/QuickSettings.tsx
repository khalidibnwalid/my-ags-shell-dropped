import { Astal, Gdk, Gtk } from "ags/gtk4";
import app from "ags/gtk4/app";
import { Accessor, createState, onCleanup } from "gnim";
import { BluetoothButton, BluetoothPage } from "./pages/Bluetooth";
import { NetworkButton, NetworkPage } from "./pages/Network";

type Pages = "mainpage" | "bluetoothpage" | "networkpage"

const [qsPage, setQsPage] = createState<Pages>("mainpage")

const returnToMain = () => setQsPage("mainpage")

export default function QuickSettings(gdkmonitor: Gdk.Monitor) {
    const { BOTTOM, RIGHT } = Astal.WindowAnchor

    return (
        <window
            visible={false}
            name="quicksettings-window"
            class="Quicksettings"
            namespace="kshell-bar"
            gdkmonitor={gdkmonitor}
            exclusivity={Astal.Exclusivity.EXCLUSIVE}
            anchor={BOTTOM | RIGHT}
            application={app}
            keymode={Astal.Keymode.ON_DEMAND}
            onNotifyVisible={({ visible }) => !visible && setQsPage("mainpage")}
        >
            <Body />
        </window>
    )
}
function Body() {
    return (
        <stack
            name="controlpanel"
            class="controlpanel"
            valign={Gtk.Align.FILL}
            vexpand
            widthRequest={300}
            heightRequest={400}
            visibleChildName={qsPage}
            transitionType={Gtk.StackTransitionType.SLIDE_LEFT_RIGHT}
            transitionDuration={200}
        >
            <MainPage $type="named" />
            <BluetoothPage
                $type="named"
                returnToMain={returnToMain}
            />
            <NetworkPage
                $type="named"
                returnToMain={returnToMain}
            />
        </stack>
    )
}

function MainPage() {
    return (
        <box
            name="mainpage"
            class="mainpage"
            cssClasses={['page']}
            orientation={Gtk.Orientation.VERTICAL}
            valign={Gtk.Align.FILL}
            vexpand
            spacing={12}
        >
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                halign={Gtk.Align.CENTER}
                spacing={8}
                hexpand
            >
                <NetworkButton />
                <BluetoothButton />
            </box>
            {/* <Gtk.Calendar /> */}
        </box>
    )
}

interface ButtonWithOptionsProps {
    label: string | Accessor<string>;
    iconName: string;
    pageName: Pages;
    active: boolean;
    onToggled?: ({ active }: { active: boolean }) => void;
}
export function ButtonWithOptions({
    label,
    iconName,
    pageName,
    active,
    onToggled,
}: ButtonWithOptionsProps) {
    return (
        <box
            cssName='quicksettings-button'
            orientation={Gtk.Orientation.HORIZONTAL}
            spacing={4}
        >
            <togglebutton
                cssName='quicksettings-togglebutton'
                class={active ? "toggled" : ""}
                active={active}
                onToggled={onToggled}
            >
                <box orientation={Gtk.Orientation.HORIZONTAL} spacing={8} halign={Gtk.Align.CENTER} >
                    <image
                        iconName={iconName}
                        pixelSize={24}
                    />
                    <label label={label} />
                </box>
            </togglebutton>

            <button
                cssClasses={['action']}
                onClicked={() => setQsPage(pageName)}
            >
                <image
                    iconName="m-arrow-right"
                    pixelSize={18}
                />
            </button>
        </box>
    )
}
