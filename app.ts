import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./widgets/Bar"
import QuickSettings from "./widgets/ControlPanel"
import TopPanel from "./widgets/TopPanel"

app.start({
  css: style,
  icons: `${SRC}/icons`, // material icons - https://fonts.google.com/icons
  main() {
    app.get_monitors().map(Bar)
    app.get_monitors().map(QuickSettings)
    app.get_monitors().map(TopPanel)
  },
})
