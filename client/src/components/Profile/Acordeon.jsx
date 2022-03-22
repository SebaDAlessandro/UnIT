import React from 'react';
import style from "./Acordeon.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useSelector} from "react-redux"

export default function SimpleAccordion() {
  const usuario = useSelector((estate)=> estate.usuario)
  return (
    <div>
      <Accordion className={style.cont}>
        <AccordionSummary
          className={style.tacordion}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={style.txacordion}>Habilidades Técnicas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.conacordeon}>
            Javascript
          </Typography>
          <Typography className={style.conacordeon}>
            Java
          </Typography>
          <Typography className={style.conacordeon}>
            React
          </Typography>
          <Typography className={style.conacordeon}>
            Css
          </Typography>
          <Typography className={style.conacordeon}>
            PHP
          </Typography>
          <Typography className={style.conacordeon}>
            Python
          </Typography>
          <Typography className={style.conacordeon}>
            HTML
          </Typography>
          <Typography className={style.conacordeon}>
            Redux
          </Typography>
          <Typography className={style.conacordeon}>
            Node
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
          <Typography className={style.txacordion}>Hablidades Blandas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={style.conacordeon}>
            Empático/a
          </Typography>
          <Typography className={style.conacordeon}>
            Puntual
          </Typography>
          <Typography className={style.conacordeon}>
            Autodidacta
          </Typography>
          <Typography className={style.conacordeon}>
            Crítico/a
          </Typography>
          <Typography className={style.conacordeon}>
            Creativo/a
          </Typography>
          <Typography className={style.conacordeon}>
            Adaptable
          </Typography>
          <Typography className={style.conacordeon}>
            Sociable
          </Typography>
          <Typography className={style.conacordeon}>
            Colaborador/a
          </Typography>
          <Typography className={style.conacordeon}>
            Responsable
          </Typography>
          <Typography className={style.conacordeon}>
            Liderazgo
          </Typography>
          <Typography className={style.conacordeon}>
            Amigable
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
            Mail: {usuario.email} <br/>
          </Typography>
          <Typography className={style.conacordeon}>
            LinkedIn: 
          </Typography>
          <Typography className={style.conacordeon}>
            Github: 
          </Typography>
          <Typography className={style.conacordeon}>
            Número: 
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
            Contraseña: {usuario.password}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
