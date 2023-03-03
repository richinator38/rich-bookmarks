import { useParams, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { createSelector } from "reselect";

import TitleComponent from "../Title";
import { StoreModel } from "../../store/store-model";
import { BookmarkProps } from "./Bookmark";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { updateBookmarkAction } from "../../store";
import UIButton from "../UI/UIButton";
import UIForm from "../UI/UIForm";

const bookmarkSel = createSelector(
  (state: StoreModel) => state?.bookmarks,
  (_: StoreModel, paramsId: string) => paramsId,
  (bookmarks: BookmarkProps[], paramsId: string) =>
    bookmarks?.find((bm) => bm.id.toString() === paramsId)
);

const AddEditBookmark = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (e: any) => {
    e.preventDefault();

    if (bookmark) {
      dispatch(
        updateBookmarkAction({
          id: bookmark.id,
          text: descriptionState,
          link: linkState,
        })
      );
      navigate(`/bookmarks`);
    }
  };

  const handleCancel = (e: any) => {
    e.preventDefault();

    navigate(`/bookmarks`);
  };

  const handleDescChange = (e: any) => {
    setDescriptionState(e.target.value);
  };

  const handleLinkChange = (e: any) => {
    setLinkState(e.target.value);
  };

  const bookmark = useAppSelector((state) => {
    return bookmarkSel(state, params.id ?? "");
  });

  const [descriptionState, setDescriptionState] = useState(
    bookmark ? bookmark.text : ""
  );
  const [linkState, setLinkState] = useState(bookmark ? bookmark.link : "");

  return (
    <Fragment>
      <TitleComponent />
      {bookmark ? (
        <UIForm title="Bookmark Details">
          <label htmlFor="description" aria-label="Description">
            Description
          </label>
          <input
            className="rounded-md"
            type="text"
            id="description"
            onChange={handleDescChange}
            value={descriptionState}
          />
          <label htmlFor="link" aria-label="Link" className="mt-4">
            Link
          </label>
          <input
            className="rounded-md"
            type="text"
            id="link"
            onChange={handleLinkChange}
            value={linkState}
          />
          <UIButton onClick={handleSave} text="Save" />
          <UIButton onClick={handleCancel} text="Cancel" />
        </UIForm>
      ) : (
        <h1 className="font-bold text-2xl text-center mb-6">
          Bookmark not found
        </h1>
      )}
    </Fragment>
  );
};

export default AddEditBookmark;
