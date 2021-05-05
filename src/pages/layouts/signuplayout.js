import styled from 'styled-components';
import Button from '../../components/button';
import SignUpImg from '../../components/assets/Signup.png';
import { lightgrey, mediumgrey, primaryColor, secondaryColor, white} from '../../components/config/theme';


export const LoginWrapper = styled.div`
    display: flex;
    @media screen and (max-width:768px){
        flex-direction: column;
    }
`
export const SignUpImage = styled.img`
    width: 55%;
    border: none;
    background-image: url(${props => SignUpImg});
    background-clip: cover;
    background-size: 100%;
    background-repeat: no-repeat;
    @media screen and (max-width:768px){
        width: 100vw;
        height: 70vw;
        background-position: 30%;
        background-repeat: no-repeat;
        background-clip: cover;
    }
`
export const FormWrapper = styled.div`
    width: 45%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => lightgrey};
    @media screen and (max-width:768px){
        width: 100vw;
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
    font-size: 12px;
    padding-left:10px;
    width: 100%;
    height: 25px;
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
export const ForgotPass = styled.a`
    color: ${props => primaryColor};
    font-size: 0.7rem;
`
export const PasswordWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0px;
    font-size: 0.7rem;
    align-items: center;
    justify-content: center;
`
export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`