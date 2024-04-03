import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Notfound from "./pages/Notfound";
import Nav from "./components/Nav";

function App() {
  const [contacts, setContacts] = useState([]);

  const  formSubA = (data) => {
    // console.log(data, "datas");
    setContacts([...contacts, data]);
  };

  const deleteContact = (id) => {
    console.log(id,'idddddddddddddddddddddd')
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
    setContacts(newContact);
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home formSubB={formSubA} contacts={contacts} deleteContact={deleteContact}/>}
        />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
