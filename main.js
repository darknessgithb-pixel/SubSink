const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs   = require('fs');

// Ruta donde se guardan los datos: carpeta del usuario
const DATA_PATH = path.join(app.getPath('userData'), 'subsink-data.json');

// ── Carga datos del archivo local ──
function loadData() {
  try {
    if (fs.existsSync(DATA_PATH)) {
      return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
    }
  } catch (e) { console.error('Error cargando datos:', e); }
  return { subs: [], profile: { name:'', currency:'€', country:'', since: new Date().toISOString() }, budget: 0 };
}

// ── Guarda datos en el archivo local ──
function saveData(data) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (e) { console.error('Error guardando datos:', e); return false; }
}

// ── Crea la ventana principal ──
function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 820,
    minWidth: 360,
    minHeight: 600,
    title: 'SubSink',
    backgroundColor: '#0a0a0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    // Sin barra de menú nativa
    autoHideMenuBar: true,
  });

  win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.whenReady().then(() => {
  // ── IPC: cargar datos ──
  ipcMain.handle('load-data', () => loadData());

  // ── IPC: guardar datos ──
  ipcMain.handle('save-data', (_e, data) => saveData(data));

  // ── IPC: exportar JSON con diálogo nativo ──
  ipcMain.handle('export-data', async (_e, data) => {
    const { filePath } = await dialog.showSaveDialog({
      title: 'Exportar datos de SubSink',
      defaultPath: `subsink-backup-${new Date().toISOString().slice(0,10)}.json`,
      filters: [{ name: 'JSON', extensions: ['json'] }],
    });
    if (!filePath) return false;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  });

  // ── IPC: importar JSON con diálogo nativo ──
  ipcMain.handle('import-data', async () => {
    const { filePaths } = await dialog.showOpenDialog({
      title: 'Importar datos de SubSink',
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['openFile'],
    });
    if (!filePaths || filePaths.length === 0) return null;
    try {
      return JSON.parse(fs.readFileSync(filePaths[0], 'utf-8'));
    } catch { return null; }
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
