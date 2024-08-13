"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { FaPaperPlane } from "react-icons/fa";
import Button from "@/components/Button";

const ContactForm = ({
  property,
  heading,
  description = false,
  generalQuery = false,
}) => {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    console.log(e.target.value);
    e.preventDefault();

    if (generalQuery) {
      toast.success(
        "Thank you for your message! We will get in touch with you on the next working day."
      );
    }
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
    <div className="p-6 shadow-lg rounded-lg bg-gray-300">
      <h4 className="text-2xl font-semibold">{heading}</h4>
      {description && (
        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
          Complete this form and we will get back to you in 24 hours.
        </p>
      )}
      {!session ? (
        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
          You must be login to send the message
        </p>
      ) : isSubmitted ? (
        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
          Your Message has beeen Submitted
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="relative w-full mb-3 mt-8">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Full Name"
              style={{ transition: "all 0.15s ease 0s" }}
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Email"
              style={{ transition: "all 0.15s ease 0s" }}
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              type="phone"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Phone"
              style={{ transition: "all 0.15s ease 0s" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows="4"
              cols="50"
              id="message"
              className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Type a message..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="text-center mt-6 flex justify-center">
            {/* <button
              className="flex justify-center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              style={{ transition: "all 0.15s ease 0s" }}
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </button> */}
            <Button icon={true} Icon={FaPaperPlane}>
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
export default ContactForm;
