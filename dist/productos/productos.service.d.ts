import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
export declare class ProductosService {
    private productosRepository;
    constructor(productosRepository: Repository<Producto>);
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    create(producto: Producto): Promise<Producto>;
    update(id: number, producto: Partial<Producto>): Promise<Producto>;
    remove(id: number): Promise<void>;
}
