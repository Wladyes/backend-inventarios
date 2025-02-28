import { RolesService } from './roles.service';
import { Rol } from './rol.entity';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    create(rol: Rol): Promise<Rol>;
    update(id: number, rol: Partial<Rol>): Promise<Rol>;
    remove(id: number): Promise<void>;
}
