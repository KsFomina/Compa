import React from 'react';
import './AuthorizationPage.css'


const AutorizationPage = () => {
return(
    <div>
        
        
        <form className="authorization-form">
            <p className='header-style'>Вход</p>
            <div>
                <img className='img-style'/> 
            </div>
            <div>
            <p className='p-style'>логин</p>
            <input type="text" className='input-style'/>
           </div>
           <div>
                <p className='p-style'>пароль</p>
                <input type="password" className='input-style'/>
           </div>
            <input type={"submit"} className='button-style' value ="войти"/>
        </form>
    </div>
 

);
}

export default AutorizationPage;