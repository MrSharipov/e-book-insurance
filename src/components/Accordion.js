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
          <h6 className="topic">Kirish</h6>
        </Link>
        <Link to={"/one"}>
          <h6 className="topic">SUG‘URTA BIZNESI FANINING PREDMETI VA OB’YEKTI</h6>
        </Link>
        <Link to={"/two"}>
          <h6 className="topic">SUG‘URTA BIZNESINI SUG‘URTA FAOLIYATI BO‘YICHA TURKUMLANISHI</h6>
        </Link>
        <Link to={"/three"}>
          <h6 className="topic">SUG‘URTA MAHSULOTINI YARATISH VA UNI SOTISH TEXNOLOGIYASI</h6>
        </Link>
        <Link to={"/four"}>
          <h6 className="topic">SUG‘URTA BOZORINING INSTITUTSIONAL TUZILISHI VA UNING UMUMIY XARAKTERISTIKASI</h6>
        </Link>
        <Link to={"/five"}>
          <h6 className="topic">SUG‘URTA BIZNESIDA SUG‘URTA VOSITACHILARNING TUTGAN O‘RNI VA ULAR BILAN O‘ZARO MUNOSABATLARNI TASHKIL ETILISHI</h6>
        </Link>
        <Link to={"/six"}>
          <h6 className="topic">Topic 6</h6>
        </Link>
        <Link to={"/seven"}>
          <h6 className="topic">Topic 7</h6>
        </Link>
        <Link to={"/eight"}>
          <h6 className="topic">Topic 8</h6>
        </Link>
        <Link to={"/nine"}>
          <h6 className="topic">Topic 9</h6>
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