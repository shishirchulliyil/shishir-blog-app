import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Sorry</h2>
      <p>This page does not exists!</p>
      <Link to="/">Take me back to Home</Link>
    </div>
  );
};

export default NotFound;
