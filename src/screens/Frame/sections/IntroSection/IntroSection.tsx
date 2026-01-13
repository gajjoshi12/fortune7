export const IntroSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden pt-20"
      style={{ backgroundImage: "url(/image.png)" }}
    >
      {/* Premium Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-casino-black/80 via-casino-black/60 to-casino-black" />

      {/* Animated Gold Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-royal-gold rounded-full animate-float opacity-40" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-royal-gold rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-royal-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-royal-gold-light rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-royal-gold rounded-full animate-float opacity-30" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Decorative Casino Elements */}
      <div className="absolute top-1/4 right-8 md:right-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path d="M30 0L45 20H15L30 0Z" fill="#d4af37" />
          <path d="M30 80L15 60H45L30 80Z" fill="#d4af37" />
          <circle cx="30" cy="40" r="15" stroke="#d4af37" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-8 md:left-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <path d="M25 5L30 20H45L33 30L38 45L25 35L12 45L17 30L5 20H20L25 5Z" fill="#d4af37" />
        </svg>
      </div>

      {/* Left Gradient Overlay */}
      <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-full md:max-w-[750px] bg-gradient-to-r from-casino-black via-casino-black/80 to-transparent flex items-center justify-center md:justify-start">
        <div className="relative px-6 md:ml-12 lg:ml-20 w-full max-w-[600px]">
          <div className="flex flex-col items-center md:items-start gap-6 md:gap-8">

            {/* Premium Logo with Glow */}
            <div className="relative group">
              <img
                className="w-[200px] h-[165px] md:w-[280px] md:h-[230px] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                alt="Fortune7 Casino Logo"
                src="/image-13.png"
              />
              <div className="absolute inset-0 bg-royal-gold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Royal Divider */}
            <div className="flex items-center gap-4 w-full max-w-[400px]">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-royal-gold/60" />
              <div className="text-royal-gold text-2xl">♦</div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-royal-gold/60" />
            </div>

            {/* Premium Headline */}
            <h1 className="font-cinzel font-bold text-center md:text-left">
              <span className="block text-3xl md:text-4xl lg:text-5xl text-royal-gold tracking-[4px] leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
                DREAM BIG
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-white tracking-[4px] leading-tight mt-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                MORE THRILLS
              </span>
            </h1>

            {/* Subtitle with Gold Shadow */}
            <p className="font-playfair text-xl md:text-2xl text-center md:text-left text-white/90 tracking-wide leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <span className="text-royal-gold">Goa's Premier</span> Luxury Casino Experience
            </p>

            {/* Location Badge */}
            <div className="glass-card px-6 py-3 rounded-full flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <svg className="w-5 h-5 text-royal-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-nunito text-white/80 text-sm md:text-base">
                Artistry Suites, Naika Waddo, Calangute, Goa
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-up" style={{ animationDelay: '1s' }}>
              <a href="#book-a-table" className="btn-royal flex items-center justify-center gap-2 min-w-[200px]">
                <span>♠</span>
                <span>BOOK NOW</span>
                <span>♠</span>
              </a>
              <a href="#things-to-do" className="btn-outline-gold flex items-center justify-center gap-2 min-w-[200px]">
                EXPLORE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="font-nunito text-royal-gold text-xs tracking-widest">SCROLL</span>
        <svg className="w-6 h-6 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
