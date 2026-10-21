export const ValidadorEdad = () => {
  // Retorna true si es mayor o igual a 18 años
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Retorna un mensaje dependiendo si puede votar o cuantos años le faltan
  const obtenerMensaje = (edad: number): string => {
    if (esMayorDeEdad(edad)) {
      return "Puede votar";
    } else {
      return `Le faltan ${18 - edad} años`;
    }
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Validador de Edad</h3>
      {edades.map((edad, i) => (
        <p key={i}>
          Edad {edad}: {obtenerMensaje(edad)}
        </p>
      ))}
    </div>
  );
};