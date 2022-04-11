-- Inserción de clientes
INSERT INTO clientes
VALUES
	( '35039204', 'Jack Holland' );
INSERT INTO clientes
VALUES
	( '3375252', 'Hakeem Medina' );
INSERT INTO clientes
VALUES
	( '21543320', 'Olivia Terrell' );
INSERT INTO clientes
VALUES
	( '2505913', 'Lewis Holden' );
INSERT INTO clientes
VALUES
	( '37662877', 'Porter Vance' );
-- Inserción de marcas

INSERT INTO marcas (nombre) VALUES ("WIX");
INSERT INTO marcas (nombre) VALUES ("Lee Martin");
INSERT INTO marcas (nombre) VALUES ("Helix");
INSERT INTO marcas (nombre) VALUES ("Mobil");
INSERT INTO marcas (nombre) VALUES ("Valvoline");
INSERT INTO marcas (nombre) VALUES ("INCA");
INSERT INTO marcas (nombre) VALUES ("Castrol");
INSERT INTO marcas (nombre) VALUES ("Shell");
INSERT INTO marcas (nombre) VALUES ("Sky");
-- Inserción de telefonos
INSERT INTO telefonos(cliente, telefono) VALUES ('35039204', '036-748-6554');
INSERT INTO telefonos(cliente, telefono) VALUES ('3375252', '023-746-9721');
INSERT INTO telefonos(cliente, telefono) VALUES ('21543320', '011-248-2578');
INSERT INTO telefonos(cliente, telefono) VALUES ('2505913', '000-573-0358');
INSERT INTO telefonos(cliente, telefono) VALUES ('37662877', '063-385-6661');
INSERT INTO telefonos(cliente, telefono) VALUES ('37662877', '0412-582-9555');
-- Inserción de ventas
INSERT INTO ventas(id, cliente, fecha) VALUES (1,'35039204', '2021-06-20 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (2,'3375252', '2022-04-25 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (3,'21543320', '2022-04-09 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (4,'37662877', '2022-12-21 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (5,'2505913', '2023-02-02 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (6,'35039204', '2021-04-15 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (7,'37662877', '2022-09-29 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (8,'2505913', '2023-02-28 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (9,'21543320', '2021-12-01 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (10,'2505913', '2021-07-19 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (11,'2505913', '2021-09-09 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (12,'2505913', '2021-12-23 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (13,'3375252', '2022-04-29 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (14,'35039204', '2021-01-26 00:00:00');
INSERT INTO ventas(id, cliente, fecha) VALUES (15,'35039204', '2021-12-19 00:00:00');
-- Inserción productos
INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '42329', 'Aire Automotriz Panel Flexible', NULL, 'Filtro de aire', 15, 1, 29.65 );


INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '42612', 'Aire Automotriz Panel Rígido', NULL, 'Filtro de aire', 15, 4, 15.2 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '51133', 'Aceite Industrial Cartucho', 'EXCAVADORAS CASE / CASE-IH. Modelo: 1080B Crawler. Motor: Detroit Diesel. MAQUINARIAS CLARK EQUIPMENT. Modelo: 880. Motor: Detroit Diesel 8V-71. EXCAVADORAS HITACHI. Modelo: UH14. Motor: Detroit Diesel 6-71. CAMIONES MACK. Modelo: RD700. Motor: V8 12L 763 CID Detroit Diesel 8V-92. Compresores Westinghouse, Fiat, Case', 'Aceite de motor', 12, 3, 32.8 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '51138', 'Aceite Industrial Cartucho', 'EQUIPOS CASE / CASE-IH. Modelo: 300SK. Motor: Detroit Diesel 3-53.
 EQUIPOS CATERPILLAR. Modelo: CB514 6YD-on. Motor: Detroit Diesel 3-53. MAQUINARIAS CLARK EQUIPMENT. Modelo: 665D. Motor: Detroit Diesel 3-53. Detroitl Diesel, G.M.C. PF-147', 'Aceite de motor', 16, 3, 36.6 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '51602', 'Aceite Industrial Unidad Sellada', 'MAQUINARIAS CASE / CASE-IH. Modelo: 602BD. Motor: Cummins 4B3.9. EXCAVADORAS HYUNDAI. Modelo: R120W. Motor: Cummins 4BTA3.9. EXCAVADORAS KOBELCO. Modelo: ED180 Blade Runner. EXCAVADORAS NEW HOLLAND. Modelo: EC130. Motor: Cummins 3.9L. Motor:Cummins 4BT3.9. Camiones Ford Cargo 815. Motores Case, Cummins, Agco, Komatsu, Dresser, Grove', 'Aceite de motor', 2, 1, 32.9);

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '42729', 'Aire  Radial ', 'Chevrolet TrailBlazer 6L 4,3L (02-08) y V8 5,3L (02-08) ', 'Filtro de aire', 0, 5, 90.8 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( 'GASSL20W50CJ', 'INCA SL SAE 20W50 1/4 GALON', NULL, 'Aceite de motor', 6, 9, 7.5 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( 'GASAKSL25W60CJ', 'SHELL ALTO KILOMETRAJE SAE 25W60  1/4 GALON', NULL, 'Aceite de motor', 22, 8, 25.9 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( 'I57064', 'ACEITE AUTOMOTRIZ 51348//51374//951041//PL348//PL374', NULL, 'Aceite de motor', 30, 7, 15.9 );

	INSERT INTO `inventario-jl1290`.`productos` ( `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( '951397', 'ACEITE AUTOMOTRIZ 951397//PL397', NULL, 'Aceite de motor', 56, 4, 30 );
INSERT INTO `inventario-jl1290`.`productos` ( `id`, `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( 3, 'OS-57099', 'ACEITE AUTOMOTRIZ 59915', NULL, 'Filtro de aceite', 5, 4, 15.20 );
INSERT INTO `inventario-jl1290`.`productos` ( `id`, `codigo`, `nombre`, `descripcion`, `tipo`, `disponible`, `marca`, `precio` )
VALUES
	( 4, 'I51785', 'Aire Automotriz Panel Rígido', NULL, 'Filtro de aceite', 10, 8, 15.20 );

-- Inserción de ubicaciones

INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (1, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (1, 'Estudio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (2, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (2, 'Estudio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (2, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (3, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (4, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (4, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (5, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (5, 'Cuarto');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (6, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (6, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (7, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (7, 'Cuarto');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (7, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (8, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (9, 'Cuarto');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (9, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (10, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (10, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (11, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (12, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (12, 'Cuarto');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (12, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (13, 'Patio');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (13, 'Cuarto');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (13, 'Casa de Ángel');
INSERT INTO `inventario-jl1290`.`ubicaciones`(`producto`, `ubicacion`) VALUES (2, 'Patio');

