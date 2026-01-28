"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/cn";

export function Modal({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl border border-[color:var(--color-border)] bg-background p-8 shadow-xl transition-transform",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-[color:var(--color-border)] p-2 text-[color:var(--color-muted-foreground)] transition-colors hover:bg-background hover:text-foreground"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
