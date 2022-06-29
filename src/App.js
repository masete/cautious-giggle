import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Birthday from './components/Birthday';
import Layout from './components/Layout'

function App() {
  return <>
            <Routes>
              <Route path='/' element={<Layout />} />
              <Route index element={<Birthday />} />
            </Routes>
         </>
}

export default App;
