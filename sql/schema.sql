CREATE TABLE Clientes(
	cedula VARCHAR(15) NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	PRIMARY KEY ( cedula)
);

CREATE TABLE Telefonos(
	cliente VARCHAR(15) NOT NULL,
	telefono VARCHAR(15) NOT NULL,
	PRIMARY KEY (cliente,telefono),
	FOREIGN KEY (cliente) REFERENCES Clientes (cedula) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Ventas(
	id INT NOT NULL AUTO_INCREMENT,
	cliente VARCHAR(15) NOT NULL,
	fecha TIMESTAMP NOT NULL,
	PRIMARY KEY ( id),
	FOREIGN KEY (cliente) REFERENCES Clientes (cedula) ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Adelantos(
	venta INTEGER NOT NULL,
	fecha_adelanto TIMESTAMP NOT NULL,
	cantidad_adelanto DECIMAL(10,2) CHECK (cantidad_adelanto>=0) NOT NULL,
	PRIMARY KEY (venta,fecha_adelanto),
	FOREIGN KEY (venta) REFERENCES Ventas ( id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Marcas(
	 id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL UNIQUE,
	PRIMARY KEY (id)
);
CREATE TABLE Productos (
	id INT NOT NULL AUTO_INCREMENT,
	codigo VARCHAR ( 15 ) NOT NULL UNIQUE,
	nombre VARCHAR ( 100 ) NOT NULL,
	descripcion VARCHAR (250),
	tipo VARCHAR(30) NOT NULL CHECK (
	tipo IN ( 'Aceite de motor', 'Aceite de caja', 'Filtro de aire', 'Filtro de aceite', 'Refrigerante', 'Fuera de borda' )),
	disponible INTEGER CHECK ( disponible >= 0 ) NOT NULL,
	marca INTEGER NOT NULL,
	precio DECIMAL ( 10, 2 ) CHECK ( precio >= 0 ) NOT NULL,
	PRIMARY KEY ( id ),
	FOREIGN KEY ( marca ) REFERENCES Marcas ( id ) ON DELETE RESTRICT ON UPDATE CASCADE 
);
CREATE TABLE Ubicaciones (
	producto INTEGER NOT NULL,
	ubicacion VARCHAR ( 100 ) NOT NULL,
	PRIMARY KEY ( producto, ubicacion ),
	FOREIGN KEY ( producto ) REFERENCES Productos ( `id` ) ON DELETE CASCADE ON UPDATE CASCADE 
);
CREATE TABLE Compras (
	venta INTEGER NOT NULL,
	producto INTEGER NOT NULL,
	precio DECIMAL ( 10, 2 ) CHECK ( precio >= 0 ) NOT NULL,
	cantidad INTEGER CHECK ( cantidad > 0 ) NOT NULL,
	PRIMARY KEY ( producto, venta ),
	FOREIGN KEY ( producto ) REFERENCES Productos ( id ) ON DELETE RESTRICT ON UPDATE CASCADE,
FOREIGN KEY ( venta ) REFERENCES Ventas ( id ) ON DELETE CASCADE ON UPDATE CASCADE 
);


ALTER TABLE ubicaciones ADD CONSTRAINT CHECK(ubicacion IN ('Estudio','Patio','Cuarto','Casa de Ángel'));