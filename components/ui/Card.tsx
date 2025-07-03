'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'glass' | 'ocean' | 'gradient' | 'minimal';
  hover?: boolean;
  glow?: boolean;
  interactive?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps & MotionProps>(
  ({
    className,
    variant = 'elevated',
    hover = true,
    glow = false,
    interactive = false,
    children,
    ...props
  }, ref) => {
    const baseClasses = [
      'relative overflow-hidden',
      'transition-all duration-300 ease-out',
      interactive && 'cursor-pointer'
    ].filter(Boolean).join(' ');

    const variants = {
      elevated: [
        'bg-white rounded-xl shadow-lg border border-gray-100',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        glow && 'hover:shadow-primary-500/20'
      ].filter(Boolean).join(' '),
      
      glass: [
        'bg-white/80 backdrop-blur-sm rounded-xl',
        'border border-white/20 shadow-lg',
        hover && 'hover:bg-white/90 hover:shadow-xl'
      ].filter(Boolean).join(' '),
      
      ocean: [
        'bg-gradient-to-br from-ocean-500/10 to-primary-500/10',
        'rounded-xl border border-ocean-200/50 backdrop-blur-sm',
        hover && 'hover:from-ocean-500/20 hover:to-primary-500/20'
      ].filter(Boolean).join(' '),
      
      gradient: [
        'bg-gradient-to-br from-primary-500 to-ocean-600',
        'rounded-xl shadow-lg text-white',
        hover && 'hover:shadow-xl hover:from-primary-600 hover:to-ocean-700'
      ].filter(Boolean).join(' '),
      
      minimal: [
        'bg-white rounded-lg border border-gray-200',
        hover && 'hover:border-gray-300 hover:shadow-sm'
      ].filter(Boolean).join(' ')
    };

    const hoverAnimation = hover ? {
      whileHover: { 
        scale: interactive ? 1.02 : 1.01,
        transition: { duration: 0.2 }
      }
    } : {};

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        {...hoverAnimation}
        {...props}
      >
        {/* 背景光效 */}
        {glow && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-ocean-400/20 opacity-0 rounded-xl"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* 内容 */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* 交互涟漪效果 */}
        {interactive && (
          <motion.div
            className="absolute inset-0 bg-primary-500/5 opacity-0 rounded-xl"
            whileTap={{ opacity: 1, scale: 0.98 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// Card子组件
export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pb-4', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 pb-6', className)}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-t border-gray-100', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold text-gray-900 mb-2', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-gray-600 leading-relaxed', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

export default Card;
