export const AplicadorDescuentos = () => {
  // Funcion de orden superior que aplica una funcion de descuento al precio
  const aplicarDescuento = (precio: number, calcularDescuentoFn: (p: number) => number): number => {
    return precio - calcularDescuentoFn(precio);
  };

  // Descuento del 10%
  const descuento10 = (p: number): number => p * 0.10;
  // Descuento del 25%
  const descuento25 = (p: number): number => p * 0.25;
  // Descuento de estudiante del 15%
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Aplicador de Descuentos</h3>
      <p>Precio original: ${precio}</p>
      <p>Con 10% off: ${aplicarDescuento(precio, descuento10)}</p>
      <p>Con 25% off: ${aplicarDescuento(precio, descuento25)}</p>
      <p>Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}</p>
    </div>
  );
};