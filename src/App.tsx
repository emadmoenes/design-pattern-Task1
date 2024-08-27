import React from "react";
import { ToastProvider, useToast } from "./Contexts/ToastContext";
import { Button } from "./components/Button";
import { ToastContainer } from "./components/ToastContainer";

const App: React.FC = () => {
  const { addToast, clearAllToasts } = useToast();

  return (
    <div className="flex flex-col items-center space-y-10 p-4">
      <h1 className="text-7xl font-bold text-center">Design Patterns Task1</h1>

      <div className="space-x-2">
        <Button
          onClick={() =>
            addToast({ message: "Default toast message", variant: "default" })
          }
        >
          Default
        </Button>
        <Button
          onClick={() =>
            addToast({ message: "Success toast message", variant: "success" })
          }
        >
          Success ✅
        </Button>
        <Button
          onClick={() =>
            addToast({ message: "Error toast message", variant: "error" })
          }
        >
          Error ❌
        </Button>
        <Button onClick={clearAllToasts}>Clear All 🗑️</Button>
      </div>

      <ToastContainer />
    </div>
  );
};

const WrappedApp: React.FC = () => (
  <ToastProvider>
    <App />
  </ToastProvider>
);

export default WrappedApp;
