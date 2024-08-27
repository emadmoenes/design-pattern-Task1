import { toastManager } from "./ToastManager"; // Adjust path as necessary

describe("ToastManager", () => {
  test("should notify subscribers with a toast", () => {
    const mockCallback = jest.fn();
    const unsubscribe = toastManager.subscribe(mockCallback);

    toastManager.notify({ message: "Test toast", variant: "default" });

    expect(mockCallback).toHaveBeenCalledWith({
      message: "Test toast",
      variant: "default",
      id: expect.any(Number),
    });

    unsubscribe();
  });

  test("should unsubscribe from notifications", () => {
    const mockCallback = jest.fn();
    const unsubscribe = toastManager.subscribe(mockCallback);

    unsubscribe();
    toastManager.notify({ message: "Test toast", variant: "default" });

    expect(mockCallback).not.toHaveBeenCalled();
  });
});
