import React from "react";

const HomeList = ({ title, description, url, urlToImage }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <img src={urlToImage} alt="" className="w-[100%] object-cover " />
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="font-bold">{title}</p>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HomeList;
