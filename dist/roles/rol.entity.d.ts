import { Usuario } from '../usuarios/usuario.entity';
export declare class Rol {
    id_rol: number;
    nombre: string;
    descripcion: string;
    usuarios: Usuario[];
}
