import React from 'react';
import style from './Acordeon.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion className={style.cont}>
        <AccordionSummary
          className={style.tacordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.txacordion}>Informacion Personal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.conacordeon}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <Typography className={style.conacordeon}>
              peronista
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.cont}>
        <AccordionSummary
          className={style.tacordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={style.txacordion}>Sobre Mi</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.conacordeon}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.cont}>
        <AccordionSummary
          className={style.tacordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={style.txacordion}>Contacto</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.conacordeon}>
            contacto
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={style.cont}>
        <AccordionSummary
          className={style.tacordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={style.txacordion}>Seguridad</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.conacordeon}>
            seguridad
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
