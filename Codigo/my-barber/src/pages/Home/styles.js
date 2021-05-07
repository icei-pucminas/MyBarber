import styled from 'styled-components';
import imgPrincipal from '../../assets/imgPrincipal.jfif'


export const HomeContainer = styled.div`
    background-color: green;
    height: 100%;
    p{
        font-size: 36px;
        color: white;
    }
`

export const Titulo = styled.div`
    height: 521px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h2{
        display: block;
        text-align: center;
        font-size: 72px;
        color: white;
    }
`
export const ImagemFundo = styled.div`
    background-image: url(${imgPrincipal});
`