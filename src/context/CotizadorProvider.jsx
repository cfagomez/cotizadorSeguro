import { createContext } from "react"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        año: '',
        plan: ''
    })

  return (
    <CotizadorContext.Provider value={{datos, setDatos}}>
        {children}
    </CotizadorContext.Provider>
  )
}

export default CotizadorProvider
