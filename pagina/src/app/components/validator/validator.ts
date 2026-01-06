import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validation, Answer } from '../../services/validation';

@Component({
  selector: 'app-validator',
  imports: [FormsModule, CommonModule],
  templateUrl: './validator.html',
  styleUrl: './validator.css',
})
export class Validator {
  userInput: string = '';
  validationResult: Answer | null = null;
  showResult: boolean = false;
  notFound: boolean = false;
  // Contadores de aciertos por grupo
  groupCounters: { ALFA: number; BETA: number } = { ALFA: 0, BETA: 0 };
  // Fase completada por grupo (cuando alcanza 2 aciertos)
  phaseCompleted: { ALFA: boolean; BETA: boolean } = { ALFA: false, BETA: false };
  // Mensaje de fase
  phaseMessage: string | null = null;

  constructor(private validationService: Validation) {}

  /**
   * Valida la entrada del usuario
   */
  validateInput(): void {
    if (this.userInput.trim() === '') {
      this.showResult = false;
      this.notFound = false;
      return;
    }

    const result = this.validationService.validateAnswer(this.userInput);
    
    if (result) {
      this.validationResult = result;
      this.showResult = true;
      this.notFound = false;
      // Actualizar contadores si la respuesta es correcta
      if (result.isCorrect) {
        const group = (result.groupName || '') as 'ALFA' | 'BETA';
        if (group === 'ALFA' || group === 'BETA') {
          if (!this.phaseCompleted[group]) {
            this.groupCounters[group]++;
            if (this.groupCounters[group] >= 2) {
              this.phaseCompleted[group] = true;
              this.phaseMessage = '¡Habéis conseguido pasar esta fase!';
            } else {
              this.phaseMessage = null;
            }
          } else {
            // Ya estaba completada; mantener el mensaje
            this.phaseMessage = '¡Habéis conseguido pasar esta fase!';
          }
        }
      } else {
        this.phaseMessage = null;
      }
    } else {
      this.validationResult = null;
      this.showResult = false;
      this.notFound = true;
      this.phaseMessage = null;
    }
  }

  /**
   * Limpia el formulario
   */
  clearForm(): void {
    this.userInput = '';
    this.validationResult = null;
    this.showResult = false;
    this.notFound = false;
    // No reiniciamos contadores al limpiar entrada
  }

  /**
   * Obtiene la ruta de la imagen según el resultado
   */
  getResultImage(): string {
    if (!this.validationResult) return '';
    
    if (this.validationResult.isCorrect) {
      return 'images/mensajeCorrecto.png';
    } else {
      return 'images/mensajeDeError.png';
    }
  }
}
