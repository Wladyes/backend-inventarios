"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const empresas_module_1 = require("./empresas/empresas.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const roles_module_1 = require("./roles/roles.module");
const categorias_module_1 = require("./categorias/categorias.module");
const productos_module_1 = require("./productos/productos.module");
const inventarios_module_1 = require("./inventarios/inventarios.module");
const movimientos_inventario_module_1 = require("./movimientos-inventario/movimientos-inventario.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1977',
                database: 'gestion_inventarios',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            empresas_module_1.EmpresasModule,
            usuarios_module_1.UsuariosModule,
            roles_module_1.RolesModule,
            categorias_module_1.CategoriasModule,
            productos_module_1.ProductosModule,
            inventarios_module_1.InventariosModule,
            movimientos_inventario_module_1.MovimientosInventarioModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map