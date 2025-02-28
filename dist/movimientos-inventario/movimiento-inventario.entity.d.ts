import { Producto } from '../productos/producto.entity';
import { Inventario } from '../inventarios/inventario.entity';
import { Usuario } from '../usuarios/usuario.entity';
export declare class MovimientoInventario {
    id_movimiento: number;
    producto: Producto;
    inventario: Inventario;
    tipo_movimiento: string;
    cantidad: number;
    fecha_movimiento: Date;
    motivo: string;
    usuario: Usuario;
    costo_unitario: number;
    ubicacion: string;
}
