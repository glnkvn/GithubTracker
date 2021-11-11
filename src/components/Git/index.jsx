import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import { error } from '../../actions'
import { useDispatch } from 'react-redux'



export const Git= ({username}) => {
    const dispatch = useDispatch(); 
    const [ repos, setRepos ] = useState([]);
    
    useEffect(() => {
        const getRepos = async () => {
            if (username) {
                try {
                const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
                    console.log(username);
                    setRepos(data)
                    
                } catch (err) {
                    dispatch(error(err))               
                }
            }
        }
        getRepos()
    },[username])
    console.log(repos)



    return (
        <div> 
            <p>{username}</p> 
            <p>Number of Repos:{repos.length} </p>
            {/* <p>Name of Repos:{repos[0]['name']} </p> */}
        </div>
    )
}
 
    
    
    
    
    