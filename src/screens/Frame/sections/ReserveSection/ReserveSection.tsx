export const ReserveSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center bg-gradient-to-b from-casino-black via-royal-purple/10 to-casino-black py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Royal Divider Top */}
      <div className="flex items-center gap-6 mb-10 relative z-10">
        <span className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-royal-gold/60" />
        <div className="flex items-center gap-3">
          <span className="text-royal-gold text-xl">♣</span>
          <span className="text-royal-gold text-2xl">♦</span>
          <span className="text-royal-gold text-xl">♥</span>
          <span className="text-royal-gold text-2xl">♠</span>
        </div>
        <span className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-royal-gold/60" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center max-w-[1000px] relative z-10">
        {/* Badge */}
        <div className="glass-card px-6 py-2 rounded-full mb-6">
          <span className="font-nunito text-royal-gold text-sm tracking-[3px] uppercase">
            #1 Casino in Goa
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-cinzel text-center">
          <span className="block text-royal-gold text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[2px] leading-tight">
            Best Casino in Goa:
          </span>
          <span className="block text-white text-xl md:text-2xl lg:text-3xl font-normal tracking-wide leading-relaxed mt-3">
            Experience Unforgettable Thrills at
          </span>
          <span className="block text-royal-gold text-3xl md:text-4xl lg:text-5xl font-bold tracking-[3px] leading-tight mt-2 animate-gold-pulse">
            Fortune7 Casino
          </span>
        </h2>

        {/* Description */}
        <p className="font-nunito font-normal text-white/70 text-center text-base md:text-lg lg:text-xl tracking-wide leading-relaxed mt-8 max-w-[800px]">
          Whether you're seeking the ultimate casino experience for couples in Goa or a thrilling escape on your own,
          <span className="text-royal-gold"> Fortune 7 Casino</span> has everything you crave. Explore our games, promotions, and exclusive offers designed to make your visit unforgettable.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
          {[
            { number: '24/7', label: 'Always Open' },
            { number: '50+', label: 'Casino Games' },
            { number: '5★', label: 'VIP Service' },
            { number: '1000+', label: 'Happy Guests' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-cinzel font-bold text-royal-gold text-3xl md:text-4xl tracking-wide">
                {stat.number}
              </span>
              <span className="font-nunito text-white/60 text-sm mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href="#book-a-table" className="btn-royal flex items-center justify-center gap-2 min-w-[180px]">
            <span>♠</span>
            <span>BOOK NOW</span>
          </a>
          <a href="#contact" className="btn-outline-gold flex items-center justify-center gap-2 min-w-[180px]">
            <span>CONTACT US</span>
          </a>
        </div>
      </div>

      {/* Royal Divider Bottom */}
      <div className="flex items-center gap-6 mt-12 relative z-10">
        <span className="h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent to-royal-gold/60" />
        <span className="text-royal-gold text-3xl">◆</span>
        <span className="h-[1px] w-20 md:w-32 bg-gradient-to-l from-transparent to-royal-gold/60" />
      </div>
    </section>
  );
};
