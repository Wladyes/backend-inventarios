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
exports.Inventario = void 0;
const typeorm_1 = require("typeorm");
const empresa_entity_1 = require("../empresas/empresa.entity");
const movimiento_inventario_entity_1 = require("../movimientos-inventario/movimiento-inventario.entity");
let Inventario = class Inventario {
    id_inventario;
    empresa;
    fecha_actualizacion;
    movimientos;
    estado;
};
exports.Inventario = Inventario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inventario.prototype, "id_inventario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.inventarios),
    __metadata("design:type", empresa_entity_1.Empresa)
], Inventario.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], Inventario.prototype, "fecha_actualizacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movimiento_inventario_entity_1.MovimientoInventario, (movimiento) => movimiento.inventario),
    __metadata("design:type", Array)
], Inventario.prototype, "movimientos", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Inventario.prototype, "estado", void 0);
exports.Inventario = Inventario = __decorate([
    (0, typeorm_1.Entity)('inventario')
], Inventario);
//# sourceMappingURL=inventario.entity.js.map