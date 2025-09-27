import { Link } from "react-router";

import "./NotfoundPage.css";

export const NotfoundPage = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Page Not Found</h2>
      <p className="notfound-text">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="notfound-button">
        Back to Home
      </Link>
    </div>
  );
};
