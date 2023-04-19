import React, { useEffect ,useState} from 'react'
import './EmailList.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
import {db} from '../firebase'
 
const EmailList = () => {
  
    const   [emails, setEmails] = useState([]);


      useEffect(  () => {
         db.collection('emails')
       .orderBy('timestamp','desc')
        .onSnapshot((snapshot) =>{
            setEmails(
              snapshot.docs.map((doc) =>({
                id: doc.id,
                data : doc.data()
              }
              ))
            )
        })
     }, [])
     
    return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="left_settings">

                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>


            <div className="right_settings">

                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>

                <IconButton>
                    <ChevronRightIcon />
                </IconButton>

                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>

        </div>

        <div className="section_buttons">
            <Section Icon={MailIcon} title={"Primary"} color={'red'} selected={true}/>
            <Section Icon={GroupIcon} title={"Social"} color={'green'}/>
            <Section Icon={LocalOfferIcon} title={"Promotion"} color={'aqua'}/>
        </div>
 
        <div className="email_list">
            {
                emails.map(({id,data})=>(
                    <EmailRow id={id} key={id} title={data.to} subject={data.subject} description={data.message} time={new Date(data.timestamp?.seconds*1000).toString()}/>
                )
                    
                )
            }
             
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
             <EmailRow id={1} title={'CodeStudio'} subject={"contest"} description={"attend the contest at night"} time={"10 Apr"}/>
           
        </div>

    </div>
)
}
export default EmailList