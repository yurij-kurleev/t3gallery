"use client";
import { type ReactNode, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 h-screen w-screen bg-black/90 text-white"
      onClose={onDismiss}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
