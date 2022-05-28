import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import axios from "axios";
import useFireBase from "../FIREBASE/useFireBase";
import { signOut } from "firebase/auth";
import auth from "../FIREBASE/Firebase.init";

const DashBoardPage = () => {
  const { user } = useFireBase();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // verify jwt
    const func = async () => {
      try {
        const url = `https://enigmatic-crag-73288.herokuapp.com/verify`;
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
            userEmail: user.email,
          },
        });
        return data;
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
        }
      }
    };
    func();

    // verify admin
    const verifyAdmin = async () => {
      const { data } = await axios.get(
        `https://enigmatic-crag-73288.herokuapp.com/verifyadmin?userEmail=${user.email}`
      );
      if (data?.message === "Admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    };
    verifyAdmin();
  }, [user]);

  return (
    <div className="lg:flex">
      <div>
        <aside class="lg:w-64" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 lg:px-3 rounded bg-[#FBFBFB] dark:bg-gray-800">
            <ul class="space-y-2">
              {!isAdmin && (
                <>
                  <li>
                    <Link
                      to={"/dashboard/myorders"}
                      class="flex items-center lg:p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span>
                        <HiShoppingCart className="text-[1.4rem] text-deepDark" />
                      </span>
                      <span class="ml-3 text-deepDark">My Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/addreview"}
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span>
                        <BsFillChatRightTextFill className="text-[1.4rem] text-deepDark" />
                      </span>
                      <span class="ml-3 text-deepDark">Add Review</span>
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to={"/dashboard"}
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span>
                    <CgProfile className="text-[1.4rem] text-deepDark" />
                  </span>
                  <span class="ml-3 text-deepDark">My Profile</span>
                </Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link
                      to={"/dashboard/manageallorders"}
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span>
                        <HiShoppingCart className="text-[1.4rem] text-deepDark" />
                      </span>
                      <span class="ml-3 text-deepDark">Manage All Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/allusers"}
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span>
                        <FaUsers className="text-[1.4rem] text-deepDark" />
                      </span>
                      <span class="ml-3 text-deepDark">All Users</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/addproduct"}
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span>
                        <MdAddShoppingCart className="text-[1.4rem] text-deepDark" />
                      </span>
                      <span class="ml-3 text-deepDark">Add Product</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/manageproducts"}
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span>
                        <MdProductionQuantityLimits className="text-[1.4rem] text-deepDark" />
                      </span>
                      <span class="ml-3 text-deepDark">Manage Products</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </aside>
      </div>
      <div className="lg:w-[60vw] px-[.5rem] lg:px-0 mx-auto lg:ml-[1rem]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardPage;
