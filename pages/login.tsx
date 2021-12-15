import { useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("You are not login");

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      //For Header
      const json = jwt.decode(token) as { [key: string]: string };

      //For Admin Route
      if (json.admin) {
        localStorage.setItem("token", token);
        router.push("/admin");
      }

      setMessage(
        `Welcome, ${json.username}
        ${!json.admin && `. Sorry you are not an Admin`} `
      );
    } else {
      setMessage("Something went wrong!!");
    }
  };

  return (
    <div>
      <h1>{message}</h1>
      <form>
        <input
          className="border-black border-2"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          className="border-black border-2"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" onClick={submitForm} value="Login" />
      </form>
    </div>
  );
}

export default login;
