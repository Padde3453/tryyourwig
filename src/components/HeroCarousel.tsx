import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import beforeWig from "@/assets/before-wig.webp";
import afterWig from "@/assets/after-wig.png";
import beforeWig2 from "@/assets/before-wig-2.webp";
import afterWig2 from "@/assets/after-wig-2.webp";
import beforeWig3 from "@/assets/before-wig-3.webp";
import afterWig3 from "@/assets/after-wig-3.webp";
import beforeWig4 from "@/assets/before-wig-4.webp";
import afterWig4 from "@/assets/after-wig-4.webp";
import beforeWig5 from "@/assets/before-wig-5.webp";
import afterWig5 from "@/assets/after-wig-5.webp";
import beforeWig6 from "@/assets/before-wig-6.webp";
import afterWig6 from "@/assets/after-wig-6.webp";

interface ImagePair {
  before: string;
  after: string;
}

const imagePairs: ImagePair[] = [
  { before: beforeWig, after: afterWig },
  { before: beforeWig2, after: afterWig2 },
  { before: beforeWig3, after: afterWig3 },
  { before: beforeWig4, after: afterWig4 },
  { before: beforeWig5, after: afterWig5 },
  { before: beforeWig6, after: afterWig6 },
];

const ImagePairCard = ({ pair, index }: { pair: ImagePair; index: number }) => (
  <div className="flex gap-3 shrink-0">
    <div className="w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 overflow-hidden rounded-xl shadow-lg">
      <img
        src={pair.before}
        alt={`Before transformation ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 overflow-hidden rounded-xl shadow-lg">
      <img
        src={pair.after}
        alt={`After transformation ${index + 1}`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

// Individual card with Y offset based on screen position
const AnimatedImagePairCard = ({
  pair,
  index,
  cardIndex,
  containerX,
  containerRef,
}: {
  pair: ImagePair;
  index: number;
  cardIndex: number;
  containerX: ReturnType<typeof useMotionValue<number>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  useAnimationFrame(() => {
    if (!cardRef.current || !containerRef.current) return;

    const viewportWidth = window.innerWidth;
    const viewportCenter = viewportWidth / 2;

    // Get the card's position relative to viewport
    const rect = cardRef.current.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;

    // Normalize position: -1 (left edge) to 1 (right edge)
    const normalizedX = (cardCenter - viewportCenter) / (viewportWidth / 2);

    // U-curve: higher at edges (positive Y = down, so we want negative at edges)
    // Amplitude scales with viewport width (wider = more curve)
    // Base amplitude: 2% of viewport width, creating a subtle but noticeable curve
    const amplitude = viewportWidth * 0.05;

    // Parabola: y = amplitude * x^2, but inverted so edges are UP (negative)
    // At center (x=0): y = 0
    // At edges (x=±1): y = -amplitude (higher up)
    const yOffset = -amplitude * normalizedX * normalizedX;

    y.set(yOffset);
  });

  return (
    <motion.div ref={cardRef} style={{ y }} className="shrink-0">
      <ImagePairCard pair={pair} index={index} />
    </motion.div>
  );
};

export const HeroCarousel = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // We render THREE sets so there is always content on both sides (true "infinite circle").
  const tripledPairs = useMemo(
    () => [...imagePairs, ...imagePairs, ...imagePairs],
    [],
  );

  // px per second
  const speed = isHovered ? 50 : 100; // hover slows down to the previous speed

  const x = useMotionValue(0);
  const setWidthRef = useRef<number>(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const measure = () => {
      const full = trackRef.current?.scrollWidth ?? 0;
      const setWidth = full / 3;
      setWidthRef.current = setWidth;

      // Start on the MIDDLE set, so items exist to the left and right immediately.
      if (setWidth > 0) {
        x.set(-setWidth);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);

    return () => ro.disconnect();
  }, [x]);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return;

    const setWidth = setWidthRef.current;
    if (!setWidth) return;

    // Direction: LEFT to RIGHT (positive dx)
    const dx = (speed * delta) / 1000;
    let next = x.get() + dx;

    // Keep x in [-2*setWidth, -setWidth] so we always stay on the middle set.
    if (next > -setWidth) next -= setWidth;
    if (next <= -2 * setWidth) next += setWidth;

    x.set(next);
  });

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div ref={trackRef} className="flex gap-8 sm:gap-12" style={{ x }}>
        {tripledPairs.map((pair, cardIndex) => (
          <AnimatedImagePairCard
            key={cardIndex}
            pair={pair}
            index={cardIndex % imagePairs.length}
            cardIndex={cardIndex}
            containerX={x}
            containerRef={trackRef}
          />
        ))}
      </motion.div>
    </div>
  );
};

