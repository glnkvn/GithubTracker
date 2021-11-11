import React, { useEffect , useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../actions'
import './style.css'

export const SearchForm = () => {
    
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target[0].value;
        console.log(username)
        dispatch(updateUsername(username))
    }


    return(
        <div id='container'>
        <div className='grid-element'>
            <h3>Search a github username</h3>     
        </div>

        <div className='grid-element'>
            <form onSubmit={handleSubmit}>                
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="type a git username" required/>
                <button type="submit">Submit</button>          
            </form>
        </div>

        </div>
    )
}

