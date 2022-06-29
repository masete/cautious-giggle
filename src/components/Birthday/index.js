import './index.scss'
// import { useState } from 'react';
import datas from './data'

const Birthday = () =>{

    return(
        <main>
            <div className='container'>
                
                {datas.map((data) => {
                    const { name, age, image } = data
                    return <Person data={data.age}></Person>
                })}
                console.log(data)
                
            </div>
        </main>
    )
}

const Person = (props) =>{
    const { name, age, image } = props.data;
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