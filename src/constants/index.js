export const MARCAS = [
    {
        id: 1,
        nombre: 'Dodge GTX V8'
    },
    {
        id: 2,
        nombre: 'IKA Kaiser Carabela'
    },
    {
        id: 3,
        nombre: 'Citroën 2CV'
    }
]

const AÑOMAXIMO = new Date().getFullYear();

export const AÑOS = Array.from( new Array (10), (valor, index) => AÑOMAXIMO - index)

export const PLANES = [
    {
        id: 1,
        nombre: 'Basico'
    },
    {
        id: 2,
        nombre: 'Completo'
    }
]