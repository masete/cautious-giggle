import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout'

function App() {
  return <>
            <Routes>
              <Route path='/' element={<Layout />} />
            </Routes>
         </>
}

export default App;
