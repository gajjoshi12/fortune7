import { useState, useEffect } from 'react';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }): JSX.Element => {
    const [isAnimating, setIsAnimating] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Start fade out after 2.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 2500);

        // Complete and unmount after 3.5 seconds
        const completeTimer = setTimeout(() => {
            setIsAnimating(false);
            onComplete();
        }, 3500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    if (!isAnimating) return <></>;

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-casino-black flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Card Suits */}
                <div className="absolute top-[10%] left-[10%] text-royal-gold/10 text-8xl animate-float-slow">♠</div>
                <div className="absolute top-[20%] right-[15%] text-royal-gold/10 text-7xl animate-float-medium">♦</div>
                <div className="absolute bottom-[25%] left-[20%] text-royal-gold/10 text-9xl animate-float-slow" style={{ animationDelay: '0.5s' }}>♣</div>
                <div className="absolute bottom-[15%] right-[10%] text-royal-gold/10 text-8xl animate-float-medium" style={{ animationDelay: '0.3s' }}>♥</div>
                <div className="absolute top-[50%] left-[5%] text-royal-gold/5 text-6xl animate-float-slow" style={{ animationDelay: '0.7s' }}>♠</div>
                <div className="absolute top-[40%] right-[5%] text-royal-gold/5 text-7xl animate-float-medium" style={{ animationDelay: '0.2s' }}>♦</div>

                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal-gold/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-royal-purple/20 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-royal-gold/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '0.3s' }} />

                {/* Golden Particles */}
                <div className="absolute top-[30%] left-[30%] w-1 h-1 bg-royal-gold rounded-full animate-sparkle" />
                <div className="absolute top-[60%] left-[70%] w-1.5 h-1.5 bg-royal-gold rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-[40%] left-[60%] w-1 h-1 bg-royal-gold rounded-full animate-sparkle" style={{ animationDelay: '1s' }} />
                <div className="absolute top-[70%] left-[40%] w-1 h-1 bg-royal-gold rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }} />
                <div className="absolute top-[20%] left-[50%] w-0.5 h-0.5 bg-royal-gold rounded-full animate-sparkle" style={{ animationDelay: '1.2s' }} />
            </div>

            {/* Center Content */}
            <div className="relative flex flex-col items-center animate-fade-in-up">
                {/* Logo Container with Glow */}
                <div className="relative mb-8">
                    {/* Outer Glow Ring */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-royal-gold/20 via-yellow-500/30 to-royal-gold/20 rounded-full blur-2xl animate-pulse" />

                    {/* Logo */}
                    <div className="relative">
                        <img
                            src="/image-13.png"
                            alt="Fortune 7 Logo"
                            className="w-32 h-32 md:w-40 md:h-40 object-contain animate-logo-glow drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                        />
                    </div>
                </div>

                {/* Brand Name */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h1 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl tracking-[8px] mb-2">
                        <span className="text-white">FORTUNE</span>
                        <span className="text-royal-gold ml-2">7</span>
                    </h1>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-royal-gold" />
                        <span className="text-royal-gold text-lg">♦</span>
                        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-royal-gold" />
                    </div>
                    <p className="font-nunito text-royal-gold/70 text-sm md:text-base tracking-[4px] uppercase mt-3">
                        Casino & Lounge
                    </p>
                </div>

                {/* Tagline */}
                <p className="font-playfair text-white/60 text-lg md:text-xl italic mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    Where Luxury Meets Excitement
                </p>

                {/* Loading Indicator */}
                <div className="mt-12 flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    <div className="w-2 h-2 bg-royal-gold rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-royal-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-royal-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-royal-gold/30 rounded-tl-lg animate-corner-fade" />
            <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-royal-gold/30 rounded-tr-lg animate-corner-fade" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-royal-gold/30 rounded-bl-lg animate-corner-fade" style={{ animationDelay: '0.4s' }} />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-royal-gold/30 rounded-br-lg animate-corner-fade" style={{ animationDelay: '0.6s' }} />

            {/* Bottom Text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="font-nunito text-white/30 text-xs tracking-widest uppercase">
                    Goa's Premier Casino Experience
                </p>
            </div>
        </div>
    );
};
