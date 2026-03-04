import { useState, useRef, useCallback, useEffect } from 'react';

interface WheelSegment {
    label: string;
    value: string;
    color: string;
    icon: string;
}

const SEGMENTS: WheelSegment[] = [
    { label: '₹500 Bonus', value: '500-bonus', color: '#d4af37', icon: '💰' },
    { label: 'Free Spin', value: 'free-spin', color: '#8b0000', icon: '🎰' },
    { label: 'VIP Night', value: 'vip-night', color: '#1a1625', icon: '👑' },
    { label: '₹1000 Chips', value: '1000-chips', color: '#b8860b', icon: '🎲' },
    { label: '2X Rewards', value: '2x-rewards', color: '#2d1f3d', icon: '⭐' },
    { label: 'Free Dinner', value: 'free-dinner', color: '#d4af37', icon: '🍽️' },
    { label: 'Lucky Draw', value: 'lucky-draw', color: '#8b0000', icon: '🍀' },
    { label: '₹2000 Bonus', value: '2000-bonus', color: '#1a1625', icon: '💎' },
];

const SEGMENT_ANGLE = 360 / SEGMENTS.length;

export const SpinWheelSection = (): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState<WheelSegment | null>(null);
    const [showResult, setShowResult] = useState(false);
    const animationRef = useRef<number>(0);
    const currentRotationRef = useRef(0);

    const drawWheel = useCallback((ctx: CanvasRenderingContext2D, size: number, currentRotation: number) => {
        const center = size / 2;
        const radius = center - 12;

        ctx.clearRect(0, 0, size, size);

        // Outer glow ring
        ctx.save();
        ctx.beginPath();
        ctx.arc(center, center, radius + 10, 0, Math.PI * 2);
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 30;
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();

        // Outer ring
        ctx.beginPath();
        ctx.arc(center, center, radius + 6, 0, Math.PI * 2);
        const outerGrad = ctx.createLinearGradient(0, 0, size, size);
        outerGrad.addColorStop(0, '#f4d03f');
        outerGrad.addColorStop(0.5, '#d4af37');
        outerGrad.addColorStop(1, '#b8860b');
        ctx.fillStyle = outerGrad;
        ctx.fill();

        // Notch markers on outer ring
        for (let i = 0; i < SEGMENTS.length * 2; i++) {
            const notchAngle = (i * Math.PI * 2) / (SEGMENTS.length * 2);
            ctx.save();
            ctx.translate(center, center);
            ctx.rotate(notchAngle);
            ctx.beginPath();
            ctx.arc(0, -(radius + 6), 4, 0, Math.PI * 2);
            ctx.fillStyle = i % 2 === 0 ? '#0d0c11' : '#ffd700';
            ctx.fill();
            ctx.restore();
        }

        // Draw segments
        SEGMENTS.forEach((seg, i) => {
            const startAngle = (i * SEGMENT_ANGLE * Math.PI) / 180 + (currentRotation * Math.PI) / 180;
            const endAngle = ((i + 1) * SEGMENT_ANGLE * Math.PI) / 180 + (currentRotation * Math.PI) / 180;

            // Segment fill
            ctx.beginPath();
            ctx.moveTo(center, center);
            ctx.arc(center, center, radius, startAngle, endAngle);
            ctx.closePath();

            const grad = ctx.createRadialGradient(center, center, 0, center, center, radius);
            if (seg.color === '#d4af37') {
                grad.addColorStop(0, '#f4d03f');
                grad.addColorStop(0.6, '#d4af37');
                grad.addColorStop(1, '#b8860b');
            } else if (seg.color === '#8b0000') {
                grad.addColorStop(0, '#dc143c');
                grad.addColorStop(0.6, '#8b0000');
                grad.addColorStop(1, '#5c0000');
            } else if (seg.color === '#1a1625') {
                grad.addColorStop(0, '#2d1f3d');
                grad.addColorStop(0.6, '#1a1625');
                grad.addColorStop(1, '#0d0c11');
            } else if (seg.color === '#b8860b') {
                grad.addColorStop(0, '#daa520');
                grad.addColorStop(0.6, '#b8860b');
                grad.addColorStop(1, '#8b6508');
            } else {
                grad.addColorStop(0, '#3d2a5c');
                grad.addColorStop(0.6, '#2d1f3d');
                grad.addColorStop(1, '#1a1625');
            }
            ctx.fillStyle = grad;
            ctx.fill();

            // Segment border
            ctx.beginPath();
            ctx.moveTo(center, center);
            ctx.arc(center, center, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw text
            const midAngle = (startAngle + endAngle) / 2;
            ctx.save();
            ctx.translate(center, center);
            ctx.rotate(midAngle);

            // Icon
            ctx.font = `${Math.floor(size * 0.055)}px serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(seg.icon, radius * 0.72, 0);

            // Label
            ctx.rotate(0);
            ctx.font = `bold ${Math.floor(size * 0.03)}px 'Cinzel', serif`;
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.shadowColor = 'rgba(0,0,0,0.8)';
            ctx.shadowBlur = 4;
            ctx.fillText(seg.label, radius * 0.48, 0);
            ctx.restore();
        });

        // Inner circle shadow
        ctx.beginPath();
        ctx.arc(center, center, radius * 0.22, 0, Math.PI * 2);
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#0d0c11';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Center hub
        const hubGrad = ctx.createRadialGradient(center, center, 0, center, center, radius * 0.2);
        hubGrad.addColorStop(0, '#ffd700');
        hubGrad.addColorStop(0.5, '#d4af37');
        hubGrad.addColorStop(1, '#8b6508');
        ctx.beginPath();
        ctx.arc(center, center, radius * 0.18, 0, Math.PI * 2);
        ctx.fillStyle = hubGrad;
        ctx.fill();
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Center text "F7"
        ctx.font = `bold ${Math.floor(size * 0.06)}px 'Cinzel', serif`;
        ctx.fillStyle = '#0d0c11';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('F7', center, center);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            const container = canvas.parentElement;
            if (!container) return;
            const displaySize = Math.min(container.clientWidth, 500);
            const dpr = window.devicePixelRatio || 1;
            canvas.width = displaySize * dpr;
            canvas.height = displaySize * dpr;
            canvas.style.width = `${displaySize}px`;
            canvas.style.height = `${displaySize}px`;

            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.scale(dpr, dpr);
                drawWheel(ctx, displaySize, currentRotationRef.current);
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, [drawWheel]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const dpr = window.devicePixelRatio || 1;
        const displaySize = canvas.width / dpr;
        drawWheel(ctx, displaySize, rotation);
        currentRotationRef.current = rotation;
    }, [rotation, drawWheel]);

    const spinWheel = () => {
        if (spinning) return;
        setSpinning(true);
        setShowResult(false);
        setResult(null);

        const spinDuration = 5000 + Math.random() * 2000;
        const totalRotation = 1440 + Math.random() * 1440; // 4-8 full rotations
        const startRotation = rotation;
        const startTime = Date.now();

        const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / spinDuration, 1);
            const easedProgress = easeOutQuart(progress);
            const currentRot = startRotation + totalRotation * easedProgress;

            setRotation(currentRot);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                // Determine winning segment
                const normalizedAngle = ((360 - (currentRot % 360)) + 360) % 360;
                const segmentIndex = Math.floor(normalizedAngle / SEGMENT_ANGLE) % SEGMENTS.length;
                setResult(SEGMENTS[segmentIndex]);
                setSpinning(false);
                setTimeout(() => setShowResult(true), 300);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    return (
        <section className="w-full relative bg-casino-black py-20 md:py-28 overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-royal-gold/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-royal-purple/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-royal-gold/8 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Floating Card Suits */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] left-[8%] text-royal-gold/10 text-7xl animate-float" style={{ animationDelay: '0s' }}>♠</div>
                <div className="absolute top-[60%] right-[10%] text-royal-gold/10 text-6xl animate-float" style={{ animationDelay: '1.5s' }}>♦</div>
                <div className="absolute bottom-[20%] left-[15%] text-royal-gold/10 text-8xl animate-float" style={{ animationDelay: '0.8s' }}>♣</div>
                <div className="absolute top-[30%] right-[20%] text-royal-gold/10 text-5xl animate-float" style={{ animationDelay: '2s' }}>♥</div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-[1px] w-20 bg-gradient-to-r from-transparent via-royal-gold to-royal-gold" />
                        <span className="text-royal-gold text-2xl animate-pulse">✦</span>
                        <span className="h-[1px] w-20 bg-gradient-to-l from-transparent via-royal-gold to-royal-gold" />
                    </div>

                    <span className="font-nunito text-royal-gold/80 text-xs tracking-[6px] uppercase mb-4">
                        Try Your Luck
                    </span>

                    <h2 className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4">
                        <span className="text-white">Spin the </span>
                        <span className="text-royal-gold bg-gradient-to-r from-royal-gold via-yellow-400 to-royal-gold bg-clip-text">Fortune Wheel</span>
                    </h2>

                    <p className="font-nunito text-white/50 text-base md:text-lg text-center max-w-[550px]">
                        Give the wheel a spin and discover exclusive rewards, bonuses, and VIP experiences waiting just for you
                    </p>

                    <div className="flex items-center gap-3 mt-6">
                        <span className="text-royal-gold/60 text-xl">♠</span>
                        <span className="text-royal-gold text-2xl">♦</span>
                        <span className="text-royal-gold/60 text-xl">♣</span>
                    </div>
                </div>

                {/* Wheel + Result Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Wheel Container */}
                    <div className="relative flex flex-col items-center">
                        {/* Pointer/Arrow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-20">
                            <div className="relative">
                                <svg width="40" height="50" viewBox="0 0 40 50" className="drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                                    <defs>
                                        <linearGradient id="pointerGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#ffd700" />
                                            <stop offset="50%" stopColor="#d4af37" />
                                            <stop offset="100%" stopColor="#b8860b" />
                                        </linearGradient>
                                    </defs>
                                    <polygon points="20,45 8,8 32,8" fill="url(#pointerGrad)" stroke="#ffd700" strokeWidth="1.5" />
                                    <circle cx="20" cy="10" r="5" fill="#ffd700" />
                                </svg>
                            </div>
                        </div>

                        {/* Outer glow ring behind canvas */}
                        <div className={`absolute inset-0 rounded-full transition-all duration-500 ${spinning
                            ? 'bg-royal-gold/20 shadow-[0_0_80px_rgba(212,175,55,0.4)]'
                            : 'bg-royal-gold/5 shadow-[0_0_40px_rgba(212,175,55,0.2)]'
                            }`} />

                        {/* Canvas */}
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <canvas
                                ref={canvasRef}
                                className="w-full h-full rounded-full"
                            />
                        </div>

                        {/* Spin Button */}
                        <button
                            onClick={spinWheel}
                            disabled={spinning}
                            className={`mt-10 relative group overflow-hidden rounded-full transition-all duration-500 ${spinning
                                ? 'opacity-60 cursor-not-allowed scale-95'
                                : 'hover:scale-105 active:scale-95'
                                }`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-royal-gold via-yellow-500 to-royal-gold opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute inset-[2px] bg-casino-black rounded-full" />
                            <div className="absolute inset-[2px] bg-gradient-to-b from-royal-gold/10 to-transparent rounded-full" />
                            <span className="relative flex items-center gap-3 px-10 py-4 font-cinzel font-bold text-royal-gold text-lg tracking-[4px] group-hover:text-yellow-400 transition-colors duration-300">
                                {spinning ? (
                                    <>
                                        <span className="animate-spin text-xl">✦</span>
                                        <span>SPINNING...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-xl">♠</span>
                                        <span>SPIN NOW</span>
                                        <span className="text-xl">♠</span>
                                    </>
                                )}
                            </span>
                        </button>
                    </div>

                    {/* Prizes Panel */}
                    <div className="w-full lg:max-w-[400px]">
                        {/* Result Card */}
                        <div className={`mb-8 transition-all duration-700 ${showResult && result
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                            }`}>
                            <div className="relative p-6 rounded-2xl border border-royal-gold/50 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/20 via-casino-black to-royal-purple/30" />
                                <div className="absolute inset-0 bg-royal-gold/5 animate-pulse" />
                                <div className="relative flex flex-col items-center text-center">
                                    <span className="text-5xl mb-3">{result?.icon}</span>
                                    <span className="font-nunito text-royal-gold text-xs tracking-[4px] uppercase mb-2">
                                        🎉 You Won!
                                    </span>
                                    <span className="font-cinzel font-bold text-white text-2xl md:text-3xl">
                                        {result?.label}
                                    </span>
                                    <p className="font-nunito text-white/60 text-sm mt-3">
                                        Visit our casino to claim your exclusive reward!
                                    </p>
                                    <a
                                        href="tel:+919737797377"
                                        className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-royal-gold to-yellow-600 text-casino-black font-nunito font-bold text-sm tracking-wider hover:shadow-gold-glow-lg transition-all duration-300"
                                    >
                                        CLAIM NOW →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Prizes List */}
                        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/10 bg-gradient-to-r from-royal-gold/10 to-transparent">
                                <h3 className="font-cinzel font-semibold text-royal-gold text-lg tracking-wider">
                                    ✦ Today's Prizes
                                </h3>
                            </div>
                            <div className="p-4 space-y-2">
                                {SEGMENTS.map((seg) => (
                                    <div
                                        key={seg.value}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-500 ${result?.value === seg.value && showResult
                                            ? 'bg-royal-gold/20 border border-royal-gold/50 scale-[1.02] shadow-gold-glow'
                                            : 'bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/20'
                                            }`}
                                    >
                                        <span className="text-2xl">{seg.icon}</span>
                                        <span className="font-nunito text-white/90 text-sm font-medium flex-1">{seg.label}</span>
                                        {result?.value === seg.value && showResult && (
                                            <span className="text-royal-gold text-xs font-bold tracking-wide animate-pulse">WON!</span>
                                        )}
                                        <div
                                            className="w-3 h-3 rounded-full border border-white/20"
                                            style={{
                                                background: `linear-gradient(135deg, ${seg.color}, ${seg.color}88)`
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* T&C Note */}
                        <p className="font-nunito text-white/30 text-xs text-center mt-4 leading-relaxed">
                            * Offers valid for in-casino visits only. T&C apply. Must be 21+ to participate.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />
        </section>
    );
};
