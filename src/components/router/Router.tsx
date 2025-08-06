import { memo, VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Routes>
      {HomeRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<HeaderLayout>{route.children}</HeaderLayout>}
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
