import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal';
}
