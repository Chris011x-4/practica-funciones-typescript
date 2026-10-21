export const CarritoCompras = () => {
  // Calcula el subtotal multiplicando precio por cantidad
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;
  // Calcula el IVA del 16% sobre el subtotal
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;
  // Calcula el total sumando el subtotal y el IVA
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);
  // Formatea un numero como precio con string $X.XX
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito = [
    { producto: "Laptop", precio: 15000, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 }
  ];

  const subtotalGeneral = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Carrito de Compras</h3>
      {carrito.map((item, index) => (
        <p key={index}>
          {item.producto} x{item.cantidad} = {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}
        </p>
      ))}
      <hr className="my-2" />
      <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotalGeneral))}</p>
      <p><strong>Total: {formatearPrecio(calcularTotal(subtotalGeneral))}</strong></p>
    </div>
  );
};