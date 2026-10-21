export const GeneradorPassword = () => {
  // Genera una contraseña aleatoria basada en longitud y opciones seleccionadas
  const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirNumeros) caracteres += "0123456789";
    if (incluirSimbolos) caracteres += "!@#$%^&*()_+";

    let password = "";
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      password += caracteres[randomIndex];
    }
    return password;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Generador de Contraseñas</h3>
      <p>Básica (8): {generarPassword(8, false, false)}</p>
      <p>Media (12): {generarPassword(12, true, false)}</p>
      <p>Fuerte (16): {generarPassword(16, true, true)}</p>
    </div>
  );
};