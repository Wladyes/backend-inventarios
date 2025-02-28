import { Empresa } from '../empresas/empresa.entity';
import { Rol } from '../roles/rol.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';
import { Producto } from '../productos/producto.entity';
import { Categoria } from '../categorias/categoria.entity';
export declare class Usuario {
    id_usuario: number;
    nombre_completo: string;
    email: string;
    telefono: string;
    estado: string;
    fecha_creacion: Date;
    ultima_conexion: Date;
    password_hash: string;
    empresa: Empresa;
    roles: Rol[];
    movimientosInventario: MovimientoInventario[];
    productos: Producto[];
    categorias: Categoria[];
}
