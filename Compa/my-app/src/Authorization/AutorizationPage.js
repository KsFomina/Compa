import React, { useState } from "react";
import "./AuthorizationPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import {useAutorizationMutation} from "../redux/Compa.WebAPI"

const AutorizationPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/Tabs");
  };
  const [putAutorization] = useAutorizationMutation();

  /*const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate("/Tabs");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate();
  };*/
  return (
    <div>
      <form className="authorization-form" onSubmit={handleLogin}>
        <p className="header-style">Вход</p>
        <div>
          <img className="img-style" />
        </div>
        <div>
          <p className="p-style">логин</p>
          <input
            type="text"
            className="input-style"
            /*onChange={(e) => setLogin(e.target.value)}
            required*/
          />
        </div>
        <div>
          <p className="p-style">пароль</p>
          <input
            type="password"
            className="input-style"
            /*onChange={(e) => setPassword(e.target.value)}
            required*/
          />
        </div>
        <input type={"submit"} className="button-style" value="войти" />
      </form>
    </div>
  );
};

export default AutorizationPage;
