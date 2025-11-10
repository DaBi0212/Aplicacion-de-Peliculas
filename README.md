# 🎬 MiPeliculasApp

Una aplicación móvil desarrollada con **Ionic** y **Angular** para explorar, descubrir y gestionar tu colección personal de películas.

---

## 📱 Descripción General

**MiPeliculasApp** es una aplicación móvil nativa que permite a los usuarios explorar un extenso catálogo de películas, gestionar una lista personal de favoritos y acceder a información detallada sobre cada título.  
La aplicación se conecta a **The Movie Database (TMDB)** para obtener datos actualizados y ofrece una experiencia de usuario fluida e intuitiva.

---

### ✨ Características Principales

- 🎭 **Exploración de Contenido**: Descubre películas en cartelera, populares y por búsqueda  
- ⭐ **Sistema de Favoritos**: Guarda y organiza tus películas preferidas localmente  
- 📱 **Diseño Responsive**: Interfaz adaptada para diferentes tamaños de pantalla  
- 🔍 **Búsqueda Inteligente**: Sistema con debounce para optimizar rendimiento  
- 📊 **Información Detallada**: Sinopsis, rating, actores y géneros de cada película  
- 💾 **Funcionamiento Offline**: Los favoritos se mantienen sin conexión a internet  

---

## 🛠 Tecnologías y Dependencias

### Frontend Framework
- **Ionic 6** – Framework UI para aplicaciones híbridas  
- **Angular 15** – Framework para aplicaciones web  
- **TypeScript** – Superset de JavaScript tipado  

### Nativo y Build
- **Capacitor** – Runtime para aplicaciones nativas  
- **@angular/cli** – Herramientas de desarrollo Angular  

### Servicios y APIs
- **The Movie Database (TMDB)** – API para datos de películas  
- **Ionic Storage** – Almacenamiento local persistente  
- **RxJS** – Programación reactiva  

---

## 🚀 Instrucciones de Instalación y Ejecución

### 🧰 Prerrequisitos
- Node.js 16+ instalado  
- npm o yarn  
- Android Studio (para build nativo)  
- Cuenta en TMDB (para obtener API key)  

---

### 1️⃣ Clonar el Repositorio
git clone https://github.com/tu-usuario/mipeliculasapp.git  
cd mipeliculasapp

---

### 2️⃣ Instalar Dependencias
npm install --legacy-peer-deps

---

### 3️⃣ Configurar Variables de Entorno  
Crear archivo `src/environments/environment.ts`:

export const environment = {  
&nbsp;&nbsp;production: false,  
&nbsp;&nbsp;url: 'https://api.themoviedb.org/3',  
&nbsp;&nbsp;apiKey: 'TU_API_KEY_DE_TMDB',  
&nbsp;&nbsp;imgPath: 'https://image.tmdb.org/t/p'  
};

---

### 4️⃣ Ejecutar en Navegador  
ionic serve

---

### 5️⃣ Configuración Capacitor  
npx cap init MiPeliculasApp com.tudominio.mipeliculasapp --web-dir=www  
npx cap add android  
npx cap copy  
npx cap sync

---

### 6️⃣ Build para Producción  
npm run build -- --configuration=production

---

### 7️⃣ Ejecutar en Android  
Abrir en Android Studio:  
npx cap open android  

O ejecutar directamente:  
npx cap run android

---

### 8️⃣ Generar APK para Distribución  
Desde Android Studio: **Build > Generate Signed Bundle / APK**  
O desde línea de comandos:  
cd android  
./gradlew assembleRelease

---

## 📸 Capturas de Pantalla

**Pantalla Principal - Cartelera**  
![Cartelera](https://github.com/user-attachments/assets/929596f8-aad2-4af9-835f-f434546566cd)  
_Vista principal con películas en tendencia y populares_

**Búsqueda y Resultados**  
![Búsqueda](https://github.com/user-attachments/assets/29bc463f-a08f-4573-af8d-4d55fe7dfd82)  
_Interfaz de búsqueda con resultados en tiempo real_

**Detalles de Película**  
![Detalles](https://github.com/user-attachments/assets/114925a0-0398-4ee6-8eab-5e110d0171de)  
_Vista detallada con información completa y actores_

**Gestión de Favoritos**  
![Favoritos](https://github.com/user-attachments/assets/7413b272-b5e2-4942-a2c5-90c36cdb41a5)  
_Lista personal organizada por géneros_

---

## 🏗 Estructura del Proyecto
src/  
├── app/  
│   ├── components/          # Componentes reutilizables  
│   │   ├── detalle/         # Modal de detalles  
│   │   ├── slideshow-backdrop/  
│   │   ├── slideshow-poster/  
│   │   └── slideshow-pares/  
│   ├── interfaces/          # Tipos TypeScript  
│   │   └── interfaces.ts  
│   ├── pages/               # Vistas principales  
│   │   ├── tab1/            # Cartelera  
│   │   ├── tab2/            # Búsqueda  
│   │   └── tab3/            # Favoritos  
│   ├── services/            # Lógica de negocio  
│   │   ├── data-local.service.ts  
│   │   └── movies.service.ts  
│   └── pipes/               # Transformadores  
│       └── imagen.pipe.ts  

---

## 🔧 Configuración de APIs

### The Movie Database (TMDB)
1. Regístrate en [https://www.themoviedb.org/](https://www.themoviedb.org/)  
2. Obtén tu **API Key** desde el panel de configuración  
3. Reemplaza `TU_API_KEY_DE_TMDB` en el archivo `environment.ts`

---

## 📋 Scripts Disponibles
Desarrollo:  
- npm start → Servidor de desarrollo  
- npm run build → Build de producción  
- npm run test → Ejecutar tests  

Nativo:  
- npx cap sync → Sincronizar con nativo  
- npx cap run android → Ejecutar en Android  
- npx cap open android → Abrir en Android Studio  

---

## 🐛 Solución de Problemas Comunes

**Error:** "Module not found"  
rm -rf node_modules  
npm install --legacy-peer-deps  

**Error:** "API key not valid"  
Verifica que la API key de TMDB esté correcta  
Asegúrate de que el archivo `environment.ts` exista  

**Error en Build Android**  
npx cap sync  
cd android  
./gradlew clean  

---

## 👥 Créditos

### Tecnologías Utilizadas
- [Ionic Framework](https://ionicframework.com/)  
- [Angular](https://angular.io/)  
- [Capacitor](https://capacitorjs.com/)

### APIs y Datos
- [The Movie Database (TMDB)](https://www.themoviedb.org/)  
Provee toda la información de películas y actores mediante una **API REST completa y documentada**.
