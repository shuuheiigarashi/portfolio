import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
