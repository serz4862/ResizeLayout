import  { useState } from "react";
import ResizablePane from "./ResizablePane";

const ResizableComponent = () => {
  const [sizes, setSizes] = useState([33, 33, 33]);

  const handleResize = (index, newSize) => {
    const updatedSizes = [...sizes];
    updatedSizes[index] = newSize;
    setSizes(updatedSizes);
  };

  return (
    <div className="flex h-full">
      {sizes.map((size, index) => (
        <ResizablePane
          key={index}
          initialSize={size}
          onResize={(newSize) => handleResize(index, newSize)}
        />
      ))}
    </div>
  );
};

export default ResizableComponent;
