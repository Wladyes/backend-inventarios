// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasModule } from './empresas/empresas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { MovimientosInventarioModule } from './movimientos-inventario/movimientos-inventario.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1977',
      database: 'gestion_inventarios',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }),
    EmpresasModule,
    UsuariosModule,
    RolesModule,
    CategoriasModule,
    ProductosModule,
    InventariosModule,
    MovimientosInventarioModule,


  ],
  controllers: [],
  providers: [],


})
export class AppModule {}
