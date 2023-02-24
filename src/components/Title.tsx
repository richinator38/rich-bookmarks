import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const TitleComponent = () => {
  return (
    <Fragment>
      <div className="flex flex-row">
        <p className="font-bold text-4xl text-center mb-8 mt-4 grow">
          I Remember
        </p>
        <p className="flex-none mb-8 mt-4">
          <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </Fragment>
  );
};

export default TitleComponent;
