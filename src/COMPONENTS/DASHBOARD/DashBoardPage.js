import React from 'react';
import { HiShoppingCart } from 'react-icons/hi'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { Link, Outlet } from 'react-router-dom';

const DashBoardPage = () => {
  return (
    <div className='lg:flex'>
      <div>

        <aside class="lg:w-64" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 rounded bg-[#FBFBFB] dark:bg-gray-800">
              <ul class="space-y-2">
                  <li>
                    <Link to={'/dashboard/myorders'} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span><HiShoppingCart className='text-[1.4rem] text-deepDark'/></span>
                    <span class="ml-3 text-deepDark">My Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/dashboard/addreview'} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span><BsFillChatRightTextFill className='text-[1.4rem] text-deepDark'/></span>
                    <span class="ml-3 text-deepDark">Add Review</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span><CgProfile className='text-[1.4rem] text-deepDark'/></span>
                    <span class="ml-3 text-deepDark">My Profile</span>
                    </a>
                  </li>
              </ul>
            </div>
          </aside>

      </div>
      <div>
          <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardPage;