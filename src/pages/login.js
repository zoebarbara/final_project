import { LoginWrapper,
         ImageLogin,
         FormWrapper,
         ParLogin,
         H3Login,
         LabelLogin,
         FormLogin,
         InputLogin,
         ForgotPass,
         ButtonLogin,
         ButtonGoogle,
         PasswordWrapper,
         Checkbox,
         NotMember,
         NotMemberLink
        } from '../pages/layouts/loginlayout.js';
import { Link } from 'react-router-dom';
import GoogleIcon from '../components/assets/Google_icon.png';
import LoginImage from '../components/assets/Login.png';

function Login() {
    return(
        <LoginWrapper>
            <ImageLogin/>
    
            <FormWrapper>
                <FormLogin>
                    <ParLogin>Welcome back</ParLogin>
                    <H3Login>Login en tu cuenta</H3Login>
                    <LabelLogin>Email</LabelLogin>
                    <InputLogin></InputLogin>
                    <LabelLogin>Password</LabelLogin>
                    <InputLogin type={'password'}></InputLogin>
                    <PasswordWrapper>
                        <Checkbox>
                            <input style={{}} type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe" />
                            <label style={{margin: '0px px 0px 0px'}} for="RememberMe"> Remember me</label>
                        </Checkbox>
                        <ForgotPass>¿Contraseña olvidada?</ForgotPass>
                    </PasswordWrapper>
                    
                    <ButtonLogin>Log in</ButtonLogin>
                    <ButtonGoogle><a><img src={GoogleIcon} style={{margin:' 0px 10px 0px 0px'}} alt='Google icon'/></a>Log in with Google</ButtonGoogle>
                    <NotMember>¿No eres miembro? <NotMemberLink to="/signup">Sign up aquí</NotMemberLink></NotMember>
                </FormLogin>

            </FormWrapper>
            
        </LoginWrapper>
    )
};

export default Login;