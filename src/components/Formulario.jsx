import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { monedas } from "../data/monedas"
import useSelectMonedas from "../hooks/useSelectMonedas"


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
    margin-top: 20px;

    &:hover{
        background-color: #b6b8f5;
        color: #474747;
        cursor: pointer;
    }

`

export const Formulario = () => {

    const [criptos, setCriptos] = useState([])
    
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);

    useEffect(() => {
        const consultarApi = async () => {

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map( cripto => {

                const objeto = {
                    id      :cripto.CoinInfo.Name,
                    nombre  : cripto.CoinInfo.FullName
                }

                return objeto

            })

            // console.log(arrayCriptos)
            setCriptos(arrayCriptos)
        }
        consultarApi();
    }, [])
    
    

    SelectMonedas()

    return (

        <form action="">

            <SelectMonedas/>
            

            <InputSubmit 
                type="submit" 
                value='Cotizar' 
                />
        </form>
    )
}
