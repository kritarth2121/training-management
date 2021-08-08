import React from "react";
interface props {
    name:string;
    description:string
    group_image_url:string
    chatCount:number
    creator:string
    id:number
}

const Card: React.FC<props> = ({name,description,group_image_url,creator,chatCount ,id}) => {
    if (group_image_url==="" || group_image_url==null){
        group_image_url="https://source.unsplash.com/random/500*300";
    }
  return (
    < a href={"/groups/"+id}>
      <div className="p-10" >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-64" src={group_image_url }  alt="Mountain" onError={(e:any)=>{ e.target.src="https://source.unsplash.com/random/500*300"}}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Chat Count:{chatCount}
            </span>
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Creator:{creator}
            </span>
            <span className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Id:{id}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

Card.defaultProps = {};

export default React.memo(Card);
