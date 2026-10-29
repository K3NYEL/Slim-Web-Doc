
"use client";

import { useState } from "react";
import Button from "./Buttons";

export default function ActionButton() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Button
        onClick={() => setMessage("¡El botón funciona correctamente!")}
      >
        Probar botón
      </Button>

      {message && <p>{message}</p>}
    </div>
  );
}
