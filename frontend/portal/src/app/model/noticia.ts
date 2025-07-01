import { Categoria } from './categoria';
import { Usuario } from './usuario';

export class Noticia {
  id?: number;
  titulo?: string;
  corpo?: string;
  dataPublicacao?: string;
  imagem_url?: string;
  categoria?: Categoria;
  usuario?: Usuario;

  constructor(
    id?: number,
    titulo?: string,
    corpo?: string,
    dataPublicacao?: Date,
    imagem_url?: string,
    categoria?: Categoria,
    usuario?: Usuario
  ) {}

  static fromJson(json: any): Noticia {
    return new Noticia(
      json.id,
      json.titulo,
      json.corpo,
      new Date(json.dataPublicacao)
    );
  }
}
