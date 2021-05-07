import styled from 'styled-components';
import { white, primaryColor, secondaryColor, lightgrey , darkenPrimary, mediumgrey} from '../config/theme';
import {  Link } from 'react-router-dom';

export const FooterNav = styled.div`
    height: 20vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => secondaryColor};
    color: ${props => white};
    


    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
    }
    `

export const UlFooter = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`
export const FooterLink = styled(Link)`
    margin: 0.5rem;
    text-decoration:none;
    color: ${props => mediumgrey};
    font-size: 12px;

    &:hover{
        color: ${props => white};
    }
`
export const ParFooter = styled.p`
    font-size: 12px;
   color: ${props => mediumgrey};
`
