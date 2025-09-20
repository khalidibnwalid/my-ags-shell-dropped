import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./widget/Bar/Bar"

app.start({
  css: style,
  icons: "./icons", // material icons - https://fonts.google.com/icons
  main() {
    app.get_monitors().map(Bar)
  },
})
