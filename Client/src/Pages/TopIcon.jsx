import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";


const TopIcon = () => {
 
  return (
    <a
      href='#home'
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "20px",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        cursor: "pointer",
      }}
    >
      <IoArrowUpCircleOutline size={30} color="#60A5FA" />
    </a>
  );
};

export default TopIcon;
