import { useEffect, useRef } from 'react';
import ImageGallery from 'react-image-gallery';

export default function ProductGallery({ images, activeImage = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.slideToIndex(activeImage)
    }
  }, [activeImage, ref])

  if (images) {
    const list = images.map(item => ({ original: item, thumbnail: item }));
    return (
      <ImageGallery
        items={list}
        showBullets={false}
        showNav={false}
        thumbnailHeight='30px'
        thumbnailWidth="30px"
        ref={ref}
      />
    );  
  }

  return null;
}
