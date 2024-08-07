import { useToast } from "./Contexts/ToastContext";

interface Toast {
  message: string;
  variant: "default" | "success" | "error";
}

interface ExtendedToast extends Toast {
  onClose?: () => void;
}

const useToastFunctions = () => {
  const { addToast, clearAllToasts } = useToast();

  const showToast = ({ message, variant, onClose }: ExtendedToast) => {
    const toast: Toast = { message, variant };
    addToast({ ...toast, onClose });
  };

  const toast = (message: string) => {
    showToast({ message, variant: "default" });
  };

  toast.success = (message: string) => {
    showToast({ message, variant: "success" });
  };

  toast.error = (message: string) => {
    showToast({ message, variant: "error" });
  };

  toast.dismissAll = clearAllToasts;

  return toast;
};

export default useToastFunctions;
