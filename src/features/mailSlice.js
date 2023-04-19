import {  createSlice } from '@reduxjs/toolkit';
 
export const mailSlice = createSlice({
    name : 'mail',
   
   initialState:  {
      selectedMail : null,
    sendMessageIsOpen : false
   },

   reducers :{
         selectMail: (state,action) =>{
            state.selectedMail = action.payload
         } ,
         OpensendMessageIsOpen : (state) =>{
              state.sendMessageIsOpen = true;
           }
            ,
         ClosesendMessageIsOpen : (state) =>{
              state.sendMessageIsOpen = false;
           }
   }
});

export const { selectMail, OpensendMessageIsOpen, ClosesendMessageIsOpen } = mailSlice.actions;

 export const SelectsendMessageIsOpen = (state) => { return state.mail.sendMessageIsOpen};
 export const SelectSelectedMail = (state) => { return state.mail.selectedMail};

export default mailSlice.reducer;
