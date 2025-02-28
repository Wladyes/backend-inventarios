import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientoInventario } from './movimiento-inventario.entity';
export declare class MovimientosInventarioController {
    private readonly movimientosInventarioService;
    constructor(movimientosInventarioService: MovimientosInventarioService);
    findAll(): Promise<MovimientoInventario[]>;
    findOne(id: number): Promise<MovimientoInventario>;
    create(movimiento: MovimientoInventario): Promise<MovimientoInventario>;
    update(id: number, movimiento: Partial<MovimientoInventario>): Promise<MovimientoInventario>;
    remove(id: number): Promise<void>;
}
