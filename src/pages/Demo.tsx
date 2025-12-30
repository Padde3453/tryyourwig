"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Layout } from "@/components/Layout";

const Demo = () => {
  const { t } = useI18n();

  const demoCards = [
    {
      icon: LayoutDashboard,
      title: t.demo.dashboardCard.title,
      description: t.demo.dashboardCard.description,
      cta: t.demo.dashboardCard.cta,
      href: "#dashboard-demo",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Users,
      title: t.demo.clientCard.title,
      description: t.demo.clientCard.description,
      cta: t.demo.clientCard.cta,
      href: "#client-demo",
      gradient: "from-accent/20 via-accent/10 to-transparent",
      iconBg: "bg-accent/10",
      iconColor: "text-accent-foreground",
    },
  ];

  return (
    <Layout>
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-2xl px-8 py-8">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                {t.demo.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.demo.subtitle}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {demoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.15 }}
              >
                <Card className="group relative overflow-hidden border-border/50 bg-white dark:bg-card hover:border-primary/30 transition-all duration-500 h-full shadow-lg">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-8 sm:p-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h2>
                    <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                      {card.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-full border-border/50 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
