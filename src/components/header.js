import styled from 'styled-components';
import { white } from '../config/theme';

const Header = styled.div `
    background-color: ${props => white};
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
    flex-direction: row;
    width: 100vw;
    z-index: 3;
    font-family: sans-serif;
    font-size: 15px;
`

const AppHeader = () => {

    return (
        <Header>
            
        </Header>
    )
}





export default Header;