import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable2 from './component/C04variable2';
import C05operador from './component/C05operador';
import C06matriz from './component/C06matriz';
import C07matrizoperaciones from './component/C07matrizoperaciones';

function App() {
  return (
    <div>
      <h1>Componente 01</h1>
      <C01componente/>
      <h1>Componente 02</h1>
      <C02contador/>
      <h1>Componente 03</h1>
      <C03dobleestado/>
      <h1>Componente 04</h1>
      <C04variable2/>
      <h1>Componente 05</h1>
      <C05operador/>
      <h1>Componente 06</h1>
      <C06matriz/>
      <h1>Componente 07</h1>
      <C07matrizoperaciones/>
    </div> 
  );
}

export default App;
