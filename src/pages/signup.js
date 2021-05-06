import { LoginWrapper,
    SignUpImage,
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
    Checkbox
   } from '../pages/layouts/signuplayout.js';

import GoogleIcon from '../components/assets/Google_icon.png';
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { userSignup } from '../controllers/user';

function SignUp() {

    /* const [user, setUser] = useState('');
    const [surname, setSurname] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [password,setPassword] = useState('');
    const [passwordConfirmation,setPasswordConfirmation] = useState('');*/
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    /*const [hasAccount, setHasAccount]= useState(false); */

    const history = useHistory();
    const [formData, setFormData] = useState({ name: '', lastname: '', email: '', password: '' , emailConfirmation:'', passwordConfirmation:''});

  const handleSignUp = async (event) => {
      event.preventDefault();
      debugger;
        if (formData.email !== formData.emailConfirmation){
            setEmailError('Los emails no coinciden')
            console.log(setEmailError);
            return
        }

        if (formData.password !== formData.passwordConfirmation){
            setPasswordError('Las contraseñas no coinciden')
            console.log(setPasswordError)
            return
        }   

        
        const result = await userSignup(formData);
        
        console.log(result);
        if (result) {
            history.push('/myprofile');
        }
    }
 
  

return(
   <LoginWrapper>
       <SignUpImage></SignUpImage>
       <FormWrapper>
           <FormLogin >
               <ParLogin>Welcome stranger!</ParLogin>
               <H3Login>Create your new account</H3Login>
               <InputLogin
                    label="name"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}>
                </InputLogin>
               <InputLogin 
                    placeholder='Apellidos'
                    label="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={(event) => setFormData({ ...formData, surname: event.target.value })}>  
               </InputLogin>
               <InputLogin 
                    placeholder='Fecha de Nacimiento'
                    label="birthdate"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={(event) => setFormData({ ...formData, birthdate: event.target.value })}>
               </InputLogin>
               <InputLogin 
                    placeholder='Email'
                    label="email"
                    name="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}>
                </InputLogin>
                <InputLogin
                    placeholder='Confirma tu email'
                    label="emailConfirmation"
                    name="emailConfirmation"
                    value={formData.eamilConfirmation}
                    onChange={(event) => setFormData({ ...formData, emailConfirmation: event.target.value })}>
               </InputLogin>
               <InputLogin
                    type= 'password' 
                    placeholder='Contraseña'
                    label="password"
                    name="password"
                    value={formData.password}
                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}>

                    </InputLogin>
               <InputLogin
                    type= 'password' 
                    placeholder=' Confirma tu contraseña'
                    label="passwordConfirmation"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={(event) => setFormData({ ...formData, passwordConfirmation: event.target.value })}>
               </InputLogin>

               <PasswordWrapper>
                    
                    <ForgotPass>¿Ya eres miembro? Haz login</ForgotPass>
               </PasswordWrapper>_
               <ButtonLogin onClick={handleSignUp}>Sign Up</ButtonLogin>
               <ButtonGoogle><img src={GoogleIcon} style={{margin:' 0px 5px 0px 0px'}} alt ='Google icon'/>Sign up with Google</ButtonGoogle>
           </FormLogin>

       </FormWrapper>
       
   </LoginWrapper>
)
};

export default SignUp;