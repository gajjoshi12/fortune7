module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Casino Premium Colors
        'royal-gold': {
          DEFAULT: '#d4af37',
          light: '#f4d03f',
          dark: '#b8860b',
        },
        'casino-gold': '#e1b402',
        'luxury-gold': '#ffd700',
        'casino-black': '#0d0c11',
        'casino-dark': '#0c0c11',
        'royal-purple': '#1a1625',
        'deep-purple': '#2d1f3d',
        'accent-purple': '#7385c1',
        'casino-red': {
          DEFAULT: '#8b0000',
          light: '#dc143c',
        },
        // Semantic colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        syne: ['Syne', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 50px rgba(212, 175, 55, 0.4)',
        'card-premium': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        'vip': '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f4d03f 0%, #d4af37 50%, #b8860b 100%)',
        'royal-gradient': 'linear-gradient(135deg, #1a1625 0%, #0d0c11 100%)',
        'glass-gradient': 'linear-gradient(145deg, rgba(26, 22, 37, 0.9) 0%, rgba(13, 12, 17, 0.95) 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gold-pulse": {
          "0%, 100%": { 
            opacity: "1",
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)"
          },
          "50%": { 
            opacity: "0.8",
            boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "shimmer-sweep": {
          "0%": { left: "-100%" },
          "100%": { left: "200%" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(212, 175, 55, 0.3)" },
          "50%": { borderColor: "rgba(212, 175, 55, 0.8)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gold-pulse": "gold-pulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer-sweep 3s infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "scale-in": "scale-in 0.6s ease forwards",
        "slide-up": "slide-up 0.8s ease forwards",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
