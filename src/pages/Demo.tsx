"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when the demo is ready.",
      });
      setEmail("");
    }
  };

  return (
    <Layout>
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.demo.comingSoon}</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              {t.demo.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              {t.demo.subtitle}
            </p>

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="max-w-xl mx-auto p-8 sm:p-12 hero-card">
                <div className="w-20 h-20 rounded-3xl gradient-bg flex items-center justify-center mx-auto mb-8 animate-float">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>

                <p className="text-muted-foreground mb-8">
                  {t.demo.description}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder={t.demo.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 rounded-full"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="rounded-full"
                  >
                    {t.demo.notify}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Placeholder for future demo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-muted/50 border-2 border-dashed border-border flex items-center justify-center"
                >
                  <span className="text-muted-foreground/50 text-sm">
                    Preview {i}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
