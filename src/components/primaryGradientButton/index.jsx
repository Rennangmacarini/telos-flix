import React from "react";
import './index.css'

function PrimaryGradientButton({text, icon, onClick}){
  return(
    <button onClick={onClick} className="primaryGradientButton">
      {icon}
      {text}
    </button>
  )
}

export default PrimaryGradientButton;