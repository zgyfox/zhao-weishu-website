// 高级设计系统配置
export const designSystem = {
  // 颜色系统 - 现代化深海主题
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    },
    ocean: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
      950: '#042f2e'
    },
    deep: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    accent: {
      gold: '#fbbf24',
      coral: '#fb7185',
      emerald: '#10b981',
      violet: '#8b5cf6'
    }
  },

  // 字体系统
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Playfair Display', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    }
  },

  // 间距系统
  spacing: {
    section: '6rem',
    container: '1.5rem',
    element: '2rem'
  },

  // 阴影系统
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    glow: '0 0 20px rgb(14 165 233 / 0.3)',
    ocean: '0 8px 32px rgb(20 184 166 / 0.2)'
  },

  // 动画系统
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    }
  },

  // 断点系统
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // 组件变体
  components: {
    button: {
      variants: {
        primary: {
          base: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
          shadow: 'shadow-lg hover:shadow-xl',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        },
        secondary: {
          base: 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50',
          shadow: 'shadow-sm hover:shadow-md',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        },
        ghost: {
          base: 'text-primary-600 hover:bg-primary-50 hover:text-primary-700',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)'
        }
      },
      sizes: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl'
      }
    },
    card: {
      variants: {
        elevated: {
          base: 'bg-white rounded-xl shadow-lg hover:shadow-xl',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          hover: 'transform hover:-translate-y-1'
        },
        glass: {
          base: 'bg-white/80 backdrop-blur-sm rounded-xl border border-white/20',
          shadow: 'shadow-lg',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        },
        ocean: {
          base: 'bg-gradient-to-br from-ocean-500/10 to-primary-500/10 rounded-xl border border-ocean-200/50',
          backdrop: 'backdrop-blur-sm',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
        }
      }
    }
  }
};

// 动画预设
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  floatingElement: {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  pulseGlow: {
    animate: {
      boxShadow: [
        "0 0 20px rgb(14 165 233 / 0.3)",
        "0 0 40px rgb(14 165 233 / 0.5)",
        "0 0 20px rgb(14 165 233 / 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

// 响应式工具
export const responsive = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  grid: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 md:grid-cols-2',
    cols3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  },
  text: {
    responsive: 'text-sm sm:text-base lg:text-lg',
    heading: 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl',
    subheading: 'text-lg sm:text-xl lg:text-2xl'
  }
};
