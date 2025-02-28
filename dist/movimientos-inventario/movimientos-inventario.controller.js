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
exports.MovimientosInventarioController = void 0;
const common_1 = require("@nestjs/common");
const movimientos_inventario_service_1 = require("./movimientos-inventario.service");
const movimiento_inventario_entity_1 = require("./movimiento-inventario.entity");
let MovimientosInventarioController = class MovimientosInventarioController {
    movimientosInventarioService;
    constructor(movimientosInventarioService) {
        this.movimientosInventarioService = movimientosInventarioService;
    }
    async findAll() {
        return this.movimientosInventarioService.findAll();
    }
    async findOne(id) {
        return this.movimientosInventarioService.findOne(id);
    }
    async create(movimiento) {
        return this.movimientosInventarioService.create(movimiento);
    }
    async update(id, movimiento) {
        return this.movimientosInventarioService.update(id, movimiento);
    }
    async remove(id) {
        return this.movimientosInventarioService.remove(id);
    }
};
exports.MovimientosInventarioController = MovimientosInventarioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovimientosInventarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovimientosInventarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movimiento_inventario_entity_1.MovimientoInventario]),
    __metadata("design:returntype", Promise)
], MovimientosInventarioController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MovimientosInventarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovimientosInventarioController.prototype, "remove", null);
exports.MovimientosInventarioController = MovimientosInventarioController = __decorate([
    (0, common_1.Controller)('movimientos-inventario'),
    __metadata("design:paramtypes", [movimientos_inventario_service_1.MovimientosInventarioService])
], MovimientosInventarioController);
//# sourceMappingURL=movimientos-inventario.controller.js.map