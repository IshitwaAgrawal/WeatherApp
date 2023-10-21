import React from "react";
import Image from "next/image";

const ImageComponent = ({ description, width, height, icon }) => {
  return (
    <Image
      src={`https://openweathermap.org/img/w/${icon}.png`}
      alt={description}
      className="image__wrapper w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2"
      width={width || 400}
      height={height || 400}
    />
  );
};

export default ImageComponent;
