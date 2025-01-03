/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { EmailEnvelope } from "../Portals/EmailEnvelope";
//import { useNavigate } from "react-router-dom";

const contactIcons = [faLinkedin, faGithub, faEnvelope];

export const Contact = () => {
  const [showEnvelope, setShowEnvelope] = useState(false);

  // Click handler for the envelope icon
  const handleEnvelopeClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setShowEnvelope(true);
  };

  return (
    <p>
      {contactIcons?.map((icon, index) => (
        <a
          key={index}
          href={
            icon === faLinkedin
              ? "https://www.linkedin.com/in/kosta-rajic-615664308/"
              : icon === faGithub
              ? "https://github.com/KostaRajic"
              : icon === faEnvelope
              ? "mailto:your-email@example.com" // Adjust with your email
              : ""
          }
          target={icon === faEnvelope ? undefined : "_blank"} // Open in new tab for LinkedIn, GitHub
          onClick={icon === faEnvelope ? handleEnvelopeClick : undefined} // Only attach onClick to the envelope icon
        >
          <span>
            <FontAwesomeIcon
              icon={icon}
              className="contactIcon"
            />
          </span>
        </a>
      ))}
      {showEnvelope && <EmailEnvelope goBack={() => setShowEnvelope(false)} />}
    </p>
  );
};