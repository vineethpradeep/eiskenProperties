import connectDB from "@/config/database";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/getSessionUer";

// /api/properties/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id);
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }
    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const propertyId = params.id;

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id is required", {
        status: 401,
      });
    }

    const { userId } = sessionUser;

    await connectDB();
    const property = await Property.findById(propertyId);
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    if (property.owner.toString() !== userId) {
      return new Response("Unauthorised user", { status: 401 });
    }
    await property.deleteOne();

    return new Response("Property deleted", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  try {
    debugger;
    await connectDB();
    const userSession = await getSessionUser();

    if (!userSession || !userSession.userId) {
      return new Response("User Auth Required", { status: 401 });
    }
    const { id } = params;
    const { userId } = userSession;

    const formData = await req.formData();
    const amenities = formData.getAll("amenities");

    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return new Response("Property does not exist", { status: 404 });
    }
    if (existingProperty.owner.toString() !== userId) {
      return new Response("Unotherised user", { status: 401 });
    }

    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly."),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };

    console.log(propertyData);

    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData);

    return new Response(JSON.stringify(updatedProperty), {
      status: 200,
    });
  } catch (err) {
    return new Response("Failed to Update properties", { status: 500 });
  }
};
