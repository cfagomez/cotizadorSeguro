export const MARCAS = [
    {
        id:'1',
        nombre: 'Porsche'
    },
    {
        id:'2',
        nombre: 'Toyota'
    },
    {
        id:'3',
        nombre: 'Siam Di Tella'
    }
]

const AÑOMAXIMO = new Date().getFullYear();

export const AÑOS = Array.from( new Array (20), (valor, index) => AÑOMAXIMO - index)

export const PLANES = [
    {
        id: '1',
        nombre: 'Basico'
    },
    {
        id: '2',
        nombre: 'Completo'
    }
]