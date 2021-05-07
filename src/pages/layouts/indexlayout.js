import styled from 'styled-components';
import { lightgrey, mediumgrey, primaryColor, secondaryColor, white} from '../../components/config/theme';
import HeroBg from '../../components/assets/HeroBG.png'
import Salad from '../../components/assets/salad.png'

/*************************/
/*      HERO HEADER      */
/*************************/

export const HomeWrapper = styled.div``

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 500px;
    overflow:hidden;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${props => HeroBg});
    background-size: cover;
    background-position-x: 70%;
`
export const Logo = styled.img`
    width:70%;
    object-fit: cover;
    object-position: 20% 0%;
    text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const TextHero = styled.div`
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:9;
` 
export const H1Hero = styled.h2`
    color: ${props => lightgrey};
    opacity: 0.7;
    margin-top: 0px;
    padding: 0px;
    
`
export const PHero = styled.p`
    color: ${props => white};
    margin-top: 0px;
    padding: 0px;
`

/*************************/
/*      INFO SECTION     */
/*************************/

export const InfoWrapper = styled.div`
    width: 100vw;
    background-image: linear-gradient(to right, #537974, #75a19b);
    //background-color: ${props => primaryColor};
    display: flex;
    flex-direction: row;

    @media screen and (max-width:768px){
       flex-direction: column;
    }
`
export const InfoTextWrapper = styled.div`
    width: 50vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding: 20px;
    text-align: center;
    box-sizing: border-box;

    @media screen and (max-width:768px){
        width: 100vw;
        height: 50vh;
    }
`
export const H1Info = styled.h1`
   color: ${props => white};
`
export const PInfo = styled.p`
    padding: 5px 60px;
`
export const ImgInfoWrapper = styled.div`
    width: 50vw;
    background-image: url(${props => Salad});
    background-size: 120%;
    background-repeat:no-repeat;
    background-position: 30% 50%;

    @media screen and (max-width:768px){
        width: 100vw;
        height:30vh;
        background-size:100%;
        background-position: 50px -10px;
    }
`

/*************************/
/*      CARD WRAPPER     */
/*************************/

export const CardWrapper = styled.div` 
    width: 100vw;
    border: 2px solid green;
    background-color: pink;
    display: flex;
    flex-direction: row;
    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
    }
`