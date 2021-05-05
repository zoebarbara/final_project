import styled from 'styled-components';
import Button from '../../components/button';
import LoginImage from '../../components/assets/Login.png';
import { darkenPrimary, lightgrey, mediumgrey, primaryColor, secondaryColor, white} from '../../components/config/theme';
import { Link } from 'react-router-dom';

export const LoginWrapper = styled.div`
    display: flex;
    @media screen and (max-width:768px){
        flex-direction: column;
    }
`
export const ImageLogin = styled.img`
    width: 55%;
    height: 80vh;
    background-image: url(${props => LoginImage});
    background-clip: cover;
    background-size: 100%;

    @media screen and (max-width:768px){
        width: 100vw;
        height: 50vw;
        background-position: 20%;
        background-repeat: no-repeat;
        background-clip: cover;
    }
`
export const FormWrapper = styled.div`
    width: 45%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => lightgrey};

    @media screen and (max-width:768px){
        width: 100%;
        padding: 15% 0px;
    }
`
export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
`
export const ParLogin = styled.p`
    margin: 0px;
    font-size: 12px;
`
export const H3Login = styled.h2`
    margin: 2px 0px 20px 0px;
    color: ${props => secondaryColor};
`
export const LabelLogin = styled.label`
    color: ${props => mediumgrey};
    font-size: 11px;
    margin-top: 3px;
`

export const InputLogin = styled.input`
    width: 100%;
    height: 30px;
    margin: 5px 0px;
    border: none;
    background-color: ${props => white};

    &:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
`
export const ButtonLogin = styled(Button)`
    display: flex;
    width: 100%;
    height: 35px;
    margin-top: 10px;
`

export const ButtonGoogle = styled(Button)`
    background-color: ${props => secondaryColor};
    margin-top: 10px;
`
export const ForgotPass = styled(Link)`
    color: ${props => primaryColor};
    font-size: 0.7rem;
    cursor: pointer;
`
export const PasswordWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0px;
    font-size: 0.7rem;
    align-items: center;
    justify-content: space-between;
`
export const Checkbox = styled.div`

`

export const NotMember = styled.p`
    font-size:0.7rem;
`
export const NotMemberLink = styled(Link)`
    text-decoration: none;
    color: ${props => darkenPrimary};
`