CREATE VIEW `ViewCompras` AS SELECT
c.cedula,
c.nombre AS 'Nombre Cliente',
v.id,
v.fecha,
co.producto,
p.codigo,
p.nombre,
co.precio_unitario,
co.cantidad,
co.precio 
FROM
	clientes c,
	ventas v,
	compras co,
	productos p 
WHERE
	c.cedula = v.cliente 
	AND v.id = co.venta 
	AND co.producto = p.id 
GROUP BY
	`c`.`cedula`,
	`v`.`id`,
	`co`.`producto`;
	
CREATE VIEW `ViewVentas` AS SELECT
c.cedula,
c.nombre AS 'Nombre Cliente',
v.id,
v.fecha,
sum( co.precio ) 
FROM
	clientes c,
	ventas v,
	compras co,
	productos p 
WHERE
	c.cedula = v.cliente 
	AND v.id = co.venta 
	AND co.producto = p.id 
GROUP BY
	`c`.`cedula`,
	`v`.`id`;