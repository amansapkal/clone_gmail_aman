import {  createSlice } from '@reduxjs/toolkit';
 
export const mailSlice = createSlice({
    name : 'mail',
   initialState:  {
    sendMessageIsOpen : false
   },

   reducers :{
         OpensendMessageIsOpen : (state) =>{
              state.sendMessageIsOpen = true;
           }
            ,
         ClosesendMessageIsOpen : (state) =>{
              state.sendMessageIsOpen = false;
           }
   }
});

export const { OpensendMessageIsOpen, ClosesendMessageIsOpen } = mailSlice.actions;

 export const SelectsendMessageIsOpen = (state) => { return state.mail.sendMessageIsOpen};

export default mailSlice.reducer;
