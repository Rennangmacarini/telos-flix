import React from "react";

export default function AppBarActions({ actions }){
  return(
    <div style={{ display: "flex", flexDirection: "row", gap: "30px"}}>
      {actions.map((element) => element)}</div>
  )
}