import React from 'react'
import './SideBarOption.css'

const SideBarOption = ({Icon , title , number,selected}) => {
  return (
    <div className={`sidebaroption ${selected?'selected--active':''}`}>
        <Icon/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default SideBarOption