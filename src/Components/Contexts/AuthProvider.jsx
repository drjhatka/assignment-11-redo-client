import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.config';

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
        return signInWithPopup(auth,provider)
    }

    const doLogout = async ()=>{
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