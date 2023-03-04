import React from "react";

import Bookmark from "./Bookmark";
import { useAppSelector } from "../../hooks";

const BookmarkContainer = () => {
  const bookmarks = useAppSelector((state) => state?.bookmarks);

  return (
    <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {bookmarks.map((bm) => (
        <Bookmark {...bm} key={bm.id} />
      ))}
    </div>
  );
};

export default BookmarkContainer;
