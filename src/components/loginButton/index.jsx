import React from "react";
import PrimaryGradientButton from "../primaryGradientButton";
import { PersonOutline } from "@mui/icons-material";

export default function LoginButton({onClick}){
  return(
    <PrimaryGradientButton
    onClick={onClick}
    text = "Fazer login"
    icon = {<PersonOutline/>}
    />
  )
}