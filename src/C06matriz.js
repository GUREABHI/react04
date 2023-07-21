import React, {useState, Fragment } from 'react'

const C06matriz = ()  => {
    const [lista,setLista] = useState([1,2,3,4,5]);
  return (
    <Fragment>
        <h1>lectura sin index y sin html</h1>
        {lista.map((item) => item)}
        <br/>

        <h1>lectura sin index y con html</h1>
        {lista.map((item) => <span>{item}</span>)}
        <br/>

        <h1>listas con index y sin key</h1>
        {
            lista.map((item, index) =>
                <p> {item} </p>
            ) 
        }
        <br/>

        <h1>Listas con index y con key</h1>
        {
            lista.map((item, index) =>
                <p Key = {index}>
                    {item} - {index}
                </p>
            )
        }
    </Fragment>
  );
}

export default C06matriz;
