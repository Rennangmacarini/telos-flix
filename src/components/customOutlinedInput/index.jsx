
import { OutlinedInput } from '@mui/material'
import React from 'react'

export default function CustomOutlinedInput({ startAdornment, placeholder, type, setValue }){
  const onChangedValue = (event)=>{
         setValue(event.target.value)
  }

    return( 
        <OutlinedInput
          onChange={onChangedValue}
          sx={{background: "rgba(238, 238, 238, 0.05)", 
          color: "#eeeeee",
          border: "1px solid rgba(238, 238, 238, 0.05)", 
          boxShadow:"0px 3px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "14px"
        }}
          placeholder={placeholder}
          type= {type}
          startAdornment={startAdornment}
          ></OutlinedInput>
    )
}