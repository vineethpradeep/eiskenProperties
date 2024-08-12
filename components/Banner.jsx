import styles from "@/assets/styles/globals.css";
// import coverVideo from "@/public/coverr-tour-house.mp4";
// import coverImage from "@/public/images/properties/home_2.jpg";

const Banner = ({ coverImage }) => {
  return (
    <>
      {/* <video autoplay muted loop>
        <source src={coverVideo} type="video/mp4" />
        Your browser not support
      </video> */}
      {/* <div
        className="bg-cover bg-center h-64 w-full"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div> */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Find the Perfect Rental</h1>
        <p className="text-black mt-2">
          Your perfect property search in one place
        </p>
      </div>
    </>
  );
};

export default Banner;
