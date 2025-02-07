import React, { useEffect, useState } from "react";

const LoginComponent = () => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  useEffect (()=>{
    document.title = 'Login'

  }, [])
   
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        const token = data.jwt; // Extract only the raw token string
        localStorage.setItem("token", token); // Store the raw token in localStorage
        alert("Login successful!");
        window.location.href = "/employees"; // Redirect to the employees page
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
