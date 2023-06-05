import { Fragment, useState } from "react";
import Erro from './Error';


const Pregunta = ({ getPresupuesto, getRestante, getMostrar}) => {
    
    //Definir State
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    //Functions quee lee el presupuesto
    const  defPresupuesto = (e) => {

            setCantidad(parseInt(e.target.value), 10)
    }

    //Function para definir el presupuesto
    const addPresupuesto =(e)=>{
        e.preventDefault()
         //valdacion
         if(cantidad < 1 || isNaN (cantidad)){
            setError(true)
            return
         }
         setError(false)
         getPresupuesto(cantidad)
         getRestante(cantidad)
         getMostrar(false)
    } 
   



    return ( 
        <Fragment>
            <h2>Coloca Tu Presupuesto</h2>
            {error ? <Erro mensaje="Presupuesto incorrecto"/>: null}
            <form onSubmit={addPresupuesto}>
                <input 
                type="text" 
                className="u-full-width"
                placeholder="Coloca Tu Presupuesto" 
                onChange={defPresupuesto}/>

                <input 
                type="submit"
                className="button-primary u-full-width"
                placeholder="Definir Presupuesto" />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;