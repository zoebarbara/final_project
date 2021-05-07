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
import { Link, useHistory } from 'react-router-dom';
import GoogleIcon from '../components/assets/Google_icon.png';
import LoginImage from '../components/assets/Login.png';
import {useState} from 'react';
import { login } from '../services/auth.js';

function Login() {

    const ERROR_MESSAGES ={
        'auth/wrong-password': 'Usuario y/o contraseña incorrectos',
        'auth/invalid-email': 'Email no válido',
        'auth/all-fields-mandatory': 'Todos los campos son obligatorios',
        'auth/too-many-requests': 'Cuenta deshabilitada por seguridad. Intente de nuevo más tarde'
    }



    const history = useHistory();
    const [formData, setFormData] = useState({ email: '', password: ''});

    const handleLogin = async () => {
            
            const result = await login(formData);
            console.log(result);
            if (result) {
                history.push('/');
            }
        }
 


    return(
        <LoginWrapper>
            <ImageLogin/>
    
            <FormWrapper>
                <FormLogin>
                    <ParLogin>Welcome back</ParLogin>
                    <H3Login>Login en tu cuenta</H3Login>
                    <LabelLogin>Email</LabelLogin>
                    <InputLogin 
                        placeholder='Email'
                        label="email"
                        name="email"
                        value={formData.email}
                        onChange={(event) => setFormData({ ...formData, email: event.target.value })}>
                    </InputLogin>
                    <LabelLogin>Password</LabelLogin>
                    <InputLogin
                        type= 'password' 
                        placeholder='Contraseña'
                        label="password"
                        name="password"
                        value={formData.password}
                        onChange={(event) => setFormData({ ...formData, password: event.target.value })}>
                    </InputLogin>
                    <PasswordWrapper>
                        <Checkbox>
                            <input style={{}} type="checkbox" id="RememberMe" name="RememberMe" value="RememberMe" />
                            <label style={{margin: '0px px 0px 0px'}} for="RememberMe"> Remember me</label>
                        </Checkbox>
                        <ForgotPass>¿Contraseña olvidada?</ForgotPass>
                    </PasswordWrapper>
                    
                    <ButtonLogin onClick={handleLogin}>Log in</ButtonLogin>
                    <ButtonGoogle><img src={GoogleIcon} style={{margin:' 0px 10px 0px 0px'}} alt='Google icon'/>Log in with Google</ButtonGoogle>
                    <NotMember>¿No eres miembro? <NotMemberLink to="/signup">Sign up aquí</NotMemberLink></NotMember>
                </FormLogin>

            </FormWrapper>
            
        </LoginWrapper>
    )
};

export default Login;