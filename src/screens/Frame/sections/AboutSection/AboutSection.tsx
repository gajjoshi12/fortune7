export const AboutSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col bg-casino-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-purple/30 rounded-full blur-3xl" />
      </div>

      {/* ===== ABOUT HEADING ===== */}
      <div className="w-full flex flex-col lg:flex-row bg-transparent px-4 md:px-8 lg:px-[120px] py-12 md:py-16 gap-8 relative z-10">
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 p-4">
          {/* Section Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-8 bg-royal-gold" />
            <span className="font-nunito text-royal-gold text-sm tracking-[3px] uppercase">Welcome</span>
            <span className="h-[1px] w-8 bg-royal-gold" />
          </div>

          <h2 className="font-cinzel font-semibold text-royal-gold text-4xl md:text-5xl lg:text-6xl tracking-[4px] leading-tight">
            ABOUT
          </h2>

          <div className="flex items-center justify-center gap-0 p-1">
            <div className="font-playfair text-2xl md:text-3xl text-center lg:text-left leading-relaxed font-normal text-white/90 tracking-wide">
              Your Beloved Casino
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 p-4 flex-1">
          <p className="max-w-[580px] font-nunito text-white/80 text-base md:text-lg lg:text-xl font-normal tracking-wide leading-relaxed text-center lg:text-left">
            Welcome to <span className="text-royal-gold font-semibold">Fortune 7 Casino</span>, where luxury meets excitement in the heart of Goa. Immerse yourself in cutting-edge gaming, savor victory at our exquisite restaurant, and bask in a VIP atmosphere. Dive into exclusive promotions, join our Rewards Club, and experience unforgettable moments at Fortune 7 – where the adventure never ends!
          </p>
        </div>
      </div>

      {/* ===== ROYAL DIVIDER ===== */}
      <div className="w-full flex justify-center py-4 relative z-10">
        <div className="flex items-center gap-4">
          <span className="h-[1px] w-24 md:w-40 bg-gradient-to-r from-transparent to-royal-gold/70" />
          <div className="flex items-center gap-2">
            <span className="text-royal-gold text-lg">♠</span>
            <span className="text-royal-gold text-xl">◆</span>
            <span className="text-royal-gold text-lg">♠</span>
          </div>
          <span className="h-[1px] w-24 md:w-40 bg-gradient-to-l from-transparent to-royal-gold/70" />
        </div>
      </div>

      {/* ===== THINGS TO DO ===== */}
      <div id="things-to-do" className="flex flex-col bg-transparent overflow-hidden py-8 px-4 mt-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          {/* Section Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-royal-gold text-lg">♦</span>
            <span className="font-nunito text-royal-gold/70 text-xs tracking-[4px] uppercase">Discover</span>
            <span className="text-royal-gold text-lg">♦</span>
          </div>

          <h2 className="font-cinzel font-semibold text-royal-gold text-3xl md:text-4xl lg:text-5xl leading-tight text-center tracking-[3px]">
            THINGS TO DO
          </h2>
        </div>

        <div className="flex items-center justify-center gap-2.5 p-2.5 mt-6 md:mt-10">
          <h3 className="font-playfair font-medium text-white text-3xl md:text-4xl lg:text-5xl tracking-wide leading-normal transition-all duration-300 hover:text-royal-gold cursor-default">
            Fortune 7
          </h3>
        </div>

        {/* ===== IMAGE LEFT | TEXT RIGHT ===== */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 px-4 md:px-8 lg:px-[100px] mt-12 md:mt-16">
          {/* Image with Premium Frame */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Gold Border Frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-royal-gold via-royal-gold-light to-royal-gold rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm" />
              <div className="relative w-full max-w-[520px] aspect-[16/10] overflow-hidden rounded-xl royal-border">
                <img
                  src="/image12.jpg"
                  alt="Exquisite Culinary"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-casino-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Text on the Right */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-royal-gold text-2xl">🍽️</span>
              <h4 className="font-cinzel font-semibold text-royal-gold text-2xl md:text-3xl lg:text-4xl tracking-wide">
                Exquisite Culinary
              </h4>
            </div>

            <p className="max-w-[600px] font-nunito text-white/80 text-lg md:text-xl font-normal tracking-wide leading-relaxed">
              Indulge in a culinary journey at Fortune 7 Casino's exquisite restaurant and bar.
              Our menu is crafted to match the grandeur of your wins, offering a symphony of
              flavors in an upscale setting. Enjoy <span className="text-royal-gold">fine dining</span> with a blend of Goan essence
              and international flair, all designed to make every bite as memorable as your victory.
            </p>

            <a href="#menu" className="mt-6 btn-outline-gold text-sm">
              VIEW MENU
            </a>
          </div>
        </div>
      </div>

      {/* ===== SECOND HALF ===== */}
      <div className="flex flex-col bg-transparent relative z-10 mt-8">
        <div className="w-full flex flex-col lg:flex-row gap-12 px-4 lg:px-8">
          <div className="flex-1 flex flex-col py-8 lg:py-0">
            <div className="flex items-center justify-center lg:justify-start lg:ml-[60px] xl:ml-[120px] mt-8 lg:mt-[80px]">
              <p className="font-nunito font-normal text-white/70 text-lg md:text-xl lg:text-2xl tracking-wide leading-relaxed text-center lg:text-left">
                Your Gateway to Unforgettable Moments
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start lg:ml-[60px] xl:ml-[120px] mt-4">
              <h3 className="font-cinzel font-semibold text-royal-gold text-2xl md:text-3xl lg:text-4xl tracking-[2px] leading-tight text-center lg:text-left">
                Lavish Adventure
              </h3>
            </div>

            <div className="flex items-center justify-center lg:justify-start lg:ml-[40px] xl:ml-[80px] gap-2.5 pl-4 lg:pl-[40px] pr-4 py-4 mt-4">
              <p className="max-w-[560px] font-nunito text-white/80 text-lg md:text-xl font-normal tracking-wide leading-relaxed text-center lg:text-left">
                Whether you're a seasoned gamer or a first-time visitor, <span className="text-royal-gold">Fortune 7 Casino</span> invites you to be part of an unparalleled gaming experience. Join us and let the waves of excitement carry you to new heights!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 p-4 lg:mt-[40px]">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-royal-gold via-royal-gold-light to-royal-gold rounded-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
              <img
                className="relative w-full max-w-[500px] h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Casino Experience"
                src="/image-14.png"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col items-center gap-4 py-12 md:py-16 px-4">
          {/* Decorative Element */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-royal-gold text-2xl">♣</span>
            <span className="text-royal-gold text-3xl">♦</span>
            <span className="text-royal-gold text-2xl">♥</span>
          </div>

          <div className="flex items-center justify-center p-2">
            <p className="font-playfair font-normal text-white text-xl md:text-2xl lg:text-3xl text-center tracking-wide leading-relaxed">
              Offering an escape into a world of gaming
            </p>
          </div>

          <div className="flex items-center justify-center p-2">
            <p className="font-cinzel font-semibold text-royal-gold text-2xl md:text-3xl lg:text-4xl text-center tracking-[2px] leading-tight">
              and thrills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
