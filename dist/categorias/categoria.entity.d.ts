import { Producto } from '../productos/producto.entity';
import { Usuario } from '../usuarios/usuario.entity';
export declare class Categoria {
    id_categoria: number;
    nombre: string;
    descripcion: string;
    fecha_creacion: Date;
    productos: Producto[];
    usuarios: Usuario[];
}
