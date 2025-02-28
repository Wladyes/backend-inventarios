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
exports.EmpresasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const empresa_entity_1 = require("./empresa.entity");
let EmpresasService = class EmpresasService {
    empresasRepository;
    constructor(empresasRepository) {
        this.empresasRepository = empresasRepository;
    }
    async findAll() {
        return this.empresasRepository.find({ relations: ['usuarios'] });
    }
    async findOne(id) {
        const empresa = await this.empresasRepository.findOne({
            where: { id_empresa: id },
            relations: ['usuarios'],
        });
        if (!empresa) {
            throw new common_1.NotFoundException(`Empresa con id ${id} no encontrada`);
        }
        return empresa;
    }
    async create(empresa) {
        return this.empresasRepository.save(empresa);
    }
    async update(id, empresa) {
        await this.empresasRepository.update(id, empresa);
        return this.findOne(id);
    }
    async remove(id) {
        await this.empresasRepository.delete(id);
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmpresasService);
//# sourceMappingURL=empresas.service.js.map