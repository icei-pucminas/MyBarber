import styled from 'styled-components';
import imgPrincipal from '../../assets/imgPrincipal.jfif'

export const ImagemFundo = styled.div`
    background-image: url(${imgPrincipal});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: block;
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;

    height: 620px;

    filter: blur(4px);
    -webkit-filter: blur(4px);
`

export const MainContainer = styled.div`
    display: grid;
    place-items: center;

    height: 520px;

    background-color: transparent;

    > h1 {
        max-width: 65%;
        font-weight: bold;
        font-size: 72px;
        line-height: 125%;
        text-align: center;

        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const HomeContainer = styled.div`
    background: black;  
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: max-content;

   section {
        max-width: 380px;
        p {
            font-size: 36px;
            color: white;
            margin-bottom: 20px;
        }

        button {
            margin-right: 10px;
        }
   }

   img {
       height: 330px;
   }
`