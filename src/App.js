import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './COMPONENTS/HOME PAGE/HomePage';
import NavbarComp from './COMPONENTS/NAVBAR/NavbarComp';

function App() {
  return (
    <div className='lg:w-[75%] mx-auto' style={{fontFamily: 'Josefin Sans'}}>
      <NavbarComp></NavbarComp>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
        </Routes>
    </div>
  );
}

export default App;
