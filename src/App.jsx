import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Views
import Layout from './views/Layout/Layout';

function App() {
  return (
    // Aqui podemos seleccionar que elementos se van a renderizar
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Layout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
