import { Container, Stepper, Step, StepLabel, Grid, Card } from "@mui/material";
import React from "react";

interface Props {
  activeStep: number;
  children: React.ReactNode;
}

const steps = ["Information about tracks", "Load picture", "Load audio"];

const StepWrapper: React.FC<Props> = ({ activeStep, children }) => {
  return (
    <div>
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((step, idx) => (
            <Step key={idx} completed={activeStep > idx}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid
          container
          justifyContent="center"
          style={{
            margin: "70px 0",
            height: 270,
          }}
        >
          <Card style={{ width: 600 }}>{children}</Card>
        </Grid>
      </Container>
    </div>
  );
};

export default StepWrapper;
