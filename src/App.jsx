import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import ParticipantsPage from "./pages/Participants";
import RegistrationPage from "./pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
          },
          {
            path: ":eventId/participants",
            element: <ParticipantsPage />,
          },
          {
            path: ":eventId/registration",
            element: <RegistrationPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
