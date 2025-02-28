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
exports.InventariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const inventario_entity_1 = require("./inventario.entity");
let InventariosService = class InventariosService {
    inventariosRepository;
    constructor(inventariosRepository) {
        this.inventariosRepository = inventariosRepository;
    }
    async findAll() {
        return await this.inventariosRepository.find({
            relations: ['empresa', 'movimientos'],
        });
    }
    async findOne(id) {
        const inventario = await this.inventariosRepository.findOne({
            where: { id_inventario: id },
            relations: ['empresa', 'movimientos'],
        });
        if (!inventario) {
            throw new common_1.NotFoundException(`Inventario con id ${id} no encontrado`);
        }
        return inventario;
    }
    async create(inventario) {
        return await this.inventariosRepository.save(inventario);
    }
    async update(id, inventario) {
        await this.inventariosRepository.update(id, inventario);
        return this.findOne(id);
    }
    async remove(id) {
        await this.inventariosRepository.delete(id);
    }
};
exports.InventariosService = InventariosService;
exports.InventariosService = InventariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inventario_entity_1.Inventario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InventariosService);
//# sourceMappingURL=inventarios.service.js.map