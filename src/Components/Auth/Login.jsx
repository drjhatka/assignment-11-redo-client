import React, { useContext } from 'react';
import LoginTemplate from '../HTMLUtilities/Auth/LoginTemplate';
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {Alert} from '../HTMLUtilities/Alerts/Alert';
import { validateInput } from '../HTMLUtilities/Auth/LoginValidation';
import axios from 'axios';

const Login = () => {
    const {doNativeLogin, user, doExternalLogin, setUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    
    const loginHandler =async()=>{
        const email =event.target.email.value
        const password = event.target.password.value

        event.preventDefault() 
        if(validateInput(email, password) ){
        //...Do password based login
            doNativeLogin(email, password).
            then(userCred=>{
                console.log('Cred ',userCred)
                setUser(userCred) 
            //create JWT token on the server
                Alert('Success','Login Success','success')      
            }).
            catch(error =>{
                Alert('Login Error',error.message,'error')
            })
            axios.post('/jwt',{userEmail:email}, {withCredentials:true}).then(res=>console.log('res tok ',res))

            navigate('/',{replace:true})
            //if(location.state){ navigate(location.state)}           
    }
    else{
        return Alert('Input Error','Password Must be 6 digits long and Have one uppercase character','error')
    }

    
}
    const externalLogin =()=>{
        doExternalLogin(googleProvider).then((userCredentials)=>{
            //setUser(userCredentials.user)
        }).catch(error=>{
            Alert('Error', error.message, 'error')
        })
        navigate('/',{replace:true})

    }
    return (
        <div>
            <LoginTemplate fieldNames={['email','password']} lebel={'Login'} typeNames={['email','password']} loginHandler={loginHandler} externalLogin={externalLogin} ></LoginTemplate>
        </div>
    );
}

export default Login