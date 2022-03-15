import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from './Skills.module.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={style.lenguetas}>
          <Tab label="Blandas" {...a11yProps(0)} />
          <Tab label="Tecnicas" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
                <span className={style.btn}>Javascript</span>
                <span className={style.btn}>React</span>
                <span className={style.btn}>Css</span>
                <span className={style.btn}>Java</span>
                <span className={style.btn}>PHP</span>
                <span className={style.btn}>Python</span>
                <span className={style.btn}>HTML</span>
                <span className={style.btn}>Redux</span>
                <span className={style.btn}>Node</span>
      </TabPanel>
      <TabPanel value={value} index={1}>
                <span>Paciente</span>
                <span>Empatíc@</span>
                <span>Puntual</span>
                <span>Respetuos@</span>
                <span>Compañer@</span>
                <span>Analista</span>
                <span>Autodidacta</span>
                <span>Atent@</span>
                <span>Adaptabilidad</span>
      </TabPanel>
    </Box>
    </div>
    </div>
  );
}
        
