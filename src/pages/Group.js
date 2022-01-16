import React from "react";
import { logout } from "../handlers/authHandler";

function Group() {
  return (
    <div>
      <div>
        <h1>Group</h1>
        <button
          className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
          onClick={logout}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default Group;
