import styled, {createGlobalStyle} from 'styled-components'
import Bck1 from '../../public/images/bck1.png'


export const GlobalStyle = createGlobalStyle`

        
    body,html{
        padding: 0;
        margin: 0;

    }


`


export const HomePage = styled.div`
    height: 100vh;
    background-image: url(${Bck1});
`

export const Menu = styled.header`
    nav{
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        .brand{
            img{
                width: 120px;
            }
        }
        ul{
            display: flex;
            list-style: none;
            li{
                padding-left: 20px;
                a{
                    text-decoration: none;
                    // color: ;
                }
            }
        }
    }
`