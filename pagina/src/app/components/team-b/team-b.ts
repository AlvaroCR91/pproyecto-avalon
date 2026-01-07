import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-b.html',
  styleUrls: ['./team-b.css']
})
export class TeamBComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(private router: Router) {}

  playAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.play();
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
