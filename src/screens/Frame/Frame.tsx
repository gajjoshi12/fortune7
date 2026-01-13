import { AboutSection } from "./sections/AboutSection";
import { BackgroundSection } from "./sections/BackgroundSection";
import { BookingSection } from "./sections/BookingSection";
import { GameOfferingsSection } from "./sections/GameOfferingsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { IntroSection } from "./sections/IntroSection";
import { ReserveSection } from "./sections/ReserveSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="bg-casino-black w-full relative overflow-x-hidden">
      <HeaderSection />
      <IntroSection />
      <AboutSection />
      <GameOfferingsSection />
      <BookingSection />

      {/* Gallery Section with Premium Styling */}
      <section className="w-full relative flex flex-col items-center gap-8 md:gap-12 bg-gradient-to-b from-casino-black via-royal-purple/10 to-casino-black py-16 md:py-20 px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-royal-gold text-xl">♣</span>
            <span className="font-nunito text-royal-gold/70 text-xs tracking-[4px] uppercase">Gallery</span>
            <span className="text-royal-gold text-xl">♣</span>
          </div>
          <h2 className="font-cinzel font-semibold text-royal-gold text-2xl md:text-3xl tracking-[2px]">
            Moments at Fortune 7
          </h2>
        </div>

        {/* Gallery Image with Premium Frame */}
        <div className="relative group max-w-[1008px] w-full">
          <div className="absolute -inset-2 bg-gradient-to-r from-royal-gold/20 via-royal-gold/10 to-royal-gold/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-xl royal-border">
            <img
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              alt="Fortune 7 Gallery"
              src="/picture.svg"
            />
          </div>
        </div>

        {/* Load More Button */}
        <button className="btn-outline-gold flex items-center gap-3 group">
          <span>VIEW MORE</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
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
  );
};
