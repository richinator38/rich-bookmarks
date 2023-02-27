import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const TitleComponent = () => {
  return (
    <Fragment>
      <div className="flex flex-row bg-sky-500/40 rounded-lg border border-gray-600 mb-6 mt-1">
        <p className="font-bold text-4xl text-center mb-6 mt-4 grow">
          <NavLink to="/bookmarks">I Remember</NavLink>
        </p>
        <p className="flex-none mb-8 mt-4">
          <NavLink to="/login" className="pr-6">
            Login
          </NavLink>
        </p>
      </div>
    </Fragment>
  );
};

export default TitleComponent;
