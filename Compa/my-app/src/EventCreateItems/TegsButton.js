import React, {useState} from "react";
import './TegsButton.css'

const TegsButton = () => {
    const [isOpen, setIsOpen]= useState(false);
    const Dropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) =>{
        console.log('выбрать', option);
        setIsOpen(false);
    }

    return(
        <div >
           <button onClick={Dropdown} className="buttonTegs">
                <text class="textButton">выбрать</text>
            </button>
            {
                isOpen && (
                <div className="dropdown-style">
                    <ul className="ul-style">
                    <li onClick={() => handleOptionClick('Option 1')} className="li-style">Option1</li>
                        <li onClick={() => handleOptionClick('Option 2')} className="li-style">Option2</li>
                        <li onClick={() => handleOptionClick('Option 3')} className="li-style">Option3</li>
                        <li onClick={() => handleOptionClick('Option 4')} className="li-style">Option4</li>
                    </ul>
                </div>
                )
            }
            
        </div>
    );
}

export default TegsButton;