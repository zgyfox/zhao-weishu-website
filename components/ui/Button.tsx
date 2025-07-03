'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps & MotionProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    glow = false,
    children,
    disabled,
    ...props
  }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center rounded-xl font-medium',
      'transition-all duration-300 ease-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden',
      fullWidth && 'w-full'
    ].filter(Boolean).join(' ');

    const variants = {
      primary: [
        'bg-gradient-to-r from-primary-600 to-primary-700',
        'text-white shadow-lg',
        'hover:from-primary-700 hover:to-primary-800',
        'hover:shadow-xl hover:-translate-y-0.5',
        'focus:ring-primary-500',
        glow && 'hover:shadow-primary-500/25'
      ].filter(Boolean).join(' '),
      
      secondary: [
        'bg-white text-primary-700 border-2 border-primary-200',
        'shadow-sm hover:shadow-md',
        'hover:bg-primary-50 hover:border-primary-300',
        'hover:-translate-y-0.5',
        'focus:ring-primary-500'
      ].join(' '),
      
      ghost: [
        'text-primary-600 hover:text-primary-700',
        'hover:bg-primary-50',
        'focus:ring-primary-500'
      ].join(' '),
      
      outline: [
        'border-2 border-primary-300 text-primary-700',
        'hover:bg-primary-600 hover:text-white',
        'hover:border-primary-600 hover:-translate-y-0.5',
        'focus:ring-primary-500'
      ].join(' '),
      
      destructive: [
        'bg-gradient-to-r from-red-600 to-red-700',
        'text-white shadow-lg',
        'hover:from-red-700 hover:to-red-800',
        'hover:shadow-xl hover:-translate-y-0.5',
        'focus:ring-red-500'
      ].join(' ')
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2.5 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
      xl: 'px-8 py-4 text-xl gap-3'
    };

    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isDisabled}
        whileHover={!isDisabled ? { scale: 1.02 } : undefined}
        whileTap={!isDisabled ? { scale: 0.98 } : undefined}
        {...props}
      >
        {/* 背景光效 */}
        {glow && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 rounded-xl"
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* 加载状态 */}
        {loading && (
          <Loader2 className="w-4 h-4 animate-spin" />
        )}
        
        {/* 左侧图标 */}
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
        
        {/* 文本内容 */}
        {children && (
          <span className={loading ? 'opacity-0' : ''}>
            {children}
          </span>
        )}
        
        {/* 右侧图标 */}
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">
            {icon}
          </span>
        )}
        
        {/* 涟漪效果 */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl opacity-0"
          whileTap={{ opacity: 1, scale: 0.95 }}
          transition={{ duration: 0.1 }}
        />
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
