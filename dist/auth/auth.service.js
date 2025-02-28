"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const usuario_entity_1 = require("../usuarios/usuario.entity");
const empresa_entity_1 = require("../empresas/empresa.entity");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    usuariosService;
    jwtService;
    constructor(usuariosService, jwtService) {
        this.usuariosService = usuariosService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.usuariosService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        const payload = { sub: user.id_usuario, email: user.email };
        return this.jwtService.sign(payload);
    }
    async register(email, password, nombre_completo) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = new usuario_entity_1.Usuario();
        nuevoUsuario.email = email;
        nuevoUsuario.password = hashedPassword;
        nuevoUsuario.nombre_completo = nombre_completo;
        nuevoUsuario.telefono = '0000000000';
        nuevoUsuario.estado = 'activo';
        nuevoUsuario.fecha_creacion = new Date();
        nuevoUsuario.ultima_conexion = new Date();
        nuevoUsuario.empresa = new empresa_entity_1.Empresa();
        nuevoUsuario.roles = [];
        return this.usuariosService.create(nuevoUsuario);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map