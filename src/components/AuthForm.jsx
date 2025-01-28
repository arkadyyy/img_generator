import React, { useState,useActionState } from 'react'
import Form from './Form'
import InputContainer from './InputContainer'
import Label from './Label'
import Input from './Input'
import { useAuthContext } from '../store/auth-context'

const AuthForm = () => {
    const authCtx = useAuthContext()
    const [authMode,setAuthMode] = useState('login')
    const [error,setError] = useState()
    function handleSwitchAuthMode(){
        setAuthMode((prevAuthMode) => {
            if(prevAuthMode === 'login'){
                return 'signup'
            }else{
                return 'login'
            }
        })
    }
    async function submitAction(prevState,formData){
        setError(null)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            if(authMode === 'signup'){
                await authCtx.signup(email,password)
            }
            if(authMode === 'login'){
                await authCtx.login(email,password)
            }
        } catch (error) {
           setError(error.message)
        }
      
        
    }
    const [,action,isPending] =  useActionState(submitAction)
  return (
   <Form action = {action} className='max-w-[25rem] mx-auto'>
    <InputContainer className=''>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id='email' name = 'email' />
    </InputContainer >
    <InputContainer >
        <Label htmlFor="password">Email</Label>
        <Input type="password" id='password' name = 'password' />
    </InputContainer >
    {error && <p className='text-red-300 mt-3'>{error}</p>}
    <p className='flex flex-col gap-3 mt-4' >
        <button className='bg-sky-400 text-black py-2 rounded-lg hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:text-stone-500' type='submit'>
           { !isPending && authMode === 'login' ? 'Log in' : 'Sign up'}
           {isPending && 'Submitting..'}
        </button>
        <button disabled = {isPending} type='button' onClick={handleSwitchAuthMode}>
            {authMode ==='login' ? 'create a new user' : 'i already have an accout , log in instead'}
        </button>
    </p >
   
   </Form>
  )
}

export default AuthForm