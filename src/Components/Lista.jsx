import Gasto from './Gasto'

const Lista = ({gastos}) => ( 
        <div className="gastos-realizados">
            <h2>Gastos</h2>

            {gastos.map(gasto => (

                <Gasto  
                key={gasto.id}
                gasto={gasto}/>

            ))}
        </div>
    );

 
export default Lista;