import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { monedas } from "../data/monedas"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { Error } from "./Error"


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    text-align: center;
    margin: 20px auto;

    &:hover{
        background-color: #b6b8f5;
        color: #474747;
        cursor: pointer;
    }

`

export const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false);

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const consultarApi = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto

            })

            // console.log(arrayCriptos)
            setCriptos(arrayCriptos)
        }
        consultarApi();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Enviando formulario')

        if ([moneda, criptomoneda].includes('')) {

            setError(true);
            return;
        }

        setError(false);

        setMonedas({
            moneda,
            criptomoneda
        })

    }

    // SelectMonedas()

    return (
        <>
        {error && <Error>Todos los campos son obligatorios</Error>}

            <form
                onSubmit={handleSubmit}
            >

                <SelectMonedas />
                <SelectCriptomoneda />


                <InputSubmit
                    type="submit"
                    value='Cotizar'
                />
            </form>
        </>
    )
}
