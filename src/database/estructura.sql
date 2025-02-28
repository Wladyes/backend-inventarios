base dedatos gestion_inventarios

CREATE DATABASE gestion_inventarios;
use gestion_inventarios;
--------------------
    

id_empresa	int	NO	PRI	auto_increment
nombre	varchar	NO		
ruc	varchar	NO		
direccion	varchar	NO		
telefono	varchar	NO		
email_contacto	varchar	NO		
sector	varchar	NO		
fecha_creacion	datetime	NO		
estado	varchar	NO		


-----------------
id_inventario	int	NO	PRI	auto_increment
fecha_actualizacion	datetime	NO		
estado	varchar	NO		
empresaIdEmpresa	int	YES	MUL	
---------------------------

id_movimiento	int	NO	PRI	auto_increment
cantidad	int	NO		
fecha_movimiento	datetime	NO		
costo_unitario	decimal	NO		
productoIdProducto	int	YES	MUL	
inventarioIdInventario	int	YES	MUL	
usuarioIdUsuario	int	YES	MUL	
tipo_movimiento	varchar	NO		
motivo	varchar	NO		
ubicacion	varchar	NO		

---------------------------------------

id_producto	int	NO	PRI	auto_increment
precio_compra	decimal	NO		
precio_venta	decimal	NO		
categoriaIdCategoria	int	YES	MUL	
empresaIdEmpresa	int	YES	MUL	
codigo_barras	varchar	NO	UNI	
nombre	varchar	NO		
descripcion	varchar	NO		

--------------------------------
id_rol	int	NO	PRI	auto_increment
nombre	varchar	NO		
descripcion	varchar	NO		

---------------------------------

id_rol	int	NO	PRI	auto_increment
nombre	varchar	NO		
descripcion	varchar	NO		


----------------------------

id_usuario	int	NO	PRI	auto_increment
fecha_creacion	datetime	NO		
ultima_conexion	datetime	YES		
password_hash	varchar	NO		
empresaIdEmpresa	int	YES	MUL	
nombre_completo	varchar	NO		
email	varchar	NO	UNI	
telefono	varchar	NO		
estado	varchar	NO		

-----------------------------------
id_categoria	int	NO	PRI	auto_increment
fecha_creacion	datetime	NO		
nombre	varchar	NO		
descripcion	varchar	NO		
