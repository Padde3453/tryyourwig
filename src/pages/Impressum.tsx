import { Layout } from "@/components/Layout";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

const Impressum = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 via-background to-brand-purple/20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-background/70 backdrop-blur-md rounded-2xl px-8 py-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                  {t.legal.impressumTitle}
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">{t.legal.impressumSubtitle}</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-card shadow-lg rounded-2xl p-8 md:p-12"
          >
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.legal.impressum.infoTitle}</h2>
                <p className="text-muted-foreground">{t.legal.impressum.serviceProvider}</p>
                <address className="not-italic text-muted-foreground mt-2">
                  <strong className="text-foreground">Reverchon Consulting GmbH</strong>
                  <br />
                  Am Gasteig 6<br />
                  82335 Berg
                  <br />
                  {t.legal.impressum.germany}
                </address>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.legal.impressum.representedBy}</h2>
                <p className="text-muted-foreground">{t.legal.impressum.managingDirector}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.legal.impressum.contact}</h2>
                <p className="text-muted-foreground">
                  {t.legal.impressum.phone}: +49 (0)152 04444450
                  <br />
                  {t.legal.impressum.email}:{" "}
                  <a
                    href="mailto:contact@tryyourwig.com"
                    className="text-brand-pink hover:text-brand-purple transition-colors"
                  >
                    contact@tryyourwig.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.legal.impressum.registerEntry}</h2>
                <p className="text-muted-foreground">
                  {t.legal.impressum.commercialRegister} <br />
                  {t.legal.impressum.registerCourt}: Amtsgericht München
                  <br />
                  {t.legal.impressum.registerNumber}: HRB 284621
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.legal.impressum.taxId}</h2>
                <p className="text-muted-foreground">DE404020694</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  {t.legal.impressum.responsibleForContent}
                </h2>
                <address className="not-italic text-muted-foreground">
                  Patrick Reverchon
                  <br />
                  Am Gasteig 6<br />
                  82335 Berg
                  <br />
                  {t.legal.impressum.germany}
                </address>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">{t.legal.impressum.disputeResolution}</h2>
                <p className="text-muted-foreground">
                  {t.legal.impressum.odrPlatform}{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-pink hover:text-brand-purple transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground mt-2">
                  {t.legal.impressum.noArbitration}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
