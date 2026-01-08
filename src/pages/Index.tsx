"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  Users,
  Clock,
  Check,
  Home,
  Image,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";
import { Layout } from "@/components/Layout";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import beforeWig from "@/assets/before-wig.webp";
import afterWig from "@/assets/after-wig.png";
import step01Video from "@/assets/step-01-video.mp4";
import step02Video from "@/assets/step-02-video.mp4";
import { HeroCarousel } from "@/components/HeroCarousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => {
  const { t } = useI18n();

  const problemIcons = [RotateCcw, Users, Clock, Home, Image];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="inline-block bg-background/70 backdrop-blur-md rounded-2xl px-8 py-6 mb-6"
            >
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground"
                style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.05)',
                }}
              >
                <span style={{
                  display: 'inline-block',
                  transform: 'perspective(500px) rotateX(5deg)',
                  transformOrigin: 'center bottom',
                }}>
                  {t.hero.title}
                </span>{" "}
                <span 
                  className="gradient-text"
                  style={{
                    display: 'inline-block',
                    transform: 'perspective(500px) rotateX(5deg) translateZ(20px)',
                    transformOrigin: 'center bottom',
                    textShadow: '0 6px 12px hsl(var(--primary) / 0.3)',
                  }}
                >
                  {t.hero.titleHighlight}
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="inline-block bg-background/60 backdrop-blur-md rounded-xl px-6 py-4 mb-10"
            >
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-20"
            >
              <Button variant="hero" size="xl" className="rounded-full" asChild>
                <Link to="/demo">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="rounded-full" asChild>
                <Link to="/pricing">
                  {t.hero.ctaSecondary}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 overflow-hidden">
        <div className="inline-flex bg-background/70 backdrop-blur-md rounded-full px-8 py-4">
          <motion.p
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground whitespace-nowrap"
          >
            {t.socialProof.title} • {t.socialProof.title} • {t.socialProof.title} • {t.socialProof.title} •&nbsp;
          </motion.p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-2xl px-8 py-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t.problems.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.problems.subtitle}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {t.problems.items.map((problem, i) => {
              const Icon = problemIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow border-destructive/20 relative z-10 backdrop-blur-md bg-background/70">
                    <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-destructive" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-2xl px-8 py-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t.howItWorks.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
                {t.howItWorks.subtitle}
              </p>
              <p className="text-lg text-muted-foreground flex items-center justify-center gap-3">
                {t.howItWorks.languageHint}
                <span className="flex items-center gap-2 text-2xl">
                  🇬🇧 🇩🇪 🇪🇸 🇫🇷 🇮🇹
                </span>
              </p>
            </div>
          </motion.div>

          <div className="relative flex flex-col gap-12 md:gap-0">
            {/* Connecting line - runs behind everything */}
            <div className="hidden md:block absolute left-1/2 top-[160px] bottom-[160px] w-[2px] bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 z-0" />

            {t.howItWorks.steps.map((step, i) => {
              const isReversed = i === 1;
              // Left-bound images fly from right, right-bound flies from left
              const imageInitialX = isReversed ? -200 : 200;
              
              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Connection dot at center of card */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 rounded-full gradient-bg -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-background" />

                  {/* Image Card - flies in independently */}
                  <motion.div 
                    className="w-full md:w-1/2 relative z-[1]"
                    initial={{ opacity: 0, x: imageInitialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <Card className={`hero-card card-hover overflow-hidden flex items-center justify-center bg-muted/50 relative ${i === 1 ? '' : 'aspect-[1008/1056]'}`}>
                      {i === 0 ? (
                        <video 
                          src={step01Video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : i === 1 ? (
                        <video 
                          src={step02Video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-muted-foreground/50 aspect-[1008/1056] w-full">
                          <Image className="w-16 h-16 mb-2" />
                          <span className="text-sm font-medium">Step {step.step} Image</span>
                        </div>
                      )}
                    </Card>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    className={`w-full md:w-1/2 ${isReversed ? "md:text-right" : "md:text-left"} text-center`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className={`inline-block bg-background/70 backdrop-blur-md rounded-2xl px-6 py-5 ${isReversed ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className="text-6xl font-extrabold gradient-text mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-xl px-6 py-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {t.beforeAfter.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.beforeAfter.subtitle}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="hero-card p-4 overflow-hidden">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={beforeWig}
                    alt="Before"
                    style={{ objectFit: "cover" }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={afterWig}
                    alt="After"
                    style={{ objectFit: "cover" }}
                  />
                }
                className="rounded-2xl h-[400px] sm:h-[500px]"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-xl px-6 py-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {t.faq.title}
              </h2>
              <p className="text-lg text-muted-foreground">{t.faq.subtitle}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, i) => {
                // Handle answer with implementation link placeholder
                const renderAnswer = () => {
                  if (item.answer.includes('{implementationLink}') && 'implementationLinkText' in item) {
                    const parts = item.answer.split('{implementationLink}');
                    return (
                      <>
                        {parts[0]}
                        <Link to="/implementation" className="text-primary underline hover:text-primary/80">
                          {(item as any).implementationLinkText}
                        </Link>
                        {parts[1]}
                      </>
                    );
                  }
                  return item.answer;
                };

                return (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {renderAnswer()}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-bg rounded-3xl p-12 sm:p-16 text-primary-foreground"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button
                  size="xl"
                  className="rounded-full bg-card text-foreground hover:bg-card/90"
                >
                  {t.nav.tryIt}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
