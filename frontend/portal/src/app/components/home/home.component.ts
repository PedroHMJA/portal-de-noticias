import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NoticiaComponent } from '../noticia/noticia.component';
import { NavCategoriaComponent } from '../nav-categoria/nav-categoria.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NoticiaComponent, NavCategoriaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {


}
