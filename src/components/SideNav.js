import React from "react";

function SideNav({ menuList }) {
  let newItems = [...menuList];
  const [item, setItem] = React.useState(newItems);

  const handleSelected = (index) => {
    const newItem = [...item].map((i) => {
      i.selected = false;
      return i;
    });
    newItem[index].selected = !newItem[index].selected;
    setItem(newItem);
  };
  return (
    <div className="h-screen hidden lg:flex flex-col shadow-r-xl relative w-80">
      <div className="flex flex-col bg-white h-full rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6">
          icon terserah
        </div>
        <nav className="mt-6 flex flex-col">
          {menuList.map((item, index) => (
            <button
              key={index}
              className={`w-full ${
                item.selected
                  ? "text-blue-500 transition-all duration-600 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 border-r-4 border-blue-500"
                  : "text-gray-500 hover:text-blue-500"
              } flex items-center p-4 my-2 `}
              onClick={() => handleSelected(index)}
            >
              <span
                className={`text-left ${item.selected ? "animate-pulse" : ""}`}
              >
                {item.icon}
              </span>
              <span className="mx-4 text-sm font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SideNav;
