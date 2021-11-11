import React, { useEffect , useState } from 'react';
import axios from 'axios';

export const RepoInfo= ({name , username}) => {
    const [ repo, setRepo ] = useState([]);
    const [repoName , setRepoName ]=useState();

    useEffect(() => {
        const getRepos = async () => {
            try {
            const { data } = await axios.get(`https://api.github.com/repos/${username}/${name}/commits`);
                console.log(username);
                setRepo(data);
                setRepoName(name);         
            } catch (err) {
                console.log(err);           
            }
        }
        getRepos()
    },[name,username])


    return(
        <>
            <p>Number of commits:</p>
            <p>{ repoName }</p>
            <p>{repo.length}</p>

        </>

    )
}
