import "./styles.css";
import { useState } from "react";

export default function App() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  console.log({ coordinate });

  return (
    <main
      onPointerMove={(e) => {
        setCoordinate({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="dot"
        style={{
          transform: `translate(${coordinate.x},${coordinate.y})`
        }}
      />
    </main>
  );
}
