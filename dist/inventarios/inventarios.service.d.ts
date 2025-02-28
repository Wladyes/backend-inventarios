import { Repository } from 'typeorm';
import { Inventario } from './inventario.entity';
export declare class InventariosService {
    private inventariosRepository;
    constructor(inventariosRepository: Repository<Inventario>);
    findAll(): Promise<Inventario[]>;
    findOne(id: number): Promise<Inventario>;
    create(inventario: Inventario): Promise<Inventario>;
    update(id: number, inventario: Partial<Inventario>): Promise<Inventario>;
    remove(id: number): Promise<void>;
}
