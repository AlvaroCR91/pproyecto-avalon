# Guía de Configuración - Proyecto Avalon

## Cómo Añadir Respuestas Correctas

### Ubicación del Archivo
Las respuestas se configuran en: `src/app/services/validation.ts`

### Estructura de una Respuesta

```typescript
export interface Answer {
  id: number;                    // ID único para cada respuesta
  correctText: string;            // La respuesta correcta principal
  caseSensitive?: boolean;        // ¿Distinguir mayúsculas? (opcional, default: false)
  alternativeAnswers?: string[];  // Respuestas alternativas válidas (opcional)
}
```

### Ejemplos de Configuración

#### Ejemplo 1: Respuesta Simple
```typescript
{
  id: 1,
  correctText: 'Madrid',
  caseSensitive: false
}
```
El usuario puede escribir: "madrid", "MADRID", "Madrid" - todas serán válidas.

#### Ejemplo 2: Con Respuestas Alternativas
```typescript
{
  id: 2,
  correctText: 'Barcelona',
  caseSensitive: false,
  alternativeAnswers: ['BCN', 'Barna']
}
```
Válido: "barcelona", "BCN", "barna", "BARCELONA", etc.

#### Ejemplo 3: Sensible a Mayúsculas
```typescript
{
  id: 3,
  correctText: 'JavaScript',
  caseSensitive: true,
  alternativeAnswers: ['JS']
}
```
Válido: "JavaScript", "JS"
NO válido: "javascript", "JAVASCRIPT", "js"

#### Ejemplo 4: Múltiples Alternativas
```typescript
{
  id: 4,
  correctText: 'Estados Unidos',
  caseSensitive: false,
  alternativeAnswers: ['USA', 'EEUU', 'EE.UU.', 'United States', 'America']
}
```

### Archivo Completo de Ejemplo

```typescript
private correctAnswers: Answer[] = [
  {
    id: 1,
    correctText: 'ejemplo',
    caseSensitive: false,
    alternativeAnswers: ['ej', 'demo']
  },
  {
    id: 2,
    correctText: 'Angular',
    caseSensitive: true,
    alternativeAnswers: ['NG']
  },
  {
    id: 3,
    correctText: 'TypeScript',
    caseSensitive: false,
    alternativeAnswers: ['TS']
  },
  // Añade más respuestas aquí...
];
```

## Cómo Añadir Imágenes de Fondo

### Paso 1: Añadir la Imagen
1. Guarda tu imagen en: `src/assets/images/`
2. Ejemplo: `src/assets/images/fondo.jpg`

### Paso 2: Aplicar el Fondo Globalmente
Edita `src/styles.css`:

```css
body {
  background-image: url('/assets/images/fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

### Paso 3: Aplicar Fondo Solo al Componente
Edita `src/app/components/validator/validator.css`:

```css
.validator-container {
  background-image: url('/assets/images/fondo-validador.jpg');
  background-size: cover;
  background-position: center;
}
```

## Personalizar Colores

### Colores del Formulario
En `src/app/components/validator/validator.css`:

```css
/* Cambiar color del botón principal */
.btn-primary {
  background-color: #tu-color-aqui;
}

/* Cambiar color cuando la respuesta es correcta */
.result-correct {
  background-color: #d4edda; /* Verde claro */
  color: #155724;            /* Verde oscuro */
}

/* Cambiar color cuando la respuesta es incorrecta */
.result-incorrect {
  background-color: #f8d7da; /* Rojo claro */
  color: #721c24;            /* Rojo oscuro */
}
```

### Gradiente de Fondo
En `src/styles.css`:

```css
body {
  background: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

Ejemplos de combinaciones:
- Morado-Rosa: `#667eea` a `#764ba2`
- Azul-Verde: `#00d2ff` a `#3a47d5`
- Naranja-Rosa: `#ff6a00` a `#ee0979`

## Cambiar Mensajes de Validación

Actualmente el componente muestra solo símbolos (✓ y ✗). Para personalizar los mensajes, edita `src/app/components/validator/validator.html`:

```html
<div class="result-container" *ngIf="showResult">
  <div class="result" [ngClass]="{
    'result-correct': validationResult === true,
    'result-incorrect': validationResult === false
  }">
    <p *ngIf="validationResult">¡Correcto! 🎉</p>
    <p *ngIf="!validationResult">Incorrecto, inténtalo de nuevo 😔</p>
  </div>
</div>
```

## Cambiar ID de Respuesta a Validar

En `src/app/components/validator/validator.ts`, cambia:

```typescript
currentAnswerId: number = 1; // Cambia el número al ID que quieras validar
```

Si quieres validar contra la respuesta con ID 3:
```typescript
currentAnswerId: number = 3;
```

## Notas Importantes

- Siempre asigna IDs únicos a cada respuesta
- No dejes espacios al inicio o final de las respuestas (se eliminan automáticamente)
- Las alternativas también respetan la configuración de `caseSensitive`
- Guarda los cambios y reinicia el servidor de desarrollo (`ng serve`) para ver los cambios

## ¿Necesitas Ayuda?

Si necesitas añadir funcionalidades más complejas:
- Múltiples preguntas con diferentes IDs
- Sistema de puntuación
- Temporizador
- Historial de respuestas

Por favor, proporciona más detalles sobre lo que necesitas implementar.
