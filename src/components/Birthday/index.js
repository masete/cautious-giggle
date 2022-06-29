import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { useState } from 'react';
// import data from './data';

const people= [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ];

const Birthday = () =>{

    return(
        <main>
            <div className='container'>
                
                {people.map((data) => {
                    return <Person key={data.id} data={data}></Person>
                })}
                
            </div>
        </main>
    );
}

const Person = (props) =>{
    const { name, age, image } = props.data;
    return(
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <img src={image} alt='' />
        </div>
    )
}
;

export default Birthday