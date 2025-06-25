import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../core/services/noticia.service';
import { CommonModule } from '@angular/common';
import { Noticia } from '../../model/noticia';


@Component({
  selector: 'app-noticia',
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.scss'
})
export class NoticiaComponent implements OnInit {
    noticia?: Noticia;
  
    constructor(private noticiaService: NoticiaService){}
  
    ngOnInit(): void {
        this.noticiaService.getNoticia(1).subscribe({
          next: (res) => this.noticia = res,
          error: (err) => console.error(err), 
        });
    }
}
