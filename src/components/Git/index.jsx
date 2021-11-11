
import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import { error } from '../../actions';
import { useDispatch } from 'react-redux';
// import { uuid } from 'uuidv4';
import { RepoInfo } from '../RepoInfo';

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

    function repoNam(){
        const nameArr = [] ;
        for( let item in  repos ){
            nameArr.push(<p>{repos[item].name}</p>);
            console.log(username);
            <RepoInfo key={item} name={repos[item].name}  username={username}/>
        }

        
        return nameArr;
    }
    // gitTotal.map((a, i) => <Git key={i} username={a}/>);
   const repoNames = () => repos.map((a, i) => <RepoInfo key={i} name = {a.name} username={username} />);

    return (
        <div> 
            <p>{username}</p> 
            <p>Number of Repos:{repos.length} </p>
            <p>Name of Repos: {repoNames()}</p>
            {/* <p>Name of Repos: { repoNam() }</p> */}
        </div>
    )
}
 
    
    
    
