import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../core/services/categoria.service';

@Component({
  selector: 'app-nav-categoria',
  imports: [],
  templateUrl: './nav-categoria.component.html',
  styleUrl: './nav-categoria.component.scss',
})
export class NavCategoriaComponent implements OnInit {
  categorias!: any[];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategoria().subscribe({
      next: (res) => (this.categorias = res),
      error: (err) => console.error(err),
    });
  }
}
