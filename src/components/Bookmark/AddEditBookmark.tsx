import { useParams } from "react-router-dom";
import { Fragment } from "react";
import TitleComponent from "../Title";

const AddEditBookmark = () => {
  const params = useParams();

  return (
    <Fragment>
      <TitleComponent />
      <h1 className="font-bold text-2xl text-center mb-6">Bookmark Details</h1>
      <p className="text-center">{params.id}</p>
    </Fragment>
  );
};

export default AddEditBookmark;
