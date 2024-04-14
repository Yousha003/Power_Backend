import React, { useState } from "react";
import axios from "axios";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const res = await axios.post(
        "https://js2-ecommerce-api.vercel.app/api/messages",
        formData
      );
      console.log(res);

      setName("");
      setEmail("");
      setMessage("");
      setConfirmation(
        "Tack för ditt meddelande! Vi återkommer så snart vi kan."
      );
    } catch (error) {
      console.error("Error sending message:", error);
      setConfirmation("Error sending message. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="form-title">Kontakta oss</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="name">
          Namn:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="email">
          E-post:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="message">
          Meddelande:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button className="send-btn" type="submit">
          Skicka
        </button>

      </form>
      
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default About;
