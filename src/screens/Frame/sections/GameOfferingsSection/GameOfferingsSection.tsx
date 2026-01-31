import { Button } from "../../../../components/ui/button";

export const GameOfferingsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image with Premium Overlay */}
      <img
        className="absolute w-full h-full top-0 left-0 object-cover"
        alt="Game offerings background"
        src="/img.jpg"
      />

      {/* Multi-layer Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-casino-black via-casino-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-casino-black/60 via-transparent to-casino-black/40" />

      {/* Decorative Casino Elements */}
      <div className="absolute top-8 right-8 md:top-16 md:right-16 opacity-30 hidden lg:block">
        <div className="text-royal-gold text-6xl animate-float" style={{ animationDelay: '0s' }}>♠</div>
      </div>
      <div className="absolute bottom-16 right-32 opacity-20 hidden lg:block">
        <div className="text-royal-gold text-5xl animate-float" style={{ animationDelay: '1s' }}>♦</div>
      </div>
      <div className="absolute top-1/2 right-48 opacity-15 hidden xl:block">
        <div className="text-royal-gold text-4xl animate-float" style={{ animationDelay: '2s' }}>♥</div>
      </div>

      {/* Content */}
      <div
        id="menu"
        className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-[500px] text-center md:text-left">
          {/* Section Badge */}
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <span className="h-[2px] w-8 bg-royal-gold" />
            <span className="font-nunito text-royal-gold text-sm tracking-[3px] uppercase">Explore</span>
            <span className="h-[2px] w-8 bg-royal-gold" />
          </div>

          <h2 className="font-cinzel font-semibold text-white text-4xl md:text-5xl lg:text-6xl tracking-[2px] leading-tight">
            View our
          </h2>

          <h2 className="font-cinzel font-bold text-royal-gold text-5xl md:text-6xl lg:text-7xl tracking-[2px] leading-tight mt-2">
            Game
          </h2>

          <h2 className="font-playfair font-normal text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight mt-3">
            Offerings
          </h2>

          {/* Subtitle */}
          <p className="font-nunito text-white/70 text-base md:text-lg mt-6 leading-relaxed max-w-[400px]">
            Discover our world-class selection of games, from classic table games to the latest slots
          </p>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="group relative overflow-hidden">
              <div className="btn-royal flex items-center gap-3 relative z-10">
                <span className="text-lg">♠</span>
                <span>EXPLORE GAMES</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>

          {/* Game Categories Pills */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
            {['Roulette', 'Blackjack', 'Poker', 'Baccarat', 'Slots'].map((game, i) => (
              <span
                key={game}
                className="glass-card px-4 py-2 rounded-full text-white/80 text-sm font-nunito tracking-wide hover:border-royal-gold hover:text-royal-gold transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
    </section>
  );
};
