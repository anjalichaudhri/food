import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Cuisine } from "./Cuisine";
/** steps to specify routes:
 * import routes and route
 * for intial path use / as path in route and provide component name in element attribute in route
 * import another component and specify path as /component name or anything seems fit.
 */
export const Pages = () => {
  /**
   * since did not define No routes matched location "/cuisine/American"  routes yet so got this error/warning
   * so for that add in path={"/cuisine/:type"} to make it dynamic route 
  */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
};

/**
 * Uncaught Error: useRoutes() may be used only in the context of a <Router> component
 * we are getting this error because we haven't wrapped is with (defined) browser router yet.
 * when setting up react router
 * browser router gives the functionality of react router dom
 * browser router gives the functionality for thhe other routes to work
 * it kinds of look at the paths and finds out which route to render out.
 */
