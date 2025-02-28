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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const categoria_entity_1 = require("./categoria.entity");
let CategoriasService = class CategoriasService {
    categoriasRepository;
    constructor(categoriasRepository) {
        this.categoriasRepository = categoriasRepository;
    }
    async findAll() {
        return await this.categoriasRepository.find({ relations: ['productos'] });
    }
    async findOne(id) {
        const categoria = await this.categoriasRepository.findOne({
            where: { id_categoria: id },
            relations: ['productos'],
        });
        if (!categoria) {
            throw new common_1.NotFoundException(`Categoría con id ${id} no encontrada`);
        }
        return categoria;
    }
    async create(categoria) {
        return await this.categoriasRepository.save(categoria);
    }
    async update(id, categoria) {
        await this.categoriasRepository.update(id, categoria);
        return this.findOne(id);
    }
    async remove(id) {
        await this.categoriasRepository.delete(id);
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map