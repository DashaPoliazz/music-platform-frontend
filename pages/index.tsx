import React from "react";

import { Button } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="center">
        <h1>Welcome</h1>
        <h3>The best tracks are stored here</h3>
      </div>

      <style jsx>
        {`
          .center {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default Index;
