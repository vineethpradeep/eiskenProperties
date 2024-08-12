import AddandEditPropertyForm from "@/components/AddandEditPropertyForm";

function AddProperty() {
  return (
    <section className="container m-auto py-10 px-6">
      <AddandEditPropertyForm edit={false} />
    </section>
  );
}

export default AddProperty;
