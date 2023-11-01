import { Fragment } from "react"
import { AÑOS, MARCAS, PLANES } from "../constants"

const Formulario = () => {
  return (
    <form>
        <div className="campo">
            <label>
                Marca
            </label>
            <select name="marca">
                <option value="">-- Seleccione una marca --</option>
                {
                    MARCAS.map(marca => (

                        <option 
                            value={marca.id}
                            key={marca.id}
                        >
                            {marca.nombre}
                        </option>

                    ))
                }
            </select>
        </div>
        <div className="campo">
            <label>
                Año
            </label>
            <select name="año">
                <option value="">-- Seleccione un año --</option>
                {
                    AÑOS.map(año => (

                        <option 
                            key={año}
                        >
                            {año}
                        </option>

                    ))
                }
            </select>
        </div>
        <div className="campo">
            <label>
                Tipo de Plan
            </label>
            <div className="flex-container">
                {
                    PLANES.map(plan => (
                        <Fragment>
                            <input 
                                name='plan'
                                type="radio"
                                value={plan.id}
                            />
                            <p className="p-radio">
                                {plan.nombre}
                            </p>
                        </Fragment>
                        
                    ))
                }
            </div>
        </div>
    </form>
  )
}

export default Formulario
