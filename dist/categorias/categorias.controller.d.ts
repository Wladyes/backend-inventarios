import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(id: number, categoria: Partial<Categoria>): Promise<Categoria>;
    remove(id: number): Promise<void>;
}
