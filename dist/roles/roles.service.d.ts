import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Rol>);
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    create(rol: Rol): Promise<Rol>;
    update(id: number, rol: Partial<Rol>): Promise<Rol>;
    remove(id: number): Promise<void>;
}
