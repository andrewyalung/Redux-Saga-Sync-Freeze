import React from "react";

const Counter = ({ value, onStartForLoop }) => (
  <p>
    Value: {value}
    <button style={{ marginLeft: "5px" }} onClick={onStartForLoop}>
      Increment
    </button>
  </p>
);

export default Counter;
