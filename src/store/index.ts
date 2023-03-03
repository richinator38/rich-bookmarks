import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

import { StoreModel } from "./store-model";
import { BookmarkProps } from "../components/Bookmark/Bookmark";

const initialBookmarks: BookmarkProps[] = [
  { id: 1, link: "https://amazon.com", text: "Amazon" },
  { id: 2, link: "https://google.com", text: "Google" },
  { id: 3, link: "https://deanodle.org", text: "Pastor Dean" },
  { id: 4, link: "https://www.intertech.com", text: "Intertech" },
];

export const updateBookmarkAction =
  createAction<BookmarkProps>("Update Bookmark");

const storeReducer = createReducer<StoreModel>(
  { bookmarks: initialBookmarks },
  (builder) => {
    builder.addCase(updateBookmarkAction, (state, action) => {
      const idx = state.bookmarks.findIndex(
        (bm) => bm.id === action.payload.id
      );
      if (idx >= 0) {
        state.bookmarks[idx] = action.payload;
      }
    });
  }
);

export const store = configureStore<StoreModel>({
  reducer: storeReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
