import React from "react";
import SideNav from "../components/SideNav";
import { itemList } from "../constants";

function Dashboard() {
  return (
    <div className="flex flex-row">
      <SideNav menuList={[...itemList]} />
      {/* routung here */}
      {/* <Route path="group" element={<GroupCreationPage />} /> */}
      <div className="w-full bg-blue-200">
        <div className="px-5" style={{ borderBottom: "1px solid #eaeaea" }}>
          <ul className="flex cursor-pointer">
            <li className="py-2 px-6 bg-white rounded-t-lg border-t-[1px] border-l-[1px] border-r-[1px]">
              Personal
            </li>
            <li className="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200 border-l-[1px]">
              Akun
            </li>
            <li className="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200">
              Pengaturan
            </li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center">
          {[...Array(30)].map((item, index) => (
            <div
              key={index}
              className="w-[260px] h-[260px] bg-red-200 border-2 my-10"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
