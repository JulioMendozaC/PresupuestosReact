import { Fragment } from 'react';
import { revision } from '../Helpers';


const CtrPresu = ({presupuesto, restante}) => {
    return ( 

        <Fragment>

            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revision(presupuesto, restante)}>
                Restante: ${restante}
            </div>


        </Fragment>
     );
}
 
export default CtrPresu;