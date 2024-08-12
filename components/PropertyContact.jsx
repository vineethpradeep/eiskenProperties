"use client";
import { useState } from "react";
import PrimaryLink from "./PrimaryLink";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

function PropertyContact({ property }) {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
      receiver: property.owner,
      property: property._id,
    };
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        toast.success("Message sent successfully");
        setIsSubmitted(true);
      } else if (res.status === 400 || res.status === 401) {
        const dataObj = await res.json();
        toast.error(dataObj.message);
      } else {
        toast.error("Error while submitting the form");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error while submitting the form");
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
  };

  return (
    <div className="bg-primary-color-light py-8 px-6 flex flex-col mt-6">
      <h3 className="text-xl font-bold mb-10">Contact Property Owner</h3>
      {!session ? (
        <p>You must be login to send the message</p>
      ) : isSubmitted ? (
        <p className="mb-4">Your Message has beeen Submitted</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="w-full px-3 mb-8">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              id="name"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-8">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-8">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              id="phone"
              type="text"
              placeholder="Enter Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-8">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              id="message"
              type="text"
              placeholder="Enter Your Message"
              rows="4"
              cols="50"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className="bg-primary-dark text-center text-gray-300">
            <FaPaperPlane className="mr-2" /> Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default PropertyContact;
