import { createStore } from "redux";

import { StoreModel } from "./store-model";
import { BookmarkProps } from "../components/Bookmark/Bookmark";

const initialBookmarks: BookmarkProps[] = [
  { id: 1, link: "https://amazon.com", text: "Amazon" },
  { id: 2, link: "https://google.com", text: "Google" },
  { id: 3, link: "https://deanodle.org", text: "Pastor Dean" },
];

const bookMarksReducer = (
  state: StoreModel = { bookmarks: initialBookmarks },
  action: any
) => {
  return state;
};

export const store = createStore(bookMarksReducer);
