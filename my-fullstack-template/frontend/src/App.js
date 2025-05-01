import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://ominous-journey-r4r9gvvwj95jfp4q6-5000.app.github.dev/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">React + Flask + Tailwind + Bootstrap</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
}

export default App;
