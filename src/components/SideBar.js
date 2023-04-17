import React from "react";
import { Button,IconButton } from "@mui/material";
import "./SideBar.css";
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from "./SideBarOption";
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import CallIcon from '@mui/icons-material/Call';
import { useDispatch } from "react-redux";
import {OpensendMessageIsOpen} from '../features/mailSlice'

const SideBar = () => {
  const dispatch = useDispatch();
   
  const handleClick = ()=>{
      dispatch(OpensendMessageIsOpen());
  }
  return (
    <div className="sidebar">
      <Button onClick={handleClick}  className="sidebar_compose" startIcon={<AddIcon />} >Compose</Button>
      <SideBarOption Icon={MailIcon} title={"Inbox"} number= {54} selected={true} />
      <SideBarOption Icon={StarIcon} title={"Starred"} number= {45} />
      <SideBarOption Icon={AccessTimeIcon} title={"Snoozed"} number= {45} />
      <SideBarOption Icon={LabelImportantIcon} title={"Important"} number= {45} />
      <SideBarOption Icon={NearMeIcon} title={"Sent"} number= {45} />
      <SideBarOption Icon={NoteIcon} title={"Draft"} number= {45} />
      <SideBarOption Icon={ExpandMoreIcon} title={"More"} number= {45} />

      <div className="sidebar__footer">
         <div className="footer_icons">
          <IconButton>
          <PersonIcon/>
          </IconButton>
          
          <IconButton>
          <DuoIcon/>
          </IconButton>
          
          <IconButton>
          <CallIcon/>
          </IconButton>
         </div>
      </div>

    </div>
    
  );
};

export default SideBar;
