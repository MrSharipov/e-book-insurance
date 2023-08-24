import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function AccordianOne(props) {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen("0");
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Mundareja</AccordionHeader>
          <AccordionBody accordionId="1">
            <Link to={"/intro"}>
              <h6 className="topic">Kirish</h6>
            </Link>
            <Link to={"/one"}>
              <h6 className="topic">
                SUG‘URTA BIZNESI FANINING PREDMETI VA OB’YEKTI
              </h6>
            </Link>
            <Link to={"/two"}>
              <h6 className="topic">
                SUG‘URTA BIZNESINI SUG‘URTA FAOLIYATI BO‘YICHA TURKUMLANISHI
              </h6>
            </Link>
            <Link to={"/three"}>
              <h6 className="topic">
                SUG‘URTA MAHSULOTINI YARATISH VA UNI SOTISH TEXNOLOGIYASI
              </h6>
            </Link>
            <Link to={"/four"}>
              <h6 className="topic">
                SUG‘URTA BOZORINING INSTITUTSIONAL TUZILISHI VA UNING UMUMIY
                XARAKTERISTIKASI
              </h6>
            </Link>
            <Link to={"/five"}>
              <h6 className="topic">
                SUG‘URTA BIZNESIDA SUG‘URTA VOSITACHILARNING TUTGAN O‘RNI VA
                ULAR BILAN O‘ZARO MUNOSABATLARNI TASHKIL ETILISHI
              </h6>
            </Link>
            <Link to={"/six"}>
              <h6 className="topic">
                SUG‘URTA BIZNESIDA MOLIYAVIY FAOLIYATNI BYUDJETLASHTIRISH
              </h6>
            </Link>
            <Link to={"/seven"}>
              <h6 className="topic">
                SUG‘URTA TASHKILOTLARIDA MOLIYAVIY NATIJANING SHAKLLANISHI
              </h6>
            </Link>
            <Link to={"/eight"}>
              <h6 className="topic">
                AKTUARIYLAR BOSHQARMASI VA UNING FAOLIYATINI TASHKIL ETISH
              </h6>
            </Link>
            <Link to={"/nine"}>
              <h6 className="topic">
                SUG‘URTA ZAHIRALARI: SUG‘URTA ZAHIRALARI VA UNING UMUMIY
                XARAKTERISTIKASI{" "}
              </h6>
            </Link>
            <Link to={"/ten"}>
              <h6 className="topic">
                SUG‘URTA BIZNESINI SOLIQQA TORTISH TURLARI VA UNING TARTIBI{" "}
              </h6>
            </Link>
            <Link to={"/eleven"}>
              <h6 className="topic">
                SUG‘URTA TASHKILOTINING AKTUAR HISOBOTI VA UNING AUDITORLIK
                TEKSHIRUVINI TASHKIL ETISH
              </h6>
            </Link>
            <Link to={"/twelve"}>
              <h6 className="topic">
                SUG‘URTA BIZNESIDA SUG‘URTA TASHKILOTINING BO‘LIMLARI
                FAOLIYATINI TASHKIL ETISH
              </h6>
            </Link>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Prezentatsiyalar</AccordionHeader>
          <AccordionBody accordionId="2">Presentations</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Video darslar</AccordionHeader>
          <AccordionBody accordionId="3">Videos</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Mustaqil ta'lim</AccordionHeader>
          <AccordionBody accordionId="4">Mustaqil</AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Mualliflar haqida</AccordionHeader>
          <AccordionBody accordionId="5">Mualliflar</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordianOne;
