import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {BiUserCircle, BiMenu} from 'react-icons/bi';
import { white, primaryColor, secondaryColor, lightgrey , darkenPrimary} from '../config/theme';

export const Nav = styled.nav`
    display: flex; //extra
    flex-direction: row; //extra
    align-items: center; //extra
    background: ${props => white};
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 10px;
    z-index:10;
`

export const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:768px){
        width:100%;
    }
`
export const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width:768px){
        width:12%;
    }
`

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    color: ${props => primaryColor};
    display: flex;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    background:${props => white};
`

export const MenuNavLink = styled(NavLink)`
&:hover{
        color:${props => darkenPrimary};
        padding:20px 15px;
        background:${props=>lightgrey};
    }
    @media screen and (max-width:768px){
        width: 100%;
        background: ${props => primaryColor};
        color: ${props => white};
        padding: 20px 0px;
        border-bottom: 0.1px solid ${props => lightgrey};
    }
`

export const Bars = styled(BiMenu)`
    display: none;
    color: ${props => primaryColor};

    @media screen and (max-width:768px){
        display: flex;
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavMenu= styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        position: absolute;
        width: 100%;
        top: 8vh;
        left: ${(props)=> props.showMenu? '0%':'100%'};
        border-bottom: 1px solid white;
        transition: left 1s;
        background: ${props => primaryColor};
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

`
export const NavBtnLink = styled(Link)`
    padding: 0 10px;
    color: ${props => white};
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => primaryColor};
    }
`

export const UserIcon = styled(BiUserCircle)`
    color: ${props => primaryColor};
    transition: all 0.2s ease-in-out;
    height: 30px;
    width: 30px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${props => secondaryColor};
    }

    @media screen and (max-width:768px){
        /* display: block;
        font-size: 1.8rem;
        cursor: pointer; */
    }
`