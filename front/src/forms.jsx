import { useState } from "react";
import axios from "axios";

function Inputs() {
const [Inputs, setInputs] = useState ({
    name: "",
    email: "",
    password: ""
});
const handleChange = (e) =>setInputs({ ...Inputs,[e.target.name]: e.target.value }) 
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/API/Inputs", Inputs);
      console.log(response.data);
      setInputs({ name: "", email: "", password: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange}/>
      </div>

      <div>
<label htmlFor="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday" onChange={handleChange}        />
</div>

<div>
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" onChange={handleChange}/>
</div>

<div>
<label htmlFor="password">Password:</label>
<input type="password" id="password" name="password" onChange={handleChange}        />
</div>



<button type="submit">Submit</button>
    </form>
  );
}

export default Inputs;