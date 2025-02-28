import { ProductosService } from './productos.service';
import { Producto } from './producto.entity';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    create(producto: Producto): Promise<Producto>;
    update(id: number, producto: Partial<Producto>): Promise<Producto>;
    remove(id: number): Promise<void>;
}
