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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
let UsuariosService = class UsuariosService {
    usuariosRepository;
    constructor(usuariosRepository) {
        this.usuariosRepository = usuariosRepository;
    }
    async findAll() {
        return await this.usuariosRepository.find({ relations: ['empresa', 'roles'] });
    }
    async findOne(id) {
        const usuario = await this.usuariosRepository.findOne({
            where: { id_usuario: id },
            relations: ['empresa', 'roles'],
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con id ${id} no encontrado`);
        }
        return usuario;
    }
    async findByEmail(email) {
        return await this.usuariosRepository.findOne({
            where: { email },
            relations: ['empresa', 'roles'],
        });
    }
    async create(usuario) {
        return await this.usuariosRepository.save(usuario);
    }
    async update(id, usuario) {
        await this.usuariosRepository.update(id, usuario);
        return this.findOne(id);
    }
    async remove(id) {
        await this.usuariosRepository.delete(id);
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map