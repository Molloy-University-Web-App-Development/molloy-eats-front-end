import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Menu from "./Menu";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Menu />
  </StrictMode>
);
