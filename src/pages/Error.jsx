import React from "react";
import MainNavigation from "../component/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured</h1>
        <div>Could not find this page</div>
      </main>
    </>
  );
};

export default Error;
