import React, { useEffect , useState } from 'react';


export const RepoInfo= ({name , username}) => {
    const [ repo, setRepo ] = useState([]);

    useEffect(() => {
        const getRepos = async () => {
            try {
            const { data } = await axios.get(`https://api.github.com/users/${username}/${name}/commits`);
                console.log(username);
                setRepo(data)              
            } catch (err) {
                console.log(err);           
            }
        }
        getRepos()
    },[name,username])


    return(
        <>
            <p>{repo.length}</p>

        </>

    )
}