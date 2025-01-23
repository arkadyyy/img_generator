import React from 'react'

const Form = ({children}) => {
  return (
    <div className='bg-stone-700 p-4 rounded-lg flex flex-col gap-3'>
        {children}
    </div>
  )
}

export default Form