import { useState, useEffect } from "react";
import Pregunta from "./Components/Pregunta";
import Form from "./Components/Formu";
import Lista from "./Components/Lista";
import CtrPresu from "./Components/ctrPresu";


function App() {
  const [presupuesto, getPresupuesto] = useState(0);
  const [restante, getRestante] = useState(0);
  const [mostrar, getMostrar] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [nuevogasto, setNuevoGasto] = useState(false);




    useEffect (() =>{

      //nuevo presupuesto
        if(nuevogasto){
          setGastos ([
            ...gastos,
            gasto
        ])

        //resto 

        const resto = restante - gasto.cantidad
        getRestante(resto)
        //reset
        setNuevoGasto(false)
        }

    }, [gasto])

  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">   
          {mostrar ? (
             <Pregunta 
             getPresupuesto={getPresupuesto} 
             getRestante={getRestante} 
             getMostrar={getMostrar}/>
          ) :

            <div className="row">
              <div className="one-half column">
                <Form
                  setGasto={setGasto}
                  setNuevoGasto={setNuevoGasto}
                />
                </div>
              <div className="one-half column">
                <Lista
                  gastos={gastos}
                />

                <CtrPresu

                  presupuesto={presupuesto}
                  restante={restante}
                
                />
                </div>
            </div>
         }      
        </div>
      </header>
    </div>
  );
}

export default App;
