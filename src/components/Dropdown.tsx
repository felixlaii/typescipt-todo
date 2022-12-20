import React, { useState } from "react";

interface DropdownItemProps {
    icon?: string
    options: Array<Option>
  }

export const Dropdown: React.FC<DropdownItemProps> = ({ icon, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      }

  return (
    <div>Dropdown</div>
  )
}
