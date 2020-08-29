import React from "react";

function Header() {
  const divStyle = { backgroundColor: "blue", width: "100%", height: "13em" };
  return (
    <div style={divStyle}>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="problem"
        height="70%"
        width="33%"
        style={{ marginLeft: "33%" }}
      />
      <h1 style={{ textAlign: "center", color: "yellow" }}>
        A Sad Meme Generator
      </h1>
    </div>
  );
}
export default Header;
