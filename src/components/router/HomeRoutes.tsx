import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Work } from "../pages/Work";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "about",
    children: <About />,
  },
  {
    path: "contact",
    children: <Contact />,
  },
  {
    path: "work",
    children: <Work />,
  },
];
