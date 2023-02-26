import React from 'react'

function Button({btnClass, nameBtn, linkBtn}) {
  return (
    <div>
      <a href={linkBtn} className={btnClass} >{nameBtn}</a>
    </div>
  )
}

export default Button
