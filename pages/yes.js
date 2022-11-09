import React, { useEffect, useState } from 'react';
import Layout from '@components/Layout/Layout'


const Yes = () => {

    const [ answer, setAnswer] = useState([]);

    function handleClick() {
        let number = Math.floor(Math.random() * (2 - 1 + 1)) + 1
        if (number == 1) {
            setAnswer("YES");
        } else {
            setAnswer("NO");
        }
        
    }

    return (
        <Layout>
            <h1>Say Your Question :)</h1><br></br>
            <div className="answer"> {answer} </div>
            <button onClick={handleClick}> Press Here </button>
        </Layout>
    )
}

export default Yes;