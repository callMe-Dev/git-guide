// Views
import Layout from './views/Layout/Layout';

function App() {
  return (
    // Aqui podemos seleccionar que elementos se van a renderizar
    <div className='App'>
      <div className='App__grid'>
        {/* El sidebar solamente se mostrara en vistas mayores a 700px asi como el __flex hara efecto */}
        <Layout />
      </div>
    </div>
  );
}

export default App;
