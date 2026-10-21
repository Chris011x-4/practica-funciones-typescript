    export const SistemaCalificaciones = () => {
  // Calcula el promedio de un arreglo de calificaciones
  const calcularPromedio = (calificaciones: number[]): number => {
    if (calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acc, c) => acc + c, 0);
    return suma / calificaciones.length;
  };

  // Retorna una letra (A, B, C, D, F) segun el promedio
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };

  // Retorna true si el promedio es mayor o igual a 70 (aprobado)
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Sistema de Calificaciones</h3>
      {alumnos.map((alumno, index) => {
        const prom = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(prom);
        const aprobado = estaAprobado(prom);
        return (
          <p key={index}>
            {alumno.nombre}: Promedio {prom.toFixed(1)} - Letra {letra} - {aprobado ? "Aprobado" : "Reprobado"}
          </p>
        );
      })}
    </div>
  );
};