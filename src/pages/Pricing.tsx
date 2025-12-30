"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";
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

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.pricing.tiers.map((tier, i) => {
              const isHighlighted = 'highlighted' in tier && tier.highlighted;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex ${isHighlighted ? "md:-mt-4 md:mb-4" : ""}`}
                >
                  <Card
                    className={`relative p-8 flex flex-col w-full ${
                      isHighlighted
                        ? "pricing-card-highlight gradient-border bg-card"
                        : "border border-border bg-card hover:border-primary/30 transition-colors"
                    }`}
                  >
                    {isHighlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="gradient-bg text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {t.pricing.popular}
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
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
                      <p className="text-sm text-muted-foreground mb-4">
                        {tier.description}
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

                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isHighlighted ? "gradient-bg" : "bg-primary/10"
                          }`}>
                            <Check className={`w-3 h-3 ${isHighlighted ? "text-primary-foreground" : "text-primary"}`} />
                          </div>
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

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
            <div className="text-center mb-8">
              <div className="inline-block bg-background/70 backdrop-blur-md rounded-xl px-6 py-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {t.pricing.addon.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.pricing.addon.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { generations: 50, price: 49 },
                { generations: 100, price: 89 },
                { generations: 200, price: 150 },
                { generations: 400, price: 300 },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex"
                >
                  <Card className="p-6 bg-card border border-border hover:border-primary/30 transition-colors text-center flex flex-col w-full">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <img
                        src={iconExtensions}
                        alt="Extensions"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-3xl font-extrabold text-foreground mb-1">
                      {pkg.generations}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Generations
                    </p>
                    <div className="flex items-baseline justify-center gap-1 mb-4 flex-1">
                      <span className="text-2xl font-bold text-foreground">
                        {pkg.price}€
                      </span>
                      <span className="text-sm text-muted-foreground">net</span>
                    </div>
                    <Button
                      variant="heroOutline"
                      className="w-full rounded-full mt-auto"
                      size="sm"
                    >
                      Purchase
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-xl px-6 py-4">
              <p className="text-muted-foreground mb-2">
                Have questions about which plan is right for you?
              </p>
              <Link to="/#faq">
                <Button variant="link" className="text-primary">
                  View our FAQ
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
