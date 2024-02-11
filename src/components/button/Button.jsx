import React from 'react'
// import './button.css'

const Button = ({ title, type, className, onClick }) => {
  return (
    <div>
        <button className={className} type={type} onClick={onClick}>
      {title}
    </button>

    </div>
  )
}

export default Button