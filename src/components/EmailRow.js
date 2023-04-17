import React from 'react'
import './EmailRow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { IconButton } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

const EmailRow = ({  title , subject , description,time }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate('/mail')}}  className='emailrow'> 
      <div className="email_icons">
        <CheckBoxOutlineBlankIcon/>
        <IconButton>
            <StarBorderIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantIcon/>
        </IconButton>
      </div>
      <div className="email_title">
          <h4>{title}</h4>

      </div>

      <div className="email_message">
        <h4>{subject} 
            <span>{"-" + description}</span>
        </h4>
        
      </div>
      <div className="email_time">
         {time}
        
      </div>
        
    </div>
  )
}

export default EmailRow