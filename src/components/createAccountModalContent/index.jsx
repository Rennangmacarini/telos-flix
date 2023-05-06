import { FormControl } from "@mui/base";
import { CalendarMonth, CheckBox, Email, EmailOutlined, Person, Phone } from "@mui/icons-material";
import { FormControlLabel, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import CustomOutlinedInput from "../customOutlinedInput";
import PasswordOutlinedInput from "../passwordOutlinedInput";
import PrimaryGradientButton from "../primaryGradientButton";
import "./index.css"

function CreateAccountModalContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirtDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (

    <div className="createAccountModalContent">
      <div className="firstSection">
        <span>Crie sua conta</span>
        <FormControl sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer" style={{ marginTop: "56px" }}>
            <label className="inputLabel">
              Nome
            </label>
            <CustomOutlinedInput setValue={setName} placeholder="Nome" type="text" startAdornment={<InputAdornment>
              <IconButton>
                <Person sx={{ color: "#eeeeee" }} />
              </IconButton>
            </InputAdornment>} />
          </div>

          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">E-mail</label>
            <CustomOutlinedInput setValue={setEmail} placeholder="E-mail" type="text" startAdornment={<InputAdornment>
              <IconButton>
                <EmailOutlined sx={{ color: "#eeeeee" }} />
              </IconButton>
            </InputAdornment>} />
          </div>

          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">Celular</label>
            <CustomOutlinedInput setValue={setPhone} placeholder="Celular" type="text" startAdornment={<InputAdornment>
              <IconButton>
                <Phone sx={{ color: "#eeeeee" }} />
              </IconButton>
            </InputAdornment>} />
          </div>

          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">Data de nascimento</label>
            <CustomOutlinedInput setValue={setBirtDate} placeholder="Data de nascimento" type="date" />
          </div>

        </FormControl>
      </div>
      <div className="secondSection">

        <FormControl sx={{ m: 1, width: "366px" }}>
          <div className="inputContainer" style={{ marginTop: "56px" }}>
            <label className="inputLabel">
              Senha
            </label>
            <PasswordOutlinedInput setValue={setPassword} />
          </div>

          <div className="inputContainer" style={{ marginTop: "46px" }}>
            <label className="inputLabel">
              Confirme sua Senha
            </label>
            <PasswordOutlinedInput setValue={setConfirmPassword} placeholder="Confirmar senha" />
          </div>
          <FormControlLabel sx={{marginTop:"42px"}} control={<CheckBox style={{ color: "#404040"}} defaultChecked />} label="Aceito o termos de uso da plataforma" />
          <div className="buttonsSection">
            <PrimaryGradientButton
              text="Entrar"
            />
          </div>

        </FormControl>


      </div>
    </div>

  )
}

export default CreateAccountModalContent