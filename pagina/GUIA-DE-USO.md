# Proyecto Avalon - Guía de Uso

## 📖 Descripción del Proyecto

Este proyecto es un sistema de validación de frases en inglés basado en el uso correcto de pronombres relativos (relative clauses). Los estudiantes deben escribir frases que encontrarán en diferentes árboles durante una actividad de "yincana" dividida en dos grupos: **GRUPO ALFA** y **GRUPO BETA**.

## 🎯 Objetivo

Los estudiantes deben:
1. Encontrar las frases en los códigos QR de los árboles
2. Escribir las frases en la aplicación web
3. Verificar si la frase es correcta o es una "trampa" (error gramatical)
4. Recolectar los "PATCH" (frases correctas) para completar el desafío

## 📋 Estructura de las Frases

### Grupo ALFA (6 Árboles)

| Árbol | Tipo | Frase | Resultado |
|-------|------|-------|-----------|
| A1 | ❌ TRAMPA | "The main server, that stores all the data, is down." | FATAL ERROR |
| A2 | ✅ CORRECTO | "This is the developer who fixed the bug yesterday." | PATCH 1/2 FOUND |
| A3 | ❌ TRAMPA | "I have a new laptop who is very fast." | FATAL ERROR |
| A4 | ❌ TRAMPA | "The office which we work is on the second floor." | FATAL ERROR |
| A5 | ✅ CORRECTO | "My password, which contains 10 numbers, is secure." | PATCH 2/2 FOUND |
| A6 | ❌ TRAMPA | "The woman is sitting at the computer is my boss." | FATAL ERROR |

### Grupo BETA (6 Árboles)

| Árbol | Tipo | Frase | Resultado |
|-------|------|-------|-----------|
| B1 | ✅ CORRECTO | "The file that you deleted was important." | PATCH 1/2 FOUND |
| B2 | ❌ TRAMPA | "This antivirus, that is free, works perfectly." | FATAL ERROR |
| B3 | ❌ TRAMPA | "The gamer which won the tournament is here." | FATAL ERROR |
| B4 | ✅ CORRECTO | "Google, which is a search engine, is very popular." | PATCH 2/2 FOUND |
| B5 | ❌ TRAMPA | "This is the website where I downloaded the file from." | FATAL ERROR |
| B6 | ❌ TRAMPA | "The app which it is open drains the battery." | FATAL ERROR |

## 🎮 Cómo Usar la Aplicación

### Para los Estudiantes:

1. **Acceder a la página web** (URL proporcionada por el profesor)
2. **Escribir la frase** exactamente como aparece en el QR del árbol
3. **Hacer clic en "Verificar"**
4. **Observar el resultado:**
   - 🟢 **Imagen verde con "PATCH FOUND"** = Frase correcta
   - 🔴 **Imagen roja con "FATAL ERROR"** = Frase con error
5. **Leer la explicación** (solo aparece en frases con error)
6. **Continuar** buscando los 2 PATCH de su grupo

### Para el Profesor:

1. **Imprimir los códigos QR** con las frases (o crear carteles)
2. **Colocar los QR en árboles** del espacio donde se realizará la actividad
3. **Dividir a los estudiantes en dos grupos:**
   - Grupo ALFA → Árboles A1-A6
   - Grupo BETA → Árboles B1-B6
4. **Proporcionar la URL** de la aplicación web
5. **Monitorear** el progreso de los equipos

## 🔍 Explicación de los Errores

### Errores del Grupo ALFA:

- **A1**: Non-defining clauses (con comas) nunca usan "that"
- **A3**: Los objetos necesitan "which" o "that", no "who"
- **A4**: Falta la preposición "in which" o usar "where"
- **A6**: Falta el pronombre relativo "who"

### Errores del Grupo BETA:

- **B2**: Non-defining clauses no usan "that"
- **B3**: Las personas necesitan "who", no "which"
- **B5**: Si usas preposición al final, no uses "where"
- **B6**: No se repite el sujeto con el pronombre relativo

## 💻 Características Técnicas

### Validación Inteligente:
- ✅ No distingue mayúsculas/minúsculas
- ✅ Ignora puntuación final
- ✅ Normaliza espacios múltiples
- ✅ Muestra explicaciones educativas

### Interfaz Visual:
- 🖼️ Imagen de fondo mientras se escribe
- 🖼️ Imagen de resultado según correcto/incorrecto
- 📊 Información del árbol y grupo
- 💡 Explicación del error gramatical

## 🚀 Despliegue

La aplicación está configurada para desplegarse en **Vercel**:

### Opción 1: GitHub + Vercel
1. Sube el proyecto a GitHub
2. Conecta el repositorio en Vercel
3. Deploy automático

### Opción 2: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### URL de Producción:
Una vez desplegado, obtendrás una URL como:
`https://proyecto-avalon.vercel.app`

## 📱 Compatibilidad

- ✅ Escritorio (Chrome, Firefox, Edge, Safari)
- ✅ Tablets
- ✅ Móviles (responsive design)
- ✅ No requiere instalación
- ✅ Funciona sin conexión después de la primera carga

## 🎓 Objetivos Pedagógicos

1. **Práctica de Relative Clauses**
2. **Identificación de errores gramaticales**
3. **Aprendizaje activo y gamificación**
4. **Trabajo en equipo**
5. **Uso de tecnología en el aprendizaje**

## 🔧 Personalización Futura

Si deseas añadir más frases o grupos:
1. Edita `src/app/services/validation.ts`
2. Añade nuevas entradas al array `correctAnswers`
3. Sigue la estructura existente:

```typescript
{
  id: XX,
  treeName: 'AX' o 'BX',
  groupName: 'ALFA' o 'BETA',
  correctText: 'La frase aquí',
  isCorrect: true o false,
  resultMessage: 'PATCH X/Y FOUND' o 'FATAL ERROR',
  explanation: 'Explicación del error' (opcional)
}
```

## 📞 Soporte

Si encuentras problemas o necesitas ayuda:
- Verifica que las imágenes estén en `src/assets/images/`
- Comprueba la consola del navegador (F12) para errores
- Asegúrate de que el servidor esté corriendo (`ng serve`)

## 🎉 ¡Listo para Usar!

El proyecto está completamente configurado y listo para ser utilizado en tu actividad educativa. Los estudiantes disfrutarán buscando los árboles, escribiendo las frases y aprendiendo de sus errores.

¡Buena suerte con tu yincana de gramática inglesa! 🌳📱✨
