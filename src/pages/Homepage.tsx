import { Fragment } from "react";

import BookmarkContainer from "../components/Bookmark/BookmarkContainer";
import TitleComponent from "../components/Title";

const Homepage = () => {
  return (
    <Fragment>
      <TitleComponent />
      <BookmarkContainer />
    </Fragment>
  );
};

export default Homepage;
