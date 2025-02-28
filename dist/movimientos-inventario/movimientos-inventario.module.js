"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientosInventarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movimientos_inventario_service_1 = require("./movimientos-inventario.service");
const movimientos_inventario_controller_1 = require("./movimientos-inventario.controller");
const movimiento_inventario_entity_1 = require("./movimiento-inventario.entity");
const producto_entity_1 = require("../productos/producto.entity");
const inventario_entity_1 = require("../inventarios/inventario.entity");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let MovimientosInventarioModule = class MovimientosInventarioModule {
};
exports.MovimientosInventarioModule = MovimientosInventarioModule;
exports.MovimientosInventarioModule = MovimientosInventarioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([movimiento_inventario_entity_1.MovimientoInventario, producto_entity_1.Producto, inventario_entity_1.Inventario, usuario_entity_1.Usuario])],
        providers: [movimientos_inventario_service_1.MovimientosInventarioService],
        controllers: [movimientos_inventario_controller_1.MovimientosInventarioController],
        exports: [movimientos_inventario_service_1.MovimientosInventarioService],
    })
], MovimientosInventarioModule);
//# sourceMappingURL=movimientos-inventario.module.js.map