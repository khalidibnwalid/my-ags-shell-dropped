import Gtk from "gi://Gtk?version=4.0";
import { Accessor, createState } from "gnim";
import { BluetoothButton, BluetoothPage } from "./pages/Bluetooth";
import { NetworkButton, NetworkPage } from "./pages/Network";
import { BatteryButton, BatteryPage } from "./pages/Battery";
import { VolumeSlider } from "./pages/VolumeSlider";

type Pages = "mainpage" | "bluetoothpage" | "networkpage" | "batterypage";
const [qsPage, setQsPage] = createState<Pages>("mainpage");
export const returnToMain = () => setQsPage("mainpage");

export function QuickSettingsBody() {
    return (
        <stack
            name="quicksettings-panel"
            class="quicksettings-panel"
            valign={Gtk.Align.FILL}
            widthRequest={300}
            heightRequest={400}
            visibleChildName={qsPage}
            transitionType={Gtk.StackTransitionType.SLIDE_LEFT_RIGHT}
            vexpand
            onNotifyVisible={({ visible }) => !visible && returnToMain()}
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
            <BatteryPage
                $type="named"
                returnToMain={returnToMain}
            />
        </stack>
    );
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
            <box
                orientation={Gtk.Orientation.HORIZONTAL}
                halign={Gtk.Align.CENTER}
                spacing={8}
                hexpand
            >
                <BatteryButton />
                <button
                    cssClasses={['quicksettings-btn']}
                    label="..."
                    hexpand />
            </box>
            <VolumeSlider />
            {/* <Gtk.Calendar /> */}
        </box>
    );
}

interface ButtonWithOptionsProps {
    label: string | Accessor<string>;
    iconName: string;
    pageName: Pages;
    active?: boolean;
    onToggled?: ({ active }: { active: boolean; }) => void;
}

export function ButtonWithOptions({
    label, iconName, pageName, active = false, onToggled,
}: ButtonWithOptionsProps) {
    return (
        <box
            cssName='quicksettings-btn-with-options'
            orientation={Gtk.Orientation.HORIZONTAL}
            spacing={4}
        >
            <togglebutton
                cssName='quicksettings-togglebutton'
                class={active ? "toggled" : ""}
                active={active}
                onToggled={onToggled}
            >
                <box orientation={Gtk.Orientation.HORIZONTAL} spacing={8} halign={Gtk.Align.CENTER}>
                    <image
                        iconName={iconName}
                        pixelSize={24} />
                    <label label={label} />
                </box>
            </togglebutton>

            <button
                cssClasses={['action']}
                onClicked={() => setQsPage(pageName)}
            >
                <image
                    iconName="m-arrow-right"
                    pixelSize={18} />
            </button>
        </box>
    );
}
