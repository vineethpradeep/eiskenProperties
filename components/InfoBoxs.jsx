import InfoBox from "@/components/InfoBox";
import { FaHome, FaHouseUser, FaUserGraduate } from "react-icons/fa";

const InfoBoxs = () => {
  return (
    <section className="pb-4 bg-switch-2-color -mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <InfoBox
            title="For Renters"
            btnName="Add Property"
            bgColor="bg-friend-1-color"
            infoLink="/properties"
            Icon={FaHome}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            title="For Property Owners"
            btnName="Browse Properties"
            bgColor="bg-friend-3-color"
            infoLink="/properties"
            Icon={FaHouseUser}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
          <InfoBox
            title="For Student Rent"
            btnName="Browse Properties"
            bgColor="bg-friend-2-color"
            infoLink="/properties"
            Icon={FaUserGraduate}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxs;
