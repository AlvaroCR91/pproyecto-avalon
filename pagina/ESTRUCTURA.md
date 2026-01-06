# Estructura del Proyecto - Proyecto Avalon

## 📁 Estructura de Carpetas

```
proyecto-avalon/
│
├── .github/
│   └── copilot-instructions.md      # Instrucciones para GitHub Copilot
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── validator/           # Componente principal de validación
│   │   │       ├── validator.ts     # Lógica del componente
│   │   │       ├── validator.html   # Template HTML
│   │   │       ├── validator.css    # Estilos del componente
│   │   │       └── validator.spec.ts # Tests
│   │   │
│   │   ├── services/
│   │   │   ├── validation.ts        # ⭐ Servicio de validación (AQUÍ añades respuestas)
│   │   │   └── validation.spec.ts   # Tests del servicio
│   │   │
│   │   ├── app.ts                   # Componente raíz
│   │   ├── app.html                 # Template principal
│   │   ├── app.css                  # Estilos del componente raíz
│   │   ├── app.routes.ts            # Configuración de rutas
│   │   ├── app.config.ts            # Configuración de la aplicación
│   │   └── app.spec.ts              # Tests
│   │
│   ├── assets/
│   │   └── images/                  # ⭐ Coloca aquí tus imágenes de fondo
│   │       └── README.md
│   │
│   ├── index.html                   # HTML principal
│   ├── main.ts                      # Punto de entrada de la aplicación
│   └── styles.css                   # ⭐ Estilos globales (fondos de página)
│
├── public/
│   └── favicon.ico                  # Icono de la página
│
├── .vscode/
│   ├── extensions.json              # Extensiones recomendadas
│   ├── launch.json                  # Configuración de debug
│   └── tasks.json                   # Tareas de VS Code
│
├── angular.json                     # Configuración de Angular
├── package.json                     # Dependencias del proyecto
├── tsconfig.json                    # Configuración de TypeScript
├── vercel.json                      # ⭐ Configuración para despliegue en Vercel
├── README.md                        # Documentación principal
└── CONFIGURACION.md                 # ⭐ Guía de configuración detallada
```

## 📝 Archivos Clave para Personalizar

### 1. **validation.ts** - Añadir Respuestas Correctas
📍 `src/app/services/validation.ts`

Aquí defines las palabras/frases correctas que la aplicación validará.

```typescript
private correctAnswers: Answer[] = [
  {
    id: 1,
    correctText: 'tu-respuesta',
    caseSensitive: false,
    alternativeAnswers: ['alternativa1', 'alternativa2']
  }
];
```

### 2. **styles.css** - Fondos y Estilos Globales
📍 `src/styles.css`

Cambia el fondo de toda la página aquí.

```css
body {
  background-image: url('/assets/images/tu-imagen.jpg');
}
```

### 3. **validator.css** - Estilos del Formulario
📍 `src/app/components/validator/validator.css`

Personaliza colores de botones, formulario y mensajes de resultado.

### 4. **validator.html** - Template del Formulario
📍 `src/app/components/validator/validator.html`

Modifica el contenido HTML del formulario y los mensajes.

### 5. **assets/images/** - Imágenes
📍 `src/assets/images/`

Coloca aquí todas tus imágenes de fondo, logos, etc.

## 🎯 Próximos Pasos Sugeridos

1. **Añadir Respuestas**
   - Edita `src/app/services/validation.ts`
   - Sigue los ejemplos en `CONFIGURACION.md`

2. **Añadir Imágenes de Fondo**
   - Coloca imágenes en `src/assets/images/`
   - Actualiza `src/styles.css` o `validator.css`

3. **Personalizar Mensajes**
   - Edita `src/app/components/validator/validator.html`
   - Añade mensajes personalizados de éxito/error

4. **Cambiar Colores**
   - Edita `src/app/components/validator/validator.css`
   - Modifica `.btn-primary`, `.result-correct`, etc.

## 🚀 Comandos Útiles

```bash
# Desarrollo local
ng serve

# Compilar para producción
ng build --configuration production

# Ejecutar tests
ng test

# Generar nuevo componente
ng generate component nombre-componente

# Generar nuevo servicio
ng generate service nombre-servicio
```

## 📦 Despliegue en Vercel

El archivo `vercel.json` ya está configurado. Solo necesitas:

1. Subir el proyecto a GitHub
2. Conectar el repositorio en Vercel
3. Hacer clic en "Deploy"

O usar CLI:
```bash
npm install -g vercel
vercel --prod
```

## 🔧 Tecnologías Utilizadas

- **Angular 19+** - Framework principal
- **TypeScript** - Lenguaje de programación
- **CSS3** - Estilos
- **Vitest** - Testing
- **Vercel** - Plataforma de despliegue

## 📖 Documentación Adicional

- `README.md` - Documentación general del proyecto
- `CONFIGURACION.md` - Guía detallada de configuración
- `src/assets/images/README.md` - Guía para imágenes

## ❓ ¿Necesitas Más Ayuda?

Si necesitas añadir características adicionales como:
- Sistema de múltiples preguntas
- Puntuación
- Temporizador
- Animaciones especiales
- Sonidos
- Guardado de progreso

Por favor proporciona más detalles sobre lo que necesitas y con gusto te ayudaré a implementarlo.
