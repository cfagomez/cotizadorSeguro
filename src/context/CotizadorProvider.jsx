import { createContext, useState } from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers"

export const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        año: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = (e) => {

        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

    const cotizarSeguro = () => {

        let resultado = 2000

        const diferencia = obtenerDiferenciaYear(datos.año)

        resultado -= ((diferencia * 3) * resultado) / 100

        resultado *= calcularMarca(datos.marca)

        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)

        setResultado(resultado)

    }

  return (
    <CotizadorContext.Provider value={{datos, handleChangeDatos, error, setError, cotizarSeguro}}>
        {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorProvider
