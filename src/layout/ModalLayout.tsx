import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalLayoutProps {
  children: ReactNode;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalLayout({ children, onClose }: ModalLayoutProps) {
  return (
    <div
      className="relative z-10 overflow-hidden"
      onClick={() => onClose(false)}
    ></div>
  );
}
