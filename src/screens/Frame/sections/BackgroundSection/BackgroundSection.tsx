const navigationLinks = [
  { text: "Things To Do", href: "#things-to-do" },
  { text: "Menu", href: "#menu" },
  { text: "Book A Table", href: "#book-a-table" },
  { text: "Blogs", href: "#blogs" },
  { text: "Contact", href: "#contact" },
  { text: "House Rules", href: "#" },
];

const socialLinks = [
  { name: 'Facebook', icon: '📘', href: '#' },
  { name: 'Instagram', icon: '📸', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'WhatsApp', icon: '💬', href: '#' },
];

export const BackgroundSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-casino-black overflow-hidden">
      {/* Top Gold Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-royal-gold to-transparent" />

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-10 text-royal-gold/10 text-[200px] leading-none">7</div>
        <div className="absolute top-10 right-10 text-royal-gold/5 text-8xl">♠</div>
      </div>

      <div className="relative w-full py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 - Brand & About */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/image-13.png"
                alt="Fortune7 Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-cinzel font-bold text-royal-gold text-xl tracking-wide">
                  Fortune 7
                </h3>
                <p className="font-nunito text-white/50 text-sm">Casino & Lounge</p>
              </div>
            </div>
            <p className="font-nunito text-white/60 text-sm leading-relaxed">
              Experience the thrill of gaming in Goa's most prestigious casino.
              Where luxury meets excitement.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-lg hover:border-royal-gold transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <nav className="flex flex-col gap-4">
            <h4 className="font-cinzel font-semibold text-royal-gold text-lg tracking-wide mb-2">
              Quick Links
            </h4>
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-nunito text-white/70 text-base tracking-wide hover:text-royal-gold hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="text-royal-gold/0 group-hover:text-royal-gold transition-all duration-300">→</span>
                {link.text}
              </a>
            ))}
          </nav>

          {/* Column 3 - Contact */}
          <div id="contact" className="flex flex-col gap-4">
            <h4 className="font-cinzel font-semibold text-royal-gold text-lg tracking-wide mb-2">
              Contact Us
            </h4>

            <div className="flex items-start gap-3">
              <span className="text-royal-gold text-lg">📍</span>
              <p className="font-nunito text-white/70 text-sm leading-relaxed">
                Artistry Suites, Naika Waddo,<br />
                Calangute, Goa 403516
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-royal-gold text-lg">📞</span>
              <a href="tel:+919876543210" className="font-nunito text-white/70 text-sm hover:text-royal-gold transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-royal-gold text-lg">✉️</span>
              <a href="mailto:info@fortune7casino.com" className="font-nunito text-white/70 text-sm hover:text-royal-gold transition-colors">
                info@fortune7casino.com
              </a>
            </div>
          </div>

          {/* Column 4 - Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="font-cinzel font-semibold text-royal-gold text-lg tracking-wide mb-2">
              Opening Hours
            </h4>

            <div className="glass-card p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-royal-gold text-2xl">🎰</span>
                <span className="font-cinzel font-bold text-royal-gold text-xl">
                  Open 24/7
                </span>
              </div>
              <p className="font-nunito text-white/60 text-sm">
                The excitement never stops at Fortune 7.
                Visit us anytime for an unforgettable experience.
              </p>
            </div>

            <div className="mt-2">
              <p className="font-nunito text-white/50 text-xs">
                *Entry restricted to 21+ with valid ID
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-royal-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-nunito text-white/40 text-sm text-center md:text-left">
              © 2026 Fortune 7 Casino. All rights reserved. | Play responsibly.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="font-nunito text-white/40 text-sm hover:text-royal-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-nunito text-white/40 text-sm hover:text-royal-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Card Suits Decoration */}
          <div className="flex justify-center gap-4 mt-6 opacity-30">
            <span className="text-royal-gold text-xl">♠</span>
            <span className="text-royal-gold text-xl">♥</span>
            <span className="text-royal-gold text-xl">♦</span>
            <span className="text-royal-gold text-xl">♣</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
