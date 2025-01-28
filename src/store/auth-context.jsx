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
function saveToken(token){
    localStorage.setItem('token',token)
    localStorage.setItem('tokenExpiration',new Date(Date.now() + 60 * 60 * 1000).toISOString())
}
// HOW DO WE PREVENT XSS ATTACKS IF HTTPONLY DOES NOT PREVENT IT ???
//TOKEN FETCH FROM LOCALSTORAGE
// we can do this instead of using useeffect beacuse localstorage is synchornous
// using useeffect will cause flickering

const storedToken = localStorage.getItem('token')
const storedTokenExpiration = localStorage.getItem('tokenExpiration')

let initialToken = null

if(storedToken && new Date(storedTokenExpiration) > new Date()){
    initialToken = storedToken
}else{
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
}


export function AuthContextProvider({children}){
    const [token,setToken] = useState(initialToken)

    async function signup(email,password){
        
            const response = await fetch('http://localhost:3000/signup'
                                        ,{method : 'POST',
                                            headers : {'Content-Type' : 'application/json'},
                                                body : JSON.stringify({email,password})
                                        })

            const resData = response.json()                                
            if(!response.ok) throw new Error(resData.message || 'creating user failed')   
            setToken(resData.token)    
            saveToken(resData.token)                      
        
    
        

    }
    async function login(email,password){

            const response = await fetch('http://localhost:3000/login'
                                        ,{method : 'POST',
                                            headers : {'Content-Type' : 'application/json'},
                                                body : JSON.stringify({email,password})
                                        })

            const resData = response.json()                                
            if(!response.ok) throw new Error(resData.message || 'log in failed')   
            setToken(resData.token)     
            saveToken(resData.token)                                     
        
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