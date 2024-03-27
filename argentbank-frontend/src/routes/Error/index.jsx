import "./style.css";
import { NavLink } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="errorpage-container">
      <h2 className="errorpage-title">
        Oh no, <span className="errorpage-wrong">something gone wrong !</span>
      </h2>

      <p className="errorpage-text">
        We&apos;re sorry, but the page you are looking for does not exist.
        <br />
        <br />
        If you believe this is an error, feel free to contact our support team
        for assistance.
        <br />
        <br />
        Thank you for banking with us!
      </p>

      <NavLink to="/">
        <p className="errorpage-link">
          Back to the homepage to explore our banking services
        </p>
      </NavLink>
    </div>
  );
}
