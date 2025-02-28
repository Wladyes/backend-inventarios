import { InventariosService } from './inventarios.service';
import { Inventario } from './inventario.entity';
export declare class InventariosController {
    private readonly inventariosService;
    constructor(inventariosService: InventariosService);
    findAll(): Promise<Inventario[]>;
    findOne(id: number): Promise<Inventario>;
    create(inventario: Inventario): Promise<Inventario>;
    update(id: number, inventario: Partial<Inventario>): Promise<Inventario>;
    remove(id: number): Promise<void>;
}
