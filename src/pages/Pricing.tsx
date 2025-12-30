"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Layout } from "@/components/Layout";
import iconPixieCut from "@/assets/icon-pixie-cut.png";
import iconFullVolume from "@/assets/icon-full-volume.png";
import iconSalonPro from "@/assets/icon-salon-pro.png";
import iconExtensions from "@/assets/icon-extensions.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const tierIcons = [iconPixieCut, iconFullVolume, iconSalonPro];

const Pricing = () => {
  const { t } = useI18n();
  const [isExtensionsOpen, setIsExtensionsOpen] = useState(false);

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-xl px-6 py-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-2">
                {t.pricing.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.pricing.subtitle}
              </p>
            </div>
          </motion.div>

          {/* What You Get Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16 bg-background/70 backdrop-blur-md rounded-xl px-6 py-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {(t.pricing as any).whatYouGet?.title || 'What you get'}
              </h2>
              <p className="text-muted-foreground">
                {(t.pricing as any).whatYouGet?.subtitle || 'A completely new experience for your clients.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {((t.pricing as any).whatYouGet?.features || [
                "HD quality results",
                "Fast generation speeds",
                "Whitelabel solutions under the domain name",
                "E-Mail support (24h answer time)",
                "User-Analytics",
              ]).map((feature: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-card/50 border border-border rounded-xl px-4 py-3"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-10 overflow-visible items-end">
            {t.pricing.tiers.map((tier, i) => {
              const isHighlighted = 'highlighted' in tier && tier.highlighted;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex overflow-visible"
                >
                  <div className="flex flex-col w-full">
                    <div className={`flex justify-center mb-3 ${isHighlighted ? '' : 'invisible'}`}>
                      <span className="gradient-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-1 whitespace-nowrap">
                        <Sparkles className="w-3 h-3" />
                        {t.pricing.popular}
                      </span>
                    </div>

                    <Card
                      className={`relative p-8 flex flex-col w-full min-h-[400px] ${
                        isHighlighted
                          ? "pricing-card-highlight gradient-border bg-card"
                          : "border border-border bg-card hover:border-primary/30 transition-colors"
                      }`}
                    >

                    <div className="text-center mb-6 flex-1 flex flex-col justify-center">
                      <div className="w-20 h-20 mx-auto mb-4">
                        <img
                          src={tierIcons[i]}
                          alt={tier.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {tier.description}
                      </p>
                      <p className="text-lg font-semibold text-primary mb-4">
                        {tier.features[0]}
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-5xl font-extrabold ${isHighlighted ? "gradient-text" : "text-foreground"}`}>
                          {tier.price}
                        </span>
                        <span className="text-muted-foreground">
                          {tier.period}
                        </span>
                      </div>
                    </div>

                    <Link to="/demo" className="block mt-auto">
                      <Button
                        variant={isHighlighted ? "hero" : "heroOutline"}
                        className="w-full rounded-full"
                        size="lg"
                      >
                        {t.pricing.getStarted}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Extensions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <Card className="max-w-4xl mx-auto overflow-hidden border border-border bg-card">
              {/* Collapsed Header - Always Visible */}
              <button
                onClick={() => setIsExtensionsOpen(!isExtensionsOpen)}
                className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                    <img
                      src={iconExtensions}
                      alt="Extensions icon"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      {t.pricing.addon.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t.pricing.addon.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExtensionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence initial={false}>
                {isExtensionsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {(t.pricing as any).extensions?.packages?.map((pkg: { generations: number; price: number }, i: number) => (
                          <motion.div
                            key={pkg.generations}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Card className="p-4 sm:p-5 bg-muted/30 border border-border hover:border-primary/30 transition-colors text-center flex flex-col h-full">
                              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-1">
                                {pkg.generations}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {(t.pricing as any).extensions?.generations || 'Generations'}
                              </p>
                              <div className="flex items-baseline justify-center gap-1 mb-4">
                                <span className="text-xl font-bold text-foreground">
                                  {pkg.price}€
                                </span>
                                <span className="text-sm text-muted-foreground">{(t.pricing as any).extensions?.net || 'net'}</span>
                              </div>
                              <Button
                                variant="hero"
                                className="w-full rounded-full mt-auto"
                                size="sm"
                              >
                                {(t.pricing as any).extensions?.purchase || 'Purchase'}
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* Need Additional Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {(t.pricing as any).support?.title || 'Need additional support?'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                {(t.pricing as any).support?.description || "Looking for custom solutions, bulk uploads of wigs, or have special requirements? We're here to help you find the perfect solution for your business."}
              </p>
              <a href="mailto:service@tryyourwig.com" className="inline-block w-full sm:w-auto">
                <Button variant="hero" size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">service@tryyourwig.com</span>
                </Button>
              </a>
            </Card>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
