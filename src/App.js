//import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar/>
        
        <Switch>

          <Route exact path="/productos">
            <ItemListContainer/>
          </Route>

          <Route exact path="/productos/detail/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/inicio">
              <h1>INICIO</h1>
          </Route>

          <Route exact path="/nosotrxs">
              <h1>SOBRE NOSOTRXS</h1>
          </Route>

          <Route exact path="*">
              <Redirect to="/inicio"/>
          </Route>

        </Switch>
      
      </BrowserRouter>
      
    </>
  );
}

export default App;
