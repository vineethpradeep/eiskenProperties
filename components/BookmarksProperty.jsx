"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { FaBookmark } from "react-icons/fa";

function BookmarksProperty({ property }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }
    const checkBookmark = async () => {
      try {
        const res = await fetch("/api/bookmarks/check", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            propertyId: property._id,
          }),
        });
        if (res.status === 200) {
          const data = await res.json();
          setIsBookmarked(data.isBookmarked);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    checkBookmark();
  }, [property, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to sign in to bookmark property");
      return;
    }
    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          propertyId: property._id,
        }),
      });
      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
        setIsBookmarked(data.isBookmarked);
      }
    } catch (err) {
      console.error(err);
      toast.error("something went wrong");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center bg-share-light py-3 rounded-md ${
        isBookmarked && "bg-share-dark text-white"
      }`}
    >
      <FaBookmark className="mr-2" />
      {isLoading && "Loading...."}
      {isBookmarked ? "Remove Bookmark" : "Bookmark Property"}
    </button>
  );
}

export default BookmarksProperty;
