import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="topics">
        <Link to={"/one"}>
          <h4>Topic 1</h4>
        </Link>
        <Link to={"/two"}>
          <h4>Topic 2</h4>
        </Link>
        <Link to={"/three"}>
          <h4>Topic 3</h4>
        </Link>
        <Link to={"/four"}>
          <h4>Topic 4</h4>
        </Link>
        <Link to={"/five"}>
          <h4>Topic 5</h4>
        </Link>
        <Link to={"/six"}>
          <h4>Topic 6</h4>
        </Link>
        <Link to={"/seven"}>
          <h4>Topic 7</h4>
        </Link>
        <Link to={"/eight"}>
          <h4>Topic 8</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
