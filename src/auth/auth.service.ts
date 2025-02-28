import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/usuario.entity';
import { Empresa } from '../empresas/empresa.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<string | null> {
    const user = await this.usuariosService.findByEmail(email);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const payload = { sub: user.id_usuario, email: user.email };
    return this.jwtService.sign(payload);
  }

  async register(email: string, password: string, nombre_completo: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = new Usuario();
    nuevoUsuario.email = email;
    nuevoUsuario.password = hashedPassword;
    nuevoUsuario.nombre_completo = nombre_completo;
    nuevoUsuario.telefono = '0000000000'; // Valor por defecto
    nuevoUsuario.estado = 'activo'; // Valor por defecto
    nuevoUsuario.fecha_creacion = new Date();
    nuevoUsuario.ultima_conexion = new Date(); // ✅ En lugar de null, usa una fecha
    nuevoUsuario.empresa = new Empresa(); // ✅ Instancia vacía para evitar null
    nuevoUsuario.roles = []; // Ajusta si los roles son obligatorios

    return this.usuariosService.create(nuevoUsuario);
  }
}
