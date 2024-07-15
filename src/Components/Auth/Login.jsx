import React, { useContext } from 'react';
import LoginTemplate from '../HTMLUtilities/Auth/LoginTemplate';
import { AuthContext } from '../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Alert from '../HTMLUtilities/Alerts/Alert';

const Login = () => {
    const {doNativeLogin, user, doExternalLogin, setUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const loginHandler =()=>{
        event.preventDefault() 
        if(validateInput(event.target.email.value, event.target.password.value) ){
        //...Do password based login
            doNativeLogin(event.target.email.value, event.target.password.value).
            then(user=>{
                setUser(user) 
                return <Alert title={'Success','Logged In Successfully', 'success'}></Alert>
            }).
            catch(error =>{
                return <Alert title={'Success','Logged In Successfully', 'success'}></Alert>
            })
            //create JWT token on the server


            //if(location.state){ navigate(location.state)}
           
             navigate('/',{replace:true})
    }
    const externalLogin =()=>{

    }
    return (
        <div>
            <LoginTemplate fieldNames={['email','password']} lebel={'Login'} typeNames={['email','password']} loginHandler={loginHandler} externalLogin={externalLogin} ></LoginTemplate>
        </div>
    );
};

export default Login;