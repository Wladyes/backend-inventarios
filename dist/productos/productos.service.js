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
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const producto_entity_1 = require("./producto.entity");
let ProductosService = class ProductosService {
    productosRepository;
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    async findAll() {
        return await this.productosRepository.find({
            relations: ['categoria', 'empresa', 'proveedor', 'movimientosInventario'],
        });
    }
    async findOne(id) {
        const producto = await this.productosRepository.findOne({
            where: { id_producto: id },
            relations: ['categoria', 'empresa', 'proveedor', 'movimientosInventario'],
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${id} no encontrado`);
        }
        return producto;
    }
    async create(producto) {
        return await this.productosRepository.save(producto);
    }
    async update(id, producto) {
        await this.productosRepository.update(id, producto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.productosRepository.delete(id);
    }
};
exports.ProductosService = ProductosService;
exports.ProductosService = ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entity_1.Producto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductosService);
//# sourceMappingURL=productos.service.js.map