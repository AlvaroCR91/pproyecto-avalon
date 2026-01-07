import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Validation, Answer } from '../../services/validation';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './validator.html',
  styleUrl: './validator.css',
})
export class Validator {
  userInput: string = '';
  validationResult: Answer | null = null;
  showResult: boolean = false;
  notFound: boolean = false;
  // Hit counters by group
  groupCounters: { ALFA: number; BETA: number } = { ALFA: 0, BETA: 0 };
  // Phase completed by group (when reaching 2 hits)
  phaseCompleted: { ALFA: boolean; BETA: boolean } = { ALFA: false, BETA: false };
  // Phase message
  phaseMessage: string | null = null;

  constructor(private validationService: Validation, private router: Router) {}

  /**
   * Navigate back to home
   */
  goBack(): void {
    this.router.navigate(['/']);
  }

  /**
   * Validates user input
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
      console.log('showResult:', this.showResult, 'isCorrect:', result.isCorrect);
      // Update counters if answer is correct
      if (result.isCorrect) {
        const group = (result.groupName || '') as 'ALFA' | 'BETA';
        if (group === 'ALFA' || group === 'BETA') {
          if (!this.phaseCompleted[group]) {
            this.groupCounters[group]++;
            if (this.groupCounters[group] >= 2) {
              this.phaseCompleted[group] = true;
              this.phaseMessage = '¡You have successfully passed this phase!';
            } else {
              this.phaseMessage = null;
            }
          } else {
            // Already completed; keep the message
            this.phaseMessage = '¡You have successfully passed this phase!';
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
   * Clears the form
   */
  clearForm(): void {
    this.userInput = '';
    this.validationResult = null;
    this.showResult = false;
    this.notFound = false;
    // Do not reset counters when clearing input
  }

  /**
   * Gets the image route according to the result
   */
  getResultImage(): string {
    if (this.notFound) {
      return 'images/mensajeDeError.png';
    }

    if (!this.validationResult) {
      return '';
    }

    return this.validationResult.isCorrect
      ? 'images/mensajeCorrecto.png'
      : 'images/mensajeDeError.png';
  }
}
