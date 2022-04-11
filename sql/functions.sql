DELIMITER $$

CREATE FUNCTION calcularPrecio(
	precio_unitario DECIMAL(10, 2),
	cantidad INT
)
RETURNS DECIMAL(12, 2)
DETERMINISTIC
BEGIN
	RETURN cantidad*precio_unitario;
END$$

