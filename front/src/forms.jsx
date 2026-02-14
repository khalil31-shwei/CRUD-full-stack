import { useState } from "react";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    birthday: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!inputs.username || !inputs.email || !inputs.password || !inputs.birthday) {
      setError("All fields are required ");
      setMessage("");
      return;
    }

    if (inputs.password.length < 6) {
      setError("Password must be at least 6 characters ");
      setMessage("");
      return;
    }

    if (!inputs.email.includes("@")) {
      setError("Invalid email format ");
      setMessage("");
      return;
    }


    try {
      const response = await axios.post(
        "http://localhost:3000/API/register",
        inputs
      );

      // Show success message from backend
      setMessage(response.data.message);
      setError("");

      // Reset form
      setInputs({
        username: "",
        email: "",
        password: "",
        birthday: ""
      });

    } catch (err) {
      
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Server error ");
      }
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={inputs.username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={inputs.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={inputs.password}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birthday"
        value={inputs.birthday}
        onChange={handleChange}
      />

      <button type="submit">Register</button>

      
      {message && <p style={{ color: "green" }}>{message}</p>}

     
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Register;
