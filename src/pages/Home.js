import React from "react";
import Form from "../components/Form";
import Contacts from "../components/Contacts";

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-sm-center my-5">
        <Form />
      </div>

      <Contacts />
    </div>
  );
};

export default Home;
