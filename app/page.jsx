"use client";
import InfoBoxs from "@/components/InfoBoxs";
import SearchPropertyForm from "@/components/SearchPropertyForm";
import HomeProperties from "@/components/HomeProperties";
import PropertiesGallery from "@/components/PropertiesGallery";
import HomeTourVideo from "@/components/HomeTourvideo";
import OurService from "@/components/OurService";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <HomeTourVideo />
      <SearchPropertyForm translateUp={true} />
      <InfoBoxs />
      <OurService />
      {/* <HomeProperties /> */}
      <PropertiesGallery />
    </div>
  );
};

export default HomePage;
