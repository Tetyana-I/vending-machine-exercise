import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/candy">
            <Candy />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
