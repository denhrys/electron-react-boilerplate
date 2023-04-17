const {ipcRenderer, contextBridge} = require("electron")

contextBridge.exposeInMainWorld('electron', {
  notificationsAPI: {
    sendNotification(message) {
      console.log(message);
      ipcRenderer.send("notify", message);
    }
  }
})
