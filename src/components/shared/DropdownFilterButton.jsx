import { useState, useRef, useEffect } from "react";

export default function DropdownFilterButton({ menuIcon }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#FBFBFB] shadow-md p-3.5 rounded-full"
      >
        {menuIcon}
      </button>

      {open && (
        <div className="absolute z-50 right-0 mt-2 w-80 bg-white  shadow-xl p-6 grid grid-cols-2 gap-8 text-gray-500">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2 border-b pb-1 ">Status</p>
            <span className=""></span>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-500">Manager</li>
              <li className="cursor-pointer hover:text-blue-500">Sales executive</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 mb-2 border-b pb-1 ">Status</p>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-blue-500">Locked</li>
              <li className="cursor-pointer hover:text-blue-500">Unlock</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
