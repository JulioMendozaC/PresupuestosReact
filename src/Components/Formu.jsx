import {useState} from 'react'
import shortid from 'shortid'
import Erro from './Error';

const Form = ( {setGasto, setNuevoGasto}) => {

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)



    const agrGasto = (e) => {
        e.preventDefault()

        //validar 
        if (cantidad < 1 || isNaN (cantidad) || nombre.trim() === ''){
            setError(true)
            return
        }
        setError(false)

        //nuevo gasto
        const gasto ={

            nombre,
            cantidad,
            id: shortid.generate()
        }
        //gasto al componente principal
        setGasto(gasto)
        setNuevoGasto(true)

        //Resetear form
        setNombre('')
        setCantidad(0)


    }

    return ( 
        <form 
        onSubmit={agrGasto}>
            <h2>Agrega los gastos</h2>

            { error ? <Erro mensaje="Todos los campos son obligatorios 
                                    o Presupuesto incorrrecto" /> : null}

            <div className="campo">
                <label>Gasto</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="ej.Comida"
                value={nombre}
                onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="campo">
                <label>Cantidad</label>
                <input 
                type="number" 
                className="u-full-width" 
                placeholder="ej.300" 
                value={cantidad}
                onChange={e => setCantidad(e.target.value)} />
            </div>

            <input type="submit" className="button-primary u-full-width" value='Agregar' />

        </form>
     );
}
 
export default Form;