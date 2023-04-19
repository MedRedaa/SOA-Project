import { useState } from "react";
import "./Login.css"
const  Login=()=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // Successful login
      console.log("Login successful");
      // Redirect user to dashboard/homepage
    } else {
      // Failed login
      console.error(data.message);
    }
  };

  return (
    <div 
    className="bg">

      <form className="Form" onSubmit={handleSubmit}>
      <div className="user">
        <label className="form_label" htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="user">
        <label className="form_label" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>

    </div>
    
  );
}

export default Login;
