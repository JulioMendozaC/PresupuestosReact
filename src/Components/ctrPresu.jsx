import {Fragment} from 'react';

const CtrPresu = ({presupuesto, restante}) => {
    return ( 

        <Fragment>

            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className="alert">
                Restante: ${restante}
            </div>


        </Fragment>
     );
}
 
export default CtrPresu;