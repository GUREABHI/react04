import React, { Fragment, useState } from 'react'

const C02contador = () => {
    const [numero, Setnumero] = useState(0);
    const aumentar = () => {
        Setnumero(numero + 1);
    }
  return (
    <div>
      <Fragment>
        <h3>Mi primer componente {numero} </h3>
        <button onClick={aumentar}>Click para aumnetar...</button>
      </Fragment>
    </div>
  )
}

export default C02contador
