import { createContext, useContext } from 'react';

export type Locale = 'en' | 'de' | 'es' | 'fr';

export const locales: Locale[] = ['en', 'de', 'es', 'fr'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
};

export const translations = {
  en: {
    nav: {
      demo: 'Demo',
      pricing: 'Pricing',
      tryIt: 'Try it Here',
    },
    hero: {
      badge: 'AI-Powered Virtual Try-On',
      title: 'Stop Returns.',
      titleHighlight: 'Start Confidence.',
      subtitle: 'The AI Virtual Try-On for Professional Wig Shops. Let your clients see their perfect look before they buy.',
      cta: 'Try the Demo',
      ctaSecondary: 'View Pricing',
    },
    socialProof: {
      title: 'Trusted by modern salons worldwide',
    },
    problems: {
      title: 'The Challenges You Face',
      subtitle: 'Running a wig shop comes with unique challenges',
      items: [
        {
          title: 'High Return Rates',
          description: 'Customers return wigs when they realize the style or color doesn\'t suit them after purchase.',
        },
        {
          title: 'Hesitant Buyers',
          description: 'Shoppers leave without buying because they can\'t visualize how a wig will look on them.',
        },
        {
          title: 'Wasted Consultations',
          description: 'Staff spend hours on consultations that don\'t convert because customers remain unsure.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to transform your customer experience',
      steps: [
        {
          step: '01',
          title: 'Upload Selfie',
          description: 'Customer takes or uploads a photo of themselves',
        },
        {
          step: '02',
          title: 'Select Wig',
          description: 'Browse your catalog and choose styles to try',
        },
        {
          step: '03',
          title: 'AI Transformation',
          description: 'See realistic results in seconds with our AI',
        },
      ],
    },
    beforeAfter: {
      title: 'See the Magic',
      subtitle: 'Drag the slider to reveal the transformation',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about TryYourWig',
      items: [
        {
          question: 'How accurate is the skin tone matching?',
          answer: 'Our AI uses advanced color analysis to ensure wigs blend naturally with any skin tone. We analyze lighting conditions and adjust the preview accordingly for realistic results.',
        },
        {
          question: 'Is customer data private and secure?',
          answer: 'Absolutely. Photos are processed in real-time and never stored on our servers. We are GDPR compliant and all data transmission is encrypted.',
        },
        {
          question: 'How difficult is the integration?',
          answer: 'Integration takes less than 10 minutes. Simply add our embed code to your website or use our standalone tablet app for in-store experiences.',
        },
        {
          question: 'Can I customize the interface to match my brand?',
          answer: 'Yes! All plans include white-label options. You can customize colors, logos, and even the domain for a seamless brand experience.',
        },
      ],
    },
    footer: {
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      demo: 'Demo',
      company: 'Company',
      about: 'About',
      contact: 'Contact',
      careers: 'Careers',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2024 TryYourWig. All rights reserved.',
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that fits your salon\'s needs',
      monthly: 'Monthly',
      yearly: 'Yearly',
      popular: 'Most Popular',
      getStarted: 'Get Started',
      contactSales: 'Contact Sales',
      addon: {
        title: 'The Extensions',
        description: 'Need more? Top up instantly.',
        price: '50 generations for $25',
      },
      tiers: [
        {
          name: 'The Pixie Cut',
          price: '$49',
          period: '/month',
          description: 'Perfect for small boutiques',
          features: ['100 Generations/month', 'Standard Speed', 'Email Support', 'Basic Analytics'],
        },
        {
          name: 'The Full Volume',
          price: '$99',
          period: '/month',
          description: 'Most popular for growing salons',
          features: ['400 Generations/month', 'HD Quality Results', 'Fast Speed', 'Priority Support', 'Advanced Analytics', 'White-label Option'],
          highlighted: true,
        },
        {
          name: 'The Salon Pro',
          price: '$249',
          period: '/month',
          description: 'For high-volume businesses',
          features: ['1200 Generations/month', 'Priority Speed', 'Dedicated Support', 'Full Analytics Suite', 'API Access', 'Multiple Locations'],
        },
      ],
    },
    demo: {
      title: 'Try the Demo',
      subtitle: 'Experience TryYourWig in action',
      comingSoon: 'Interactive demo coming soon',
      description: 'Our team is putting the finishing touches on an amazing demo experience. Leave your email to be notified when it\'s ready.',
      placeholder: 'Enter your email',
      notify: 'Notify Me',
    },
  },
  de: {
    nav: {
      demo: 'Demo',
      pricing: 'Preise',
      tryIt: 'Jetzt Testen',
    },
    hero: {
      badge: 'KI-Gestützte Virtuelle Anprobe',
      title: 'Stoppen Sie Retouren.',
      titleHighlight: 'Starten Sie Vertrauen.',
      subtitle: 'Die KI-Virtuelle Anprobe für professionelle Perückengeschäfte. Lassen Sie Ihre Kunden ihren perfekten Look sehen, bevor sie kaufen.',
      cta: 'Demo Testen',
      ctaSecondary: 'Preise Ansehen',
    },
    socialProof: {
      title: 'Vertraut von modernen Salons weltweit',
    },
    problems: {
      title: 'Die Herausforderungen, denen Sie gegenüberstehen',
      subtitle: 'Ein Perückengeschäft zu führen bringt einzigartige Herausforderungen mit sich',
      items: [
        {
          title: 'Hohe Rückgabequoten',
          description: 'Kunden geben Perücken zurück, wenn sie feststellen, dass der Stil oder die Farbe nach dem Kauf nicht zu ihnen passt.',
        },
        {
          title: 'Zögernde Käufer',
          description: 'Käufer gehen ohne Kauf, weil sie sich nicht vorstellen können, wie eine Perücke an ihnen aussehen wird.',
        },
        {
          title: 'Vergeudete Beratungen',
          description: 'Mitarbeiter verbringen Stunden mit Beratungen, die nicht konvertieren, weil Kunden unsicher bleiben.',
        },
      ],
    },
    howItWorks: {
      title: 'So Funktioniert Es',
      subtitle: 'Drei einfache Schritte zur Transformation Ihres Kundenerlebnisses',
      steps: [
        {
          step: '01',
          title: 'Selfie Hochladen',
          description: 'Kunde macht oder lädt ein Foto von sich hoch',
        },
        {
          step: '02',
          title: 'Perücke Auswählen',
          description: 'Durchsuchen Sie Ihren Katalog und wählen Sie Stile zum Ausprobieren',
        },
        {
          step: '03',
          title: 'KI-Transformation',
          description: 'Sehen Sie realistische Ergebnisse in Sekunden mit unserer KI',
        },
      ],
    },
    beforeAfter: {
      title: 'Sehen Sie die Magie',
      subtitle: 'Ziehen Sie den Schieberegler, um die Transformation zu enthüllen',
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      subtitle: 'Alles, was Sie über TryYourWig wissen müssen',
      items: [
        {
          question: 'Wie genau ist die Hautton-Anpassung?',
          answer: 'Unsere KI verwendet fortschrittliche Farbanalyse, um sicherzustellen, dass Perücken natürlich mit jedem Hautton verschmelzen.',
        },
        {
          question: 'Sind Kundendaten privat und sicher?',
          answer: 'Absolut. Fotos werden in Echtzeit verarbeitet und niemals auf unseren Servern gespeichert. Wir sind DSGVO-konform.',
        },
        {
          question: 'Wie schwierig ist die Integration?',
          answer: 'Die Integration dauert weniger als 10 Minuten. Fügen Sie einfach unseren Einbettungscode zu Ihrer Website hinzu.',
        },
        {
          question: 'Kann ich die Oberfläche an meine Marke anpassen?',
          answer: 'Ja! Alle Pläne beinhalten White-Label-Optionen. Sie können Farben, Logos und sogar die Domain anpassen.',
        },
      ],
    },
    footer: {
      product: 'Produkt',
      features: 'Funktionen',
      pricing: 'Preise',
      demo: 'Demo',
      company: 'Unternehmen',
      about: 'Über Uns',
      contact: 'Kontakt',
      careers: 'Karriere',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      copyright: '© 2024 TryYourWig. Alle Rechte vorbehalten.',
    },
    pricing: {
      title: 'Einfache, Transparente Preise',
      subtitle: 'Wählen Sie den Plan, der zu den Bedürfnissen Ihres Salons passt',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      popular: 'Beliebteste',
      getStarted: 'Loslegen',
      contactSales: 'Vertrieb Kontaktieren',
      addon: {
        title: 'Die Erweiterungen',
        description: 'Brauchen Sie mehr? Sofort aufladen.',
        price: '50 Generierungen für 25€',
      },
      tiers: [
        {
          name: 'Der Pixie Cut',
          price: '49€',
          period: '/Monat',
          description: 'Perfekt für kleine Boutiquen',
          features: ['100 Generierungen/Monat', 'Standard-Geschwindigkeit', 'E-Mail-Support', 'Basis-Analysen'],
        },
        {
          name: 'Das Volle Volumen',
          price: '99€',
          period: '/Monat',
          description: 'Am beliebtesten für wachsende Salons',
          features: ['400 Generierungen/Monat', 'HD-Qualität', 'Schnelle Geschwindigkeit', 'Prioritäts-Support', 'Erweiterte Analysen', 'White-Label Option'],
          highlighted: true,
        },
        {
          name: 'Der Salon Pro',
          price: '249€',
          period: '/Monat',
          description: 'Für Geschäfte mit hohem Volumen',
          features: ['1200 Generierungen/Monat', 'Prioritäts-Geschwindigkeit', 'Dedizierter Support', 'Volle Analyse-Suite', 'API-Zugang', 'Mehrere Standorte'],
        },
      ],
    },
    demo: {
      title: 'Demo Testen',
      subtitle: 'Erleben Sie TryYourWig in Aktion',
      comingSoon: 'Interaktive Demo kommt bald',
      description: 'Unser Team legt letzte Hand an ein erstaunliches Demo-Erlebnis.',
      placeholder: 'E-Mail eingeben',
      notify: 'Benachrichtigen',
    },
  },
  es: {
    nav: {
      demo: 'Demo',
      pricing: 'Precios',
      tryIt: 'Pruébalo',
    },
    hero: {
      badge: 'Prueba Virtual con IA',
      title: 'Detén las Devoluciones.',
      titleHighlight: 'Inicia la Confianza.',
      subtitle: 'La Prueba Virtual con IA para Tiendas Profesionales de Pelucas. Deja que tus clientes vean su look perfecto antes de comprar.',
      cta: 'Probar Demo',
      ctaSecondary: 'Ver Precios',
    },
    socialProof: {
      title: 'Confiado por salones modernos en todo el mundo',
    },
    problems: {
      title: 'Los Desafíos que Enfrentas',
      subtitle: 'Dirigir una tienda de pelucas viene con desafíos únicos',
      items: [
        {
          title: 'Altas Tasas de Devolución',
          description: 'Los clientes devuelven pelucas cuando se dan cuenta de que el estilo o color no les queda después de la compra.',
        },
        {
          title: 'Compradores Indecisos',
          description: 'Los compradores se van sin comprar porque no pueden visualizar cómo les quedará una peluca.',
        },
        {
          title: 'Consultas Desperdiciadas',
          description: 'El personal pasa horas en consultas que no convierten porque los clientes permanecen inseguros.',
        },
      ],
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Tres simples pasos para transformar la experiencia del cliente',
      steps: [
        {
          step: '01',
          title: 'Subir Selfie',
          description: 'El cliente toma o sube una foto de sí mismo',
        },
        {
          step: '02',
          title: 'Seleccionar Peluca',
          description: 'Navega por tu catálogo y elige estilos para probar',
        },
        {
          step: '03',
          title: 'Transformación IA',
          description: 'Ve resultados realistas en segundos con nuestra IA',
        },
      ],
    },
    beforeAfter: {
      title: 'Mira la Magia',
      subtitle: 'Arrastra el control deslizante para revelar la transformación',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre TryYourWig',
      items: [
        {
          question: '¿Qué tan precisa es la coincidencia del tono de piel?',
          answer: 'Nuestra IA utiliza análisis de color avanzado para asegurar que las pelucas se mezclen naturalmente con cualquier tono de piel.',
        },
        {
          question: '¿Los datos del cliente son privados y seguros?',
          answer: 'Absolutamente. Las fotos se procesan en tiempo real y nunca se almacenan en nuestros servidores. Cumplimos con GDPR.',
        },
        {
          question: '¿Qué tan difícil es la integración?',
          answer: 'La integración toma menos de 10 minutos. Simplemente agrega nuestro código de inserción a tu sitio web.',
        },
        {
          question: '¿Puedo personalizar la interfaz para que coincida con mi marca?',
          answer: '¡Sí! Todos los planes incluyen opciones de marca blanca. Puedes personalizar colores, logos y el dominio.',
        },
      ],
    },
    footer: {
      product: 'Producto',
      features: 'Características',
      pricing: 'Precios',
      demo: 'Demo',
      company: 'Empresa',
      about: 'Acerca de',
      contact: 'Contacto',
      careers: 'Carreras',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      copyright: '© 2024 TryYourWig. Todos los derechos reservados.',
    },
    pricing: {
      title: 'Precios Simples y Transparentes',
      subtitle: 'Elige el plan que se ajuste a las necesidades de tu salón',
      monthly: 'Mensual',
      yearly: 'Anual',
      popular: 'Más Popular',
      getStarted: 'Comenzar',
      contactSales: 'Contactar Ventas',
      addon: {
        title: 'Las Extensiones',
        description: '¿Necesitas más? Recarga al instante.',
        price: '50 generaciones por $25',
      },
      tiers: [
        {
          name: 'El Pixie Cut',
          price: '$49',
          period: '/mes',
          description: 'Perfecto para boutiques pequeñas',
          features: ['100 Generaciones/mes', 'Velocidad Estándar', 'Soporte por Email', 'Análisis Básico'],
        },
        {
          name: 'El Volumen Total',
          price: '$99',
          period: '/mes',
          description: 'El más popular para salones en crecimiento',
          features: ['400 Generaciones/mes', 'Calidad HD', 'Velocidad Rápida', 'Soporte Prioritario', 'Análisis Avanzado', 'Opción Marca Blanca'],
          highlighted: true,
        },
        {
          name: 'El Salon Pro',
          price: '$249',
          period: '/mes',
          description: 'Para negocios de alto volumen',
          features: ['1200 Generaciones/mes', 'Velocidad Prioritaria', 'Soporte Dedicado', 'Suite Completa de Análisis', 'Acceso API', 'Múltiples Ubicaciones'],
        },
      ],
    },
    demo: {
      title: 'Prueba la Demo',
      subtitle: 'Experimenta TryYourWig en acción',
      comingSoon: 'Demo interactiva próximamente',
      description: 'Nuestro equipo está dando los toques finales a una experiencia de demo increíble.',
      placeholder: 'Ingresa tu email',
      notify: 'Notificarme',
    },
  },
  fr: {
    nav: {
      demo: 'Démo',
      pricing: 'Tarifs',
      tryIt: 'Essayez',
    },
    hero: {
      badge: 'Essayage Virtuel par IA',
      title: 'Arrêtez les Retours.',
      titleHighlight: 'Commencez la Confiance.',
      subtitle: 'L\'Essayage Virtuel par IA pour les Boutiques de Perruques Professionnelles. Permettez à vos clients de voir leur look parfait avant d\'acheter.',
      cta: 'Essayer la Démo',
      ctaSecondary: 'Voir les Tarifs',
    },
    socialProof: {
      title: 'Approuvé par les salons modernes du monde entier',
    },
    problems: {
      title: 'Les Défis Auxquels Vous Faites Face',
      subtitle: 'Gérer une boutique de perruques comporte des défis uniques',
      items: [
        {
          title: 'Taux de Retour Élevés',
          description: 'Les clients retournent les perruques quand ils réalisent que le style ou la couleur ne leur convient pas après l\'achat.',
        },
        {
          title: 'Acheteurs Hésitants',
          description: 'Les acheteurs partent sans acheter car ils ne peuvent pas visualiser comment une perruque leur ira.',
        },
        {
          title: 'Consultations Gaspillées',
          description: 'Le personnel passe des heures en consultations qui ne convertissent pas car les clients restent incertains.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment Ça Marche',
      subtitle: 'Trois étapes simples pour transformer l\'expérience client',
      steps: [
        {
          step: '01',
          title: 'Télécharger un Selfie',
          description: 'Le client prend ou télécharge une photo de lui-même',
        },
        {
          step: '02',
          title: 'Sélectionner la Perruque',
          description: 'Parcourez votre catalogue et choisissez des styles à essayer',
        },
        {
          step: '03',
          title: 'Transformation IA',
          description: 'Voyez des résultats réalistes en quelques secondes avec notre IA',
        },
      ],
    },
    beforeAfter: {
      title: 'Voyez la Magie',
      subtitle: 'Glissez le curseur pour révéler la transformation',
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Tout ce que vous devez savoir sur TryYourWig',
      items: [
        {
          question: 'Quelle est la précision de la correspondance des tons de peau?',
          answer: 'Notre IA utilise une analyse de couleur avancée pour assurer que les perruques se fondent naturellement avec n\'importe quel ton de peau.',
        },
        {
          question: 'Les données clients sont-elles privées et sécurisées?',
          answer: 'Absolument. Les photos sont traitées en temps réel et jamais stockées sur nos serveurs. Nous sommes conformes au RGPD.',
        },
        {
          question: 'L\'intégration est-elle difficile?',
          answer: 'L\'intégration prend moins de 10 minutes. Ajoutez simplement notre code d\'intégration à votre site web.',
        },
        {
          question: 'Puis-je personnaliser l\'interface pour correspondre à ma marque?',
          answer: 'Oui! Tous les plans incluent des options de marque blanche. Vous pouvez personnaliser les couleurs, logos et le domaine.',
        },
      ],
    },
    footer: {
      product: 'Produit',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      demo: 'Démo',
      company: 'Entreprise',
      about: 'À Propos',
      contact: 'Contact',
      careers: 'Carrières',
      legal: 'Légal',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      copyright: '© 2024 TryYourWig. Tous droits réservés.',
    },
    pricing: {
      title: 'Tarifs Simples et Transparents',
      subtitle: 'Choisissez le plan qui correspond aux besoins de votre salon',
      monthly: 'Mensuel',
      yearly: 'Annuel',
      popular: 'Plus Populaire',
      getStarted: 'Commencer',
      contactSales: 'Contacter les Ventes',
      addon: {
        title: 'Les Extensions',
        description: 'Besoin de plus? Rechargez instantanément.',
        price: '50 générations pour 25€',
      },
      tiers: [
        {
          name: 'La Coupe Pixie',
          price: '49€',
          period: '/mois',
          description: 'Parfait pour les petites boutiques',
          features: ['100 Générations/mois', 'Vitesse Standard', 'Support Email', 'Analyses Basiques'],
        },
        {
          name: 'Le Volume Total',
          price: '99€',
          period: '/mois',
          description: 'Le plus populaire pour les salons en croissance',
          features: ['400 Générations/mois', 'Qualité HD', 'Vitesse Rapide', 'Support Prioritaire', 'Analyses Avancées', 'Option Marque Blanche'],
          highlighted: true,
        },
        {
          name: 'Le Salon Pro',
          price: '249€',
          period: '/mois',
          description: 'Pour les entreprises à fort volume',
          features: ['1200 Générations/mois', 'Vitesse Prioritaire', 'Support Dédié', 'Suite Analytique Complète', 'Accès API', 'Emplacements Multiples'],
        },
      ],
    },
    demo: {
      title: 'Essayer la Démo',
      subtitle: 'Découvrez TryYourWig en action',
      comingSoon: 'Démo interactive bientôt disponible',
      description: 'Notre équipe met la touche finale à une expérience de démo incroyable.',
      placeholder: 'Entrez votre email',
      notify: 'Me Notifier',
    },
  },
};

// Define a recursive type for translations that allows any string values
type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? DeepStringify<U>[]
  : T extends object
  ? { [K in keyof T]: DeepStringify<T[K]> }
  : T;

export type Translations = DeepStringify<typeof translations.en>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextType | null>(null);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};

// Helper to get translations for a locale
export const getTranslations = (locale: Locale): Translations => {
  return translations[locale] as unknown as Translations;
};
