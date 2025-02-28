import { Usuario } from '../usuarios/usuario.entity';
import { Producto } from '../productos/producto.entity';
import { Inventario } from '../inventarios/inventario.entity';
export declare class Empresa {
    id_empresa: number;
    nombre: string;
    ruc: string;
    direccion: string;
    telefono: string;
    email_contacto: string;
    sector: string;
    fecha_creacion: Date;
    estado: string;
    usuarios: Usuario[];
    productos: Producto[];
    inventarios: Inventario[];
}
