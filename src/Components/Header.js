import React from "react";
import Button from "./Button";

function Header({ title }) {
  const onClick = () => {
    console.log("Clicked");
  }

  return (
    <header className="header">
      <h1 style={{ color: "red" }}>{title}</h1>
      <Button onClick={onClick} text ="Add"/>
    </header>
  );
}

export default Header;
