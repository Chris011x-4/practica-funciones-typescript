// App.tsx
import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

function App() {
  const ejercicios = [
    { id: '01', titulo: 'Calculadora de Operaciones', componente: <Calculadora /> },
    { id: '02', titulo: 'Conversor de Temperatura', componente: <ConversorTemperatura /> },
    { id: '03', titulo: 'Calculadora de IMC', componente: <CalculadoraIMC /> },
    { id: '04', titulo: 'Validador de Edad', componente: <ValidadorEdad /> },
    { id: '05', titulo: 'Analizador de Texto', componente: <AnalizadorTexto /> },
    { id: '06', titulo: 'Estadísticas de Arreglo', componente: <EstadisticasArreglo /> },
    { id: '07', titulo: 'Generador de Contraseñas', componente: <GeneradorPassword /> },
    { id: '08', titulo: 'Aplicador de Descuentos', componente: <AplicadorDescuentos /> },
    { id: '09', titulo: 'Sistema de Calificaciones', componente: <SistemaCalificaciones /> },
    { id: '10', titulo: 'Carrito de Compras', componente: <CarritoCompras /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Encabezado Principal Renovado sin Nombre */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-10 backdrop-blur-md py-6 px-6 sm:px-10 mb-12 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Dashboard de Prácticas
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Funciones en TypeScript
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-4 py-1.5 rounded-full text-xs font-medium text-slate-600">
            <span>React + Vite</span>
            <span>•</span>
            <span className="text-indigo-600 font-bold">10 Módulos</span>
          </div>
        </div>
      </header>

      {/* Contenedor Bento Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ejercicios.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Encabezado de cada tarjeta */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <h2 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {item.titulo}
                  </h2>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                    #{item.id}
                  </span>
                </div>

                {/* Componente renderizado */}
                <div className="text-slate-600 text-sm">
                  {item.componente}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;