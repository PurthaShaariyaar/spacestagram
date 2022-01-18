import React from 'react';
import logo from '../images/logo.svg'

const Loading = () => {
    return (
        <div className='loading'>
            <h1>Loading...</h1>
            <img 
                className='nasa-icon'
                src = {logo}
                alt = 'loading'
            />
        </div>
    );
}

export default Loading; 