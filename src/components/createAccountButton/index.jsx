import React from "react";

import { AddBoxOutlined } from "@mui/icons-material";
import SecondaryGradientButton from "../secondaryGradientButton";

export default function CreateAccountButton({onClick}){
  return(
    <SecondaryGradientButton
    onClick={onClick}
    text = "Criar conta"
    icon = {<AddBoxOutlined/>}
    />
  )
}