import React from 'react'
import useCotizador from '../hooks/useCotizador'

const ModalResultado = () => {

    const {resultado, reestablecerDatos, datos} = useCotizador()
    const {marca, plan, año} = datos

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='div-total m-bottom'>
            <h2>Total: </h2>
            <p className='p-total'>{resultado}</p>
        </div>
        <div className='flex-div'>
            <h3>Marca: </h3>
            <span>{marca}</span>
        </div>
        <hr />
        <div className='flex-div'>
            <h3>Año: </h3>
            <span>{año}</span>
        </div>
        <hr />
        <div className='flex-div'>
            <h3>Plan: </h3>
            <span>{plan}</span>
        </div>
        <button
            className='button m-top'
            onClick={reestablecerDatos}
        >
            Aceptar
        </button>
      </div>
    </div>
  )
}

export default ModalResultado
