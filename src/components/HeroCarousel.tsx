import { motion } from "framer-motion";
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
        />
      )}
    </div>
  </div>
);

export const HeroCarousel = () => {
  // Duplicate pairs for seamless infinite loop
  const duplicatedPairs = [...imagePairs, ...imagePairs];

  return (
    <div 
      className="relative w-full overflow-hidden py-8"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-8 sm:gap-12"
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedPairs.map((pair, index) => (
          <ImagePairCard key={index} pair={pair} index={index % imagePairs.length} />
        ))}
      </motion.div>
    </div>
  );
};
