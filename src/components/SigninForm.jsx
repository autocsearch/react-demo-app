import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SigninForm() {
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
      navigate("/Home");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col justify-between min-h-[570px] space-y-5">
        {/* Title */}
        <h1 className="text-2xl font-bold">Welcome to React Demo App</h1>

        {/* Input Section */}
        <div className="flex flex-col space-y-3">
          <h2>Login with your phone number</h2>
          <div className="flex flex-col gap-2">
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" placeholder="e.g. +12345678901" type="tel" onChange={(e) => setPhoneNumber(e.target.value)} />
            <button
              type="submit"
              className="rounded-xl h-10 w-full max-w-xs flex justify-center items-center border-2 
             hover:bg-[#2020ae] border-black hover:border-[#000080] 
             sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Alerts */}
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Phone number is valid!</Alert>}

        {/* Terms */}
        <div className="text-sm flex gap-1">
          <span>By logging in, you agree to our</span>
          <a href="/" className="text-blue-600  hover:text-blue-800 cursor-pointer">
            Terms & Privacy Policy
          </a>
        </div>
      </form>
    </>
  );
}
