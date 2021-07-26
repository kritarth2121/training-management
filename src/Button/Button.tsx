import React, { useEffect, useState } from "react";
interface props {
  theme: string;
  allow: boolean;
  children: string;
  border: "Solidify" | "Outline";
  onClick: (e: Event) => void;
}
const Button: React.FC<props> = ({ border, allow, children, theme,onClick }) => {
  let color = "";
  let textcolor = "";

  let b = "";

  if (theme == "Info") {
    color = "blue";
  } else if (theme == "Warning") {
    color = "yellow";
  } else if (theme == "Success") {
    color = "green";
  } else if (theme == "Primary") {
    color = "purple";
  } else {
    color = "gray";
  }

  if (border == "Solidify") {
    textcolor = "white ";
  } else if (border == "Outline") {
    textcolor = color;
    color = "white ";
    console.log(textcolor, color, theme);
  }

  return (
    <div>
    <button
      className={
        "hover:shadow-xl border-2   py-2 px-4 rounded focus:outline-none focus:shadow-outline " +
        (allow
          ? "bg-" +
            color +
            "-600 text-" +
            textcolor +
            "-600 border-" +
            textcolor +
            "-600"
          : "bg-" +
            color +
            "-200 border-" +
            textcolor +
            "-200 text-" +
            textcolor +
            "-200")
      }
      type="button"
      value="submit"
    >
      {children}
    </button>
    </div>
  );
};

Button.defaultProps = {
  theme: "Success",
  border: "Solidify",
  allow: true,
  children: "Sign In",
};

export default React.memo(Button);
