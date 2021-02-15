// Views
import Layout from './views/Layout/Layout';
// Components
import BtnToTop from './components/BtnToTop/BtnToTop';

function App() {
  return (
    // Aqui podemos seleccionar que elementos se van a renderizar
    <div className='App'>
      <Layout />
      <BtnToTop />
    </div>
  );
}

export default App;
