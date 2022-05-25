import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import useFireBase from "../FIREBASE/useFireBase";
import PendingHandleModla from "../SHARED/PendingHandleModla";

const ManageAllOrders = () => {
  const { user } = useFireBase();

  const [showModal, setShowModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const {
    data: myOrders,
    isLoading,
    refetch: myOrdersReFetch,
  } = useQuery("myOrders", async () => {
    const { data } = await axios.get(`http://localhost:5000/allorders`);
    return data;
  });

  return (
    <div>
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
                Total
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((el) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      {myOrders.indexOf(el) + 1}
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    title={el.name}
                  >
                    {el.name.length > 80
                      ? el.name.slice(0, 80) + "..."
                      : el.name}
                  </th>
                  <td class="px-6 py-4">{el.orderQuantity}</td>
                  <td class="px-6 py-4">
                    ${(el.orderQuantity * el.price).toFixed(1)}
                  </td>
                  <td class="px-6 py-4">{el.paymentStatus}</td>
                  <td class="px-6 py-4 text-right">
                    <div>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setPaymentStatus(el.paymentStatus);
                        }}
                        type="button"
                        class="px-3 py-2 text-xs font-medium text-center text-white bg-yellow-300 rounded-lg hover:bg-yellow-400 mr-[.5rem]"
                      >
                        Pending
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showModal && (
        <PendingHandleModla
          paymentStatus={paymentStatus}
          setShowModal={setShowModal}
        ></PendingHandleModla>
      )}
    </div>
  );
};

export default ManageAllOrders;
