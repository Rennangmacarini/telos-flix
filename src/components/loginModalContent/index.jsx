import React from "react";
import "./index.css"
import image from './image.png'
import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { AddBoxOutlined, Email, Visibility } from "@mui/icons-material";
import PrimaryGradientButton from "../primaryGradientButton";
import SecondaryGradientButton from "../secondaryGradientButton";

export default function LoginModalContent() {
  return (
    <div className="loginModalContent">
      <div className="firstSection">
        Login

        <div className="imageContainer">
          <img width="295px" height="127px" src={image} alt="image" />
        </div>
      </div>
      <div className="secondSection">
        <FormControl sx={{m:1, width: "366px"}}>
        <div className="inputContainer">
        <label className="inputLabel">Email</label>
          <OutlinedInput
          sx={{background: "rgba(238, 238, 238, 0.05)", 
          color: "#eeeeee",
          border: "1px solid rgba(238, 238, 238, 0.05)", 
          boxShadow:"0px 3px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "14px"
        }}
          id= "filled-adorment-username"
          type= "text"
          placeholder="Email"
          startAdornment={
            <InputAdornment>
             <IconButton>
              <Email sx={{ color: "#eeeeee" }}/>
             </IconButton>
            </InputAdornment>
          }
          >

          </OutlinedInput>
        </div>
           <div className="inputContainer" style={{  marginTop: "30px"}}>
           <label className="inputLabel">Senha</label>
          <OutlinedInput
          sx={{background: "rgba(238, 238, 238, 0.05)", 
          color: "#eeeeee",
          border: "1px solid rgba(238, 238, 238, 0.05)", 
          boxShadow:"0px 3px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "14px"
        }}
          id= "filled-adorment-password"
          type= "password"
          placeholder="Senha"
          startAdornment={
            <InputAdornment>
             <IconButton>
              <Visibility sx={{ color: "#eeeeee" }}/>
             </IconButton>
            </InputAdornment>
          }
          >

          </OutlinedInput>
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