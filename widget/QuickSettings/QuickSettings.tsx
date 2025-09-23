import { Gdk, Gtk } from "ags/gtk4";
import app from "ags/gtk4/app";
import { Accessor, createState } from "gnim";
import { Modal } from "../Modal";
import { BluetoothButton, BluetoothPage } from "./pages/Bluetooth";
import { NetworkButton, NetworkPage } from "./pages/Network";
import { VolumeSlider } from "./pages/VolumeSlider";

type Pages = "mainpage" | "bluetoothpage" | "networkpage"

const [qsPage, setQsPage] = createState<Pages>("mainpage")

const returnToMain = () => setQsPage("mainpage")

export default function QuickSettings(gdkmonitor: Gdk.Monitor) {
    return (
        <Modal
            visible={false}
            name="quicksettings-window"
            class="Quicksettings"
            namespace="kshell-bar"
            gdkmonitor={gdkmonitor}
            application={app}
            halign={Gtk.Align.END}
            valign={Gtk.Align.END}
            onNotifyVisible={({ visible }) => !visible && setQsPage("mainpage")}
            onActivateFocus={() => {
                print("Quick Settings activated")
            }}
        >
            <Body />
        </Modal>
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
            <VolumeSlider />
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
