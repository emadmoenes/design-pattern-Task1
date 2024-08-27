import React from "react";
import { Toast } from "./Toast";
import { useToast } from "../Contexts/ToastContext";

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-4 right-4 p-4 space-y-2 w-full max-w-xs z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          id={toast.id}
          variant={toast.variant}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};
