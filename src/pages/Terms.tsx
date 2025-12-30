import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const Terms = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-background/70 backdrop-blur-md rounded-2xl px-8 py-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
              {t.legal.termsTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.legal.termsSubtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-card rounded-2xl shadow-lg p-8 sm:p-12"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              {t.legal.contentPlaceholder}
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Terms;
