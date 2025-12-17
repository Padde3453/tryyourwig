import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <span className="text-lg font-bold tracking-tight">
              <span className="bg-gradient-to-r from-brand-pink to-brand-amber bg-clip-text text-transparent">TryYourWig</span>
              <span className="text-foreground">.com</span>
            </span>
          </Link>

          {/* Legal Links */}
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <span className="text-muted-foreground/30">|</span>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
