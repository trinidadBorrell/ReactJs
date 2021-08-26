//import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar/>
        
        <Switch>

          <Route exact path="/productos">
            <ItemListContainer/>
          </Route>

          <Route exact path="/productos/:categoria">
            <ItemListContainer/>
          </Route>

          <Route exact path="/productos/:categoria/:itemId">
            <ItemDetailContainer/>
          </Route>
          
          <Route exact path="/inicio">
              <h1>INICIO</h1>
              <p>Proximamente...</p>
          </Route>

          <Route exact path="/nosotrxs">
              <h1>SOBRE NOSOTRXS</h1>
              <p>Proximamente...</p>
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

/* 
<Route exact path="/productos/detail/:itemId">
<ItemDetailContainer/>
</Route>
*/