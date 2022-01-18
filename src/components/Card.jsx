import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const Card = ({title, date, caption, img}) => {

    const [like, setLike] = useState('false');
    
    return (
        <article className='card'>
            <div>
                <img 
                    className='img-container'
                    src = {img} 
                    alt = {title}
                /> 
            </div>
            <div className='information'>
                <div className='heart'>
                    {like ? <FaRegHeart /> : <FaHeart color="red" /> }
                </div>
                <h3>{title} - {date}</h3>
                <p>{caption}</p>
                <button 
                    className='like-button'
                    type = "button"
                    onClick={() => setLike(!like)}
                 >
                {like ? 'Like' : 'Unlike'} 
                </button>
            </div>
        </article>
    )
}

export default Card;


