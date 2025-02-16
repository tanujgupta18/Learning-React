import { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="list-none">
      <div
        className="flex justify-between items-center p-3 cursor-pointer hover:bg-blue-700 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-medium">{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span className="text-lg font-bold">{isOpen ? "−" : "+"}</span>
        )}
      </div>
      {item.children && item.children.length > 0 && isOpen && (
        <div className="pl-4 border-l border-gray-500">
          <MenuList list={item.children} />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
