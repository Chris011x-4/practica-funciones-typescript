export const AnalizadorTexto = () => {
  // Cuenta la cantidad de palabras separadas por espacios
  const contarPalabras = (texto: string): number => {
    const trimmed = texto.trim();
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  };

  // Cuenta el numero de vocales (incluyendo acentos y mayusculas/minusculas)
  const contarVocales = (texto: string): number => {
    const matches = texto.match(/[aeiouáéíóú]/gi);
    return matches ? matches.length : 0;
  };

  // Invierte el orden de los caracteres del texto
  const invertirTexto = (texto: string): string => {
    return texto.split('').reverse().join('');
  };

  const texto = "Hola mundo desde TypeScript";

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Analizador de Texto</h3>
      <p>Texto: "{texto}"</p>
      <p>Palabras: {contarPalabras(texto)}</p>
      <p>Vocales: {contarVocales(texto)}</p>
      <p>Invertido: {invertirTexto(texto)}</p>
    </div>
  );
};