import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import "./index.css";
import Dashboard from "./pages/admin/Dashboard";
import PostProvider from "./context/postsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Manage from "./pages/admin/Manage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "post/:postId",
				// element: <Contact />,
			},
		],
	},
	{
		path: "/admin/dashboard",
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/admin/manage",
		element: <Manage />,
		errorElement: <ErrorPage />,
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	// <PostProvider>
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
	// </PostProvider>
);
