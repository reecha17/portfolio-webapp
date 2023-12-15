import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'images/braised-short-rib-and-mashed-potatoes.jpg',
    thumbnail: 'images/braised-short-rib-and-mashed-potatoes.jpg',
    description: `Braised Short Rib (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/chefs-choice-omakase.jpg',
    thumbnail: 'images/chefs-choice-omakase.jpg',
    description: `Chef's Choice Omakase (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/coco-ichibanya-omelette-katsu-curry.jpg',
    thumbnail: 'images/coco-ichibanya-omelette-katsu-curry.jpg',
    description: `Coco Ichibanya Omelette Katsu Curry (2021)`,
    originalHeight: '450px',
  },
  {
    original: 'images/fancy-steak-dinner.jpg',
    thumbnail: 'images/fancy-steak-dinner.jpg',
    description: `Steak Dinner (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/indian-grill-chicken-tikka-lunch.jpg',
    thumbnail: 'images/indian-grill-chicken-tikka-lunch.jpg',
    description: `Indian Grill Chicken Tikka (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/ini-ristorante-beef-carpaccio.jpg',
    thumbnail: 'images/ini-ristorante-beef-carpaccio.jpg',
    description: `Ini Ristorante Beef Carpaccio (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/ini-ristorante-carbonara.jpg',
    thumbnail: 'images/ini-ristorante-carbonara.jpg',
    description: `Ini Ristorante Carbonara (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/ini-ristorante-sashimi.jpg',
    thumbnail: 'images/ini-ristorante-sashimi.jpg',
    description: `Ini Ristorante Sashimi (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/shepherds-pie-cast-iron.jpg',
    thumbnail: 'images/shepherds-pie-cast-iron.jpg',
    description: `Shepherds Pie in Cast Iron (2022)`,
    originalHeight: '450px',
  },
  {
    original: 'images/thanksgiving-dinner-prime-rib.jpg',
    thumbnail: 'images/thanksgiving-dinner-prime-rib.jpg',
    description: `Thanksgiving (2022)`,
    originalHeight: '450px',
  }
]

function GalleryPage() {
  return (
    <>
      <h2>Gallery</h2>
      <article class="gallery">
        <ImageGallery items={images} />
      </article>
    </>
  );
}

export default GalleryPage