import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFireBase from "../FIREBASE/useFireBase";
import SuccessAlert from "../SHARED/SuccessAlert";

const MyProfile = () => {
  const { user } = useFireBase();

  const [alert, setAlert] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const fullName = data.fullName;
    const email = data.emailAddress;
    const address = data.address;
    const phone = data.phoneNumber;
    const education = data.education;
    const linkedIn = data.LinkedIn;

    const profileObj = { fullName, email, address, phone, education, linkedIn };
    const url = `https://enigmatic-crag-73288.herokuapp.com/users`;

    const func = async () => {
      const { data } = await axios.put(url, profileObj, {
        headers: {
          authorization: `Bearer ${email}`,
        },
      });
      if (data.modifiedCount) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 5000);
      }
    };

    func();
  };

  return (
    <div>
      {alert && <SuccessAlert message={"Your Profile Updated"}></SuccessAlert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="relative z-0 w-full mb-6 group mt-[1rem]">
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
          <div class="relative z-0  mb-6 w-full group">
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
              <span className="text-red-500">{errors.address?.message}</span>
            )}
          </div>
          <div class="relative z-0  mb-6 w-full group">
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

        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0  mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              {...register("education", {
                required: {
                  value: true,
                  message: "Education is Required",
                },
              })}
            />

            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Education
            </label>

            {errors.education?.type === "required" && (
              <span className="text-red-500">{errors.education?.message}</span>
            )}
          </div>
          <div class="relative z-0  mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              {...register("LinkedIn", {
                required: {
                  value: true,
                  message: "LinkedIn is Required",
                },
              })}
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              LinkedIn Profile
            </label>

            {errors.LinkedIn?.type === "required" && (
              <span className="text-red-500">{errors.LinkedIn?.message}</span>
            )}
          </div>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6"></div>
        <button
          type="submit"
          className="flex items-center justify-center btn font-bold text-[1.2rem] text-white bg-[#1B99E5] py-[.7rem] w-[100%] uppercase"
        >
          {" "}
          Update
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
