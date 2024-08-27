import { render, screen, fireEvent } from "@testing-library/react";
import { ToastProvider, useToast } from "./Contexts/ToastContext";
import { Toast } from "./components/Toast";
import { ToastContainer } from "./components/ToastContainer";

const TestComponent: React.FC = () => {
  const { addToast, removeToast, clearAllToasts, toasts } = useToast();

  return (
    <div>
      <button
        onClick={() => addToast({ message: "Test toast", variant: "default" })}
      >
        Add Toast
      </button>
      <button onClick={() => clearAllToasts()}>Clear All</button>
      <ToastContainer />
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

test("should add and clear toasts", () => {
  render(
    <ToastProvider>
      <TestComponent />
    </ToastProvider>
  );

  fireEvent.click(screen.getByText("Add Toast"));

  expect(screen.getByText("Test toast")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Clear All"));

  expect(screen.queryByText("Test toast")).not.toBeInTheDocument();
});
