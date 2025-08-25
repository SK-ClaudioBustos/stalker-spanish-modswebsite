import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, type='button', ...props }: ButtonProps) => {
  return <button {...props} type={type}>{children}</button>;
};
