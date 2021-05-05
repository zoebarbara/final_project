import styled from 'styled-components';
import { RiHeart3Line, RiHeart3Fill} from 'react-icons/ri';
import {BiShareAlt} from 'react-icons/bi'
import { mediumgrey, primaryColor} from '../config/theme';

export const UpperCardWrapper = styled.div`
    width: 100vw;
    //border: 3px solid blue;
    display: flex;
    align-items: strech;
    justify-content:center;
`

export const CardWrapper = styled.div`
    width: 28%;
    //height: 45vw;
    //border: solid 2px red;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 10px;


    &:hover{
        //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width:768px){
        width:90%;
        height: 60vh;
        flex-direction: column;

    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 20vw;
    object-fit: cover;
    object-position: 25% 50%;

    @media screen and (max-width:768px){
        width:85vw;
        height: 30vh;
    }
`

export const TextWrapper = styled.div`
    display:flex;
    padding:15px;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
`
export const H3text = styled.h3`
    padding: 0px;
    margin-bottom: 0px;
`
export const Category = styled.p`
    font-size:12px;
    padding: 0px;
    margin-top: 2px;
    text-transform: uppercase;
    color: ${props => mediumgrey};
`
export const DescriptionWrapper = styled.div`
    //height: 100px;
    box-sizing: border-box;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: space-between;
`

export const ParDescription = styled.p`
    margin-top: 1px;
    //height:300px;
    font-size:12px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`
export const IconWrapper = styled.div`
    padding-right:10px;
`

export const HeartIconFull = styled(RiHeart3Fill)`
    color: ${props => mediumgrey};
    margin: 0px 3px;
    &:hover{
        color: ${props => primaryColor};
    }

`
export const HeartIconEmpty = styled(RiHeart3Line)`
    color: ${props => mediumgrey};
    margin: 0px 3px;
    &:hover{
        color: ${props => primaryColor};
    }
`
export const ShareIcon = styled(BiShareAlt)`
    color: ${props => mediumgrey};
    margin: 0px 3px;
    &:hover{
        color: ${props => primaryColor};
    }
`
