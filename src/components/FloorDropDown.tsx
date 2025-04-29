import React from "react";

type Props = {
  selectedFloor: number;
  onChange: (floor: number) => void;
};

const FloorDropdown: React.FC<Props> = ({ selectedFloor, onChange }) => {
  return (
    <select
      value={selectedFloor}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border rounded px-3 py-1 shadow-sm bg-white"
    >
      <option value={1}>Lantai 1</option>
      <option value={2}>Lantai 2</option>
    </select>
    
  );
};

export default FloorDropdown;
