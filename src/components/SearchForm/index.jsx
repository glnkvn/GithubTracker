
import React, { useEffect , useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {


    const handleSubmit = (e) => {
        const username= e.target.value;
    }

    dispatch

    return(
        <>
        <p>Search a github username</p>     
        <form onSubmit={handleSubmit}>                
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="type a git username" required/>
            <button type="submit">Submit</button>          
        </form>
        </>
    )
}

export default SearchForm;