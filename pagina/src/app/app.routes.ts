import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CodeEntryComponent } from './components/code-entry/code-entry';
import { TeamAComponent } from './components/team-a/team-a';
import { TeamBComponent } from './components/team-b/team-b';
import { Validator } from './components/validator/validator';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'talk-to-villagers', component: CodeEntryComponent },
  { path: 'team-a', component: TeamAComponent },
  { path: 'team-b', component: TeamBComponent },
  { path: 'forest', component: Validator },
  { path: '**', redirectTo: '' }
];
