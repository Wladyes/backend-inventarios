import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
export declare class CategoriasService {
    private categoriasRepository;
    constructor(categoriasRepository: Repository<Categoria>);
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(id: number, categoria: Partial<Categoria>): Promise<Categoria>;
    remove(id: number): Promise<void>;
}
