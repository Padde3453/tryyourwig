import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";

const ImplementationStep = ({
  step,
  title,
  description,
  isCompleted,
  index,
  circleRef,
}: {
  step: number;
  title: string;
  description: string;
  isCompleted: boolean;
  index: number;
  circleRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-20 md:pl-28 pb-16 last:pb-0 min-h-[120px] flex items-center"
    >
      {/* Step circle - positioned at vertical center */}
      <div
        ref={circleRef}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg border-[3px] transition-all duration-400 ${
          isCompleted 
            ? "bg-green-500 border-green-500 text-white" 
            : "bg-slate-100 border-slate-200 text-muted-foreground"
        }`}
      >
        {isCompleted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Check className="w-5 h-5 md:w-6 md:h-6" />
          </motion.div>
        ) : (
          step
        )}
      </div>

      {/* Content card */}
      <div 
        className={`bg-card/50 backdrop-blur-sm border rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-400 ${
          isCompleted ? "border-green-500/30" : "border-border/50"
        }`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Implementation = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const [completedSteps, setCompletedSteps] = useState(0);
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const steps = t.implementation?.steps || [
    {
      title: "Sign Up",
      description: "Sign up choosing the best package for you. Here the user signs up via the pricing page.",
    },
    {
      title: "Access Admin Portal",
      description: "UI can get customized, including the logo, brand colors, social media links and company description.",
    },
    {
      title: "Create the Inventory",
      description: "Upload images of the wigs you offer including pricing information, available colors, description, color, name etc. If you have a wide variety of wigs or need help otherwise, reach out to us via service@tryyourwig.com and we can help you with anything extra you might need.",
    },
    {
      title: "Adjust Your Website",
      description: "Link your website to the service, create a QR code or a link to guide your website visitors to your custom simulator page domain.",
    },
    {
      title: "Ready!",
      description: "Your service is fully integrated and available to your clients, a completely new experience and unique service to your clients.",
    },
  ];

  const setCircleRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    circleRefs.current[index] = el;
  }, []);

  const measureAndUpdate = useCallback(() => {
    const circles = circleRefs.current;
    const firstCircle = circles[0];
    const lastCircle = circles[circles.length - 1];
    const container = containerRef.current;

    if (!firstCircle || !lastCircle || !container) return;

    const scrollY = window.scrollY;

    // Measure positions relative to the timeline container so the line never overshoots.
    const containerRect = container.getBoundingClientRect();
    const firstRect = firstCircle.getBoundingClientRect();
    const lastRect = lastCircle.getBoundingClientRect();

    const firstOffsetY = firstRect.top - containerRect.top + firstRect.height / 2;
    const lastOffsetY = lastRect.top - containerRect.top + lastRect.height / 2;

    setLineTop(firstOffsetY);
    setLineHeight(Math.max(0, lastOffsetY - firstOffsetY));

    // Trigger line: when this viewport Y position crosses a circle, it's "reached"
    const viewportTriggerY = window.innerHeight * 0.65;
    const currentTriggerY = scrollY + viewportTriggerY;

    // Use page coordinates for progress & completion.
    const firstCenterY = firstRect.top + scrollY + firstRect.height / 2;
    const lastCenterY = lastRect.top + scrollY + lastRect.height / 2;

    const rawProgress = Math.max(
      0,
      Math.min(1, (currentTriggerY - firstCenterY) / (lastCenterY - firstCenterY))
    );

    // On initial page load (top of page), force a fully blank state.
    // This avoids mobile/desktop differences where the first step might already be past the trigger line.
    if (scrollY < 8) {
      setLineProgress(0);
      setCompletedSteps(0);
      if (!ready) setReady(true);
      return;
    }

    // Accelerated fill (ease-out)
    const easedProgress = 1 - Math.pow(1 - rawProgress, 2.5);
    setLineProgress(easedProgress);

    // Completed steps based on each circle's center
    let completed = 0;
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      if (!circle) continue;

      const rect = circle.getBoundingClientRect();
      const circleCenterY = rect.top + scrollY + rect.height / 2;

      if (currentTriggerY >= circleCenterY) completed = i + 1;
    }
    setCompletedSteps(completed);

    if (!ready) setReady(true);
  }, [ready]);

  useEffect(() => {
    // Initial measurement after a short delay to ensure layout is complete
    const initialTimeout = setTimeout(() => {
      measureAndUpdate();
    }, 100);

    // Scroll listener
    const handleScroll = () => {
      requestAnimationFrame(measureAndUpdate);
    };

    // Resize listener
    const handleResize = () => {
      measureAndUpdate();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initialTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [measureAndUpdate]);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto bg-background/70 backdrop-blur-md rounded-2xl px-8 py-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                  {t.implementation?.title || "Implementation"}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t.implementation?.subtitle || "Get started with TryYourWig in 5 simple steps"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-8 md:py-16 pb-32">
          <div className="container mx-auto px-4">
            <div ref={containerRef} className="relative max-w-3xl mx-auto">
              {/* Timeline line background - spans from first to last circle */}
              <div
                className="absolute left-[22px] md:left-[26px] w-1 bg-slate-200 rounded-full"
                style={{
                  top: ready ? `${lineTop}px` : 0,
                  height: ready ? `${lineHeight}px` : 0,
                }}
              />

              {/* Animated progress line */}
              <div
                className="absolute left-[22px] md:left-[26px] w-1 bg-gradient-to-b from-green-500 to-green-400 origin-top rounded-full"
                style={{
                  top: ready ? `${lineTop}px` : 0,
                  height: ready ? `${lineHeight}px` : 0,
                  transform: `scaleY(${lineProgress})`,
                  transformOrigin: "top",
                }}
              />

              {/* Steps */}
              <div>
                {steps.map((step, index) => (
                  <ImplementationStep
                    key={index}
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                    isCompleted={ready && index < completedSteps}
                    index={index}
                    circleRef={setCircleRef(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Implementation;
