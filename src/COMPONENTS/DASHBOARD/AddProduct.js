import axios from "axios";
import { Label, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../SHARED/SuccessAlert";

const AddProduct = () => {
  const [textDescription, setTextDescription] = useState("");
  const [toast, setToast] = useState(false);

  const imageBBKey = `565f41ae1e5b8cd4d1430014c0206ed2`;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const name = data.productName;
    const minimum_order = data.minimumOrder;
    const quantity = data.quntity;
    const price = data.price;
    const description = textDescription;

    const imageFile = data.img[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (result) => {
        const img = result?.data?.url;
        const productObj = {
          name,
          img,
          description,
          price,
          quantity,
          minimum_order,
        };

        const { data } = await axios.post(
          `http://localhost:5000/postProduct`,
          productObj
        );

        if (data?.insertedId) {
          setToast(true);
          setTimeout(() => {
            setToast(false);
          }, 10000);
        }
      });
  };

  return (
    <div>
      {toast && <SuccessAlert message={'Added a New Product'}></SuccessAlert>}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="grid xl:grid-cols-2 xl:gap-6 mt-[1rem]">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                {...register("productName", {
                  required: {
                    value: true,
                    message: "Product Name is Required",
                  },
                })}
              />

              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Product Name
              </label>

              {errors.productName?.type === "required" && (
                <span className="text-red-500">
                  {errors.productName?.message}
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
                {...register("minimumOrder", {
                  required: {
                    value: true,
                    message: "Minimum Order is Required",
                  },
                })}
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Minimum Order
              </label>

              {errors.minimumOrder?.type === "required" && (
                <span className="text-red-500">
                  {errors.minimumOrder?.message}
                </span>
              )}
            </div>
          </div>
          <div class="grid xl:grid-cols-2 xl:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />

              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>

              {errors.price?.type === "required" && (
                <span className="text-red-500">{errors.price?.message}</span>
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
                {...register("quntity", {
                  required: {
                    value: true,
                    message: "Quantity is Required",
                  },
                })}
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Quantity
              </label>

              {errors.quntity?.type === "required" && (
                <span className="text-red-500">{errors.quntity?.message}</span>
              )}
            </div>
          </div>
          <div className="mb-6 ">
            <div id="textarea" className="mb-6">
              <Label className="mb-2 block" htmlFor="comment">
                Description
              </Label>
              <Textarea
                id="comment"
                placeholder="Write Here"
                required={true}
                rows={4}
                onChange={(e) => setTextDescription(e.target.value)}
              />
            </div>
            <input
              id="floating_last_name"
              type="file"
              name=""
              {...register("img", {
                required: {
                  value: true,
                  message: "img is Required",
                },
              })}
            />{" "}
            <br />
            {errors.img?.type === "required" && (
              <span className="text-red-500">{errors.img?.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="uppercase flex bg-lightBlue text-secondary hover:text-deepDark font-bold rounded-lg px-[1rem] py-[.5rem]"
          >
            {" "}
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
