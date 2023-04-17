import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {ClosesendMessageIsOpen} from '../features/mailSlice'

const SendMail = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit,   formState: { errors }} = useForm();

  const onSubmit = (formData) =>{
    console.log(formData);
  }

  const handleClick = ()=>{
     dispatch(ClosesendMessageIsOpen());
  }

  return (
    <div className="sendmail">
      <div className="sendmail-header">
        <p>New Message</p>
        <IconButton className="close-btn" onClick={handleClick}>
          <CloseIcon />
        </IconButton>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
         
          <input name="to" placeholder="To" type="email"   {...register('to', { required: true })} />
          {errors.to && <p className="sendmail_check">To field is required</p>}

          <input name = "subject" placeholder="Subject" type="text" {...register('subject', { required: true })} />
          {errors.subject && <p className="sendmail_check">Subject field is required</p>}

          <input name = "message" className="send-message" placeholder="Message" type="text" {...register('message', { required: true })} />
          {errors.message && <p className="sendmail_check">Message field is required</p>}
        
          <div className="sendmail-options">
           
            <Button className="send_btn" type="submit">Send</Button>
           
          </div>
     
      </form>


    </div>
  );
};

export default SendMail;
