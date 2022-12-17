import React from "react";

import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
import Player from "../components/Player/Player";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container
        style={{
          margin: "90px 0",
        }}
      >
        {children}
      </Container>
      <Player />
    </div>
  );
};

export default MainLayout;
