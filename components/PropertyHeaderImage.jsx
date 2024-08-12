import Image from "next/image";

function PropertyHeaderImage({ property }) {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <div className="relative h-72 w-auto">
            <Image
              src={property.images[0]}
              alt=""
              fill
              className="fixed-height-auto-width"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyHeaderImage;
