import React from "react";
interface props{
status?:string,
img?:string
}
const Avatar:React.FC<props> =({status,img})=>{
    let c='';
    if (status=="online"){
        c="bg-green-500";

    }
    else if (status=="offline"){
        c="bg-gray-500"

    }
    return(
        <>
        <div className=" relative  h-20 w-20">
    <img alt="avatar" src={img} className="rounded-full" />
    <div className={"h-4 w-4  rounded-full relative -top-5 -right-16 "+c}></div>
</div>

        </>
)}

Avatar.defaultProps={
    status:"",
    img:"https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
};

export default React.memo(Avatar);

