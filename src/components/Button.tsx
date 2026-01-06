import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  icon?: ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && icon}
    </motion.button>
  );
}
