import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-2'>
        <button className='px-4 py-1 cursor-pointer rounded-md bg-gray-300'>{name}</button>
    </div>
  )
}

export default Button