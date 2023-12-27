import { useEffect, useState } from "react";

import Message from "./components/Message";

export default function App() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    email != "" ? console.log(`email has changed : ${email}`) : "";
  }, [email]);

  const [isUserLogged, setIsUserLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUserLogged(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="elon@spacex.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <button onClick={() => setIsUserLogged(false)}>Logout</button>

      {isUserLogged ? <Message /> : null}
    </div>
  );
}
