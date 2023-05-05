import { FormControl } from "@mui/base";
import { AddBoxOutlined, Email } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import CustomOutlinedInput from "../customOutlinedInput";
import PasswordOutlinedInput from "../passwordOutlinedInput";
import PrimaryGradientButton from "../primaryGradientButton";
import SecondaryGradientButton from "../secondaryGradientButton";

function CreateAccountModalContent(){
    const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");

    return(
       
        <div className="createAccountModalContent">
        <div className="firstSection">
          Criar sua conta
        </div>
        <div className="secondSection">
          <FormControl sx={{m:1, width: "366px"}}>
          <div className="inputContainer">
          <label className="inputLabel">Email</label>
          <CustomOutlinedInput setValue={setEmail} placeholder="Email" type="text" startAdornment={<InputAdornment>
               <IconButton>
                <Email sx={{ color: "#eeeeee" }}/>
               </IconButton>
              </InputAdornment>}/>
          </div>
             <div className="inputContainer" style={{  marginTop: "30px"}}>
             <label className="inputLabel">Senha</label>
             <PasswordOutlinedInput setValue={setPassword}/>
             </div>
             <div className="buttonsSection">
             <PrimaryGradientButton
               text="Entrar"
             />
             <SecondaryGradientButton
             text="Quero criar uma conta"
             icon={<AddBoxOutlined/>}
             />
             </div>
          </FormControl>
        </div>
      </div>

    )
}

export default CreateAccountModalContent