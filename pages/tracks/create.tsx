import { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";

import StepWrapper from "../../components/StepWrapper/StepWrapper";
import MainLayout from "../../layouts/MainLayout";
import FileUpload from "../../components/FileUpload/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (activeStep >= 2) {
      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField
              style={{
                marginTop: 10,
              }}
              label={"Track name"}
            />
            <TextField
              style={{
                marginTop: 10,
              }}
              label={"Artist name"}
            />
            <TextField
              style={{
                marginTop: 10,
              }}
              label={"Words"}
              rows={3}
            />
          </Grid>
        )}

        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Load picture</Button>
          </FileUpload>
        )}

        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio">
            <Button>Load audio</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
