import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import {   SelectsendMessageIsOpen } from './features/mailSlice'
import { useSelector } from "react-redux";

function App() {
  const sendMessage  = useSelector(SelectsendMessageIsOpen);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="app_body">
          <SideBar />
           
          <Routes>
            <Route exact path="/" element={<EmailList />} />
            <Route exact path="/mail" element={<Mail />} />
          </Routes>
        </div>

        {sendMessage && <SendMail/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
