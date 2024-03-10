import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Work } from "../pages/Work";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "about",
    exact: false,
    children: <About />,
  },
  {
    path: "contact",
    exact: false,
    children: <Contact />,
  },
  {
    path: "work",
    exact: false,
    children: <Work />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
