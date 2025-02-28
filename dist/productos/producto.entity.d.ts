import { Categoria } from '../categorias/categoria.entity';
import { Empresa } from '../empresas/empresa.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';
import { Usuario } from '../usuarios/usuario.entity';
export declare class Producto {
    id_producto: number;
    codigo_barras: string;
    nombre: string;
    descripcion: string;
    categoria: Categoria;
    precio_compra: number;
    precio_venta: number;
    movimientosInventario: MovimientoInventario[];
    usuarios: Usuario[];
    empresa: Empresa;
}
