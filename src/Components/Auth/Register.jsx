import React, { useContext } from 'react';
import LoginTemplate from '../HTMLUtilities/Auth/LoginTemplate';
import Alert from '../HTMLUtilities/Alerts/Alert';
import { validateInput } from '../HTMLUtilities/Auth/LoginValidation';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Register = () => {
    const { doNativeRegister, setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const doRegister = () => {
        event.preventDefault()
        const validate = validateInput(event?.target.email.value, event?.target.password.value)
        console.log(validate)
        if (validate) {
            doNativeRegister(
                event?.target.name.value,
                event?.target.photoURL.value,
                event?.target.email.value,
                event?.target.password.value).
                then(userCredentials=>{
                    navigate('/', {replace:true})  
                    return Alert('Success','User Added Successfully!','success') 

                }).catch(error =>{
                    return Alert('Signup Error',error.message,'error') 
                })   
        }
        else{
            return  Alert('Password Error','Password validation failed!','error')    
        }
    }//end event handler

    return (
        <div>
            <LoginTemplate fieldNames={['name', 'photoURL', 'email', 'password']} typeNames={['text', 'text', 'email', 'password']} loginHandler={doRegister} lebel={'Register'}></LoginTemplate>
        </div>
    )
};

export default Register;