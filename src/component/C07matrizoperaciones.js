import React, { Fragment, useState } from 'react'

const C07matrizoperaciones = () =>{
    const [lista, setLista] = useState([1,2,3,4,5]);
    const [dias, setDias] = useState(["lunes","martes", "miercoles","jueves"]);
    const uniendoArray = [...lista, ...dias];

    const [numero, setNumero] = useState(6);
    const agregarNumero = () => {
        setNumero(numero + 1);
        setLista([...lista, numero]);
    }

    const [texto, setTexto] = useState(["viernes","sabado","domingo"]);
    const agregarTexto = () => {
        setDias([...dias, ...texto]);
    }
  return (
    <Fragment>
      <h1>Lectura de la unión de matrices</h1>
      {
        uniendoArray.map((item, index) =>
            <p key={index}>
                {item} - {index}
            </p>
            )  
        }
        <br/>

        <h1>Agregar un valor a un array</h1>
        <button onClick={agregarNumero}>agregar Numero</button>
        {
            lista.map((item,index) =>
                <p key={index}>
                    {item}-{index}
                </p>
            )
        }
        <br/>

        <h1>Agregar un texto a un array</h1>
        <button onClick={agregarTexto}>agregar texto</button>
        {
            dias.map((item,index) =>
                <p key={index}>
                    {item}-{index}
                </p>
            )
        }
        <br/>
    </Fragment>
  );
}

export default C07matrizoperaciones;
