import React, { useEffect } from "react";
import "./App.css";
import Child from "./child";
import { TransactionProvider } from "./transContext";
import { initNotification } from "./services/firebaseservice";

function App() {
  useEffect(() => {
    initNotification();
  });
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
