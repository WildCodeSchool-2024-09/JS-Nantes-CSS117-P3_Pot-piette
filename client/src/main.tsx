// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./global.css";
/* ************************************************************************* */

// Import the main app component
import App from "./App";
import AccountCreation from "./pages/AcountCreation/AccountCreation";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import AddRecipe5 from "./pages/AddRecipe/AddRecipe5";
import ConnexionPage from "./pages/ConnexionPage/ConnexionPage";
import DetailRecipePage from "./pages/DetailRecipePage/DetailRecipePage";
import Homepage from "./pages/Homepage/Homepage";
import UserConnexion from "./pages/UserConnexion/UserConnexion";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/account",
        element: <AccountCreation />,
      },
      {
        path: "/connexion",
        element: <ConnexionPage />,
      },
      {
        path: "/recipe/:id",
        element: <DetailRecipePage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/api/recipes/${params.id}`),
      },
      {
        path: "/login",
        element: <UserConnexion />,
      },
      {
        path: "/My_Activity",
        element: <ActivityPage />,
      },
      {
        path: "/add",
        element: <AddRecipe />,
      },
      {
        path: "/addrecipe5",
        element: <AddRecipe5 />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
