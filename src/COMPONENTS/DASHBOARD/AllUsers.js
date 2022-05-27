import axios from "axios";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ConfirmModal from '../SHARED/ConfirmModal'
import SuccessAlert from "../SHARED/SuccessAlert";

const AllUsers = () => {

  const [ confirmModal, setConfirmModal ] = useState(false);
  const [ makeAdminId, setAdminId ] = useState('')
  const [alert, setAlert] = useState(false);

  const { data: allusers, isLoading, refetch: allUsersFetch } = useQuery('users', async() => {
    const { data } = await axios.get('http://localhost:5000/allusers');
    return data
  })

  if(isLoading){
    return;
  }

  const makeAdmin = async() => {

    const { data } = await axios.put(`http://localhost:5000/makeadmin?adminId=${makeAdminId}`);
    
    if(data.modifiedCount){
      allUsersFetch()
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 5000)
    }

  }

  return (
    <div>{alert && <SuccessAlert message={'Made an Admin'}></SuccessAlert>}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <label for="checkbox-all" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                User Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allusers?.map((el) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      {allusers?.indexOf(el) + 1}
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {el.fullName || 'Not Updated Yet'}
                  </th>
                  <td class="px-6 py-4">{el.email}</td>
                  <td class="px-6 py-4">
                    {el.address || 'Not Updated Yet'}
                  </td>
                  <td class="px-6 py-4">{el.role === 'Admin' ? 'Admin' : 'User'}</td>
                  <td class="px-6 py-4 text-right">
                    {el.role === 'Admin' || <button 
                    onClick={() => {
                      setAdminId(el._id)
                      setConfirmModal(true)
                    }}
                    type="button" class="px-3 py-2 text-xs font-medium text-center text-white
                    bg-green-500 hover:bg-green-600 rounded-lg">Make Admin</button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {
        confirmModal && <ConfirmModal setConfirmModal={setConfirmModal} clickAction={makeAdmin} ></ConfirmModal>
      }
    </div>
  );
};

export default AllUsers;
