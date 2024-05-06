import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          style={{
            color: "black",
            backgroundColor: "hsl(115, 13%, 50%)",
            padding: 15,
            fontSize: 19,
            borderRadius: 5,
            position: "fixed",
            top: "8.5%",
            width: "100%",
          }}
        >
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
