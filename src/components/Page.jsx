import React from 'react';
import Card from './Card';

const Page = ({items}) => {
    return (
        <section className='container'>
            <div className='spacestagram'>
                <h1>Spacestagram</h1>
                <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
            </div>
            <div>
                {items.map((item, index) => {
                    return <Card 
                        id = {index}
                        date = {item.date}
                        title = {item.title}
                        img = {item.thumbnail_url ? item.thumbnail_url : item.hdurl}
                        caption = {item.explanation}
                    /> 
                })}               
            </div>
        </section>
    )
}

export default Page; 