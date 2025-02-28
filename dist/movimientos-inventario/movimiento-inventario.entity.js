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
exports.MovimientoInventario = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("../productos/producto.entity");
const inventario_entity_1 = require("../inventarios/inventario.entity");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let MovimientoInventario = class MovimientoInventario {
    id_movimiento;
    producto;
    inventario;
    tipo_movimiento;
    cantidad;
    fecha_movimiento;
    motivo;
    usuario;
    costo_unitario;
    ubicacion;
};
exports.MovimientoInventario = MovimientoInventario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MovimientoInventario.prototype, "id_movimiento", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entity_1.Producto, (producto) => producto.movimientosInventario),
    __metadata("design:type", producto_entity_1.Producto)
], MovimientoInventario.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inventario_entity_1.Inventario, (inventario) => inventario.movimientos),
    __metadata("design:type", inventario_entity_1.Inventario)
], MovimientoInventario.prototype, "inventario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovimientoInventario.prototype, "tipo_movimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MovimientoInventario.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], MovimientoInventario.prototype, "fecha_movimiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovimientoInventario.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.movimientosInventario),
    __metadata("design:type", usuario_entity_1.Usuario)
], MovimientoInventario.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], MovimientoInventario.prototype, "costo_unitario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MovimientoInventario.prototype, "ubicacion", void 0);
exports.MovimientoInventario = MovimientoInventario = __decorate([
    (0, typeorm_1.Entity)('movimiento_inventario')
], MovimientoInventario);
//# sourceMappingURL=movimiento-inventario.entity.js.map