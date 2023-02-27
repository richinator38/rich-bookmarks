import React from "react";
import { useSelector } from "react-redux";

import Bookmark from "./Bookmark";
import { StoreModel } from "../../store/store-model";

const BookmarkContainer = () => {
  const bookmarks = useSelector((state: StoreModel) => state?.bookmarks);

  return (
    <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {bookmarks.map((bm) => (
        <Bookmark {...bm} key={bm.id} />
      ))}
    </div>
  );
};

export default BookmarkContainer;
