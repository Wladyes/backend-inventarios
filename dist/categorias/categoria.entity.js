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
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("../productos/producto.entity");
const usuario_entity_1 = require("../usuarios/usuario.entity");
let Categoria = class Categoria {
    id_categoria;
    nombre;
    descripcion;
    fecha_creacion;
    productos;
    usuarios;
};
exports.Categoria = Categoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Categoria.prototype, "id_categoria", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Categoria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], Categoria.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => producto_entity_1.Producto, (producto) => producto.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "productos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_entity_1.Usuario, (usuario) => usuario.categorias),
    __metadata("design:type", Array)
], Categoria.prototype, "usuarios", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)('categoria')
], Categoria);
//# sourceMappingURL=categoria.entity.js.map