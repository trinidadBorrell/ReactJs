//import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './components/style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="¡Acá vas a poder ver nuestros productos, contactarte con nuestro equipo y más!" />
    </div>
  );
}

export default App;
