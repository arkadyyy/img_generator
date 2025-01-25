import React, { useState } from 'react'
import Form from './Form'
import InputContainer from './InputContainer'
import Label from './Label'
import Input from './Input'

const AuthForm = () => {
    const [authMode,setAuthMode] = useState('login')
    function handleSwitchAuthMode(){
        setAuthMode((prevAuthMode) => {
            if(prevAuthMode === 'login'){
                return 'signup'
            }else{
                return 'login'
            }
        })
    }
  return (
   <Form className='max-w-[25rem] mx-auto'>
    <InputContainer className=''>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id='email' />
    </InputContainer >
    <InputContainer >
        <Label htmlFor="password">Email</Label>
        <Input type="password" id='password' />
    </InputContainer >
    <p className='flex flex-col gap-3 mt-4' >
        <button className='bg-sky-400 text-black py-2 rounded-lg hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:text-stone-500' type='submit'>
            Submit
        </button>
        <button type='button' onClick={handleSwitchAuthMode}>
            {authMode ==='login' ? 'create a new user' : 'i already have an accout , log in instead'}
        </button>
    </p >
   
   </Form>
  )
}

export default AuthForm