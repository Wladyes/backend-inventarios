import { EmpresasService } from './empresas.service';
import { Empresa } from './empresa.entity';
export declare class EmpresasController {
    private readonly empresasService;
    constructor(empresasService: EmpresasService);
    findAll(): Promise<Empresa[]>;
    findOne(id: number): Promise<Empresa>;
    create(empresa: Empresa): Promise<Empresa>;
    update(id: number, empresa: Partial<Empresa>): Promise<Empresa>;
    remove(id: number): Promise<void>;
}
