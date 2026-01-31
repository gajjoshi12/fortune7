import { useState } from "react";
import { AboutSection } from "./sections/AboutSection";
import { BackgroundSection } from "./sections/BackgroundSection";
import { BookingSection } from "./sections/BookingSection";
import { GameOfferingsSection } from "./sections/GameOfferingsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { IntroSection } from "./sections/IntroSection";
import { ReserveSection } from "./sections/ReserveSection";
import { SplashScreen } from "./sections/SplashScreen";

export const Frame = (): JSX.Element => {
  const [showSplash, setShowSplash] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className={`bg-casino-black w-full relative overflow-x-hidden transition-opacity duration-500 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <HeaderSection />
        <IntroSection />
        <AboutSection />
        <GameOfferingsSection />
        <BookingSection />

        {/* Gallery Section - Ultra Premium */}
        <section className="w-full relative bg-casino-black py-20 md:py-28 overflow-hidden">
          {/* Animated Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-royal-purple/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Premium Section Header */}
          <div className="relative z-10 flex flex-col items-center mb-16 px-4">
            {/* Decorative Top Line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-royal-gold to-royal-gold" />
              <span className="text-royal-gold text-2xl animate-pulse">✦</span>
              <span className="h-[1px] w-20 bg-gradient-to-l from-transparent via-royal-gold to-royal-gold" />
            </div>

            <span className="font-nunito text-royal-gold/80 text-xs tracking-[6px] uppercase mb-4">
              Exclusive Gallery
            </span>

            <h2 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4">
              <span className="text-white">Moments at </span>
              <span className="text-royal-gold bg-gradient-to-r from-royal-gold via-yellow-400 to-royal-gold bg-clip-text">Fortune 7</span>
            </h2>

            <p className="font-nunito text-white/50 text-base md:text-lg text-center max-w-[600px]">
              Experience the glamour and excitement captured in our exclusive collection
            </p>

            {/* Decorative Bottom Element */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-royal-gold/60 text-xl">♠</span>
              <span className="text-royal-gold text-2xl">♦</span>
              <span className="text-royal-gold/60 text-xl">♣</span>
            </div>
          </div>

          {/* Premium Gallery Grid */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4">
            {/* Row 1 - Hero Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
              {/* Large Feature Image */}
              <div className="lg:col-span-8 relative group cursor-pointer overflow-hidden rounded-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-royal-gold via-yellow-500 to-royal-gold rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700 animate-pulse" />
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-royal-gold/30 group-hover:border-royal-gold/80 transition-all duration-500">
                  <img
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    alt="Fortune 7 Premium"
                    src="/Fortune7_Credits_@Juno_works-.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-casino-black via-casino-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-royal-gold/0 group-hover:bg-royal-gold/10 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-cinzel text-royal-gold text-sm tracking-widest uppercase">Featured</span>
                    <h3 className="font-cinzel text-white text-xl md:text-2xl font-semibold mt-1">VIP Gaming Lounge</h3>
                  </div>
                </div>
              </div>

              {/* Stacked Side Images */}
              <div className="lg:col-span-4 grid grid-rows-2 gap-4">
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-royal-gold to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-royal-gold/20 group-hover:border-royal-gold/60 transition-all duration-500">
                    <img
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      alt="Fortune 7 Gallery"
                      src="/Fortune7_Credits_@Juno_works-03908.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-casino-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="font-nunito text-white/90 text-sm">Premium Experience</span>
                    </div>
                  </div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-royal-gold to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-royal-gold/20 group-hover:border-royal-gold/60 transition-all duration-500">
                    <img
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      alt="Fortune 7 Gallery"
                      src="/Fortune7_Credits_@Juno_works-03923.jpg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-casino-black/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="font-nunito text-white/90 text-sm">Luxury Ambiance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Mosaic Grid (Hidden by default) */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 transition-all duration-700 ${showFullGallery ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              {[
                { src: '/Fortune7_Credits_@Juno_works-03942.jpg', label: 'Casino Floor' },
                { src: '/Fortune7_Credits_@Juno_works-03955.jpg', label: 'Elite Tables' },
                { src: '/Fortune7_Credits_@Juno_works-03976.jpg', label: 'Entertainment' },
                { src: '/Fortune7_Credits_@Juno_works-1-105.jpg', label: 'Fine Dining' },
              ].map((item, i) => (
                <div key={i} className="relative group cursor-pointer overflow-hidden rounded-xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-royal-gold to-yellow-400 rounded-xl opacity-0 group-hover:opacity-60 blur transition-all duration-500" />
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 group-hover:border-royal-gold/50 transition-all duration-500">
                    <img
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 grayscale-[20%] group-hover:grayscale-0"
                      alt={item.label}
                      src={item.src}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-casino-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-end justify-center pb-4">
                      <span className="font-cinzel text-white text-sm md:text-base tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{item.label}</span>
                    </div>
                    {/* Corner Accent */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-royal-gold/0 group-hover:border-royal-gold/80 transition-all duration-500 rounded-tr-lg" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-royal-gold/0 group-hover:border-royal-gold/80 transition-all duration-500 rounded-bl-lg" />
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3 - Panoramic Strip (Hidden by default) */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 ${showFullGallery ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              {[
                { src: '/Fortune7_Credits_@Juno_works-1-117.jpg', label: 'VIP Lounge' },
                { src: '/Fortune7_Credits_@Juno_works-1-49.jpg', label: 'Premium Games' },
                { src: '/Fortune7_Credits_@Juno_works-1-97.jpg', label: 'Night Life' },
              ].map((item, i) => (
                <div key={i} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-b from-royal-gold/50 to-royal-purple/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                  <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-2xl border-2 border-white/5 group-hover:border-royal-gold/40 transition-all duration-500">
                    <img
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      alt={item.label}
                      src={item.src}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-casino-black via-casino-black/30 to-transparent" />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-12 h-[1px] bg-royal-gold mb-3" />
                      <span className="font-cinzel text-royal-gold text-lg md:text-xl tracking-widest">{item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More CTA */}
          <div className="relative z-10 flex justify-center mt-16">
            <button
              onClick={() => setShowFullGallery(!showFullGallery)}
              className="relative group px-10 py-4 overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-royal-gold via-yellow-500 to-royal-gold opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-[2px] bg-casino-black rounded-full" />
              <span className="relative flex items-center gap-3 font-cinzel text-royal-gold text-base tracking-widest group-hover:text-yellow-400 transition-colors duration-300">
                <span>{showFullGallery ? 'SHOW LESS' : 'VIEW FULL GALLERY'}</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${showFullGallery ? 'rotate-180' : 'group-hover:translate-x-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={showFullGallery ? "M5 15l7-7 7 7" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                </svg>
              </span>
            </button>
          </div>

          {/* Bottom Decorative Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
        </section>

        {/* Google Map Section with Premium Frame */}
        <section className="w-full relative">
          {/* Top Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent z-10" />

          {/* Section Header */}
          <div className="bg-casino-black py-8 px-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-12 bg-royal-gold/50" />
                <span className="text-royal-gold text-lg">📍</span>
                <span className="h-[1px] w-12 bg-royal-gold/50" />
              </div>
              <h2 className="font-cinzel font-semibold text-white text-xl md:text-2xl tracking-wide">
                Find Us
              </h2>
              <p className="font-nunito text-white/60 text-sm mt-2">
                Artistry Suites, Calangute, Goa
              </p>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative">
            {/* Gold Border Frame */}
            <div className="absolute inset-x-4 md:inset-x-8 lg:inset-x-16 top-0 bottom-0 border-2 border-royal-gold/30 rounded-xl pointer-events-none z-10" />

            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] px-4 md:px-8 lg:px-16">
              <iframe
                title="Google Maps - Fortune 7 Casino, Goa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.927875911224!2d73.7612949748925!3d15.541996685063697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1e5cb7a6019%3A0x1aa4541f2af94f8d!2sArtistry%20Suites!5e0!3m2!1sen!2sin!4v1763378764178!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Bottom Gold Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
        </section>

        <ReserveSection />
        <BackgroundSection />
      </div>
    </>
  );
};
