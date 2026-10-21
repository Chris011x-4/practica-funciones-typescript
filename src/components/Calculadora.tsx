export const Calculadora = () => {
  // Suma dos numeros
  const sumar = (a: number, b: number): number => a + b;
  // Resta dos numeros
  const restar = (a: number, b: number): number => a - b;
  // Multiplica dos numeros
  const multiplicar = (a: number, b: number): number => a * b;
  // Divide dos numeros (retorna 0 si el divisor es 0)
  const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

  const a = 15;
  const b = 4;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Calculadora</h3>
      <p>{a} + {b} = {sumar(a, b)}</p>
      <p>{a} - {b} = {restar(a, b)}</p>
      <p>{a} x {b} = {multiplicar(a, b)}</p>
      <p>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
      <p>{a} ÷ 0 = {dividir(15, 0)}</p>
    </div>
  );
};