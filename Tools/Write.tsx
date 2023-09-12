"use client";
import React, { useState, useEffect } from "react";

function Write({ name = "INNOVATE" }) {
  // INITIALIZE STATES //

  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(name);
  const [index, setIndex] = useState(0);

  // TEXT ANIMATION //

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 200);
    }
  }, [index]);

  //  RENDERD TEXT //

  return <div className="font-extrabold">{text}</div>;
}

export default Write;
