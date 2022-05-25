import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './COMPONENTS/AUTHENTICATION PAGE/SignIn';
import SignUp from './COMPONENTS/AUTHENTICATION PAGE/SignUp';
import AddReview from './COMPONENTS/DASHBOARD/AddReview';
import DashBoardPage from './COMPONENTS/DASHBOARD/DashBoardPage';
import ManageAllOrders from './COMPONENTS/DASHBOARD/ManageAllOrders';
import MyOrders from './COMPONENTS/DASHBOARD/MyOrders';
import MyProfile from './COMPONENTS/DASHBOARD/MyProfile';
import PaymentPage from './COMPONENTS/DASHBOARD/PaymentPage';
import RequireAuth from './COMPONENTS/FIREBASE/RequireAuth';
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
          <Route path='/tool/:id' element={
              <RequireAuth>
                <PurChase></PurChase>
              </RequireAuth>
              }>
          </Route>
          <Route path='/payment/:id' element={
              <RequireAuth>
                <PaymentPage></PaymentPage>
              </RequireAuth>
              }>
          </Route>
          <Route path='/dashboard' element={
              <RequireAuth>
                <DashBoardPage></DashBoardPage>
              </RequireAuth>
              }>
                <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
                <Route path='addreview' element={<AddReview></AddReview>}></Route>
                <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
                <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
