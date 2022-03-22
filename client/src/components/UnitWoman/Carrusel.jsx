import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Style from "./Carrusel.module.css"

const steps = [
  {
    label: 'Select campaign settings',
    description: `Rita se ha cansado de los comentarios que hace un compañero de oficina sobre su escote, su culo y su ropa pero no sabe qué hacer. Nada le disuade. Ni las malas caras ni las contestaciones firmes. Habló con su jefe sobre el tema. Ante un “¡qué alegría de escote que me traes esta mañana!”, su jefe dijo: 
    “Deja a la chiquita que se va a poner colorada”.`,
  },
  {
    label: 'Create an ad group',
    description: 'Rita se ha cansado de los comentarios que hace un compañero de oficina sobre su escote, su culo y su ropa pero no sabe qué hacer. Nada le disuade. Ni las malas caras ni las contestaciones firmes. Habló con su jefe sobre el tema. Ante un “¡qué alegría de escote que me traes esta mañana!”.',
  },
  {
    label: 'Create an ad',
    description: `Rita se ha cansado de los comentarios que hace un compañero 
    de oficina sobre su escote, su culo y su ropa pero no sabe qué hacer. Nada le disuade. 
    Ni las malas caras ni las contestaciones firmes. Habló con su jefe sobre el tema. Ante un
     “¡qué alegría de escote que me traes esta mañana!”,.`,
  },
];

function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper> */}
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2, fontSize: 20}}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper className={Style.letra}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
export default TextMobileStepper