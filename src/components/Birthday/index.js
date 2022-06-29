import './index.scss';
import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
// import { useState } from 'react';
import infor from './data';


const Birthday = () =>{

    const [people, setPeople] = useState(infor)
    return(
        <main>
            <section className='container'>
                <h3>Birthdays today</h3>
                {infor.map((data) => {
                    return <Person key={data.id} data={data}></Person>
                })}

                <button onClick={() => setPeople([])}>Clear List</button>
                
            </section>
        </main>
    );
}

const Person = (props) =>{
    const { name, age, image } = props.data;
    return(
        <article className='data'>
            
            <img src={image} alt='nae' />
            <div>
                <h4>{name}</h4>
                <p>{age} Years</p>
            </div>
            
        </article>
    )
}
;

export default Birthday