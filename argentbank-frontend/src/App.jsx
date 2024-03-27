import "./assets/styles/global.css";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import OnlyLoggedProtectedRoute from "./components/OnlyLoggedProtectedRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/Error/";
import Login from "./routes/Login";
import Profile from "./routes/Profile";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// !CRITIC, change to false before going prod
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<ErrorPage />} />

            <Route element={<OnlyLoggedProtectedRoute />}>
              <Route path="/Profile" element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}
