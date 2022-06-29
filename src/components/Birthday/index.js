import './index.scss'
// import { useState } from 'react';
import data from './data'

const Birthday = (props) =>{
    const people = () =>{
        {props.name} = props;
    }
    return(
        <main>
            <div className='container'>
                <h2>Todays birthday</h2>
                 <h5> {data.name} </h5>
                <button>Clear All</button>
            </div>
        </main>
    )
};

export default Birthday