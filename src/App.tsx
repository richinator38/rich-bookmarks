import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import AddEditBookmark from "./components/Bookmark/AddEditBookmark";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="bookmarks" replace />,
  },
  { path: "/bookmarks", element: <Homepage /> },
  { path: "/bookmarks/:id", element: <AddEditBookmark /> },
  { path: "/login", element: <LoginPage /> },
]);

const App = () => {
  return (
    <div className="px-4">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
