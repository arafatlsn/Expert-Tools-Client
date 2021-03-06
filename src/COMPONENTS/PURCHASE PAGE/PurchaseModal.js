import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import useFireBase from "../FIREBASE/useFireBase";
import { useForm } from "react-hook-form";
import ConfirmModal from "../SHARED/ConfirmModal";

const PurchaseModal = ({
  tool,
  getQuantity,
  setShowModal,
  setConfirmModal,
  setPurchaseObj,
}) => {
  const { user } = useFireBase();

  const { _id, img, name, description, quantity, minimum_order, price } = tool;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data.emailAddress;
    const toolId = _id;
    const fullName = data.fullName;
    const address = data.address;
    const phoneNumber = data.phoneNumber;
    const orderQuantity = getQuantity;
    const paymentStatus = "Not Paid";

    const toolObj = {
      name,
      img,
      toolId,
      email,
      fullName,
      address,
      phoneNumber,
      price,
      orderQuantity,
      paymentStatus,
    };
    setPurchaseObj(toolObj);
    setConfirmModal(true);
    setShowModal(false);
  };

  return (
    <div>
      <React.Fragment>
        <Modal
          show={true}
          size="3xl"
          // className='w-[80vw]'
          popup={true}
          onClose={() => setShowModal(false)}
        >
          <Modal.Header />
          <Modal.Body className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-lightBlue dark:text-white">
              Please Drop Your Information
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  value={user.email}
                  readOnly
                  {...register("emailAddress")}
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={user.displayName}
                  placeholder=" "
                  required=""
                  readOnly
                  {...register("fullName")}
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Name
                </label>
              </div>
              <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is Required",
                      },
                    })}
                  />

                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Address
                  </label>

                  {errors.address?.type === "required" && (
                    <span className="text-red-500">
                      {errors.address?.message}
                    </span>
                  )}
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="number"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required=""
                    {...register("phoneNumber", {
                      required: {
                        value: true,
                        message: "Phone Number is Required",
                      },
                    })}
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number
                  </label>

                  {errors.phoneNumber?.type === "required" && (
                    <span className="text-red-500">
                      {errors.phoneNumber?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="lg:flex">
                <div className="grid grid-cols-12 items-center justify-items-center w-[60%]">
                  <div className="col-start-1 col-end-4">
                    <img
                      className="w-[70px] h-[70px] object-contain"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div className="col-start-4 col-end-13">
                    <h1 className="h-[7ex] leading-[3.5ex] overflow-hidden">
                      {name}
                    </h1>
                    <p>
                      ${price} x {getQuantity}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center ml-[1rem]">
                  <h1
                    className="text-[2rem]"
                    style={{ color: "rgba(48, 56, 65, 1)" }}
                  >
                    Total: ${(price * getQuantity).toFixed(1)}{" "}
                  </h1>
                  <div>
                    <button className="uppercase flex bg-lightBlue text-secondary hover:text-deepDark font-bold rounded-lg px-[1rem] py-[.5rem]">
                      <HiShoppingCart className="mr-1 h-5 w-5" /> Purchase
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default PurchaseModal;
