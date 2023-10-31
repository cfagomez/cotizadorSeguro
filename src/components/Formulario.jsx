import { AÑOS, MARCAS, PLANES } from "../constants"

const Formulario = () => {
  return (
    <form>
        <div className="campo">
            <label>
                Marca
            </label>
            <select name="marca">
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
            <p>
                Tipo de Plan
            </p>
            {
                PLANES.map(plan => (
                    <>
                        <input 
                            type="radio"
                            value={plan.id}
                        />
                        <label>
                            {plan.nombre}
                        </label>
                    </>
                    
                ))
            }
        </div>
    </form>
  )
}

export default Formulario
