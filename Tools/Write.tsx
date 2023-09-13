"use client";
import React, { useState, useEffect } from "react";

function Write({ name = "INNOVATE", look = "", speed=100}) {
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
      }, speed);
    }
  }, [index]);

  //  RENDERD TEXT //

  return <div className={look}>{text}</div>;
}

export default Write;
