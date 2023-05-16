import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PracList from "./components/PracList";
import PractiseId from "./components/PractiseId";
import Root from "./layout/Root";
import Dashboard from "./layout/Dashboard";
import Nav_home from "./components/Nav_home";
import Nav_about from "./components/Nav_about";
import Nav_admin from "./components/Nav-admin";
import Nav_user from "./components/Nav-user";
import Card from "./components/Card";
import Weather from "./components/Weather";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Nav_home />,
      },
      {
        path: "about",
        element: <Nav_about />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin",
        element: <Nav_admin />,
      },
      {
        path: "user",
        element: <Nav_user />,
      },
      {
        path: "weather",
        element: <Weather />,
      },
      {
        path: ":id",
        element: <Card />,
      },
    ],
  },
]);
//       <Route path="/" element={<Root />}>
//         <Route path="home" element={<Nav_home />}></Route>
//         <Route path="about" element={<Nav_about />}></Route>
//       </Route>
//       {/* <Route path="/" element={<Dashboard />}>
//         <Route path="home" element={<Nav_home />}></Route>
//         <Route path="about" element={<Nav_about />}></Route>
//       </Route> */}
//     </>
//   )
// );
export default route;
