import { createRoot } from "react-dom/client";
import App from "./App";

//REDUX
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
const root = createRoot(document.getElementById("root"));
// React strictmode help for developping / add additionals checks / warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
