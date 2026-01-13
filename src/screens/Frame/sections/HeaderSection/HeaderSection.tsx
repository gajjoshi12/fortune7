import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const navigationItems = [
  { label: "THINGS TO DO", href: "#things-to-do" },
  { label: "MENU", href: "#menu" },
  { label: "BOOK A TABLE", href: "#book-a-table" },
  { label: "BLOGS", href: "#blogs" },
  { label: "CONTACT", href: "#contact" },
];

export const HeaderSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 md:py-5 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'header-glass shadow-lg'
          : 'bg-transparent'
        }`}
    >
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-royal-gold to-transparent opacity-60" />

      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo with gold glow on hover */}
        <a href="#" className="relative group">
          <div
            className="w-[70px] h-14 md:w-[100px] md:h-20 bg-[url(/image-13.png)] bg-cover bg-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl bg-royal-gold/20" />
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-royal-gold p-2 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-4 lg:gap-8">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="relative font-urbanist font-semibold text-royal-gold/90 text-sm lg:text-base tracking-[1px] leading-5 whitespace-nowrap transition-all duration-300 hover:text-royal-gold group py-2"
                >
                  {item.label}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-royal-gold to-royal-gold-light transition-all duration-300 group-hover:w-full" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* VIP Button - Desktop */}
        <a
          href="#book-a-table"
          className="hidden md:flex items-center gap-2 btn-outline-gold text-sm px-6 py-2"
        >
          <span>♠</span>
          <span>VIP ACCESS</span>
          <span>♠</span>
        </a>
      </div>

      {/* Mobile Menu with Premium Styling */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="mt-4 flex flex-col gap-1 pb-4 glass-card rounded-xl mx-2 p-4">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-urbanist font-semibold text-royal-gold/80 text-lg tracking-[1px] leading-5 hover:text-royal-gold hover:bg-royal-gold/10 transition-all duration-300 py-3 px-4 rounded-lg border-l-2 border-transparent hover:border-royal-gold"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}

          {/* VIP Button - Mobile */}
          <a
            href="#book-a-table"
            className="mt-4 btn-royal text-center text-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            ♠ VIP ACCESS ♠
          </a>
        </nav>
      </div>

      {/* Bottom gold accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
    </header>
  );
};
