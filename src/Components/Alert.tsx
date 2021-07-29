import React, { useEffect, useState } from "react";
interface props {
  theme?: string;
  text?:string;

}
const Alert: React.FC<props> = ({ theme,text }) => {
    const [show,setshow]=useState(true);
  const [color, setcolor] = useState("");
  useEffect(()=>{
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
  }},[theme])
  console.log(color);
  return (
    <>
      <div
        className={"bg-"+color +"-200 text-"+color +"-400 border-0 mb-4 h-11 flex items-center px-7 w-5/12 justify-between " +(show?" ":" hidden") }
        role="alert"
      >
          <div>
        
        <strong>{theme} !</strong> {text}
        </div>

        <button
          type="button"
          className="close float-right"
          data-dismiss="alert"
          aria-label="Close"
          onClick={()=>setshow(false)}
        >
            <span className="font-bold">X</span>
        </button>
      </div>
    </>
  );
};

Alert.defaultProps = {
  theme: "Success",
  text:" Lorem Ipsum is simply dummy text of the printing."
};

export default React.memo(Alert);
