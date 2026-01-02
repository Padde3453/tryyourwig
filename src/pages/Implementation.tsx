import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

const ImplementationStep = ({
  step,
  title,
  description,
  isCompleted,
  index,
}: {
  step: number;
  title: string;
  description: string;
  isCompleted: boolean;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-16 md:pl-24 pb-16 last:pb-0"
    >
      {/* Step circle */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: isCompleted ? "rgb(34 197 94)" : "hsl(var(--muted))",
          borderColor: isCompleted ? "rgb(34 197 94)" : "hsl(var(--border))",
        }}
        transition={{ duration: 0.4 }}
        className={`absolute left-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
          isCompleted ? "text-white" : "text-muted-foreground"
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
      </motion.div>

      {/* Content card */}
      <motion.div 
        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
        animate={{
          borderColor: isCompleted ? "rgba(34, 197, 94, 0.3)" : "hsl(var(--border) / 0.5)",
        }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Implementation = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [completedSteps, setCompletedSteps] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Update completed steps based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const steps = t.implementation?.steps || [];
    const newCompleted = Math.floor(latest * (steps.length + 0.5));
    setCompletedSteps(newCompleted);
  });

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
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
              {/* Timeline line background */}
              <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              {/* Animated progress line */}
              <motion.div
                className="absolute left-5 md:left-6 top-0 w-0.5 bg-gradient-to-b from-green-500 to-green-400 origin-top"
                style={{ height: lineHeight }}
              />

              {/* Steps */}
              <motion.div>
                {steps.map((step, index) => (
                  <ImplementationStep
                    key={index}
                    step={index + 1}
                    title={step.title}
                    description={step.description}
                    isCompleted={index < completedSteps}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Implementation;
