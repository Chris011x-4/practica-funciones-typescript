export const EstadisticasArreglo = () => {
  // Calcula el promedio de un arreglo de numeros
  const calcularPromedio = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    const suma = nums.reduce((acc, n) => acc + n, 0);
    return suma / nums.length;
  };

  // Encuentra el número mayor del arreglo
  const encontrarMaximo = (nums: number[]): number => Math.max(...nums);

  // Encuentra el número menor del arreglo
  const encontrarMinimo = (nums: number[]): number => Math.min(...nums);

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Estadísticas de Arreglo</h3>
      <p>Numeros: [{numeros.join(', ')}]</p>
      <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
      <p>Maximo: {encontrarMaximo(numeros)}</p>
      <p>Minimo: {encontrarMinimo(numeros)}</p>
    </div>
  );
};