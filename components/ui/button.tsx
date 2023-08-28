import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "lg:flex w-full bg-gradient-to-b from-white to-slate-50 shadow-sm hover:bg-slate-50 text-slate-400 rounded-full hover:shadow-lg hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        outline:
          "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "text-slate-400 flex aspect-square w-6 items-center justify-center rounded-md hover:bg-slate-200 hover:text-slate-600 hover:outline-none group dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hidden lg:flex w-auto bg-gradient-to-b from-white to-slate-50 shadow-sm hover:bg-slate-50 text-slate-400 rounded-full hover:shadow-lg hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "max-w-[90%] gap-2 justify-start text-sm rounded-lg text-slate-400 hover:text-green-600 hover:shadow-sm transition-all delay-75 duration-100 hover:translate-x-1",
      },
      size: {
        default: "h-10 p-2",
        sm: "",
        lg: "",
        icon: "h-18 w-18",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
