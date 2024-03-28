import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { close } from "../store";
import ReactDOM from "react-dom";

interface ModalLayoutProps {
  children: ReactNode;
}

function Modal({ children }: ModalLayoutProps) {
  const dispatch = useDispatch();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-gray-500 opacity-50 absolute inset-0"
        onClick={() => dispatch(close())}
      ></div>
      <div className="bg-white p-8 rounded shadow-lg z-10">{children}</div>
    </div>
  );
}

export function ModalLayout({ children }: ModalLayoutProps) {
  const modalRoot = document.getElementById("modal-root") as Element;
  return ReactDOM.createPortal(<Modal>{children}</Modal>, modalRoot);
}
