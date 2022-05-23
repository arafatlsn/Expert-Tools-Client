import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './COMPONENTS/AUTHENTICATION PAGE/SignIn';
import SignUp from './COMPONENTS/AUTHENTICATION PAGE/SignUp';
import HomePage from './COMPONENTS/HOME PAGE/HomePage';
import NavbarComp from './COMPONENTS/NAVBAR/NavbarComp';
import PurChase from './COMPONENTS/PURCHASE PAGE/PurChase';

function App() {
  return (
    <div className='lg:w-[75%] mx-auto'  style={{fontFamily: 'Josefin Sans'}}>
      <NavbarComp></NavbarComp>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/tool/:id' element={<PurChase></PurChase>}></Route>
        </Routes>
    </div>
  );
}

export default App;
