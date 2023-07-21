import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';

function App() {
  return (
    <div>
      <h1>Componente 01</h1>
      <C01componente/>
      <h1>Componente 02</h1>
      <C02contador/>
    </div> 
  );
}

export default App;
