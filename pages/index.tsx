import React from "react";

import Navbar from "../components/Navbar/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome</h1>
          <h3>The best tracks are stored here</h3>
        </div>
      </MainLayout>

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
