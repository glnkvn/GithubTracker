import React, { useEffect , useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


export const Git= ({username}) => {

    const [ repos, setRepos ] = useState([]);


    useEffect(() => {
        const getRepos = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/${username}/repos`);
                setRepos(data)
            } catch (err) {
                console.log(err);
            }
        }
        getRepos()
    },[username])

    return (
        <div>{repos.length}</div>
    )
}