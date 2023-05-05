import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { Link } from "react-router-dom";


function AccordianOne(props) {
  const [open, setOpen] = useState('0');
  const toggle = (id) => {
    if (open === id) {
      setOpen('0');
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Topics</AccordionHeader>
          <AccordionBody accordionId="1">
          <Link to={"/intro"}>
          <h4 className="topic">Introduction</h4>
        </Link>
        <Link to={"/one"}>
          <h4 className="topic">Topic 1</h4>
        </Link>
        <Link to={"/two"}>
          <h4 className="topic">Topic 2</h4>
        </Link>
        <Link to={"/three"}>
          <h4 className="topic">Topic 3</h4>
        </Link>
        <Link to={"/four"}>
          <h4 className="topic">Topic 4</h4>
        </Link>
        <Link to={"/five"}>
          <h4 className="topic">Topic 5</h4>
        </Link>
        <Link to={"/six"}>
          <h4 className="topic">Topic 6</h4>
        </Link>
        <Link to={"/seven"}>
          <h4 className="topic">Topic 7</h4>
        </Link>
        <Link to={"/eight"}>
          <h4 className="topic">Topic 8</h4>
        </Link>
        <Link to={"/nine"}>
          <h4 className="topic">Topic 9</h4>
        </Link>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Presentations</AccordionHeader>
          <AccordionBody accordionId="2">
          Presentations
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Videos</AccordionHeader>
          <AccordionBody accordionId="3">
            Videos
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordianOne;