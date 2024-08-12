import Image from "next/image";

function PropertiesGallery() {
  return (
    <section className="gallery bg-gray-100 col-start-1 col-end-[-1] p-8 grid grid-cols-8 grid-rows-[repeat(7,_5vw)] gap-4">
      <figure className="gallery__item gallery__item--1 col-span-2 row-span-2">
        <Image
          src="/images/properties/interior_1.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--2 col-span-3 row-span-3">
        <Image
          src="/images/properties/interior_3.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--3 col-start-6 col-span-1 row-span-2">
        <Image
          src="/images/properties/interior_2.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--4 col-start-7 col-end-[-1] row-span-2">
        <Image
          src="/images/properties/interior_4.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--5 col-span-2 row-start-3 row-span-3">
        <Image
          src="/images/properties/interior_5.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--6 col-start-6 col-end-8 row-start-3 row-span-5">
        <Image
          src="/images/properties/interior_6.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--7 col-start-8 col-end-[-1] row-start-3 row-span-2">
        <Image
          src="/images/properties/interior_7.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--8 col-start-8 col-end-[-1] row-start-5 row-span-3">
        <Image
          src="/images/properties/interior_8.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--9 col-start-3 col-span-2 row-start-4 row-span-2">
        <Image
          src="/images/properties/interior_9.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--10 col-start-5 col-span-1 row-start-4 row-span-2">
        <Image
          src="/images/properties/interior_10.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--11 col-start-1 col-span-1 row-start-6 row-span-2">
        <Image
          src="/images/properties/interior_11.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--12 col-start-2 col-span-2 row-start-6 row-span-1">
        <Image
          src="/images/properties/interior_12.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--13 col-start-4 col-span-2 row-start-6 row-span-2">
        <Image
          src="/images/properties/interior_13.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
      <figure className="gallery__item gallery__item--14 col-start-2 col-span-2 row-start-7 row-span-1">
        <Image
          src="/images/properties/interior_14.jpg"
          alt="gallery collection1"
          className="w-full h-full object-cover block"
          width={500}
          height={500}
        />
      </figure>
    </section>
  );
}

export default PropertiesGallery;
