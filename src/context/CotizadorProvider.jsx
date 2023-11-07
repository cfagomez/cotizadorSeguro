import { createContext, useState } from "react"

export const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        año: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = (e) => {

        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

  return (
    <CotizadorContext.Provider value={{datos, handleChangeDatos, error, setError}}>
        {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorProvider
