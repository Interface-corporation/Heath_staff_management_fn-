import React from 'react'

const Button = ({type='button',children,className , props}) => {
  return (
    <button className={`${className}`} type={type} {...props}>
        {children}
    </button>
  )
}

export default Button