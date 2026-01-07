import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-code-entry',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './code-entry.html',
  styleUrls: ['./code-entry.css']
})
export class CodeEntryComponent {
  code = signal('');
  error = signal('');

  constructor(private router: Router) {}

  submitCode() {
    const enteredCode = this.code().trim();

    if (enteredCode === 'Alpha21') {
      this.router.navigate(['/team-a']);
    } else if (enteredCode === 'Beta32') {
      this.router.navigate(['/team-b']);
    } else {
      this.error.set('Invalid code. Please try again.');
      this.code.set('');
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.submitCode();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
