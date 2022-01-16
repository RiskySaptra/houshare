import React from "react";

function GroupCreationPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col w-full h-full lg:h-fit max-w-md px-4 py-8 bg-white lg:rounded-lg lg:shadow-lg lg:border-[1px] sm:px-6 md:px-8 lg:px-10 lg:mb-80">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
          Creating Group
        </div>
        <div className="flex gap-4 item-center">
          <button className="py-2 px-4 flex justify-center items-center bg-blue-500 active:bg-blue-600 hover:shadow-xl text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md active:shadow-xl rounded ">
            Join Group
          </button>
          <button className="py-2 px-4 flex justify-center items-center bg-blue-500 active:bg-blue-600 hover:shadow-xl text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md active:shadow-xl rounded ">
            Add Friend
          </button>
        </div>
        <div className="mt-8">
          <form action="#" autoComplete="off">
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <input
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Group Name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <input
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Custom Group Code (optional)"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="checked"
                className="inline-flex items-center cursor-pointer"
              >
                <span className="relative">
                  <span className="block w-10 h-6 bg-gray-200 rounded-full shadow-inner"></span>
                  <span className="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-600 transform translate-x-full">
                    <input
                      id="checked"
                      type="checkbox"
                      className="absolute opacity-0 w-0 h-0"
                    />
                  </span>
                </span>
                <span className="ml-3 text-sm">Add Mandatory Expense</span>
              </label>
            </div>
            <div className="flex gap-1 item-center mb-2">
              <div className="flex relative ">
                <input
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Expense Name"
                />
              </div>
              <div className="flex relative ">
                <input
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Amount"
                />
              </div>
              <div className="flex relative ">
                <span className="flex items-center text-red-700 active:text-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex gap-1 item-center mb-2">
              <div className="flex relative ">
                <input
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Expense Name"
                />
              </div>
              <div className="flex relative ">
                <input
                  className=" rounded flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Amount"
                />
              </div>
              <div className="flex relative ">
                <span className="flex items-center text-red-700 active:text-red-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex mr-auto">
                <button className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                  + More Expense
                </button>
              </div>
            </div>

            <div className="flex w-full mt-8">
              <a
                type="submit"
                className="py-2 px-4  bg-blue-500 active:bg-blue-600  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md active:shadow-xl rounded"
                href="/"
              >
                Create Group
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GroupCreationPage;
