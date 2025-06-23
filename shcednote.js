const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800
  })

  win.loadFile('main.html')
}

app.whenReady().then(() => {
  createWindow()
})