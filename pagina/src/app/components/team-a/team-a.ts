import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-a.html',
  styleUrls: ['./team-a.css']
})
export class TeamAComponent {
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
