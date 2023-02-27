import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import TitleComponent from "../Title";
import { StoreModel } from "../../store/store-model";

const AddEditBookmark = () => {
  const params = useParams();

  const bookmark = useSelector((state: StoreModel) => {
    return state?.bookmarks?.find((bm) => bm.id.toString() === params.id);
  });

  return (
    <Fragment>
      <TitleComponent />
      <h1 className="font-bold text-2xl text-center mb-6">Bookmark Details</h1>
      <p className="text-center">{bookmark?.text}</p>
    </Fragment>
  );
};

export default AddEditBookmark;
