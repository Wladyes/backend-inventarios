# 📦 GestionInventarios

**GestionInventarios** es un backend desarrollado con **NestJS** y **TypeORM** para la gestión de inventarios de empresas. Incluye módulos para manejar empresas, usuarios, roles, categorías, productos, inventarios y movimientos de inventario.

---

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Dependencias Instaladas](#dependencias-instaladas)
- [Contribuciones](#contribuciones)
- [Notas Importantes](#notas-importantes)

---

## Características

### Gestión de Empresas y Usuarios
- Registro y autenticación de usuarios.
- Gestión de roles y permisos.
- Asociación de usuarios a empresas.

### Gestión de Inventarios
- Creación y actualización de productos.
- Manejo de movimientos de inventario (entradas, salidas, ajustes).
- Control de stock y reportes.

### Seguridad y Validaciones
- Validación de datos de entrada con **DTOs**.
- Middleware de autenticación con **JWT**.
- Restricción de accesos según roles.

---

## Instalación

Sigue estos pasos para ejecutar el backend en tu entorno local:

1. **Clona el repositorio**:
   ```sh
   git clone https://github.com/tu-usuario/gestion-inventarios.git
   ```

2. **Navega al directorio del proyecto**:
   ```sh
   cd gestion-inventarios/backend
   ```

3. **Instala las dependencias**:
   ```sh
   npm install
   ```

4. **Configura la base de datos en `.env`**:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASS=tu_contraseña
   DB_NAME=gestion_inventarios
   ```

5. **Inicia el servidor**:
   ```sh
   npm run start
   ```

---

## Estructura del Proyecto

```plaintext
backend/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── modules/
│   │   ├── empresas/
│   │   ├── usuarios/
│   │   ├── roles/
│   │   ├── categorias/
│   │   ├── productos/
│   │   ├── inventarios/
│   │   ├── movimientos-inventario/
│   ├── common/
│   ├── database/
├── test/
├── package.json
├── nest-cli.json
└── tsconfig.json
```

---

## Tecnologías Utilizadas

- **NestJS** - Framework backend en Node.js.
- **TypeORM** - ORM para bases de datos relacionales.
- **MySQL** - Base de datos utilizada.
- **JWT** - Autenticación segura.
- **Class-validator** - Validación de datos de entrada.

---

## Dependencias Instaladas

### Dependencias Principales

- `@nestjs/common`
- `@nestjs/core`
- `@nestjs/typeorm`
- `mysql2`
- `jsonwebtoken`
- `bcryptjs`

### Dependencias de Desarrollo

- `@nestjs/cli`
- `typescript`
- `ts-node`

---

## Contribuciones

- **Wladymir Escobar** - Desarrollador Frontend\  
  Email: [gwescobar@espe.edu.ec](mailto:gwescobar@espe.edu.ec)
- **Margarita Fajardo** - Desarrolladora Backend\  
  Email: [mcfajardo1@espe.edu.ec](mailto:mcfajardo1@espe.edu.ec)
- **Sandy Mariño** - Gestora de Proyecto\  
  Email: [sjmarino1@espe.edu.ec](mailto:sjmarino1@espe.edu.ec)

---

## Notas Importantes

### Seguridad de Contraseñas
- Las contraseñas se cifran utilizando **bcryptjs** antes de almacenarse.
- Implementación de política de contraseñas seguras.

### Base de Datos
- La conexión a la base de datos debe configurarse en `.env`.
- Se recomienda crear migraciones antes de realizar cambios en la estructura.

### Buenas Prácticas
- Utilizar DTOs para validar los datos de entrada.
- Implementar logs para monitoreo de la API.
- Seguir los principios SOLID en el desarrollo de módulos.

💡 **Después de hacer esto, el backend estará listo para ejecutarse correctamente.** 🚀

