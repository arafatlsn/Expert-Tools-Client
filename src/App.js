import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './COMPONENTS/AUTHENTICATION PAGE/SignIn';
import SignUp from './COMPONENTS/AUTHENTICATION PAGE/SignUp';
import AddProduct from './COMPONENTS/DASHBOARD/AddProduct';
import AddReview from './COMPONENTS/DASHBOARD/AddReview';
import AllUsers from './COMPONENTS/DASHBOARD/AllUsers';
import DashBoardPage from './COMPONENTS/DASHBOARD/DashBoardPage';
import ManageAllOrders from './COMPONENTS/DASHBOARD/ManageAllOrders';
import ManageProducts from './COMPONENTS/DASHBOARD/ManageProducts';
import MyOrders from './COMPONENTS/DASHBOARD/MyOrders';
import MyProfile from './COMPONENTS/DASHBOARD/MyProfile';
import PaymentPage from './COMPONENTS/DASHBOARD/PaymentPage';
import RequireAdmin from './COMPONENTS/FIREBASE/RequireAdmin';
import RequireAuth from './COMPONENTS/FIREBASE/RequireAuth';
import FooterComp from './COMPONENTS/FOOTER/Footer';
import HomePage from './COMPONENTS/HOME PAGE/HomePage';
import NavbarComp from './COMPONENTS/NAVBAR/NavbarComp';
import NotFoundPage from './COMPONENTS/NotFoundPage';
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
                <Route index element={<MyProfile></MyProfile>}></Route>
                <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>}></Route>
                <Route path='allusers' element={
                  <RequireAdmin>
                    <AllUsers></AllUsers>
                  </RequireAdmin>
                }></Route>
                <Route path='addproduct' element={
                  <RequireAdmin>
                    <AddProduct></AddProduct>
                  </RequireAdmin>
                }></Route>
                <Route path='manageproducts' element={
                  <RequireAdmin>
                    <ManageProducts></ManageProducts>
                  </RequireAdmin>
                }></Route>
            </Route>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
        <FooterComp></FooterComp>
    </div>
  );
}

export default App;
