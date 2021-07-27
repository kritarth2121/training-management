import React from "react";
interface props {
  status?: string;
  img?: string;
  size?: "bigger" | "medium" | "smaller";
}
const Avatar: React.FC<props> = ({ status, img, size }) => {
  let height = 20;
  let width = 20;
  let c = "";
  if (size == "bigger") {
    height = 40;
    width = 40;
  } else if (size == "smaller") {
    height = 10;
    width = 10;
  }

  if (status == "online") {
    c = "bg-green-500";
  } else if (status == "offline") {
    c = "bg-gray-500";
  }
  return (
    <>
      <div className={"   h-" + height + " w-" + width}>
        <img alt="avatar" src={img} className="rounded-full" />
        { size=="smaller" ?  <div
          className={"h-4 w-4  rounded-full relative -top-5 -right-8 " + c}
        ></div>: <div
        className={"h-4 w-4  rounded-full relative -top-5 -right-16 " + c}
      ></div>
            
        } 
       
      </div>
    </>
  );
};

Avatar.defaultProps = {
  size: "medium",
  status: "",
  img: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
};

export default React.memo(Avatar);
