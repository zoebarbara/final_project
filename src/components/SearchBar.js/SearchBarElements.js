import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { white, primaryColor, secondaryColor, lightgrey , darkenPrimary} from '../config/theme';


// UPPER SEARCHBAR PLACED IN MENU
export const SearchWrapperUpperMenu = styled.div`
    display: flex;
    align-items:center;
    flex-direction: row;
    border-bottom: 0px solid ${props => primaryColor};
    transition: all 1s;

    &:hover{
      border-bottom: 1.5px solid ${props => primaryColor};
      transition: all 5s; 
    }

    @media screen and (max-width:768px){
        display: none;
    }
`
export const SearchBox = styled.div`
    display:flex;
    align-items: center;
    height: 28px;
    width: 150px;
`

// SEARCHBAR DOWNMENU- CENTERED FOR MOBILE
export const SearchWrapperDownMenu = styled.div`
    display: none;

    @media screen and (max-width:768px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`

export const SearchBoxDownMenu = styled.div`
    display: none;
    
    @media screen and (max-width:768px){
        display: flex;
        align-items:center;
        justify-content: center;
        width:100%;
        height: 100%;
        padding: 0px 40px;  
        background: ${props => lightgrey};
    }
`

//COMMON
export const InputSearchBar = styled.input`
    width:100%;
    height: 100%;
    padding-left: 10px;
    border: 0;
    outline:none;
    background: ${props => lightgrey};
    width:150px;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        width: 300px; 
        transition: all 0.5 ease-in-out;
    }

    @media screen and (max-width:768px){
        width:100%;
    }
`
export const IconBox = styled(SearchBox)`
    display: flex;
    background: ${props => lightgrey};
    height: 30px;
    width: 29px;
    justify-content: center;
`

export const SearchIcon = styled(BiSearch)`
    color: ${props => primaryColor};
    
    &:hover{
        color: ${props => darkenPrimary};
    }
`



