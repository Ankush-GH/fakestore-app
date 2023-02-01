import React from "react";
import { Typewriter } from "react-simple-typewriter";

import "./TypeWriter.css";

const typeWriterWords = [
  "Check the best Mens Collection",
  "Variety of Women's Collection",
  "Electronics at the Best Prices",
  "Jewelery for your Loved Ones",
];

const TypeWriter = () => {
  return (
    <div className="app__typewriter font_head flex__center">
      <Typewriter
        className="typewriter"
        words={typeWriterWords}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypeWriter;
