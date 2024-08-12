import Image from "next/image";
import "@/assets/styles/globals.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const getRandomSpan = () => {
  const spans = [1, 2];
  return spans[Math.floor(Math.random() * spans.length)];
};

const PropertyGalleryView = ({ property }) => {
  return (
    <Gallery>
      <section className="gallery grid grid-cols-10 grid-flow-dense auto-rows-max gap-4 p-4 bg-gray-100 mt-8">
        {property.images.map((src, index) => (
          <figure
            key={index}
            className={`relative col-span-${getRandomSpan()} row-span-${getRandomSpan()} h-64`}
          >
            <Item original={src} thumbnail={src} width="1000" height="600">
              {({ ref, open }) => (
                <Image
                  ref={ref}
                  onClick={open}
                  src={src}
                  alt={`Property image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              )}
            </Item>
          </figure>
        ))}
      </section>
    </Gallery>
  );
};

export default PropertyGalleryView;
