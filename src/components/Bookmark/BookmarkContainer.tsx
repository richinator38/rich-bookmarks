import React from "react";

import Bookmark, { BookmarkProps } from "./Bookmark";

const DUMMY_BOOKMARKS: BookmarkProps[] = [
  { id: 1, link: "https://amazon.com", text: "Amazon" },
  { id: 2, link: "https://google.com", text: "Google" },
  { id: 3, link: "https://deanodle.org", text: "Pastor Dean" },
];

const BookmarkContainer = () => {
  return (
    <div className="text-center grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {DUMMY_BOOKMARKS.map((bm) => (
        <Bookmark {...bm} key={bm.id} />
      ))}
    </div>
  );
};

export default BookmarkContainer;
