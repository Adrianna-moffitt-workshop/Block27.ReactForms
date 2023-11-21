import "./App.css";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenitcate";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div id="block">
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App;