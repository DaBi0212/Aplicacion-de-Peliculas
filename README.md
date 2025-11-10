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
