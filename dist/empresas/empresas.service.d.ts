import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
export declare class EmpresasService {
    private empresasRepository;
    constructor(empresasRepository: Repository<Empresa>);
    findAll(): Promise<Empresa[]>;
    findOne(id: number): Promise<Empresa>;
    create(empresa: Empresa): Promise<Empresa>;
    update(id: number, empresa: Partial<Empresa>): Promise<Empresa>;
    remove(id: number): Promise<void>;
}
