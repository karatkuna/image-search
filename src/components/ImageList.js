import React from 'react';
import '../components/ImageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // console.log(props.images)
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })

  return (
    <div>
      Found: {props.images.length} images
      <div className='image-list'>{images}</div>
    </div>
  );
};

export default ImageList;