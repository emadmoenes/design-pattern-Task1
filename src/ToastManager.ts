type ToastCallback = (toast: Omit<Toast, "id">) => void;

class ToastManager {
  private observers: ToastCallback[] = [];

  public subscribe(callback: ToastCallback) {
    this.observers.push(callback);
    return () => {
      this.observers = this.observers.filter(
        (observer) => observer !== callback
      );
    };
  }

  public notify(toast: Omit<Toast, "id">) {
    this.observers.forEach((callback) => callback(toast));
  }
}

export const toastManager = new ToastManager();
