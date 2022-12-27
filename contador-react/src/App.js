import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from "./Componentes/Header.jsx";
import Input from "./Componentes/Input.jsx";
import Boton from './Componentes/Button.jsx';
function App() {
  const [nombre,setNombre] = useState('');
  const [password,setPassword] = useState('');
 
  return (
    <div className="App">
      <Header titulo="Desafío estado de los Componentes y Eventos"></Header>
      <Input 
      nombre={nombre} 
      setNombre={setNombre}
      password={password}
      setPassword={setPassword}>
      </Input>
      {password === '252525' && <Boton/>}
    
    </div>
  );
}

export default App;
