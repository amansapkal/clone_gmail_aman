import React from 'react'
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

const EmailList = () => (
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
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next levelLorem ipsum, dolor sit amet consectetur adipisicing elit. Vel molestias adipisci odit omnis deserunt maiores.'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
            <EmailRow title={"CodeStudio"} subject={'Weekend Contest 69!!!'} description={'Ready to take your coding to next level'} time={"10 Apr"}/>
        </div>

    </div>
)

export default EmailList