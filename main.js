const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        contextIsolation: false
    }
  })

  win.loadFile('./src/index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('web-contents-created', (event, webContents) => {
  webContents.on('select-bluetooth-device', (event, device, callback) => {
    event.preventDefault()
    callback('')
  })
})
delete require('electron').nativeImage.createThumbnailFromPath