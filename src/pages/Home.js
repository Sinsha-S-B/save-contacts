import React from "react";
import Form from "../components/Form";
import Contacts from "../components/Contacts";

const Home = ({ formSubB, contacts, deleteContact, favToggle }) => {
  // console.log(contacts, "contacts");

  return (
    <div className="container my-5">
      <div className="row justify-content-sm-center my-5">
        <Form formSubC={formSubB} />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
        {contacts.map((singleContact) => {
          return (
            <Contacts
              key={singleContact.id}
              contact={singleContact}
              deleteContact={deleteContact}
              favToggle={favToggle}
            />
          );
        })}
        {contacts.length === 0 && <div>No contacts found</div>}
      </div>
    </div>
  );
};

export default Home;
