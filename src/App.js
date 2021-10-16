import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
        </Switch>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
