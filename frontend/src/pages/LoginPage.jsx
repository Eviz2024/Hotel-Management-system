import React, { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/AuthStyle.css";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("")
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  return (
    <div className="auth-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 m-4 shadow rounded">
        <div className="text-center mb-4">
          <img src="logo192.png" width="80" alt="logo" />
        </div>
        <h3 className="text-center mb-3 text-primary font-bold">
          Paradise View
        </h3>
        <form>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={handleEmailChange}
            fullWidth
          ></TextField>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
          ></TextField>
          <div className="mt-3">
            <Button
              className="px-3 py-2 rounded-3"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              {loading ? "logging in...":"Login"}
            </Button>
          </div>
          <div className="mt-2">
            <Link to="/register">
              <Button
                className="px-3 py-2 rounded-3"
                variant="outlined"
                color="secondary"
                fullWidth
              >
                Register
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default LoginPage;
