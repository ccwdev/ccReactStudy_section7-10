import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

/*
 * <React Key prop>
 * Needed in order for react to know which elements were added and whatnot faster
 * It's a performance consideration that makes react work faster(only for lists)
 */

/*
 * We need to adjust the size of the grid-row element according to the size of the image
 * This is difficult to accomplish with pure css -> So we use the react Image Card Component
 * (the imageCard.js)
 */

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className='image-list'>{images}</div>;
};

export default ImageList;
