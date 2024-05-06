import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(props) {
  useEffect(() => emailjs.init(process.env.REACT_APP_ID), []);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeMessage = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: name,
        recipient: email,
        message: msg,
      });
      props.showAlert("email sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setEmail("");
    setName("");
    document.getElementById("message").value = "";
  };
  return (
    <div className="contact-div">
      <h1>Contact me</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={changeName}
          value={name}
          placeholder="Name"
          name="name"
          required
        />
        <input
          onChange={changeEmail}
          value={email}
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <textarea
          onChange={changeMessage}
          placeholder="Your message"
          name="message"
          rows="10"
          id="message"
          required
          style={{ color: "white" }}
        />
        <button type="submit" className="btn btn-custom" disabled={loading}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}
