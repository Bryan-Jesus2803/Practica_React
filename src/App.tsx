import { Button } from "./components/Button";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10 space-y-10">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-800">Hecho en el cuaderno</h2>
        <div className="flex flex-col gap-3">
          <Button>Botón primario</Button>
          <Button variant="outline">Botón outline</Button>
          <Button variant="destructive">Botón destructivo</Button>
        </div>
      </div>
 
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-800">Checkpoint 5</h2>
        <h3>Actividad 2: Practica React ⚛️</h3>
        <div className="flex flex-col gap-3">
          <Button rounded>Botón redondeado</Button>
          <Button>Botón normal</Button>
          <Button variant="outline" rounded>Outline redondeado</Button>
        </div> 
      </div>
    </div>
  );
}

export default App;