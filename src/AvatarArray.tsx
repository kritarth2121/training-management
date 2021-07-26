import React from "react";
interface props {
  List_of_images?: Array<string>;
}
const Avatararray: React.FC<props> = ({ List_of_images }) => {
  if (List_of_images && List_of_images.length > 0) {
    let s = List_of_images.length - 4;
  }
  return (
    <>
      <div className="flex flex-row mt-20 items-center">
        {List_of_images &&
          List_of_images.slice(0, 4).map((k, index: number) => (
            <div>
              {console.log(index)}
              <img
                key={index}
                src={k}
                className={
                  "relative" +
                  " -left-" +
                  `${index * 8}` +
                  " rounded-full transform  hover:-translate-y-5  duration-1000"
                }
              ></img>
            </div>
          ))}
        {List_of_images && List_of_images.length > 4 ? (
          <div className="w-28 h-12 relative -left-32  bg-white shadow-2xl font-medium text-blue-500 rounded-full flex items-center justify-center">
            +{List_of_images && List_of_images.length - 4} more
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
const RandomImageUrl =
  "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg";

Avatararray.defaultProps = {
  List_of_images: [RandomImageUrl, RandomImageUrl, RandomImageUrl],
};

export default React.memo(Avatararray);
