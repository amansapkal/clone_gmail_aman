import React from 'react'
import './Section.css'
 

const Section = ({Icon,title, color,selected}) => {
  return (
    <div className={`section_box ${selected?'selected-active':''}`} style={{color:`${selected && color}`, borderBottom:`3px solid ${color}`}}>
        <Icon/>
        <h4>{title}</h4>
        
    </div>
  )
}

export default Section