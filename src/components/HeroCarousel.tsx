import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { Maximize2 } from "lucide-react";
import beforeWig from "@/assets/before-wig.jpg";
import afterWig from "@/assets/after-wig.png";

interface ImagePair {
  before: string | null;
  after: string | null;
  isPlaceholder: boolean;
}

const imagePairs: ImagePair[] = [
  { before: beforeWig, after: afterWig, isPlaceholder: false },
  { before: null, after: null, isPlaceholder: true },
  { before: null, after: null, isPlaceholder: true },
  { before: null, after: null, isPlaceholder: true },
  { before: null, after: null, isPlaceholder: true },
  { before: null, after: null, isPlaceholder: true },
];

const PlaceholderImage = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-muted/50 flex flex-col items-center justify-center gap-2 rounded-xl border border-border/30">
    <Maximize2 className="w-8 h-8 text-muted-foreground/40" />
    <span className="text-xs text-muted-foreground/40 font-medium">{label}</span>
  </div>
);

const ImagePairCard = ({ pair, index }: { pair: ImagePair; index: number }) => (
  <div className="flex gap-3 shrink-0">
    <div className="w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 overflow-hidden rounded-xl shadow-lg">
      {pair.isPlaceholder ? (
        <PlaceholderImage label="Before" />
      ) : (
        <img
          src={pair.before!}
          alt={`Before transformation ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
    <div className="w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 overflow-hidden rounded-xl shadow-lg">
      {pair.isPlaceholder ? (
        <PlaceholderImage label="After" />
      ) : (
        <img
          src={pair.after!}
          alt={`After transformation ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  </div>
);

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

    const dx = (speed * delta) / 1000;
    let next = x.get() - dx;

    // Keep x in [-2*setWidth, -setWidth] so we always stay on the middle set.
    if (next <= -2 * setWidth) next += setWidth;
    if (next > -setWidth) next -= setWidth;

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
        {tripledPairs.map((pair, index) => (
          <ImagePairCard
            key={index}
            pair={pair}
            index={index % imagePairs.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

