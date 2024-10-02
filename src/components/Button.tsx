import * as React from "react";

type PropsType = {
  children: React.ReactNode;
  onClick?: () => void;
};
const Button = ({ children, onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "1.2em",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
