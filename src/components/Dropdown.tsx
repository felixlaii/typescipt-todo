import React, { useState } from "react";

interface DropdownItemProps {
    icon?: string
    options: Array<Option>
  }

export const Dropdown: React.FC<DropdownItemProps> = ({ icon, options }) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>Dropdown</div>
  )
}
