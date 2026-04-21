# SubSink — App de Escritorio

Gestor de suscripciones para Windows, Mac y Linux. Los datos se guardan localmente en tu sistema.

---

## 📁 Estructura del proyecto

```
subsink-electron/
├── main.js        ← Proceso principal de Electron
├── preload.js     ← Puente seguro entre app y sistema
├── package.json   ← Configuración y dependencias
└── src/
    └── index.html ← La app completa (HTML/CSS/JS)
```

---

## 🚀 Cómo ejecutar en modo desarrollo

### 1. Instala Node.js (si no lo tienes)
Descárgalo gratis desde: https://nodejs.org (versión LTS recomendada)

### 2. Abre una terminal en la carpeta del proyecto
```bash
cd subsink-electron
```

### 3. Instala las dependencias
```bash
npm install
```

### 4. Lanza la app
```bash
npm start
```

Se abrirá SubSink como una ventana de escritorio nativa.

---

## 📦 Compilar instaladores

### Para Linux (.AppImage y .deb)
```bash
npm run build:linux
```

### Para Windows (.exe instalador)
> ⚠️ Para compilar para Windows desde Linux necesitas Wine:
> ```bash
> sudo apt install wine64
> ```
> Luego:
```bash
npm run build:win
```

### Para Mac (.dmg)
> ⚠️ Solo se puede compilar para Mac **desde un Mac** (limitación de Apple).
> Si no tienes Mac, puedes usar GitHub Actions para compilarlo gratis (ver abajo).

### Compilar Linux + Windows a la vez
```bash
npm run build:all
```

Los instaladores se generan en la carpeta `dist/`.

---

## 🌐 Compilar para Mac gratis con GitHub Actions

Si no tienes Mac, puedes usar los servidores de GitHub para compilar el .dmg:

1. Sube el proyecto a un repositorio de GitHub
2. Crea el archivo `.github/workflows/build.yml` con este contenido:

```yaml
name: Build SubSink

on:
  push:
    tags:
      - 'v*'

jobs:
  build-mac:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build:mac
      - uses: actions/upload-artifact@v4
        with:
          name: SubSink-mac
          path: dist/*.dmg
```

3. Haz un tag en git: `git tag v1.0.0 && git push --tags`
4. GitHub compilará el .dmg y lo dejará disponible para descargar en la pestaña "Actions"

---

## 💾 ¿Dónde se guardan los datos?

Los datos se guardan automáticamente en un archivo JSON en:

| Sistema | Ruta |
|---------|------|
| Linux   | `~/.config/SubSink/subsink-data.json` |
| Windows | `C:\Users\TuUsuario\AppData\Roaming\SubSink\subsink-data.json` |
| Mac     | `~/Library/Application Support/SubSink/subsink-data.json` |

---

## 🌍 La app web sigue funcionando

El archivo `src/index.html` también funciona directamente en el navegador (usa localStorage). Puedes seguir usándolo en GitHub Pages si quieres tener las dos versiones.
