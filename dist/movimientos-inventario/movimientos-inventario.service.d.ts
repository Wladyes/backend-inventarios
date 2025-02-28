import { Repository } from 'typeorm';
import { MovimientoInventario } from './movimiento-inventario.entity';
export declare class MovimientosInventarioService {
    private movimientoInventarioRepository;
    constructor(movimientoInventarioRepository: Repository<MovimientoInventario>);
    findAll(): Promise<MovimientoInventario[]>;
    findOne(id: number): Promise<MovimientoInventario>;
    create(movimiento: MovimientoInventario): Promise<MovimientoInventario>;
    update(id: number, movimiento: Partial<MovimientoInventario>): Promise<MovimientoInventario>;
    remove(id: number): Promise<void>;
}
