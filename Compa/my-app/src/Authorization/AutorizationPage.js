import React, { useState } from "react";
import "./AuthorizationPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import {useAutorizationMutation} from "../redux/Compa.WebAPI"

const AutorizationPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Tabs");
  };
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [putAutorization, data,isLoading, isError] = useAutorizationMutation();
  const Autorization =async()=>{
    // const login = document.getElementById("login").value;
    // const password=document.getElementById("password").value;
    console.log(login, password)
    if (login && password){
      await putAutorization({
        login: login,
        password: password,
      }).then((res)=>{   
        if (res.data){
          localStorage.setItem("user", res.data);
        console.log(res.data.userId);
        navigate("/Tabs");
      }})

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
  if (isError){
    console.log("Неверный логин или пароль");
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
            onChange={(e) => setLogin(e.target.value)}
            //required
          />
        </div>
        <div>
          <p className="p-style">пароль</p>
          <input
            type="password"
            className="input-style"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            //required
          />
        </div>
        <button className="button-style" onClick={async () => await Autorization()}>войти</button>        
      </div>
    </div>
  );
};

export default AutorizationPage;
