import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import UIButton from "../components/UI/UIButton";
import UIForm from "../components/UI/UIForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formInputsValidity, setFormInputsValidity] = useState({
    userName: true,
    password: true,
  });
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const isEmpty = (value: string | undefined) => value?.trim() === "";

  const handleLogin = (event: any) => {
    event.preventDefault();

    if (!updateFieldsValidity(true)) {
      return;
    }

    navigate(`/bookmarks`);
  };

  const updateFieldsValidity = (
    checkAll: boolean,
    isUsername: boolean = true
  ): boolean => {
    const userName = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    const userNameIsValid = !isEmpty(userName);
    const passwordIsValid = !isEmpty(password);

    const validityObj = {
      userName: formInputsValidity.userName,
      password: formInputsValidity.password,
    };

    if (checkAll) {
      validityObj.userName = userNameIsValid;
      validityObj.password = passwordIsValid;
    } else {
      if (isUsername) {
        validityObj.userName = userNameIsValid;
      } else {
        validityObj.password = passwordIsValid;
      }
    }

    setFormInputsValidity(validityObj);

    const formIsValid = userNameIsValid && passwordIsValid;
    return formIsValid;
  };

  const usernameChangeHandler = (event: any) => {
    event.preventDefault();

    updateFieldsValidity(false, true);
  };

  const passwordChangeHandler = (event: any) => {
    event.preventDefault();

    updateFieldsValidity(false, false);
  };

  return (
    <UIForm title="Login">
      <label htmlFor="username" aria-label="User Name">
        Username
      </label>
      <input
        className="rounded-md"
        type="text"
        id="username"
        ref={userNameRef}
        onChange={usernameChangeHandler}
      />
      {!formInputsValidity.userName && (
        <p className="text-red-600 font-bold">Username is required</p>
      )}
      <label htmlFor="password" aria-label="password" className="mt-4">
        Password
      </label>
      <input
        className="rounded-md"
        type="password"
        id="password"
        ref={passwordRef}
        onChange={passwordChangeHandler}
      />
      {!formInputsValidity.password && (
        <p className="text-red-600 font-bold">Password is invalid</p>
      )}
      <UIButton onClick={handleLogin} text="Login" />
    </UIForm>
  );
};

export default LoginPage;
