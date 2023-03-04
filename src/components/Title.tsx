import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const TitleComponent = () => {
  return (
    <Fragment>
      <div className="flex flex-row bg-sky-900/40 border border-gray-600 mb-4">
        <p className="font-bold text-4xl text-center mb-6 mt-4 grow">
          <NavLink to="/bookmarks">I Remember</NavLink>
        </p>
        <p className="mb-8 mt-4 float-right">
          <NavLink to="/login" className="pr-6">
            Login
          </NavLink>
        </p>
      </div>
    </Fragment>
  );
};

export default TitleComponent;
