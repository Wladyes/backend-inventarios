import { Empresa } from '../empresas/empresa.entity';
import { MovimientoInventario } from '../movimientos-inventario/movimiento-inventario.entity';
export declare class Inventario {
    id_inventario: number;
    empresa: Empresa;
    fecha_actualizacion: Date;
    movimientos: MovimientoInventario[];
    estado: string;
}
