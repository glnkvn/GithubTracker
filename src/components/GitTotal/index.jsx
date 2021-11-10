import React from 'react';
import { Git } from '../Git';
import { useSelector } from 'react-redux';


export const GitTotal = () => {
    const gitTotal = useSelector((store) => store.username);
    
    const renderGitTotal = () => gitTotal.map((a, i) => <Git key={i} username={a}/>);
    

    return (
        <main id="gitGrid">
            <h2>Github User</h2>
            <article>
                {renderGitTotal()}
                {/* <Git username={{gitTotal}} /> */}
            </article>
        </main>
    )
}