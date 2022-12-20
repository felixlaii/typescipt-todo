import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DropdownItemProps {
  icon?: string;
  options: Array<Option>;
}

export const Dropdown: React.FC<DropdownItemProps> = ({ icon, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};
