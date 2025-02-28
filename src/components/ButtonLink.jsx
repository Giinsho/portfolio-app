import React from "react";

const ButtonLink = ({ styles, text, textSize, sizeX, sizeY, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`py-${sizeY}  px-${sizeX} bg-blue-gradient font-poppins
     font-medium text-[${textSize}px] text-primary outline-none rounded-[10px] ${styles}`}
      >
        {text}
      </button>
      
    </>
  );
};

export default ButtonLink;
