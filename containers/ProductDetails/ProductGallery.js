import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/images/products/apple-airpod.jpg',
    thumbnail: '/images/products/apple-airpod.jpg',
  },
  {
    original: '/images/products/canon.webp',
    thumbnail: '/images/products/canon.webp',
  },
  {
    original: '/images/products/smartwatch2.jpg',
    thumbnail: '/images/products/smartwatch2.jpg',
  },
];

export default function ProductGallery() {
  return (
    <ImageGallery
      items={images}
      showBullets={false}
      showNav={false}
      thumbnailHeight='30px'
      thumbnailWidth="30px"
      thumbnailPosition="left"
    />
  );
}