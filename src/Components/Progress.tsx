import React, { useEffect, useState } from "react";
interface props {
  theme?: string;
  value?: number;
}
const Progress: React.FC<props> = ({ theme, value }) => {
  const [color, setcolor] = useState("");
  if (value && value < 0) {
    console.log("Progress cant be negative");
  } else if (value && value > 100) {
    console.log("Progress greater than 0");
    value = 100;
  }
  useEffect(() => {
    if (theme == "Info") {
      setcolor("blue");
    } else if (theme == "Warning") {
      setcolor("yellow");
    } else if (theme == "Success") {
      setcolor("green");
    } else if (theme == "Primary") {
      setcolor("purple");
    } else if (theme == "Error") {
      setcolor("gray");
    }
  }, [theme]);
  return (
    <>
      <div className="bg-gray-100 h-8 rounded-full w-5/12">
        <div
          className={"bg-" + color + "-400 h-8 rounded-full"}
          style={{ width: value + "%" }}
        ></div>
      </div>
    </>
  );
};

Progress.defaultProps = {
  value: 30,
  theme: "Error",
};

export default React.memo(Progress);
