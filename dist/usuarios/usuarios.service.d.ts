import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuariosService {
    private usuariosRepository;
    constructor(usuariosRepository: Repository<Usuario>);
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario>;
    create(usuario: Usuario): Promise<Usuario>;
    update(id: number, usuario: Partial<Usuario>): Promise<Usuario>;
    remove(id: number): Promise<void>;
}
