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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const empresa_entity_1 = require("../empresas/empresa.entity");
const rol_entity_1 = require("../roles/rol.entity");
const movimiento_inventario_entity_1 = require("../movimientos-inventario/movimiento-inventario.entity");
const producto_entity_1 = require("../productos/producto.entity");
const categoria_entity_1 = require("../categorias/categoria.entity");
let Usuario = class Usuario {
    id_usuario;
    nombre_completo;
    email;
    telefono;
    estado;
    fecha_creacion;
    ultima_conexion;
    password;
    empresa;
    roles;
    movimientosInventario;
    productos;
    categorias;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre_completo", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_creacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", Date)
], Usuario.prototype, "ultima_conexion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.usuarios, { nullable: true }),
    __metadata("design:type", Object)
], Usuario.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => rol_entity_1.Rol),
    (0, typeorm_1.JoinTable)({
        name: 'usuario_rol',
        joinColumn: { name: 'id_usuario', referencedColumnName: 'id_usuario' },
        inverseJoinColumn: { name: 'id_rol', referencedColumnName: 'id_rol' },
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => movimiento_inventario_entity_1.MovimientoInventario, (movimientoInventario) => movimientoInventario.usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "movimientosInventario", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => producto_entity_1.Producto, (producto) => producto.usuarios),
    (0, typeorm_1.JoinTable)({
        name: 'usuario_producto',
        joinColumn: { name: 'id_usuario', referencedColumnName: 'id_usuario' },
        inverseJoinColumn: { name: 'id_producto', referencedColumnName: 'id_producto' },
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "productos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => categoria_entity_1.Categoria, (categoria) => categoria.usuarios),
    (0, typeorm_1.JoinTable)({
        name: 'usuario_categoria',
        joinColumn: { name: 'id_usuario', referencedColumnName: 'id_usuario' },
        inverseJoinColumn: { name: 'id_categoria', referencedColumnName: 'id_categoria' },
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "categorias", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuario')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map