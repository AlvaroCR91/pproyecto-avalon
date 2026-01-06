# Proyecto Avalon - Verificador de Relative Clauses

Una aplicación web Angular interactiva para validar frases de inglés (relative clauses) en una actividad de yincana educativa.

## 🎯 Descripción

Esta aplicación es parte de una actividad educativa donde los estudiantes buscan códigos QR en árboles que contienen frases en inglés. Deben escribir las frases en la aplicación para verificar si son correctas o contienen errores gramaticales relacionados con pronombres relativos.

### Características Principales

- ✅ **12 frases** divididas en 2 grupos (ALFA y BETA)
- ✅ **Validación inteligente** que ignora mayúsculas y puntuación
- ✅ **Imágenes visuales** para resultados correctos e incorrectos
- ✅ **Explicaciones educativas** para cada error
- ✅ **Interfaz responsive** para móviles, tablets y escritorio
- ✅ **Sin base de datos** - todo funciona en memoria
- ✅ **Fácil despliegue en Vercel**

## 📸 Capturas de Pantalla

La aplicación muestra:
- Imagen de fondo para introducir mensaje
- Imagen verde "PATCH FOUND" para respuestas correctas
- Imagen roja "FATAL ERROR" para respuestas incorrectas
- Explicación del error gramatical

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── validator/          # Componente principal con formulario
│   ├── services/
│   │   └── validation.ts       # Servicio de validación
│   ├── app.ts                  # Componente raíz
│   ├── app.html                # Template principal
│   └── app.routes.ts           # Configuración de rutas
├── styles.css                  # Estilos globales
└── index.html                  # HTML principal
```

## Tecnologías Utilizadas

- **Angular 19+** - Framework principal
- **TypeScript** - Lenguaje de programación
- **CSS3** - Estilos y diseño responsive

## Instalación y Desarrollo

### Requisitos Previos

- Node.js (v18 o superior)
- npm (v9 o superior)
- Angular CLI (`npm install -g @angular/cli`)

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
ng serve

# La aplicación estará disponible en http://localhost:4200
```

### Compilación para Producción

```bash
# Compilar para producción
ng build --configuration production

# Los archivos compilados estarán en dist/proyecto-avalon/browser/
```

## 📚 Documentación Adicional

- **[GUIA-DE-USO.md](GUIA-DE-USO.md)** - Guía completa para profesores y estudiantes
- **[CONFIGURACION.md](CONFIGURACION.md)** - Guía técnica de configuración
- **[ESTRUCTURA.md](ESTRUCTURA.md)** - Estructura del proyecto

## 🎮 Frases Incluidas

### Grupo ALFA (6 frases)
- 2 correctas (PATCH 1/2 y PATCH 2/2)
- 4 trampas (FATAL ERROR)

### Grupo BETA (6 frases)
- 2 correctas (PATCH 1/2 y PATCH 2/2)
- 4 trampas (FATAL ERROR)

Ver detalles completos en [GUIA-DE-USO.md](GUIA-DE-USO.md)

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio (si está en GitHub)
git clone <tu-repositorio>

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
ng serve

# Abrir en el navegador
http://localhost:4200
```

## 📦 Despliegue en Vercel

### Método 1: Desde GitHub
1. Sube el proyecto a GitHub
2. Ve a [Vercel](https://vercel.com) e inicia sesión
3. Importa tu repositorio
4. Vercel detectará automáticamente Angular
5. Haz clic en "Deploy"

### Método 2: CLI de Vercel
```bash
npm install -g vercel
vercel --prod
```

La configuración ya está lista en `vercel.json`

## Recursos Adicionales

- [Documentación de Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [Documentación de Vercel](https://vercel.com/docs)

## Licencia

Este proyecto está bajo la Licencia MIT.
