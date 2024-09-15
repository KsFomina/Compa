import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyPress = (event) => {
       if(event.key === 'Enter'){
        event.preventDefault();
        console.log=('Поисковой запрос', query);
       }
    };

    return(
        <div className='search-style'>
            <form onSubmit={handleKeyPress} className='search-form'>
                <input 
                className='search-input'
                type = "text"
                value = {query}
                onChange = {handleChange}
                placeholder='Поиск...'
                />
            </form>
        </div>
    );
};

export default SearchBar;