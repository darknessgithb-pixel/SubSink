# SubSink — App Móvil (Android + iOS)

## Requisitos previos
- Node.js instalado
- Android Studio instalado (para Android)
- Mac con Xcode (para iOS — solo en macOS)
- Java 17+

---

## Pasos para compilar en Android

### 1. Instala las dependencias
```bash
cd subsink-capacitor
npm install
```

### 2. Añade la plataforma Android
```bash
npx cap add android
```

### 3. Sincroniza los archivos web con Android
```bash
npx cap sync android
```

### 4. Abre en Android Studio
```bash
npx cap open android
```

### 5. Compila el APK en Android Studio
1. Espera a que Android Studio indexe el proyecto (barra de progreso abajo)
2. Menú superior: **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. Cuando termine pulsa **locate** para ver el archivo
4. El APK estará en: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## Pasos para compilar en iOS (solo en Mac)

### 1. Añade la plataforma iOS
```bash
npx cap add ios
npx cap sync ios
npx cap open ios
```

### 2. En Xcode
1. Selecciona tu dispositivo o simulador
2. Pulsa el botón ▶ para compilar

---

## Subir a Orion Store

1. Crea una cuenta en https://orionstoreapp.com (o el sitio oficial)
2. Sube el archivo `.apk` o `.aab`
3. Rellena la descripción, capturas de pantalla y categoría (Finanzas)

---

## Estructura del proyecto
```
subsink-capacitor/
├── www/
│   └── index.html     ← La app completa
├── android/           ← Generado por Capacitor (no editar)
├── ios/               ← Generado por Capacitor (no editar)
├── capacitor.config.js
└── package.json
```

---

## Notas
- Los datos se guardan en el almacenamiento local del dispositivo
- Funciona sin conexión a internet
- Compatible con Android 5.0+ y iOS 13+
