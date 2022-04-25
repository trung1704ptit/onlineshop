import ImageGallery from 'react-image-gallery';

export default function ProductGallery({ images }) {
  if (images) {
    const list = images.map(item => ({ original: item, thumbnail: item }));
    return (
      <ImageGallery
        items={list}
        showBullets={false}
        showNav={false}
        thumbnailHeight='30px'
        thumbnailWidth="30px"
      />
    );  
  }

  return null;
}
