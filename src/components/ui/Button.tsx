import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "cta" | "whatsapp";
  className?: string;
  asChild?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2 text-sm font-semibold transition";

  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800",
    outline:
      "border border-gray-300 text-gray-800 hover:border-orange-500 hover:text-orange-500",
    ghost: "text-gray-700 hover:text-orange-500",
    cta: "bg-[#C5A059] text-white shadow-md hover:bg-[#C5A059]/90",
    whatsapp: "bg-green-500 text-white hover:bg-green-600",
  };

  return (
    <Comp className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}