export const theme = {
  colors: {
    // Primary Blues
    primary: {
      main: '#2563eb',     // Main blue
      light: '#60a5fa',    // Light blue
      lighter: '#93c5fd',  // Lighter blue for hover states
      dark: '#1d4ed8',     // Dark blue
      darker: '#1e40af'    // Darker blue for active states
    },
    // Background shades
    background: {
      main: '#ffffff',     // White
      light: '#f0f9ff',    // Very light blue tint
      dark: '#e0f2fe',     // Light blue for sections
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)'
    },
    // Text colors
    text: {
      primary: '#000000',  // Black for main text
      secondary: '#1e40af', // Dark blue for headings
      light: '#ffffff',    // White text
      muted: '#4b5563'     // Muted text
    },
    // States
    state: {
      hover: '#3b82f6',
      active: '#1d4ed8',
      disabled: '#93c5fd'
    }
  },
  shadows: {
    small: '0 2px 4px rgba(37, 99, 235, 0.1)',
    medium: '0 4px 6px rgba(37, 99, 235, 0.12)',
    large: '0 8px 16px rgba(37, 99, 235, 0.15)',
    glow: '0 0 15px rgba(37, 99, 235, 0.3)'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease'
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    full: '9999px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '5rem'
  },
  breakpoints: {
    mobile: '@media (max-width: 768px)',
    tablet: '@media (max-width: 1024px)',
    desktop: '@media (min-width: 1025px)',
    hover: '@media (hover: hover)'
  }
}; 