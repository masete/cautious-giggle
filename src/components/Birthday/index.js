import './index.scss'
import data from './data'

const Birthday = () =>{
    return(
        <main>
            <div className='container'>
                <h2>Todays birthday</h2>
                People = {data}
                <button>Clear All</button>
            </div>
        </main>
    )
};

export default Birthday