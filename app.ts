import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./widgets/Bar"
import QuickSettings from "./widgets/ControlPanel"

app.start({
  css: style,
  icons: `${SRC}/icons`, // material icons - https://fonts.google.com/icons
  main() {
    app.get_monitors().map(Bar)
    app.get_monitors().map(QuickSettings)
  },
})
