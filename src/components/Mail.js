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

const Mail = () => {
  const navigate = useNavigate();
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
            <h2>Subject</h2>
             <LabelImportantIcon className='labelicon' />
             <p>title</p>
             <p className='email_time'>10pm</p>
          </div>
          <div className="email_message">
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga nisi facere suscipit ipsum, laboriosam voluptates provident molestias aliquid in illum praesentium, accusantium quisquam odit quo! Explicabo repellendus consectetur odit dolorum ipsum illo et quos optio sapiente. Molestias repellat tempora voluptates neque optio incidunt aspernatur, natus illo eos atque perferendis voluptate dignissimos quasi hic culpa ea quia laudantium minima officia doloremque! Vel perferendis ratione maxime atque consequatur necessitatibus aliquam asperiores neque, illo ut placeat, sequi doloribus quis sunt tempore laboriosam veniam nesciunt optio obcaecati illum repudiandae, provident tenetur eveniet! Maiores ad ipsum, cupiditate laboriosam doloribus consequatur id eius. Alias, similique.</p>
          </div>
        </div>
    </div>
  )
}

export default Mail