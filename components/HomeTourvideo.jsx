"use client";

const HomeTourVideo = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden transform -translate-y-16 -z-10">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/images/coverr-tour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-primary-color text-4xl font-bold text-center">
              Welcome to Our Perfect Property
            </h1>
            <p className="text-white mt-2 text-xl">
              Your perfect property search in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTourVideo;
