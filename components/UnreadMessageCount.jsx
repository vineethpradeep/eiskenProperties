import { useEffect, useState } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const UnreadMessageCount = ({ session }) => {
  const { unReadCount, setUnReadCount } = useGlobalContext();
  useEffect(() => {
    if (!session) return;
    const fetUnreadMessage = async () => {
      try {
        const res = await fetch("/api/messages/unread");
        if (res.status === 200) {
          const data = await res.json();
          setUnReadCount(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetUnreadMessage();
  }, [session]);

  return (
    unReadCount > 0 && (
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {unReadCount}
      </span>
    )
  );
};

export default UnreadMessageCount;
