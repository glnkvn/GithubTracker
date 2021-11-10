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
            try {
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
                console.log(username);
                setRepos(data)
                
            } catch (err) {
                dispatch(error(err))               
            }
        }
        getRepos()
    },[username])

    function repoNames(){
        const nameArr = [] ;
        for( let item in  repos ){
            nameArr.push(<p>{repos[item].name}</p>);
        }
        return nameArr;
    }
    
    return (
        <div> 
            <p>{username}</p> 
            <p>Number of Repos:{repos.length} </p>
            <p>Name of Repos: { repoNames() }</p>
        </div>
    )
}
 
    
    
    
    
    