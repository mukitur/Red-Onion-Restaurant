import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Menu from './Pages/Menu/Menu';
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer';
import MealDetails from './Pages/Meal/MealDetails/MealDetails';

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
            <Route path = "/about">
                <About></About>
            </Route>
            <Route path="/menu">
                <Menu></Menu>
            </Route>
            <Route path ="/contact">
                <Contact></Contact>
            </Route>
            <Route path= "/mealdetails/:mealId">
              <MealDetails></MealDetails>
            </Route> 
        </Switch>
        <Footer></Footer> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
