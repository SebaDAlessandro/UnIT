import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from './Skills.module.css'
 /*import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper'; */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={style.tlet}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div> 
      <h1 className={style.habilidades}>Mis Habilidades:</h1>
    <div className={style.container}>
    <Box sx={{ width: '100%' }} className ={style.sosvos}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  className={style.lenguetas}>
          <Tab label="Tecnicas" {...a11yProps(0)} /> 
          <Tab label="Blandas" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={style.tabtec}>
                <button className={style.btn}><span>Javascript</span></button>
                <button className={style.btn}><span>React</span></button>
                <button className={style.btn}><span>Css</span></button>
                <button className={style.btn}><span>Java</span></button>
                <button className={style.btn}><span>PHP</span></button>
                <button className={style.btn}><span>Python</span></button>
                <button className={style.btn}><span>HTML</span></button>
                <button className={style.btn}><span>Redux</span></button>
                <button className={style.btn}><span>Node</span></button>
      </TabPanel>
      <TabPanel value={value} index={1} className={style.tabbla}>
                <button className={style.btn}><span>Paciente</span></button>
                <button className={style.btn}><span>Empatíc@</span></button>
                <button className={style.btn}><span>Puntual</span></button>
                <button className={style.btn}><span>Respetuos@</span></button>
                <button className={style.btn}><span>Compañer@</span></button>
                <button className={style.btn}><span>Analista</span></button>
                <button className={style.btn}><span>Autodidacta</span></button>
                <button className={style.btn}><span>Atent@</span></button>
                <button className={style.btn}><span>Adaptabilidad</span></button>
      </TabPanel>
    </Box>
    </div>
    </div>
  );
}
        
