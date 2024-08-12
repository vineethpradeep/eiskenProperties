import Link from "next/link";

const InfoBox = ({ title, children, btnName, bgColor, infoLink, Icon }) => {
  return (
    // <section className={`${bgColor} p-6 rounded-lg shadow-md`}>
    //   <h1 className="text-2xl font-bold">{title}</h1>
    //   <p className="mt-2 mb-4">{children}</p>
    //   <button
    //     href={infoLink}
    //     className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
    //   >
    //     {btnName}
    //   </button>
    // </section>
    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
      <Link
        href={infoLink}
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform transition-all hover:-translate-y-4 duration-300"
      >
        <div className="px-4 py-5 flex-auto">
          <div
            className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${bgColor}`}
          >
            <Icon />
          </div>
          <h6 className="text-xl font-semibold">{title}</h6>
          <p className="mt-2 mb-4 text-gray-600">{children}</p>
        </div>
      </Link>
    </div>
  );
};

export default InfoBox;
