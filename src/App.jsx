import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
// Views
import HomePage from './views/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
