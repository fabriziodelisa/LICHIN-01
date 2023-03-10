import { useState } from "react";
import Background from "../components/Background";
import Button from "../components/Button";
import Message from "../components/Message";
import "./MainPage.css";

export default function MainPage() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="main-page">
      <h1>
        ENFRENTE <br />
        SU DESTINO
      </h1>
      <Background />
      <Message pressed={pressed} />
      <Button setPressed={setPressed} />
    </div>
  );
}
