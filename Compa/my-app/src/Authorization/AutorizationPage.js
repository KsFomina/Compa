import React, { useState } from "react";
import "./AuthorizationPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import {useAutorizationMutation} from "../redux/Compa.WebAPI"

const AutorizationPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Tabs");
  };
  const [putAutorization, data,isLoading,error] = useAutorizationMutation();
  const Autorization =async()=>{
    const login = document.getElementById("login").value;
    const password=document.getElementById("password").value;
    if (login && password){
      await putAutorization({
        login: login,
        password: password,
      })
      console.log(data);
    }

  }

  /*const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("/Tabs");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate();
  };*/
  if (isLoading){
    return <></>
  }
  if (error){

  }
  return (
    <div>
      <div className="authorization-form">
        <p className="header-style">Вход</p>
        <div>
          <img className="img-style" />
        </div>
        <div>
          <p className="p-style">логин</p>
          <input
            type="text"
            className="input-style"
            id="login"
            /*onChange={(e) => setLogin(e.target.value)}
            required*/
          />
        </div>
        <div>
          <p className="p-style">пароль</p>
          <input
            type="password"
            className="input-style"
            id="password"
            /*onChange={(e) => setPassword(e.target.value)}
            required*/
          />
        </div>
        <button className="button-style" onClick={async () => await Autorization()} />
        {error? <div>dpoawfp </div>:<></>}
      </div>
    </div>
  );
};

export default AutorizationPage;
