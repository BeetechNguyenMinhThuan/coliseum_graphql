import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  // const [randomBoolean, setRandomBoolean] = useState();
  const handleLogin = () => {
    let randomBoolean = Math.random() >= 0.5;
    let objectToken = {
      token: "coliseum_token_secret",
      exprired_token: false
    }
    localStorage.setItem("token", JSON.stringify(objectToken));
    navigate("/");
  };
  return (
    <div>
      Login
      <button className="bg-amber-500 px-5 py-1" onClick={handleLogin}>
        Dang nhap
      </button>
    </div>
  );
}

export default Login;
