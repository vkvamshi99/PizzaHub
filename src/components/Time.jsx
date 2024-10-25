import React, { useEffect, useState } from "react";

function Time() {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const time =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setTimer(time);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>timer with useeffect hook vashdasyugy</h1>
      <h2>{timer}pm</h2>
    </div>
  );
}

export default Time;
