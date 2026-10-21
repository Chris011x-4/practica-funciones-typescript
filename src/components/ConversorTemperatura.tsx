export const ConversorTemperatura = () => {
  // Convierte de Celsius a Fahrenheit
  const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;
  // Convierte de Fahrenheit a Celsius
  const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

  const temperatura = 25;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md my-4">
      <h3 className="text-xl font-bold mb-2">Conversor de Temperaturas</h3>
      <p>{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
      <p>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
    </div>
  );
};