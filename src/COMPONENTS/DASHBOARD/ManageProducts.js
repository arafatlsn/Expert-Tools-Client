import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BsTrash } from "react-icons/bs";
import ConfirmModal from "../SHARED/ConfirmModal";
import SuccessAlert from "../SHARED/SuccessAlert";

const ManageProducts = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [toolId, setTooldId] = useState("");
  const [alert, setAlert] = useState(false);

  const {
    data: allProducts,
    isLoading,
    refetch: allProductsFetch,
  } = useQuery("allProducts", async () => {
    const { data } = await axios.get(
      `https://enigmatic-crag-73288.herokuapp.com/tools`
    );
    return data;
  });

  if (isLoading) {
    return;
  }

  const removeProduct = async () => {
    const { data } = await axios.delete(
      `https://enigmatic-crag-73288.herokuapp.com/removetool?toold=${toolId}`
    );
    if (data?.deletedCount) {
      allProductsFetch();
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  };

  return (
    <div>
      {alert && <SuccessAlert message={"Remove a Product"}></SuccessAlert>}
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
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allProducts?.map((el) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      {allProducts?.indexOf(el) + 1}
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    title={el?.name}
                  >
                    {el.name.length > 80
                      ? el.name.slice(0, 80) + "..."
                      : el.name}
                  </th>
                  <td class="px-6 py-4">{el.quantity}</td>
                  <td class="px-6 py-4">${el.price}</td>
                  <td class="px-6 py-4">{el.paymentStatus}</td>
                  <td class="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        setConfirmModal(true);
                        setTooldId(el._id);
                      }}
                      class="px-3 py-2 text-xs font-medium text-center text-white bg-red-200 rounded-lg hover:bg-red-300 mr-[.5rem]"
                    >
                      <BsTrash className="text-xl text-red-500" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {confirmModal && (
        <ConfirmModal
          setConfirmModal={setConfirmModal}
          clickAction={removeProduct}
        ></ConfirmModal>
      )}
    </div>
  );
};

export default ManageProducts;
