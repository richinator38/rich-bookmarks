import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import AddEditBookmark from "./components/AddEditBookmark";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="bookmarks" replace />,
  },
  { path: "/bookmarks", element: <Homepage /> },
  { path: "/bookmarks/:id", element: <AddEditBookmark /> },
]);

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
