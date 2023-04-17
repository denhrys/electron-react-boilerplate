import React from "react";
import "../css/styles.css";

export default function App() {
  const handleClick = () => {
    electron.notificationsAPI.sendNotification("Hello from react App")
  }
  return (
    <div>
      <h1>App Componenet</h1>
      <button onClick={handleClick}>Notify</button>
    </div>
  )
}
