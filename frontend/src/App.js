import React, { useState } from 'react';
import Header from './Header';
import Logon from './pages/Logon'; //apesar do arquivo não possuir o nome Logon o React já progura o método index
import './global.css';


function App() {
  const [count, contaMais1] = useState(0);

  function _contaMais1(){
    contaMais1(count + 1)
  }

  return (
    <Logon/>
  );
}

export default App;
