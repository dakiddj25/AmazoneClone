import './App.css';
import Heading from './Components/Heading';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Heading/>
      <Switch>

      <Route path='/' exact component={Home} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/login' component={Login} />
      
    
      </Switch>
      </div>
    </Router>
  );
}

export default App;
