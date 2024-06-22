import React from "react";

function VideoCard(props:any) {
  return (
    <div className="p-2" >
      <img src={props.image}  className="rounded-xl" alt="Thumbnail" />
      <div className=" grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img
            src={props.thumbImage} 
            className="rounded-full w-20 h-20"
            alt="image"
          />
        </div>

        <div className="col-span-11 pl-2">
          <div className="font-semibold text-white">
          {props.title}
          </div>
          <div className="col-span-11 pl-2  text-gray-300 text-base">
          {props.author}
          </div>
          <div className="col-span-11 pl-2 text-gray-300 text-base">
          {props.views }||{props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
