import styled from 'styled-components';
import { darkenPrimary, primaryColor, white } from './config/theme';


const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px 10px;
    background-color:${props => primaryColor};
    color: ${props => white};
    border: 0px;

    &:hover{
        background: ${props => darkenPrimary}
    }
`

export default Button;

