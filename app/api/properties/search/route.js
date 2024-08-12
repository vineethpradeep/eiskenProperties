import connectDB from "@/config/database";
import Property from "@/models/property";

export const GET = async (req) => {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");

    const locationPattern = new RegExp(location, "i");
    let query = {
      $or: [
        { name: locationPattern },
        { description: locationPattern },
        { "location.street": locationPattern },
        { "location.state": locationPattern },
        { "location.city": locationPattern },
        { "location.zipcode": locationPattern },
      ],
    };
    if (propertyType && propertyType !== "All") {
      const propertyTypePattern = new RegExp(propertyType, "i");
      query.type = propertyTypePattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};
