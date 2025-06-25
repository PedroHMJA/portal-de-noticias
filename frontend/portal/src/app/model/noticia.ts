import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export class Noticia {
    id?: number;
    titulo?: string;
    corpo?: string;
    dataPublicacao?: string;
    imagem_url?: string;
    categoria?: Categoria;
    usuario?: Usuario; 
}
