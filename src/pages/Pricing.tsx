"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Plus, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Layout } from "@/components/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {t.pricing.tiers.map((tier, i) => {
              const isHighlighted = 'highlighted' in tier && tier.highlighted;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={isHighlighted ? "md:-mt-4 md:mb-4" : ""}
                >
                  <Card
                    className={`relative p-8 h-full ${
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

                    <div className="text-center mb-8">
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

                    <ul className="space-y-4 mb-8">
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

          {/* Add-on Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <Card className="p-6 sm:p-8 bg-muted/50 border-dashed border-2 border-border">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Plus className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {t.pricing.addon.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.pricing.addon.description}{" "}
                    <span className="font-semibold text-foreground">
                      {t.pricing.addon.price}
                    </span>
                  </p>
                </div>
                <Button variant="outline" className="rounded-full flex-shrink-0">
                  Learn More
                </Button>
              </div>
            </Card>
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
