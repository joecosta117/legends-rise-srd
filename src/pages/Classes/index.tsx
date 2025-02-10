import "./index.scss";
import React, { useState } from "react";

function Classes() {
  const [count, setCount] = useState(0);

  return (
    <div className="classes">
      <h1>Classes</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Classes;