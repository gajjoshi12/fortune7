export const BookingSection = (): JSX.Element => {
  const packages = [
    {
      title: "Regular Package",
      price: "₹2,000",
      tier: "standard",
      isCouple: false,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "House Brand Liquor",
        "1000 OTPC",
      ],
    },
    {
      title: "Regular Couple",
      price: "₹3,000",
      tier: "standard",
      isCouple: true,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "House Brand Liquor",
        "2000 OTPC",
      ],
    },
    {
      title: "Premium Package",
      price: "₹3,000",
      tier: "premium",
      isCouple: false,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "Premium Brand Liquor",
        "2000 OTPC",
      ],
    },
    {
      title: "Premium Couple",
      price: "₹5,000",
      tier: "premium",
      isCouple: true,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "Premium Brand Liquor",
        "3000 OTPC",
      ],
    },
    {
      title: "VIP Package",
      price: "₹5,000",
      tier: "vip",
      isCouple: false,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "Foreign Brand Liquor",
        "4000 OTPC",
      ],
    },
    {
      title: "VIP Couple",
      price: "₹8,000",
      tier: "vip",
      isCouple: true,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "Foreign Brand Liquor",
        "6000 OTPC",
      ],
    },
    {
      title: "VVIP Package",
      price: "₹10,000",
      tier: "vip",
      featured: true,
      isCouple: false,
      details: [
        "Multi-Cuisine Veg/Non Veg Dinner",
        "Snacks",
        "Live Performance",
        "Foreign Brand Liquor",
        "10,000 OTPC",
      ],
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'vip': return 'from-royal-gold via-yellow-400 to-royal-gold';
      case 'premium': return 'from-purple-500 via-purple-400 to-purple-500';
      default: return 'from-royal-gold/60 via-royal-gold/40 to-royal-gold/60';
    }
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'vip': return '👑 VIP';
      case 'premium': return '⭐ Premium';
      default: return null;
    }
  };

  return (
    <section
      id="book-a-table"
      className="w-full flex flex-col bg-gradient-to-b from-casino-black via-royal-purple/20 to-casino-black py-16 md:py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 text-royal-gold/10 text-9xl">♠</div>
        <div className="absolute bottom-20 left-10 text-royal-gold/10 text-9xl">♦</div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-royal-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Section Title */}
      <div className="flex flex-col items-center mb-12 relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-royal-gold text-xl">♦</span>
          <span className="font-nunito text-royal-gold/70 text-xs tracking-[4px] uppercase">Packages</span>
          <span className="text-royal-gold text-xl">♦</span>
        </div>

        <h2 className="font-cinzel font-semibold text-royal-gold text-3xl md:text-4xl lg:text-5xl tracking-[3px] text-center">
          Reserve Your Thrills
        </h2>

        <p className="font-nunito text-white/60 text-base md:text-lg mt-4 text-center max-w-[600px]">
          Choose from our exclusive packages designed for every level of luxury
        </p>
      </div>

      {/* Packages Grid */}
      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`vip-card relative group transition-all duration-500 ${pkg.featured ? 'lg:scale-105 z-10' : ''
                }`}
            >
              {/* Top Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getTierColor(pkg.tier)} rounded-t-2xl`} />

              {/* Badge */}
              {getTierBadge(pkg.tier) && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 glass-card px-4 py-1 rounded-full">
                  <span className="font-nunito text-royal-gold text-xs font-semibold tracking-wide">
                    {getTierBadge(pkg.tier)}
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center pt-4 pb-4 border-b border-royal-gold/20">
                <h4 className="font-cinzel font-semibold text-white text-lg md:text-xl tracking-wide">
                  {pkg.title}
                </h4>
                <div className="mt-3 flex items-baseline justify-center gap-1">
                  <span className="font-cinzel font-bold text-royal-gold text-3xl md:text-4xl">
                    {pkg.price}
                  </span>
                  <span className="font-nunito text-white/50 text-sm">/{pkg.isCouple ? 'couple' : 'person'}</span>
                </div>
              </div>

              {/* Package Details */}
              <ul className="mt-6 space-y-3">
                {pkg.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-royal-gold text-sm mt-1">✦</span>
                    <span className="font-nunito text-white/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book Button */}
              <div className="mt-6 pt-4">
                <button className={`w-full py-3 rounded-lg font-nunito font-semibold text-sm tracking-wide transition-all duration-300 ${pkg.tier === 'vip'
                  ? 'btn-royal'
                  : 'btn-outline-gold'
                  }`}>
                  SELECT PACKAGE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center mt-16 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-royal-gold/50" />
          <span className="text-royal-gold text-2xl">♠</span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-royal-gold/50" />
        </div>

        <p className="font-playfair text-white text-lg md:text-xl text-center mb-2">
          Reserve Your Lavish Adventure Today
        </p>
        <p className="font-cinzel text-royal-gold text-xl md:text-2xl tracking-wide">
          at Fortune 7 Casino
        </p>

        <a
          href="tel:+919876543210"
          className="mt-8 btn-royal flex items-center gap-3 text-lg animate-gold-pulse"
        >
          <span>📞</span>
          <span>CALL TO BOOK</span>
        </a>
      </div>
    </section>
  );
};
