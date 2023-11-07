import { Fragment } from "react"
import { AÑOS, MARCAS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"

const Formulario = () => {

    const {datos, handleChangeDatos, error, setError} = useCotizador()

    const validarFormulario = (e) => {

        e.preventDefault()

        if (Object.values(datos).includes('')) {

            return setError('Debes completar todos los campos')

        }

        setError('')

    }

  return (
    <form
        onSubmit={validarFormulario}
    >
        {
            error && <Error />
        }
        <div className="campo">
            <label>
                Marca
            </label>
            <select 
                name="marca"
                value={datos.marca}
                onChange={handleChangeDatos}
            >
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
            <select 
                name="año"
                value={datos.año}
                onChange={handleChangeDatos}
            >
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
                                onChange={handleChangeDatos}
                            />
                            <p className="p-radio">
                                {plan.nombre}
                            </p>
                        </Fragment>
                        
                    ))
                }
            </div>
        </div>
        <input 
            type="submit"
            value='Enviar'
        />
    </form>
  )
}

export default Formulario
