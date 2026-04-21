# 💳 SubSink

> Controla todas tus suscripciones desde una app de escritorio. Sin cuentas, sin servidores, sin anuncios. Tus datos son tuyos.

---

## ✨ Características

- 📋 **Gestión de suscripciones** — añade, pausa o elimina servicios fácilmente
- 💰 **Presupuesto mensual** — fija un límite y ve si lo estás superando
- 📊 **Proyección anual** — ve cuánto gastas realmente al año
- 🎨 **Selector de iconos** — más de 100 iconos para personalizar cada suscripción
- 💾 **100% local** — los datos se guardan en tu ordenador, nunca en la nube
- 🌍 **Multiplataforma** — Windows, Mac y Linux

---

## 📥 Descargar

> Próximamente en la sección [Releases](../../releases)

---

## 🛠️ Ejecutar desde el código fuente

### Requisitos
- [Node.js](https://nodejs.org) (versión LTS)

### Pasos

```bash
# Clona el repositorio
git clone https://github.com/TU_USUARIO/subsink.git
cd subsink

# Instala dependencias
npm install

# Lanza la app
npm start
```

---

## 📦 Compilar instaladores

```bash
npm run build:linux   # .AppImage y .deb
npm run build:win     # .exe (requiere Wine en Linux/Mac)
npm run build:all     # Linux + Windows
```

> Para compilar en Mac (.dmg) se necesita un sistema macOS. Ver instrucciones en el README técnico.

---

## 💾 ¿Dónde se guardan los datos?

| Sistema  | Ruta                                                                 |
|----------|----------------------------------------------------------------------|
| Linux    | `~/.config/SubSink/subsink-data.json`                               |
| Windows  | `C:\Users\TuUsuario\AppData\Roaming\SubSink\subsink-data.json`      |
| Mac      | `~/Library/Application Support/SubSink/subsink-data.json`           |

---

## 📄 Licencia

MIT © Dark
