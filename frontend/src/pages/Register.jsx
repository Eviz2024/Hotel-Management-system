import React, {useState} from 'react'
import { TextField, Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/AuthStyle.css";
import { Link } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lasttname, setLastName] = useState("");
    const [loading, setLoading] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstNameChange = (event) =>{
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) =>{
    setLastName(event.target.value);
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
            label="First Name"
            type="email"
            variant="outlined"
            margin="normal"
            value={firstname}
            onChange={handleFirstNameChange}
            fullWidth
          ></TextField>
        <TextField
            label="Second Name"
            type="email"
            variant="outlined"
            margin="normal"
            value={lasttname}
            onChange={handleLastNameChange}
            fullWidth
          ></TextField>
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
          <div className="mt-2">
            <Link to="/login">
              <Button
                className="px-3 py-2 rounded-3"
                variant="contained"
                color="primary"
                fullWidth
                type='submit'
              >
              {loading ? "Registering..":"Register"}
              </Button>
            </Link>
          </div>
          <div className="mt-2">
            <Link to="/login">
              <Button
                className="px-3 py-2 rounded-3"
                variant="outlined"
                color="primary"
                fullWidth
                type='submit'
              >
                Already a member
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Register
