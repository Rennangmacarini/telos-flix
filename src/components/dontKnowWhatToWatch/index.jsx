import React from "react";
import "./index.css"
import { Button } from "@mui/material";
import { ArrowForward, QuestionMarkRounded, Settings } from "@mui/icons-material";

function DontKnowWhatToWatch() {
  const categories = [
    {
      title: "categoria 1"
    },
    {
      title: "categoria 2"
    },
    {
      title: "categoria 3"
    },
    {
      title: "categoria 4"
    },
    {
      title: "categoria 5"
    },
    {
      title: "categoria 6"
    },
    {
      title: "categoria 7"
    },
    {
      title: "categoria 8"
    },
    {
      title: "categoria 9"
    }
  ]

  return (
    <div className="dontKnowWhatToWatch">
      <div className="labelSection">
        <QuestionMarkRounded />
        Aproveite grátis
      </div>
      <div className="dontKnowWhatToWatchgrid">
        {categories.map(category => <Button className="categoryButton">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Settings />
            {category.title}
          </div>
          <ArrowForward />
        </Button>)}
      </div>
    </div>
  )
}

export default DontKnowWhatToWatch;