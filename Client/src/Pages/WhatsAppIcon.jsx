import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const WhatsAppIcon = () => {
  const phoneNumber = "911234567899";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "30px",
        left: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <FaWhatsapp size={30} color="#fff" />
    </a>
  );
};

export default WhatsAppIcon;
