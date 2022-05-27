import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BiChevronDown } from "react-icons/bi";

function AccordionFAQ() {
  const accordionList = [
    "Apa saja syarat yang dibutuhkan?",
    "Berapa hari minimal sewa mobil lepas kunci?",
    "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    "Apakah Ada biaya antar-jemput?",
    "Bagaimana jika terjadi kecelakaan",
  ];

  return (
    <div className="space-y-4">
      {accordionList.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<BiChevronDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <p>{item}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionFAQ;
