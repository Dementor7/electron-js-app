const electron = require("electron")
const url = require("url")
const path = require("path")
const { app, BrowserWindow, Menu } = electron
let mainfile
app.on('ready', () => {
    mainfile = new BrowserWindow({})
    mainfile.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file',
        slashes: true
    }))
    const mainnav = Menu.buildFromTemplate(mainnavTemplate)
    Menu.setApplicationMenu(mainnav)
});
const mainnavTemplate = [
    {
        lable: 'file',
        submenu: [
            {
                lable: 'home',
            }, {
                lable: "about",
            }, {
                lable: 'contact',
            }, {
                lable: "Quit",
                click() {
                    app.quit()
                }
            }
        ]
    }
]