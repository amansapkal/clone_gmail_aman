import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { SelectsendMessageIsOpen } from "./features/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { SelectUserStatus, login } from "./features/userSlice";
import  Login  from "./components/Login";
import { auth } from "./firebase";

function App() {
  const sendMessage = useSelector(SelectsendMessageIsOpen);
  const user = useSelector(SelectUserStatus);
 const dispatch = useDispatch();

  useEffect(() => {
     auth.onAuthStateChanged((user)=>{
      dispatch(login({
         displayName : user.displayName,
         email : user.email,
         photoUrl  : user.photoURL
      }))
     })
     // eslint-disable-next-line 
  }, [ ])
  

  return (
    <BrowserRouter>
      {!user ? (
        <Login/>
      ) : (
        <div className="app">
          <Header />

          <div className="app_body">
            <SideBar />

            <Routes>
              <Route exact path="/" element={<EmailList />} />
              <Route exact path="/mail" element={<Mail />} />
            </Routes>
          </div>

          {sendMessage && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
