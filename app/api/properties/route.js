import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/property";
import { getSessionUser } from "@/utils/getSessionUer";

// /api/properties
export const GET = async (req) => {
  const defaultPageSize = 6;
  try {
    await connectDB();
    // pagination /api/properties?page=2&pageSize=3
    const totalProperties = await Property.countDocuments();
    const page = req.nextUrl.searchParams.get("page") || 1;
    const pageSize =
      req.nextUrl.searchParams.get("pageSize") || defaultPageSize;
    const skipPage = (page - 1) * pageSize;

    const properties = await Property.find({})
      .skip(skipPage)
      .limit(pageSize)
      .sort({ createdAt: -1 });
    const propertiesList = {
      totalProperties,
      properties,
    };

    return new Response(JSON.stringify(propertiesList), {
      status: 200,
    });
  } catch (err) {
    return new Response("Something went wrong", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectDB();
    const userSession = await getSessionUser();

    if (!userSession || !userSession.userId) {
      return new Response("User Auth Required", { status: 401 });
    }
    const { userId } = userSession;

    const formData = await req.formData();
    const amenities = formData.getAll("amenities");
    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

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
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
      // images,
    };

    // upload Images in cloudinary
    const imageUploadPromises = [];
    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // convert image to data to 64
      const imageBase64 = imageData.toString("base64");

      // req upload to cloudinary
      const result = await cloudinary.uploader.upload_large(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "eiskenproperties",
          resource_type: "auto",
          chunk_size: 6000000,
        }
      );
      imageUploadPromises.push(result.secure_url);
      // promises to upload the images
      const uploadedImages = await Promise.all(imageUploadPromises);
      // add uploaded image to propertydata
      propertyData.images = uploadedImages;
    }
    const newProperty = new Property(propertyData);
    await newProperty.save();

    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newProperty._id}`
    );

    // return new Response(JSON.stringify({ message: "Success" }), {
    //   status: 200,
    // });
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
