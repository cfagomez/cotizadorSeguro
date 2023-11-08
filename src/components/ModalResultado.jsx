import React from 'react'
import useCotizador from '../hooks/useCotizador'

const ModalResultado = () => {

    const {reestablecerDatos} = useCotizador()

  return (
    <div className='modal'>
      <div className='modal-content'>
        <p>Resultado</p>
        <button
            className='button'
            onClick={reestablecerDatos}
        >
            Aceptar
        </button>
      </div>
    </div>
  )
}

export default ModalResultado
