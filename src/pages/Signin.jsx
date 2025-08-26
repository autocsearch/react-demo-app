import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const phoneRegex = /^\+[1-9]\d{1,14}$/;

    if (!phoneRegex.test(phoneNumber)) {
      setError("Invalid phone number");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col space-y-5">
        <h2>Enter your Phone number</h2>
        <div className="flex gap-3">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="+1 xxx xxxx xxxx" type="tel" onChange={(e) => setPhoneNumber(e.target.value)} />
          <Button variant="outlined" type="submit">
            send
          </Button>
        </div>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Phone number is valid!</Alert>}
      </form>
    </>
  );
}
