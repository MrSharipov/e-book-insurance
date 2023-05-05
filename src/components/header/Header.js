import AccordianOne from "../Accordion";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="topics">
        <AccordianOne />
      </div>
    </div>
  );
};

export default Header;
