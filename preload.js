const { contextBridge, ipcRenderer } = require('electron');

// Exponemos una API segura al HTML (renderer)
contextBridge.exposeInMainWorld('electronAPI', {
  loadData:   ()     => ipcRenderer.invoke('load-data'),
  saveData:   (data) => ipcRenderer.invoke('save-data', data),
  exportData: (data) => ipcRenderer.invoke('export-data', data),
  importData: ()     => ipcRenderer.invoke('import-data'),
});
