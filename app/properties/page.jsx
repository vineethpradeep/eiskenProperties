// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import SearchPropertyForm from "@/components/SearchPropertyForm";
import { fetchProperties } from "@/utils/request";
import Properties from "@/components/Properties";

const PropertiesPage = () => {
  return (
    <>
      <section className="flex justify-center mt-4">
        <SearchPropertyForm translateUp={false} />
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
