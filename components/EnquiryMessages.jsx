"use client";

import { useState, useEffect } from "react";
import Message from "@/components/Message";
import Spinner from "./Spinner";

const EnquiryMessages = () => {
  const [messages, setMessages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    getMessages();
  }, []);

  return isLoading ? (
    <Spinner loading={isLoading} />
  ) : (
    <section className="relative block bg-gray-900 mt-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4 lg:pb-16 pt-4">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white mb-12">
              Your Messages
            </h2>
            {messages.length === 0 ? (
              <p>You have no message</p>
            ) : (
              messages.map((message) => (
                <Message key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryMessages;
