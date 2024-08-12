"use client";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";
import { toast } from "react-toastify";

const Message = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const { setUnReadCount } = useGlobalContext();

  const formattedDate = (createdAt) => {
    return new Date(createdAt).toLocaleString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Europe/London",
    });
  };

  const handleRead = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: "PUT",
      });
      if (res.status === 200) {
        const { read } = await res.json();
        setIsRead(read);
        setUnReadCount((prevCount) => (read ? prevCount - 1 : prevCount + 1));
        if (read) {
          toast.success("marked as Read");
        } else {
          toast.success("Marked as New");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something wrong");
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        setIsDeleted(true);
        setUnReadCount((prevCount) => prevCount - 1);
        toast.success("Message as Deleted");
      }
    } catch (err) {
      console.log(err);
      toast.error("Messag not deleted");
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className={`relative shadow-md mb-8`}>
      <div className={`p-4 bg-white ${isRead && "opacity-20"}`}>
        <h2 className="text-xl mb-4">
          <span className="font-bold">Property Inquiry: </span>
          {message.property.name}
        </h2>
        <p className="text-gray-700">{message.body}</p>

        <ul className="mt-4">
          <li className="flex items-center justify-between h-8 text-left">
            <div className="w-1/2">
              <strong>Name:</strong>
            </div>
            <div className="w-1/2">{message.sender.username}</div>
          </li>
          <li className="flex items-center justify-between h-8 text-left">
            <div className="w-1/2">
              <strong>Reply Email: </strong>
            </div>
            <div className="w-1/2"> {message.email}</div>
          </li>
          <li className="flex items-center justify-between h-8 text-left">
            <div className="w-1/2">
              <strong>Reply Phone: </strong>
            </div>
            <div className="w-1/2">
              {" "}
              <a href={`tel:${message.phone}`} className="text-blue-500">
                {message.phone}
              </a>
            </div>
          </li>
          <li className="flex items-center justify-between h-8 text-left">
            <div className="w-1/2">
              <strong>Received: </strong>
            </div>
            <div className="w-1/2"> {formattedDate(message.createdAt)}</div>
          </li>
        </ul>
      </div>
      <div className="flex w-full">
        <button
          onClick={handleRead}
          className=" bg-gray-800 text-white py-2 px-3  w-full"
        >
          Mark As Read
        </button>
        <button
          onClick={handleDelete}
          className=" bg-red-400 text-white py-2 px-3 w-full"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Message;
