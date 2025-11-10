# 🎬 MiPeliculasApp

Una aplicación móvil desarrollada con Ionic y Angular para explorar, descubrir y gestionar tu colección personal de películas.

## 📱 Descripción General

MiPeliculasApp es una aplicación móvil nativa que permite a los usuarios explorar un extenso catálogo de películas, gestionar una lista personal de favoritos y acceder a información detallada sobre cada título. La aplicación se conecta a The Movie Database (TMDB) para obtener datos actualizados y ofrece una experiencia de usuario fluida e intuitiva.

### ✨ Características Principales

- **🎭 Exploración de Contenido**: Descubre películas en cartelera, populares y por búsqueda
- **⭐ Sistema de Favoritos**: Guarda y organiza tus películas preferidas localmente
- **📱 Diseño Responsive**: Interfaz adaptada para diferentes tamaños de pantalla
- **🔍 Búsqueda Inteligente**: Sistema con debounce para optimizar rendimiento
- **📊 Información Detallada**: Sinopsis, rating, actores y géneros de cada película
- **💾 Funcionamiento Offline**: Los favoritos se mantienen sin conexión a internet

## 🛠 Tecnologías y Dependencias

### Frontend Framework
- **Ionic 6** - Framework UI para aplicaciones híbridas
- **Angular 15** - Framework para aplicaciones web
- **TypeScript** - Superset de JavaScript tipado

### Nativo y Build
- **Capacitor** - Runtime para aplicaciones nativas
- **@angular/cli** - Herramientas de desarrollo Angular

### Servicios y APIs
- **The Movie Database (TMDB)** - API para datos de películas
- **Ionic Storage** - Almacenamiento local persistente
- **RxJS** - Programación reactiva

### Dependencias Principales
```json
{
  "@ionic/angular": "^6.0.0",
  "@angular/core": "^15.0.0",
  "@capacitor/android": "^latest",
  "@ionic/storage-angular": "^latest",
  "rxjs": "^7.8.0"
}

🚀 Instrucciones de Instalación y Ejecución
Prerrequisitos
Node.js 16+ instalado

npm o yarn

Android Studio (para build nativo)

Cuenta en TMDB (para API key)

1. Clonar el Repositorio
git clone https://github.com/tu-usuario/mipeliculasapp.git
cd mipeliculasapp

2. Instalar Dependencias
bash
npm install --legacy-peer-deps
3. Configurar Variables de Entorno
Crear archivo src/environments/environment.ts:

typescript
export const environment = {
  production: false,
  url: 'https://api.themoviedb.org/3',
  apiKey: 'TU_API_KEY_DE_TMDB',
  imgPath: 'https://image.tmdb.org/t/p'
};
4. Ejecutar en Navegador
bash
ionic serve
5. Build para Producción
bash
npm run build -- --configuration=production
6. Configurar Capacitor (Primera Vez)
bash
npx cap init MiPeliculasApp com.tudominio.mipeliculasapp --web-dir=www
npx cap add android
npx cap copy
npx cap sync
7. Ejecutar en Android
bash
# Abrir en Android Studio
npx cap open android

# O ejecutar directamente
npx cap run android
8. Generar APK para Distribución
bash
# Desde Android Studio: Build > Generate Signed Bundle / APK
# O desde línea de comandos
cd android
./gradlew assembleRelease
📸 Capturas de Pantalla
Pantalla Principal - Cartelera
![Imagen de WhatsApp 2025-11-09 a las 21 57 43_b2637182](https://github.com/user-attachments/assets/1d4899f1-02a5-412d-80ad-f720a5298b07)
Vista principal con películas en tendencia y populares
Búsqueda y Resultados
![Imagen de WhatsApp 2025-11-09 a las 21 57 41_5a9bcee1](https://github.com/user-attachments/assets/f993be85-851e-49f9-b87a-a9575fd2afb2)
Interfaz de búsqueda con resultados en tiempo real
Detalles de Película
![Imagen de WhatsApp 2025-11-09 a las 23 03 21_744b981f](https://github.com/user-attachments/assets/0ecc3703-e362-4873-8efb-7a57447a24b8)
Vista detallada con información completa y actores
Gestión de Favoritos
![Imagen de WhatsApp 2025-11-09 a las 21 57 39_f85523dc](https://github.com/user-attachments/assets/fd6d44c5-6bf5-442d-ba1a-ad25164a9a4b)
Lista personal organizada por géneros
🏗 Estructura del Proyecto
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── detalle/         # Modal de detalles
│   │   ├── slideshow-backdrop/
│   │   ├── slideshow-poster/
│   │   └── slideshow-pares/
│   ├── interfaces/          # Tipos TypeScript
│   │   └── interfaces.ts
│   ├── pages/              # Vistas principales
│   │   ├── tab1/           # Cartelera
│   │   ├── tab2/           # Búsqueda
│   │   └── tab3/           # Favoritos
│   ├── services/           # Lógica de negocio
│   │   ├── data-local.service.ts
│   │   └── movies.service.ts
│   └── pipes/              # Transformadores
│       └── imagen.pipe.ts
🔧 Configuración de APIs
The Movie Database (TMDB)
Regístrate en https://www.themoviedb.org/

Obtén tu API Key desde el panel de configuración

Reemplaza TU_API_KEY_DE_TMDB en environment.ts

📋 Scripts Disponibles
# Desarrollo
npm start              # Servidor de desarrollo
npm run build          # Build de producción
npm run test           # Ejecutar tests

Tecnologías Utilizadas
Ionic Framework - https://ionicframework.com/

Angular - https://angular.io/

Capacitor - https://capacitorjs.com/

APIs y Datos
The Movie Database - https://www.themoviedb.org/

Provee toda la información de películas y actores

API REST completa y documentada

# Nativo
npx cap sync          # Sincronizar con nativo
npx cap run android   # Ejecutar en Android
npx cap open android  # Abrir en Android Studio
🐛 Solución de Problemas Comunes
Error: "Module not found"
rm -rf node_modules
npm install --legacy-peer-deps
Error: "API key not valid"
Verifica que la API key de TMDB esté correcta

Asegúrate de que el archivo environment.ts exista

Error en Build Android
npx cap sync
cd android
./gradlew clean
