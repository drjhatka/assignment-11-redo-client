import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.config';
import axios from 'axios';

export const AuthContext = createContext({})
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    const doNativeRegister = async (name, photoURL, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password).then(user => {
            updateUserInfo(name, photoURL)
            setUser(user)
        })
    }
    const updateUserInfo = (name, photoURL) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                //console.log(error.message)
            })
        }//end update user info 
   

    const doNativeLogin = async(email, password) => {
            return signInWithEmailAndPassword(auth, email, password).then(()=>setLoading(false))
        }
    const doExternalLogin = async ( provider) => {
        //set user token as jwt token
        return signInWithPopup(auth,provider).then(user=>{
            console.log('Token G ',user.user.email)
            axios.post('/jwt',{userEmail:user.user.email}, {withCredentials:true})
        })
    }

    const doLogout = async ()=>{
        //clear cookies
        axios.post('/logout', {},{withCredentials:true}).then((data)=>console.log(data))
        return signOut(auth).then(()=>setLoading(false))
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            
                setUser(currentUser)
                setLoading(false)            
        })
        return ()=>unsubscribe()
    },[user])

        const authInfo = {
            user,     
            loading,       
            setUser,
            setLoading,
            doNativeRegister,
            updateUserInfo,
            doNativeLogin,
            doExternalLogin,
            doLogout,
        }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;