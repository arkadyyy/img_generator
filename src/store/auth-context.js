import { createContext,use, useState } from "react";

const AuthContext = createContext({
    token : null,
    signup : (email,password) => {},
    login : (email,password) => {},
    logout : () => {}

})

export function useAuthContext(){
    const authCtx = use(AuthContext);
    if(!authCtx) throw new Error('useAuthContext must be used within an AuthProvider')
    
    return authCtx    

}

export function AuthContextProvider({children}){
    const [token,setToken] = useState()

    async function signup(email,password){
        try {
            const response = await fetch('http://localhost:3000/signup'
                                        ,{method : 'POST',
                                            headers : {'Content-Type' : 'application/json'},
                                                body : JSON.stringify({email,password})
                                        })

            const resData = response.json()                                
            if(!response.ok) throw new Error(resData.message || 'creating user failed')                             
        } catch (error) {
            console.error(error)
        }

    }
    function login(email,password){

    }
    function logout(){

    }
    const contextValue = {
        token,
        signup,
        login,
        logout
    }
    return <AuthContext value = {contextValue}>{children}</AuthContext>
}