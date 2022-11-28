import styled from "@emotion/styled"

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: start;
    gap: 1rem;

`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
        
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;

    }
`

const Image = styled.img`
    display: block;
    width: 120px;

`

export const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <ResultadoDiv>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
                <Texto>Actualización las últimas 24horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>El precio es de <span>{PRICE}</span></Texto>
                <Texto>Ultima actualización <span>{LASTUPDATE}</span></Texto>
            </div>
        </ResultadoDiv>
    )
}
