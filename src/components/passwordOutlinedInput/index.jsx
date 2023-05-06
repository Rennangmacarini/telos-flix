import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import CustomOutlinedInput from '../customOutlinedInput'

export default function PasswordOutlinedInput({ setValue, placeholder }){
    const [shouldShowPassword, setShouldShowPassword] = useState(false);

    const onIconButtonClicked = ()=>{
        setShouldShowPassword((previous) => !previous)
    }

    return(
        <CustomOutlinedInput
        setValue={setValue}
        placeholder={placeholder ?? "Senha"}
        type={shouldShowPassword ? "text" : "password"}
        startAdornment = {
            <InputAdornment>
             <IconButton
             onClick={onIconButtonClicked}
             >
             {shouldShowPassword ? (
             <VisibilityOff sx={{ color: "#eeeeee" }}/>
             ):(
             <Visibility sx={{ color: "#eeeeee" }}/>
             )}
              
             </IconButton>
            </InputAdornment>
        }
        />
    )
}