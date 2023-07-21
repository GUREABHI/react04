import React, {useState, Fragment} from "react"

const C03dobleestado = () => {
    const [valor, setValor] = useState(0);
    const [numero,SetNumero] = useState(0);

    const IncrementoDos = () => {
        SetNumero(numero + 1);
        console.log("mensaje de contador");
    }

    return (
        <Fragment>
            <button onClick={()=>setValor(valor+1)}>contador 1</button>
            <span>Incremento de contador 1: {valor}</span>
            <hr/>
            <button onClick={IncrementoDos}>Contador 2</button>
            <span>Incremento de contador 1: {numero}</span>

        </Fragment>
    )
}

export default C03dobleestado;







