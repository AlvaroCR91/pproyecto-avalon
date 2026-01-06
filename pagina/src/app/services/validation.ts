import { Injectable } from '@angular/core';

export interface Answer {
  id: number;
  correctText: string;
  caseSensitive?: boolean;
  alternativeAnswers?: string[];
  isCorrect: boolean;  // true si es correcta, false si es trampa
  groupName: 'ALFA' | 'BETA';   // grupo al que pertenece
  treeName: string;    // 'A1', 'A2', etc.
  explanation?: string; // Explicación del error (solo para trampas)
  resultMessage: string; // 'PATCH 1/2 FOUND', 'PATCH 2/2 FOUND' o 'FATAL ERROR'
}

@Injectable({
  providedIn: 'root',
})
export class Validation {
  // Almacena las respuestas correctas y trampas en memoria
  private correctAnswers: Answer[] = [
    // ============= GRUPO ALFA =============
    // Árbol A1 - TRAMPA (Comma + That)
    { 
      id: 1,
      treeName: 'A1',
      groupName: 'ALFA',
      correctText: 'The main server, that stores all the data, is down.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Non-defining (con comas) nunca usa "that"'
    },
    // Árbol A2 - CORRECTO (Defining)
    { 
      id: 2,
      treeName: 'A2',
      groupName: 'ALFA',
      correctText: 'This is the developer who fixed the bug yesterday.',
      caseSensitive: false,
      isCorrect: true,
      resultMessage: 'PATCH 1/2 FOUND'
    },
    // Árbol A3 - TRAMPA (Wrong Pronoun)
    { 
      id: 3,
      treeName: 'A3',
      groupName: 'ALFA',
      correctText: 'I have a new laptop who is very fast.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Laptop es una cosa, necesita "which" o "that"'
    },
    // Árbol A4 - TRAMPA (Place Preposition)
    { 
      id: 4,
      treeName: 'A4',
      groupName: 'ALFA',
      correctText: 'The office which we work is on the second floor.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Falta la preposición "in which" o usar "where"'
    },
    // Árbol A5 - CORRECTO (Non-Defining)
    { 
      id: 5,
      treeName: 'A5',
      groupName: 'ALFA',
      correctText: 'My password, which contains 10 numbers, is secure.',
      caseSensitive: false,
      isCorrect: true,
      resultMessage: 'PATCH 2/2 FOUND'
    },
    // Árbol A6 - TRAMPA (Omission)
    { 
      id: 6,
      treeName: 'A6',
      groupName: 'ALFA',
      correctText: 'The woman is sitting at the computer is my boss.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Falta el relativo: "The woman who is sitting..."'
    },
    
    // ============= GRUPO BETA =============
    // Árbol B1 - CORRECTO (Defining)
    { 
      id: 7,
      treeName: 'B1',
      groupName: 'BETA',
      correctText: 'The file that you deleted was important.',
      caseSensitive: false,
      isCorrect: true,
      resultMessage: 'PATCH 1/2 FOUND'
    },
    // Árbol B2 - TRAMPA (Comma + That)
    { 
      id: 8,
      treeName: 'B2',
      groupName: 'BETA',
      correctText: 'This antivirus, that is free, works perfectly.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Non-defining no usa "that"'
    },
    // Árbol B3 - TRAMPA (Wrong Pronoun)
    { 
      id: 9,
      treeName: 'B3',
      groupName: 'BETA',
      correctText: 'The gamer which won the tournament is here.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Gamer es persona, necesita "who"'
    },
    // Árbol B4 - CORRECTO (Non-Defining)
    { 
      id: 10,
      treeName: 'B4',
      groupName: 'BETA',
      correctText: 'Google, which is a search engine, is very popular.',
      caseSensitive: false,
      isCorrect: true,
      resultMessage: 'PATCH 2/2 FOUND'
    },
    // Árbol B5 - TRAMPA (Place Preposition)
    { 
      id: 11,
      treeName: 'B5',
      groupName: 'BETA',
      correctText: 'This is the website where I downloaded the file from.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'Si pones "from" al final, no usas "where", usas "which/that"'
    },
    // Árbol B6 - TRAMPA (Double Subject)
    { 
      id: 12,
      treeName: 'B6',
      groupName: 'BETA',
      correctText: 'The app which it is open drains the battery.',
      caseSensitive: false,
      isCorrect: false,
      resultMessage: 'FATAL ERROR',
      explanation: 'No se repite el sujeto (it) si ya está el relativo (which)'
    }
  ];

  constructor() { }

  /**
   * Valida si el texto ingresado por el usuario coincide con alguna frase
   * @param userInput Texto ingresado por el usuario
   * @returns Objeto con información de la validación o null si no se encuentra
   */
  validateAnswer(userInput: string): Answer | null {
    // Normalizar entrada del usuario (quitar espacios extras, puntos, etc.)
    const normalizedInput = this.normalizeText(userInput);
    
    // Buscar coincidencia en todas las frases
    for (const answer of this.correctAnswers) {
      const normalizedCorrect = this.normalizeText(answer.correctText);
      
      if (normalizedInput === normalizedCorrect) {
        return answer;
      }
      
      // Verificar respuestas alternativas si existen
      if (answer.alternativeAnswers) {
        for (const alt of answer.alternativeAnswers) {
          const normalizedAlt = this.normalizeText(alt);
          if (normalizedInput === normalizedAlt) {
            return answer;
          }
        }
      }
    }
    
    return null;
  }

  /**
   * Normaliza el texto para comparación
   * @param text Texto a normalizar
   * @returns Texto normalizado
   */
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[.!?;,]+$/g, '') // Eliminar puntuación al final
      .replace(/\s+/g, ' ');      // Normalizar espacios
  }

  /**
   * Añade una nueva respuesta correcta
   * @param answer Respuesta a añadir
   */
  addAnswer(answer: Answer): void {
    this.correctAnswers.push(answer);
  }

  /**
   * Obtiene todas las respuestas almacenadas
   * @returns Array de respuestas
   */
  getAllAnswers(): Answer[] {
    return this.correctAnswers;
  }

  /**
   * Limpia todas las respuestas almacenadas
   */
  clearAnswers(): void {
    this.correctAnswers = [];
  }
}
