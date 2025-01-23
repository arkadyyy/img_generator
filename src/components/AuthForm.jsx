import React, { useState } from 'react'
import Form from './Form'

const AuthForm = () => {
    const [authMode,setAuthMode] = useState('login')
  return (
   <Form>
    <p>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' />
    </p>
    <p>
        <label htmlFor="password">Email</label>
        <input type="password" id='password' />
    </p>
    <p>
        <button type='submit'>
            Submit
        </button>
        <button>

        </button>
    </p>
   
   </Form>
  )
}

export default AuthForm