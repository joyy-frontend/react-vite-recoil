import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { getClient } from "../queryClient";
import "../scss/index.scss";
// import { worker } from "../mocks/browser";

// if (import.meta.env.DEV) {
//   const { worker } = require("../mocks/browser");
//   worker.start();
// }

const Layout: React.FC = () => {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={"loading..."}>
        <Outlet />
      </Suspense>
    </QueryClientProvider>
  );
};

export default Layout;