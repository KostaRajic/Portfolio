/* eslint-disable no-undef */
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

export const EmailEnvelope = ({ goBack }) => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const modalRef = useRef(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailForm({ ...emailForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5001/sendMail', {
        method: 'POST',
        body: JSON.stringify(emailForm),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert(`Failed to send email: ${result.message}`);
      }
    } catch (e) {
      console.error("Error sending email:", e);
      alert("Failed to send email.");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [goBack]);

  const handleClickOutside = (e) => {
    if (!modalRef?.current?.contains(e.target)) {
      goBack();
    }
  };

  return createPortal(
    <form className="portalClassEmail" ref={modalRef} onSubmit={handleSubmit}>
      <div className="upperPart">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={emailForm.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={emailForm.email}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="message"
        placeholder="Your Message"
        value={emailForm.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send</button>
    </form>,

    document.getElementById("email")
  );
};
