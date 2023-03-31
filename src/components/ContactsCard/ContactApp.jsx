import React from "react";
import Card from "./Card";
import "./Contact.css";
import { Contact } from "../../utils/Contact.js";


function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.img}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

export default function ContactApp() {
  return (
    <div>
      <h1>My Contacts</h1>

      {Contact.map(createCard)}

    </div>
  );
}