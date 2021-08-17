//import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
