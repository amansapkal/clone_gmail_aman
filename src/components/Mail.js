import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PrintIcon from '@mui/icons-material/Print';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {SelectSelectedMail} from '../features/mailSlice'

const Mail = () => {
  const navigate = useNavigate();
  const mail = useSelector(SelectSelectedMail);
  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="tools_left">
          <IconButton onClick={()=>navigate('/')}>
            <ArrowBackIcon/>
          </IconButton>
          
          <IconButton >
            <MoveToInboxIcon/>
          </IconButton>

          <IconButton >
            <ErrorIcon/>
          </IconButton>

          <IconButton >
            <DeleteIcon/>
          </IconButton>

          <IconButton >
            <EmailIcon/>
          </IconButton>

          <IconButton >
            <WatchLaterIcon/>
          </IconButton>

          <IconButton >
            <CheckCircleIcon/>
          </IconButton>

          <IconButton >
            <LabelImportantIcon/>
          </IconButton>

          <IconButton >
            <MoreVertIcon/>
          </IconButton>
        </div>

        <div className="tools_right">
          
        <IconButton >
            <UnfoldMoreIcon/>
          </IconButton>
          
        <IconButton >
            <PrintIcon/>
          </IconButton>
          
        <IconButton >
            <ExitToAppIcon/>
          </IconButton>
        </div>
      </div>
        <div className="email_body">
          <div className="email_header">
            <h2>{mail?.subject}</h2>
             <LabelImportantIcon className='labelicon' />
             <p>{mail?.title}</p>
             <p className='email_time'>{mail?.time}</p>
          </div>
          <div className="email_message">
             <p> {mail?.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Mail