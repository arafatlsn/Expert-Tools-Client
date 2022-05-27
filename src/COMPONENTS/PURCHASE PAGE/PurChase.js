import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi'
import PurchaseModal from './PurchaseModal';
import ConfirmModal from '../SHARED/ConfirmModal';
import useFireBase from '../FIREBASE/useFireBase';
import { signOut } from 'firebase/auth';
import auth from '../FIREBASE/Firebase.init';
import SuccessAlert from '../SHARED/SuccessAlert';

const PurChase = () => {

  const { user } = useFireBase()

  const { id } = useParams();

  const [getQuantity, setGetQuantity] = useState('');
  const [getError, setGetError] = useState(false)
  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [purchaseObj, setPurchaseObj] = useState({});
  const [alert, setAlert] = useState(false);

  const { data: tool, isLoading, refetch: singleTool } = useQuery('tool', async() => {
    try{
      const url = `http://localhost:5000/tool?id=${id}`
    const { data } = await axios.get(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt-token')}`,
        userEmail: user.email
      }
    });
    return data
    }
    catch(error){
      if(error.response.status === 401 || error.response.status === 403){
        signOut(auth)
      }
    }
  })

  const pressOrder = async() => {

    const id = purchaseObj.toolId;
    const { data } = await axios.post(`http://localhost:5000/order?id=${id}`, purchaseObj)
    if(data.updateTool?.modifiedCount){
      singleTool()
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 5000)
    }

  }

  if(isLoading){
    return;
  }

  const { img, name, description, quantity, minimum_order, price } = tool;

  const purchaseProd = () => {

    if(Number(getQuantity) < minimum_order || Number(getQuantity) > quantity){
      setGetError(true)
      setClicked(true)
      setShowModal(true)
    }

    else{
      setShowModal(true)
    }
    
  }

  return (
    <div>{alert && <SuccessAlert message={'Orderd an Item'}></SuccessAlert>}
      <div className='grid grid-cols-2 border p-[3rem]'>
        <div className='flex justify-center'>
          <img className='w-[538px] h-[538px] object-contain' src={img} alt="" />
        </div>
        <div>
          <h1 className='bg-[#DAF0D8] px-[1rem] py-[.7rem]'>{name}</h1>
          <p className='mt-[.4rem]'><span className='underline text-[#E73D50]' >Description</span> <br/>
          <span>{description}</span>
          </p>
          <hr className='my-[1rem]' />
          <p style={{color: 'rgba(48, 56, 65, .9)'}}><span style={{color: 'rgba(60, 196, 114, 1)'}}>In Stock: </span>{quantity}</p>
          <p className='text-base' style={{color: 'rgba(48, 56, 65, .9)'}}><span>Minimum Order: </span>{minimum_order}</p>
          <hr className='my-[1rem]' />
          <h3 className='text-[2rem]' style={{color: 'rgba(48, 56, 65, .9)'}}>Price: ${price}</h3>
          <div>
            <div class="relative z-0 w-full group mt-[2rem] mb-[3rem]">
              <input onChange={e => {
              
              setGetQuantity(e.target.value)

              if(clicked){

                if(Number(e.target.value) < minimum_order || Number(e.target.value) > quantity){
                  setGetError(true)
                }
                else{
                  setGetError(false)
                }
                
              }
            
            
            }} type="number" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
            defaultValue={minimum_order}
              />

              <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">How Much You Want?</label>

              {
                getError && <span className='text-red-500 capitalize'>You Can order {minimum_order} to {quantity}</span>
              }

            </div>
            <div>
              <button onClick={purchaseProd} className='uppercase flex bg-lightBlue text-secondary hover:text-deepDark font-bold rounded-lg px-[1rem] py-[.5rem]' disabled={getError} ><HiShoppingCart className="mr-1 h-5 w-5" /> Purchase</button>
            </div>
          </div>
        </div>
      </div>

      {
        (showModal && !getError) && <PurchaseModal tool={tool} getQuantity={getQuantity} setShowModal={setShowModal} setConfirmModal={setConfirmModal} setPurchaseObj={setPurchaseObj} ></PurchaseModal>
      }

      {

      confirmModal && <ConfirmModal clickAction={pressOrder} setConfirmModal={setConfirmModal}></ConfirmModal>

      }
      
    </div>
  );
};

export default PurChase;