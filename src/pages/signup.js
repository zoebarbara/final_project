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

function SignUp() {
return(
   <LoginWrapper>
       <SignUpImage></SignUpImage>
       <FormWrapper>
           <FormLogin>
               <ParLogin>Welcome stranger!</ParLogin>
               <H3Login>Create your new account</H3Login>
               <InputLogin placeholder={'Nombre'}></InputLogin>
               <InputLogin placeholder={'Apellidos'}></InputLogin>
               <InputLogin placeholder={'Fecha de nacimiento'}></InputLogin>
               <InputLogin placeholder={'Email'}></InputLogin>
               <InputLogin placeholder={'Repite tu email'}></InputLogin>
               <InputLogin placeholder={'Password'}></InputLogin>
               <InputLogin placeholder={'Confirma tu Password'}></InputLogin>
               <PasswordWrapper>
                    <ForgotPass>¿Ya eres miembro? <a>Haz login</a></ForgotPass>
               </PasswordWrapper>
               <ButtonLogin>Sign Up</ButtonLogin>
               <ButtonGoogle><a><img src={GoogleIcon} style={{margin:' 0px 5px 0px 0px'}}/></a>Sign up with Google</ButtonGoogle>
           </FormLogin>

       </FormWrapper>
       
   </LoginWrapper>
)
};

export default SignUp;