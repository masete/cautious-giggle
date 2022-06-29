import './index.scss'
// import { useState } from 'react';
import data from './data'

const Birthday = () =>{

    return(
        <main>
            <div className='container'>
                <Person 
                // <h2>Todays birthday</h2>
                 name={data.name} 
                
                />
            </div>
        </main>
    )
}

const Person = (props) =>{
    const {name, age, image } = props;
    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.image}</h3>
        </div>
    )
}
;

export default Birthday