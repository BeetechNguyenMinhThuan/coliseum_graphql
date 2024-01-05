import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
    localStorage.setItem("token", "coliseum_token_secret");
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
