import AddandEditPropertyForm from "@/components/AddandEditPropertyForm";

function PropertyEditPage() {
  return (
    <section className="container m-auto py-10 px-6">
      <AddandEditPropertyForm edit={true} />
    </section>
  );
}

export default PropertyEditPage;
