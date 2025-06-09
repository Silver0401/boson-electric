"use client";

import React, { PropsWithChildren } from "react";

interface CButtonProps {
  classname: string;
  mail?: string;
  whats?: string;
}

const CButton: React.FC<PropsWithChildren<CButtonProps>> = ({
  children,
  mail,
  whats,
  classname,
}) => {
  const SendEmail = (mail: string) => {
    const recipient = mail; // Replace with your desired email
    const subject = "Hello there!";
    const body = "This is the body of the email.";

    // Build the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  const sendWhatsapp = (number: string) => {
    // Build the WhatsApp URL
    const whatsappLink = `https://wa.me/${number}`;

    // Open the link
    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      onClick={() => {
        if (mail) {
          SendEmail(mail);
        }
        if (whats) {
          sendWhatsapp(whats);
        }
      }}
      className={classname}
    >
      {children}
    </button>
  );
};

export default CButton;
