import  { useState } from "react";

const ResizablePane = ({ initialSize, onResize }) => {
  const [size, setSize] = useState(initialSize);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newSize = ((e.clientX / window.innerWidth) * 100).toFixed(2);
      setSize(newSize);
      onResize(newSize);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="flex-1 h-full bg-gray-300 border border-gray-400"
      style={{ flexBasis: `${size}%` }}
    >
      <div className="w-full h-full relative">
        <div
          className="absolute inset-0 cursor-ew-resize"
          onMouseDown={handleMouseDown}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <p>Resizable Component</p>
        </div>
      </div>
    </div>
  );
};

export default ResizablePane;
