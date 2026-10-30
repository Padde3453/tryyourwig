import { createContext, useContext } from 'react';

export type Locale = 'en' | 'de' | 'es' | 'fr' | 'it';

export const locales: Locale[] = ['en', 'de', 'es', 'fr', 'it'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
};

export const translations = {
  en: {
    nav: {
      demo: 'Demo',
      pricing: 'Pricing',
      implementation: 'Implementation',
      tryIt: 'Get started',
    },
    hero: {
      badge: 'AI-Powered Virtual Try-On',
      title: 'Any Wig. Any Face.',
      titleHighlight: 'Instantly.',
      subtitle: 'The AI Virtual Try-On for Professional Wig Shops. Let your clients see their perfect look before they buy.',
      cta: 'See the Demo',
      ctaSecondary: 'View Pricing',
    },
    socialProof: {
      title: 'Trusted by more and more modern salons worldwide',
    },
    problems: {
      title: 'How TryYourWig supports your business',
      subtitle: 'Stand out with a special service that helps you win and retain clients',
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
        {
          title: 'Sensitive Topic',
          description: 'Our service allows your customers to try the wigs in different poses from the comfort and privacy of their home.',
        },
        {
          title: 'Challenging Presentation',
          description: 'Many wigs are displayed on ugly doll faces or plastic heads, which actually harms their presentation and makes them look less appealing.',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to transform your customer experience',
      languageHint: 'Available in 5 languages',
      steps: [
      {
        step: '01',
        title: 'Page Visit and Wig Selection',
        description: 'Your customer lands on your customized landing page and selects a wig to try-on of their choice',
        overlayUploadTitle: 'Upload Selfie',
        overlayUploadSubtitle: 'Make sure your face is clearly visible',
        overlayStyleTitle: 'Desired style',
        overlayStyleSubtitle: 'Like the reference image',
        overlayGenerate: 'Generate image',
      },
        {
          step: '02',
          title: 'Upload Selfie and Color Choice',
          description: 'They upload a selfie or choose an existing one and can then even select different hair colors if you offer some',
        },
        {
          step: '03',
          title: 'AI Transformation',
          description: 'See realistic results in seconds with our AI and download the results for later - or repeat the process with another piece or a new image',
        },
      ],
    },
    beforeAfter: {
      title: 'See the Magic',
      subtitle: 'Drag the slider to reveal the transformation',
    },
    cta: {
      title: 'Ready to Transform Your Salon?',
      subtitle: 'Join hundreds of salons already using TryYourWig to boost confidence and reduce returns.',
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
        {
          question: 'We have a lot of wigs in our portfolio, can we bulk upload in the system?',
          answer: 'Currently this is not possible by default due to the many different ways this data might be available. But we are more than happy to support you with this and we can look into a solution together. Simply ping us a message to service@tryyourwig.com',
        },
        {
          question: 'How do I send our website visitors to this service?',
          answer: 'Via QR code or link, best is to place the service prominently on your website, for example in the header. This way, your visitors find it easily and profit the most.',
        },
        {
          question: 'Can I integrate the service directly on my website?',
          answer: 'Yes this is possible, but not by default. We could integrate it via iframe, contact us at service@tryyourwig.com and we evaluate this together.',
        },
        {
          question: 'Do you offer a free trial?',
          answer: 'Yes, we do. Simply choose the package you want and apply the discount code "FirstMonthFree" during the checkout process. Your subscription then continues at the normal package price once the month is over.',
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
      terms: 'Terms & Conditions',
      impressum: 'Imprint',
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
          price: '89€',
          period: '/month net',
          description: 'Perfect for small boutiques',
          features: ['100 Generations/month'],
        },
        {
          name: 'The Full Volume',
          price: '349€',
          period: '/month net',
          description: 'Most popular for growing salons',
          features: ['700 Generations/month'],
          highlighted: true,
        },
        {
          name: 'The Salon Pro',
          price: '699€',
          period: '/month net',
          description: 'For high-volume businesses',
          features: ['1500 Generations/month'],
        },
      ],
      extensions: {
        generations: 'Generations',
        purchase: 'Purchase',
        net: 'net',
        packages: [
          { generations: 50, price: 49 },
          { generations: 100, price: 89 },
          { generations: 200, price: 150 },
          { generations: 400, price: 300 },
        ],
      },
      whatYouGet: {
        title: 'What you get',
        subtitle: 'A completely new experience for your clients.',
        features: [
          'HD quality results',
          'Fast generation speeds',
          'Whitelabel solutions under the domain name',
          'E-Mail support (24h answer time)',
          'User-Analytics',
        ],
      },
      support: {
        title: 'Need additional support?',
        description: 'Looking for custom solutions, bulk uploads of wigs, or have special requirements? We\'re here to help you find the perfect solution for your business.',
        email: 'service@tryyourwig.com',
      },
    },
    demo: {
      title: 'Try the Demo',
      subtitle: 'Experience TryYourWig in action',
      dashboardCard: {
        title: 'Preview your Dashboard',
        description: 'Explore the admin interface where you manage wigs, view analytics, and configure your brand settings.',
        cta: 'Open Dashboard Demo',
      },
      clientCard: {
        title: 'Preview the client experience',
        description: 'See exactly what your customers will experience when trying on wigs virtually.',
        cta: 'Try Client Demo',
      },
    },
    legal: {
      privacyTitle: 'Privacy Policy',
      privacySubtitle: 'How we protect your data',
      termsTitle: 'Terms of Service',
      termsSubtitle: 'Our terms and conditions',
      impressumTitle: 'Imprint',
      impressumSubtitle: 'Legal Notice',
      contentPlaceholder: 'Content will be provided soon.',
      impressum: {
        infoTitle: 'Information pursuant to § 5 TMG',
        serviceProvider: 'TryYourWig is a service provided by:',
        germany: 'Germany',
        representedBy: 'Represented by',
        managingDirector: 'Patrick Reverchon (Managing Director)',
        contact: 'Contact',
        phone: 'Phone',
        email: 'Email',
        registerEntry: 'Register Entry',
        commercialRegister: 'Entry in the Commercial Register',
        registerCourt: 'Register Court',
        registerNumber: 'Register Number',
        taxId: 'Tax ID',
        responsibleForContent: 'Responsible for Content (acc. to § 55 Abs. 2 RStV)',
        disputeResolution: 'Dispute Resolution',
        odrPlatform: 'The European Commission provides a platform for online dispute resolution (ODR):',
        noArbitration: 'We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
      },
    },
    implementation: {
      title: 'Implementation',
      subtitle: 'Get started with TryYourWig in 5 simple steps',
      steps: [
        {
          title: 'Sign Up',
          description: 'Sign up choosing the best package for you. You can upgrade or downgrade at any point in time and the changes come into effect with the next monthly billing cycle.',
        },
        {
          title: 'Make It Yours',
          description: 'Customize the look and feel of the service to your brand, including the logo, brand colors, social media links, company description and more.',
        },
        {
          title: 'Create the Inventory',
          description: 'Upload images of the wigs you offer including pricing information, available colors, description, color, name etc. If you have a wide variety of wigs or need help otherwise, reach out to us via service@tryyourwig.com and we can help you with anything extra you might need.',
        },
        {
          title: 'Connect Your Website',
          description: 'Link your website to the service, create a QR code or a link to guide your website visitors to your custom simulator page domain which you can setup in the admin area. If you want to fully integrate the TryYourWig service in your website, please contact us and we will make this possible.',
        },
        {
          title: 'Ready!',
          description: 'Your service is fully integrated and ready, a completely new experience and unique service to your clients.',
        },
      ],
    },
  },
  de: {
    nav: {
      demo: 'Demo',
      pricing: 'Preise',
      implementation: 'Umsetzung',
      tryIt: 'Loslegen',
    },
    hero: {
      badge: 'KI-Gestützte Virtuelle Anprobe',
      title: 'Jede Perücke. Jedes Gesicht.',
      titleHighlight: 'Sofort.',
      subtitle: 'Die KI-Virtuelle Anprobe für professionelle Perückengeschäfte. Lassen Sie Ihre Kunden ihren perfekten Look sehen, bevor sie kaufen.',
      cta: 'Demo Ansehen',
      ctaSecondary: 'Preise Ansehen',
    },
    socialProof: {
      title: 'Vertraut von immer mehr modernen Salons weltweit',
    },
    problems: {
      title: 'Wie TryYourWig Ihr Geschäft unterstützt',
      subtitle: 'Heben Sie sich mit einem besonderen Service ab, der Ihnen hilft, Kunden zu gewinnen und zu halten',
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
        {
          title: 'Sensibles Thema',
          description: 'Unser Service ermöglicht es Ihren Kunden, die Perücken in verschiedenen Posen bequem und privat von zu Hause aus anzuprobieren.',
        },
        {
          title: 'Herausfordernde Präsentation',
          description: 'Viele Perücken werden auf hässlichen Puppengesichtern oder Plastikköpfen präsentiert, was ihre Präsentation tatsächlich beeinträchtigt und sie weniger ansprechend macht.',
        },
      ],
    },
    howItWorks: {
      title: 'So Funktioniert Es',
      subtitle: 'Drei einfache Schritte zur Transformation Ihres Kundenerlebnisses',
      languageHint: 'Verfügbar in 5 Sprachen',
      steps: [
      {
        step: '01',
        title: 'Seitenbesuch und Perückenauswahl',
        description: 'Ihr Kunde landet auf Ihrer individuellen Landingpage und wählt eine Perücke zum Anprobieren aus',
        overlayUploadTitle: 'Selfie hochladen',
        overlayUploadSubtitle: 'Stelle sicher, dass dein Gesicht gut sichtbar ist',
        overlayStyleTitle: 'Gewünschter Stil',
        overlayStyleSubtitle: 'Wie das Referenzbild',
        overlayGenerate: 'Bild generieren',
      },
        {
          step: '02',
          title: 'Selfie Hochladen und Farbauswahl',
          description: 'Sie laden ein Selfie hoch oder wählen ein vorhandenes und können dann sogar verschiedene Haarfarben auswählen, wenn Sie welche anbieten',
        },
        {
          step: '03',
          title: 'KI-Transformation',
          description: 'Sehen Sie realistische Ergebnisse in Sekunden mit unserer KI und laden Sie die Ergebnisse für später herunter - oder wiederholen Sie den Prozess mit einem anderen Stück oder einem neuen Bild',
        },
      ],
    },
    beforeAfter: {
      title: 'Sehen Sie die Magie',
      subtitle: 'Ziehen Sie den Schieberegler, um die Transformation zu enthüllen',
    },
    cta: {
      title: 'Bereit, Ihren Salon zu transformieren?',
      subtitle: 'Schließen Sie sich hunderten von Salons an, die TryYourWig bereits nutzen, um das Selbstvertrauen zu stärken und Retouren zu reduzieren.',
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
        {
          question: 'Wir haben viele Perücken in unserem Portfolio, können wir diese gebündelt ins System hochladen?',
          answer: 'Derzeit ist dies standardmäßig nicht möglich, da diese Daten auf viele verschiedene Arten verfügbar sein können. Aber wir unterstützen Sie gerne dabei und können gemeinsam eine Lösung finden. Schreiben Sie uns einfach an service@tryyourwig.com',
        },
        {
          question: 'Wie leite ich unsere Website-Besucher zu diesem Service?',
          answer: 'Per QR-Code oder Link, am besten platzieren Sie den Service prominent auf Ihrer Website, zum Beispiel im Header. So finden Ihre Besucher ihn leicht und profitieren am meisten.',
        },
        {
          question: 'Kann ich den Service direkt auf meiner Website integrieren?',
          answer: 'Ja, das ist möglich, aber nicht standardmäßig. Wir könnten es per iframe integrieren, kontaktieren Sie uns unter service@tryyourwig.com und wir evaluieren dies gemeinsam.',
        },
        {
          question: 'Bieten Sie eine kostenlose Testversion an?',
          answer: 'Ja, das tun wir. Wählen Sie einfach das gewünschte Paket und geben Sie während des Bestellvorgangs den Rabattcode "FirstMonthFree" ein. Nach Ablauf des Monats läuft das Abonnement zum normalen Paketpreis weiter.',
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
      impressum: 'Impressum',
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
          price: '89€',
          period: '/Monat netto',
          description: 'Perfekt für kleine Boutiquen',
          features: ['100 Generierungen/Monat'],
        },
        {
          name: 'Das Volle Volumen',
          price: '349€',
          period: '/Monat netto',
          description: 'Am beliebtesten für wachsende Salons',
          features: ['700 Generierungen/Monat'],
          highlighted: true,
        },
        {
          name: 'Der Salon Pro',
          price: '699€',
          period: '/Monat netto',
          description: 'Für Geschäfte mit hohem Volumen',
          features: ['1500 Generierungen/Monat'],
        },
      ],
      extensions: {
        generations: 'Generierungen',
        purchase: 'Kaufen',
        net: 'netto',
        packages: [
          { generations: 50, price: 49 },
          { generations: 100, price: 89 },
          { generations: 200, price: 150 },
          { generations: 400, price: 300 },
        ],
      },
      whatYouGet: {
        title: 'Was Sie bekommen',
        subtitle: 'Ein völlig neues Erlebnis für Ihre Kunden.',
        features: [
          'HD-Qualitätsergebnisse',
          'Schnelle Generierungsgeschwindigkeiten',
          'Whitelabel-Lösungen unter dem Domainnamen',
          'E-Mail-Support (24h Antwortzeit)',
          'Benutzer-Analysen',
        ],
      },
      support: {
        title: 'Benötigen Sie zusätzliche Unterstützung?',
        description: 'Suchen Sie nach maßgeschneiderten Lösungen, Massen-Uploads von Perücken oder haben Sie besondere Anforderungen? Wir helfen Ihnen gerne, die perfekte Lösung für Ihr Unternehmen zu finden.',
        email: 'service@tryyourwig.com',
      },
    },
    demo: {
      title: 'Demo Testen',
      subtitle: 'Erleben Sie TryYourWig in Aktion',
      dashboardCard: {
        title: 'Vorschau Ihres Dashboards',
        description: 'Erkunden Sie die Admin-Oberfläche, in der Sie Perücken verwalten, Analysen einsehen und Ihre Markeneinstellungen konfigurieren.',
        cta: 'Dashboard-Demo öffnen',
      },
      clientCard: {
        title: 'Vorschau der Kundenerfahrung',
        description: 'Sehen Sie genau, was Ihre Kunden erleben werden, wenn sie Perücken virtuell anprobieren.',
        cta: 'Kunden-Demo testen',
      },
    },
    legal: {
      privacyTitle: 'Datenschutzrichtlinie',
      privacySubtitle: 'Wie wir Ihre Daten schützen',
      termsTitle: 'Nutzungsbedingungen',
      termsSubtitle: 'Unsere Allgemeinen Geschäftsbedingungen',
      impressumTitle: 'Impressum',
      impressumSubtitle: 'Rechtliche Hinweise',
      contentPlaceholder: 'Inhalt wird in Kürze bereitgestellt.',
      impressum: {
        infoTitle: 'Angaben gemäß § 5 TMG',
        serviceProvider: 'TryYourWig ist ein Service von:',
        germany: 'Deutschland',
        representedBy: 'Vertreten durch',
        managingDirector: 'Patrick Reverchon (Geschäftsführer)',
        contact: 'Kontakt',
        phone: 'Telefon',
        email: 'E-Mail',
        registerEntry: 'Registereintrag',
        commercialRegister: 'Eintrag im Handelsregister',
        registerCourt: 'Registergericht',
        registerNumber: 'Registernummer',
        taxId: 'Umsatzsteuer-ID',
        responsibleForContent: 'Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV)',
        disputeResolution: 'Streitschlichtung',
        odrPlatform: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:',
        noArbitration: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      },
    },
    implementation: {
      title: 'Umsetzung',
      subtitle: 'Starten Sie mit TryYourWig in 5 einfachen Schritten',
      steps: [
        {
          title: 'Registrieren',
          description: 'Melden Sie sich an und wählen Sie das beste Paket für Sie. Sie können jederzeit upgraden oder downgraden und die Änderungen treten mit dem nächsten monatlichen Abrechnungszyklus in Kraft.',
        },
        {
          title: 'Machen Sie es zu Ihrem',
          description: 'Passen Sie das Erscheinungsbild des Services an Ihre Marke an, einschließlich Logo, Markenfarben, Social-Media-Links, Unternehmensbeschreibung und mehr.',
        },
        {
          title: 'Inventar erstellen',
          description: 'Laden Sie Bilder Ihrer Perücken hoch, einschließlich Preisinformationen, verfügbarer Farben, Beschreibung, Farbe, Name usw. Bei einer großen Vielfalt an Perücken oder anderem Hilfebedarf kontaktieren Sie uns unter service@tryyourwig.com.',
        },
        {
          title: 'Website verbinden',
          description: 'Verknüpfen Sie Ihre Website mit dem Service, erstellen Sie einen QR-Code oder Link, um Ihre Website-Besucher zu Ihrer individuellen Simulator-Seite zu führen, die Sie im Admin-Bereich einrichten können. Wenn Sie den TryYourWig-Service vollständig in Ihre Website integrieren möchten, kontaktieren Sie uns und wir machen dies möglich.',
        },
        {
          title: 'Fertig!',
          description: 'Ihr Service ist vollständig integriert und bereit – ein völlig neues Erlebnis und einzigartiger Service für Ihre Kunden.',
        },
      ],
    },
  },
  es: {
    nav: {
      demo: 'Demo',
      pricing: 'Precios',
      implementation: 'Implementación',
      tryIt: 'Empezar',
    },
    hero: {
      badge: 'Prueba Virtual con IA',
      title: 'Cualquier Peluca. Cualquier Rostro.',
      titleHighlight: 'Al Instante.',
      subtitle: 'La Prueba Virtual con IA para Tiendas Profesionales de Pelucas. Deja que tus clientes vean su look perfecto antes de comprar.',
      cta: 'Ver Demo',
      ctaSecondary: 'Ver Precios',
    },
    socialProof: {
      title: 'Confiado por más y más salones modernos en todo el mundo',
    },
    problems: {
      title: 'Cómo TryYourWig apoya tu negocio',
      subtitle: 'Destaca con un servicio especial que te ayuda a ganar y retener clientes',
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
        {
          title: 'Tema Sensible',
          description: 'Nuestro servicio permite a tus clientes probar las pelucas en diferentes poses desde la comodidad y privacidad de su hogar.',
        },
        {
          title: 'Presentación Desafiante',
          description: 'Muchas pelucas se exhiben en caras de muñecas feas o cabezas de plástico, lo que perjudica su presentación y las hace menos atractivas.',
        },
      ],
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Tres simples pasos para transformar la experiencia del cliente',
      languageHint: 'Disponible en 5 idiomas',
      steps: [
      {
        step: '01',
        title: 'Visita y Selección de Peluca',
        description: 'Tu cliente llega a tu página de destino personalizada y selecciona una peluca para probarse',
        overlayUploadTitle: 'Subir Selfie',
        overlayUploadSubtitle: 'Asegúrate de que tu rostro sea claramente visible',
        overlayStyleTitle: 'Estilo deseado',
        overlayStyleSubtitle: 'Como la imagen de referencia',
        overlayGenerate: 'Generar imagen',
      },
        {
          step: '02',
          title: 'Subir Selfie y Elección de Color',
          description: 'Suben un selfie o eligen uno existente y luego pueden seleccionar diferentes colores de cabello si los ofreces',
        },
        {
          step: '03',
          title: 'Transformación IA',
          description: 'Ve resultados realistas en segundos con nuestra IA y descarga los resultados para más tarde - o repite el proceso con otra pieza o una nueva imagen',
        },
      ],
    },
    beforeAfter: {
      title: 'Mira la Magia',
      subtitle: 'Arrastra el control deslizante para revelar la transformación',
    },
    cta: {
      title: '¿Listo para Transformar tu Salón?',
      subtitle: 'Únete a cientos de salones que ya usan TryYourWig para aumentar la confianza y reducir las devoluciones.',
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
        {
          question: '¿Tenemos muchas pelucas en nuestro portafolio, podemos cargarlas en bloque en el sistema?',
          answer: 'Actualmente esto no es posible por defecto debido a las muchas formas diferentes en que estos datos pueden estar disponibles. Pero estaremos encantados de ayudarte y podemos buscar una solución juntos. Simplemente envíanos un mensaje a service@tryyourwig.com',
        },
        {
          question: '¿Cómo envío a los visitantes de nuestro sitio web a este servicio?',
          answer: 'Mediante código QR o enlace, lo mejor es colocar el servicio de forma prominente en tu sitio web, por ejemplo en el encabezado. De esta manera, tus visitantes lo encuentran fácilmente y se benefician al máximo.',
        },
        {
          question: '¿Puedo integrar el servicio directamente en mi sitio web?',
          answer: 'Sí, esto es posible, pero no por defecto. Podríamos integrarlo mediante iframe, contáctanos en service@tryyourwig.com y lo evaluamos juntos.',
        },
        {
          question: '¿Ofrecen una prueba gratuita?',
          answer: 'Sí, la ofrecemos. Solo tienes que elegir el paquete que quieras y aplicar el código de descuento "FirstMonthFree" durante el proceso de pago. Tu suscripción continúa después con el precio normal del paquete una vez finalizado el mes.',
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
      terms: 'Términos y Condiciones',
      impressum: 'Aviso Legal',
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
          price: '89€',
          period: '/mes neto',
          description: 'Perfecto para boutiques pequeñas',
          features: ['100 Generaciones/mes'],
        },
        {
          name: 'El Volumen Total',
          price: '349€',
          period: '/mes neto',
          description: 'El más popular para salones en crecimiento',
          features: ['700 Generaciones/mes'],
          highlighted: true,
        },
        {
          name: 'El Salon Pro',
          price: '699€',
          period: '/mes neto',
          description: 'Para negocios de alto volumen',
          features: ['1500 Generaciones/mes'],
        },
      ],
      extensions: {
        generations: 'Generaciones',
        purchase: 'Comprar',
        net: 'neto',
        packages: [
          { generations: 50, price: 49 },
          { generations: 100, price: 89 },
          { generations: 200, price: 150 },
          { generations: 400, price: 300 },
        ],
      },
      whatYouGet: {
        title: 'Lo que obtienes',
        subtitle: 'Una experiencia completamente nueva para tus clientes.',
        features: [
          'Resultados en calidad HD',
          'Velocidades de generación rápidas',
          'Soluciones de marca blanca bajo el nombre de dominio',
          'Soporte por correo electrónico (tiempo de respuesta 24h)',
          'Análisis de usuarios',
        ],
      },
      support: {
        title: '¿Necesitas soporte adicional?',
        description: '¿Buscas soluciones personalizadas, cargas masivas de pelucas o tienes requisitos especiales? Estamos aquí para ayudarte a encontrar la solución perfecta para tu negocio.',
        email: 'service@tryyourwig.com',
      },
    },
    demo: {
      title: 'Prueba la Demo',
      subtitle: 'Experimenta TryYourWig en acción',
      dashboardCard: {
        title: 'Vista previa de tu Panel',
        description: 'Explora la interfaz de administración donde gestionas pelucas, ves análisis y configuras tu marca.',
        cta: 'Abrir Demo del Panel',
      },
      clientCard: {
        title: 'Vista previa de la experiencia del cliente',
        description: 'Ve exactamente lo que experimentarán tus clientes al probarse pelucas virtualmente.',
        cta: 'Probar Demo del Cliente',
      },
    },
    legal: {
      privacyTitle: 'Política de Privacidad',
      privacySubtitle: 'Cómo protegemos tus datos',
      termsTitle: 'Términos de Servicio',
      termsSubtitle: 'Nuestros términos y condiciones',
      impressumTitle: 'Aviso Legal',
      impressumSubtitle: 'Información Legal',
      contentPlaceholder: 'El contenido se proporcionará pronto.',
      impressum: {
        infoTitle: 'Información según § 5 TMG',
        serviceProvider: 'TryYourWig es un servicio proporcionado por:',
        germany: 'Alemania',
        representedBy: 'Representado por',
        managingDirector: 'Patrick Reverchon (Director General)',
        contact: 'Contacto',
        phone: 'Teléfono',
        email: 'Correo electrónico',
        registerEntry: 'Entrada en el Registro',
        commercialRegister: 'Entrada en el Registro Mercantil',
        registerCourt: 'Tribunal de Registro',
        registerNumber: 'Número de Registro',
        taxId: 'NIF',
        responsibleForContent: 'Responsable del contenido (según § 55 Abs. 2 RStV)',
        disputeResolution: 'Resolución de disputas',
        odrPlatform: 'La Comisión Europea proporciona una plataforma para la resolución de disputas en línea (ODR):',
        noArbitration: 'No estamos dispuestos ni obligados a participar en procedimientos de resolución de disputas ante una junta de arbitraje de consumidores.',
      },
    },
    implementation: {
      title: 'Implementación',
      subtitle: 'Comienza con TryYourWig en 5 sencillos pasos',
      steps: [
        {
          title: 'Registrarse',
          description: 'Regístrate eligiendo el mejor paquete para ti. Puedes actualizar o reducir tu plan en cualquier momento y los cambios entran en vigor con el siguiente ciclo de facturación mensual.',
        },
        {
          title: 'Hazlo Tuyo',
          description: 'Personaliza la apariencia del servicio según tu marca, incluyendo el logo, colores de marca, enlaces de redes sociales, descripción de la empresa y más.',
        },
        {
          title: 'Crear el Inventario',
          description: 'Sube imágenes de las pelucas que ofreces incluyendo información de precios, colores disponibles, descripción, color, nombre, etc. Si tienes una gran variedad de pelucas o necesitas ayuda, contáctanos en service@tryyourwig.com.',
        },
        {
          title: 'Conecta tu Sitio Web',
          description: 'Vincula tu sitio web al servicio, crea un código QR o un enlace para guiar a los visitantes de tu sitio web a tu página de simulador personalizada que puedes configurar en el área de administración. Si deseas integrar completamente el servicio TryYourWig en tu sitio web, contáctanos y lo haremos posible.',
        },
        {
          title: '¡Listo!',
          description: 'Tu servicio está completamente integrado y listo, una experiencia completamente nueva y un servicio único para tus clientes.',
        },
      ],
    },
  },
  fr: {
    nav: {
      demo: 'Démo',
      pricing: 'Tarifs',
      implementation: 'Mise en œuvre',
      tryIt: 'Commencer',
    },
    hero: {
      badge: 'Essayage Virtuel par IA',
      title: 'N\'importe Quelle Perruque. N\'importe Quel Visage.',
      titleHighlight: 'Instantanément.',
      subtitle: 'L\'Essayage Virtuel par IA pour les Boutiques de Perruques Professionnelles. Permettez à vos clients de voir leur look parfait avant d\'acheter.',
      cta: 'Voir la Démo',
      ctaSecondary: 'Voir les Tarifs',
    },
    socialProof: {
      title: 'Approuvé par de plus en plus de salons modernes dans le monde',
    },
    problems: {
      title: 'Comment TryYourWig soutient votre entreprise',
      subtitle: 'Démarquez-vous avec un service spécial qui vous aide à gagner et fidéliser vos clients',
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
        {
          title: 'Sujet Sensible',
          description: 'Notre service permet à vos clients d\'essayer les perruques dans différentes poses depuis le confort et l\'intimité de leur domicile.',
        },
        {
          title: 'Présentation Difficile',
          description: 'De nombreuses perruques sont exposées sur des visages de poupées laids ou des têtes en plastique, ce qui nuit à leur présentation et les rend moins attrayantes.',
        },
      ],
    },
    howItWorks: {
      title: 'Comment Ça Marche',
      subtitle: 'Trois étapes simples pour transformer l\'expérience client',
      languageHint: 'Disponible en 5 langues',
      steps: [
      {
        step: '01',
        title: 'Visite et Sélection de Perruque',
        description: 'Votre client arrive sur votre page d\'accueil personnalisée et sélectionne une perruque à essayer',
        overlayUploadTitle: 'Télécharger un Selfie',
        overlayUploadSubtitle: 'Assurez-vous que votre visage est bien visible',
        overlayStyleTitle: 'Style souhaité',
        overlayStyleSubtitle: 'Comme l\'image de référence',
        overlayGenerate: 'Générer l\'image',
      },
        {
          step: '02',
          title: 'Télécharger Selfie et Choix de Couleur',
          description: 'Ils téléchargent un selfie ou en choisissent un existant et peuvent ensuite sélectionner différentes couleurs de cheveux si vous en proposez',
        },
        {
          step: '03',
          title: 'Transformation IA',
          description: 'Voyez des résultats réalistes en quelques secondes avec notre IA et téléchargez les résultats pour plus tard - ou répétez le processus avec une autre pièce ou une nouvelle image',
        },
      ],
    },
    beforeAfter: {
      title: 'Voyez la Magie',
      subtitle: 'Glissez le curseur pour révéler la transformation',
    },
    cta: {
      title: 'Prêt à Transformer Votre Salon?',
      subtitle: 'Rejoignez des centaines de salons qui utilisent déjà TryYourWig pour renforcer la confiance et réduire les retours.',
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
        {
          question: 'Nous avons beaucoup de perruques dans notre portfolio, pouvons-nous les télécharger en masse dans le système?',
          answer: 'Actuellement, cela n\'est pas possible par défaut en raison des nombreuses façons différentes dont ces données peuvent être disponibles. Mais nous serons ravis de vous aider et nous pouvons trouver une solution ensemble. Envoyez-nous simplement un message à service@tryyourwig.com',
        },
        {
          question: 'Comment diriger les visiteurs de notre site web vers ce service?',
          answer: 'Via un code QR ou un lien, le mieux est de placer le service de manière visible sur votre site web, par exemple dans l\'en-tête. Ainsi, vos visiteurs le trouvent facilement et en profitent au maximum.',
        },
        {
          question: 'Puis-je intégrer le service directement sur mon site web?',
          answer: 'Oui, c\'est possible, mais pas par défaut. Nous pourrions l\'intégrer via iframe, contactez-nous à service@tryyourwig.com et nous évaluons cela ensemble.',
        },
        {
          question: 'Proposez-vous un essai gratuit?',
          answer: 'Oui, nous le proposons. Choisissez simplement le forfait qui vous convient et appliquez le code de réduction « FirstMonthFree » lors du processus de paiement. Votre abonnement se poursuit ensuite au prix normal du forfait une fois le mois écoulé.',
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
      terms: 'Conditions Générales',
      impressum: 'Mentions Légales',
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
          price: '89€',
          period: '/mois net',
          description: 'Parfait pour les petites boutiques',
          features: ['100 Générations/mois'],
        },
        {
          name: 'Le Volume Total',
          price: '349€',
          period: '/mois net',
          description: 'Le plus populaire pour les salons en croissance',
          features: ['700 Générations/mois'],
          highlighted: true,
        },
        {
          name: 'Le Salon Pro',
          price: '699€',
          period: '/mois net',
          description: 'Pour les entreprises à fort volume',
          features: ['1500 Générations/mois'],
        },
      ],
      extensions: {
        generations: 'Générations',
        purchase: 'Acheter',
        net: 'net',
        packages: [
          { generations: 50, price: 49 },
          { generations: 100, price: 89 },
          { generations: 200, price: 150 },
          { generations: 400, price: 300 },
        ],
      },
      whatYouGet: {
        title: 'Ce que vous obtenez',
        subtitle: 'Une expérience entièrement nouvelle pour vos clients.',
        features: [
          'Résultats en qualité HD',
          'Vitesses de génération rapides',
          'Solutions en marque blanche sous le nom de domaine',
          'Support par e-mail (temps de réponse 24h)',
          'Analyses utilisateurs',
        ],
      },
      support: {
        title: 'Besoin d\'un support supplémentaire?',
        description: 'Vous cherchez des solutions personnalisées, des téléchargements en masse de perruques ou avez des exigences spéciales? Nous sommes là pour vous aider à trouver la solution parfaite pour votre entreprise.',
        email: 'service@tryyourwig.com',
      },
    },
    demo: {
      title: 'Essayer la Démo',
      subtitle: 'Découvrez TryYourWig en action',
      dashboardCard: {
        title: 'Aperçu de votre Tableau de bord',
        description: 'Explorez l\'interface d\'administration où vous gérez les perruques, consultez les analyses et configurez votre marque.',
        cta: 'Ouvrir la Démo du Tableau de bord',
      },
      clientCard: {
        title: 'Aperçu de l\'expérience client',
        description: 'Voyez exactement ce que vos clients vivront en essayant des perruques virtuellement.',
        cta: 'Essayer la Démo Client',
      },
    },
    legal: {
      privacyTitle: 'Politique de Confidentialité',
      privacySubtitle: 'Comment nous protégeons vos données',
      termsTitle: "Conditions d'Utilisation",
      termsSubtitle: 'Nos termes et conditions',
      impressumTitle: 'Mentions Légales',
      impressumSubtitle: 'Informations Légales',
      contentPlaceholder: 'Le contenu sera fourni prochainement.',
      impressum: {
        infoTitle: 'Informations conformément au § 5 TMG',
        serviceProvider: 'TryYourWig est un service fourni par :',
        germany: 'Allemagne',
        representedBy: 'Représenté par',
        managingDirector: 'Patrick Reverchon (Directeur Général)',
        contact: 'Contact',
        phone: 'Téléphone',
        email: 'E-mail',
        registerEntry: 'Inscription au Registre',
        commercialRegister: 'Inscription au Registre du Commerce',
        registerCourt: 'Tribunal d\'enregistrement',
        registerNumber: 'Numéro d\'enregistrement',
        taxId: 'Numéro de TVA',
        responsibleForContent: 'Responsable du contenu (selon § 55 Abs. 2 RStV)',
        disputeResolution: 'Règlement des litiges',
        odrPlatform: 'La Commission européenne fournit une plateforme de règlement des litiges en ligne (RLL) :',
        noArbitration: 'Nous ne sommes pas disposés ni obligés de participer à des procédures de règlement des litiges devant un conseil d\'arbitrage des consommateurs.',
      },
    },
    implementation: {
      title: 'Mise en œuvre',
      subtitle: 'Commencez avec TryYourWig en 5 étapes simples',
      steps: [
        {
          title: 'S\'inscrire',
          description: 'Inscrivez-vous en choisissant le meilleur forfait pour vous. Vous pouvez passer à un forfait supérieur ou inférieur à tout moment et les changements prennent effet lors du prochain cycle de facturation mensuel.',
        },
        {
          title: 'Personnalisez-le',
          description: 'Personnalisez l\'apparence du service selon votre marque, y compris le logo, les couleurs de la marque, les liens vers les réseaux sociaux, la description de l\'entreprise et plus encore.',
        },
        {
          title: 'Créer l\'Inventaire',
          description: 'Téléchargez des images des perruques que vous proposez, y compris les informations de prix, les couleurs disponibles, la description, la couleur, le nom, etc. Si vous avez une grande variété de perruques ou besoin d\'aide, contactez-nous à service@tryyourwig.com.',
        },
        {
          title: 'Connectez Votre Site Web',
          description: 'Liez votre site web au service, créez un code QR ou un lien pour guider les visiteurs de votre site vers votre page de simulateur personnalisée que vous pouvez configurer dans l\'espace administrateur. Si vous souhaitez intégrer complètement le service TryYourWig dans votre site web, contactez-nous et nous rendrons cela possible.',
        },
        {
          title: 'Prêt !',
          description: 'Votre service est entièrement intégré et prêt, une expérience totalement nouvelle et un service unique pour vos clients.',
        },
      ],
    },
  },
  it: {
    nav: {
      demo: 'Demo',
      pricing: 'Prezzi',
      implementation: 'Implementazione',
      tryIt: 'Inizia',
    },
    hero: {
      badge: 'Prova Virtuale con IA',
      title: 'Qualsiasi Parrucca. Qualsiasi Viso.',
      titleHighlight: 'Istantaneamente.',
      subtitle: 'La Prova Virtuale con IA per Negozi Professionali di Parrucche. Lascia che i tuoi clienti vedano il loro look perfetto prima di acquistare.',
      cta: 'Vedi la Demo',
      ctaSecondary: 'Vedi i Prezzi',
    },
    socialProof: {
      title: 'Scelto da sempre più saloni moderni in tutto il mondo',
    },
    problems: {
      title: 'Come TryYourWig supporta il tuo business',
      subtitle: 'Distinguiti con un servizio speciale che ti aiuta a conquistare e fidelizzare i clienti',
      items: [
        {
          title: 'Alti Tassi di Reso',
          description: 'I clienti restituiscono le parrucche quando si rendono conto che lo stile o il colore non gli sta bene dopo l\'acquisto.',
        },
        {
          title: 'Acquirenti Esitanti',
          description: 'Gli acquirenti se ne vanno senza comprare perché non riescono a visualizzare come gli starà una parrucca.',
        },
        {
          title: 'Consulenze Sprecate',
          description: 'Il personale passa ore in consulenze che non convertono perché i clienti rimangono incerti.',
        },
        {
          title: 'Argomento Sensibile',
          description: 'Il nostro servizio permette ai tuoi clienti di provare le parrucche in diverse pose comodamente e in privato da casa loro.',
        },
        {
          title: 'Presentazione Difficile',
          description: 'Molte parrucche sono esposte su brutti volti di bambole o teste di plastica, il che danneggia la loro presentazione e le rende meno attraenti.',
        },
      ],
    },
    howItWorks: {
      title: 'Come Funziona',
      subtitle: 'Tre semplici passaggi per trasformare l\'esperienza del cliente',
      languageHint: 'Disponibile in 5 lingue',
      steps: [
        {
          step: '01',
          title: 'Visita e Selezione Parrucca',
          description: 'Il tuo cliente arriva sulla tua landing page personalizzata e seleziona una parrucca da provare',
          overlayUploadTitle: 'Carica Selfie',
          overlayUploadSubtitle: 'Assicurati che il tuo viso sia chiaramente visibile',
          overlayStyleTitle: 'Stile desiderato',
          overlayStyleSubtitle: 'Come l\'immagine di riferimento',
          overlayGenerate: 'Genera immagine',
        },
        {
          step: '02',
          title: 'Carica Selfie e Scelta Colore',
          description: 'Caricano un selfie o ne scelgono uno esistente e possono poi selezionare diversi colori di capelli se ne offri',
        },
        {
          step: '03',
          title: 'Trasformazione IA',
          description: 'Vedi risultati realistici in pochi secondi con la nostra IA e scarica i risultati per dopo - o ripeti il processo con un altro pezzo o una nuova immagine',
        },
      ],
    },
    beforeAfter: {
      title: 'Guarda la Magia',
      subtitle: 'Trascina il cursore per rivelare la trasformazione',
    },
    cta: {
      title: 'Pronto a Trasformare il Tuo Salone?',
      subtitle: 'Unisciti a centinaia di saloni che già usano TryYourWig per aumentare la fiducia e ridurre i resi.',
    },
    faq: {
      title: 'Domande Frequenti',
      subtitle: 'Tutto quello che devi sapere su TryYourWig',
      items: [
        {
          question: 'Quanto è precisa la corrispondenza del tono della pelle?',
          answer: 'La nostra IA utilizza un\'analisi avanzata del colore per garantire che le parrucche si fondano naturalmente con qualsiasi tono della pelle.',
        },
        {
          question: 'I dati dei clienti sono privati e sicuri?',
          answer: 'Assolutamente. Le foto vengono elaborate in tempo reale e non vengono mai memorizzate sui nostri server. Siamo conformi al GDPR.',
        },
        {
          question: 'Quanto è difficile l\'integrazione?',
          answer: 'L\'integrazione richiede meno di 10 minuti. Basta aggiungere il nostro codice di incorporamento al tuo sito web.',
        },
        {
          question: 'Posso personalizzare l\'interfaccia per abbinarla al mio brand?',
          answer: 'Sì! Tutti i piani includono opzioni white-label. Puoi personalizzare colori, loghi e il dominio.',
        },
        {
          question: 'Abbiamo molte parrucche nel nostro portfolio, possiamo caricarle in blocco nel sistema?',
          answer: 'Attualmente questo non è possibile di default a causa dei molti modi diversi in cui questi dati potrebbero essere disponibili. Ma saremo felici di supportarti e possiamo trovare una soluzione insieme. Inviaci un messaggio a service@tryyourwig.com',
        },
        {
          question: 'Come indirizzo i visitatori del nostro sito web a questo servizio?',
          answer: 'Tramite codice QR o link, è meglio posizionare il servizio in modo prominente sul tuo sito web, ad esempio nell\'header. In questo modo, i tuoi visitatori lo trovano facilmente e ne beneficiano al massimo.',
        },
        {
          question: 'Posso integrare il servizio direttamente nel mio sito web?',
          answer: 'Sì, questo è possibile, ma non di default. Potremmo integrarlo tramite iframe, contattaci a service@tryyourwig.com e valutiamo insieme.',
        },
        {
          question: 'Offrite una prova gratuita?',
          answer: 'Sì, la offriamo. Scegli semplicemente il pacchetto che preferisci e applica il codice sconto "FirstMonthFree" durante il processo di acquisto. L\'abbonamento prosegue poi al prezzo normale del pacchetto una volta concluso il mese.',
        },
      ],
    },
    footer: {
      product: 'Prodotto',
      features: 'Funzionalità',
      pricing: 'Prezzi',
      demo: 'Demo',
      company: 'Azienda',
      about: 'Chi Siamo',
      contact: 'Contatto',
      careers: 'Carriere',
      legal: 'Legale',
      privacy: 'Informativa sulla Privacy',
      terms: 'Termini e Condizioni',
      impressum: 'Note Legali',
      copyright: '© 2024 TryYourWig. Tutti i diritti riservati.',
    },
    pricing: {
      title: 'Prezzi Semplici e Trasparenti',
      subtitle: 'Scegli il piano che si adatta alle esigenze del tuo salone',
      monthly: 'Mensile',
      yearly: 'Annuale',
      popular: 'Più Popolare',
      getStarted: 'Inizia',
      contactSales: 'Contatta le Vendite',
      addon: {
        title: 'Le Estensioni',
        description: 'Hai bisogno di più? Ricarica istantaneamente.',
        price: '50 generazioni per 25€',
      },
      tiers: [
        {
          name: 'Il Pixie Cut',
          price: '89€',
          period: '/mese netto',
          description: 'Perfetto per piccole boutique',
          features: ['100 Generazioni/mese'],
        },
        {
          name: 'Il Volume Pieno',
          price: '349€',
          period: '/mese netto',
          description: 'Il più popolare per saloni in crescita',
          features: ['700 Generazioni/mese'],
          highlighted: true,
        },
        {
          name: 'Il Salon Pro',
          price: '699€',
          period: '/mese netto',
          description: 'Per attività ad alto volume',
          features: ['1500 Generazioni/mese'],
        },
      ],
      extensions: {
        generations: 'Generazioni',
        purchase: 'Acquista',
        net: 'netto',
        packages: [
          { generations: 50, price: 49 },
          { generations: 100, price: 89 },
          { generations: 200, price: 150 },
          { generations: 400, price: 300 },
        ],
      },
      whatYouGet: {
        title: 'Cosa ottieni',
        subtitle: 'Un\'esperienza completamente nuova per i tuoi clienti.',
        features: [
          'Risultati in qualità HD',
          'Velocità di generazione rapide',
          'Soluzioni white-label sotto il nome di dominio',
          'Supporto via e-mail (tempo di risposta 24h)',
          'Analisi utenti',
        ],
      },
      support: {
        title: 'Hai bisogno di supporto aggiuntivo?',
        description: 'Cerchi soluzioni personalizzate, caricamenti in blocco di parrucche o hai requisiti speciali? Siamo qui per aiutarti a trovare la soluzione perfetta per la tua attività.',
        email: 'service@tryyourwig.com',
      },
    },
    demo: {
      title: 'Prova la Demo',
      subtitle: 'Scopri TryYourWig in azione',
      dashboardCard: {
        title: 'Anteprima della tua Dashboard',
        description: 'Esplora l\'interfaccia di amministrazione dove gestisci le parrucche, visualizzi le analisi e configuri le impostazioni del brand.',
        cta: 'Apri Demo Dashboard',
      },
      clientCard: {
        title: 'Anteprima dell\'esperienza cliente',
        description: 'Vedi esattamente cosa sperimenteranno i tuoi clienti quando proveranno le parrucche virtualmente.',
        cta: 'Prova Demo Cliente',
      },
    },
    legal: {
      privacyTitle: 'Informativa sulla Privacy',
      privacySubtitle: 'Come proteggiamo i tuoi dati',
      termsTitle: 'Termini di Servizio',
      termsSubtitle: 'I nostri termini e condizioni',
      impressumTitle: 'Note Legali',
      impressumSubtitle: 'Informazioni Legali',
      contentPlaceholder: 'Il contenuto sarà fornito a breve.',
      impressum: {
        infoTitle: 'Informazioni ai sensi del § 5 TMG',
        serviceProvider: 'TryYourWig è un servizio fornito da:',
        germany: 'Germania',
        representedBy: 'Rappresentato da',
        managingDirector: 'Patrick Reverchon (Amministratore Delegato)',
        contact: 'Contatto',
        phone: 'Telefono',
        email: 'E-mail',
        registerEntry: 'Iscrizione al Registro',
        commercialRegister: 'Iscrizione al Registro delle Imprese',
        registerCourt: 'Tribunale del Registro',
        registerNumber: 'Numero di Registro',
        taxId: 'Partita IVA',
        responsibleForContent: 'Responsabile del contenuto (secondo § 55 Abs. 2 RStV)',
        disputeResolution: 'Risoluzione delle controversie',
        odrPlatform: 'La Commissione Europea fornisce una piattaforma per la risoluzione delle controversie online (ODR):',
        noArbitration: 'Non siamo disposti né obbligati a partecipare a procedimenti di risoluzione delle controversie davanti a un collegio arbitrale dei consumatori.',
      },
    },
    implementation: {
      title: 'Implementazione',
      subtitle: 'Inizia con TryYourWig in 5 semplici passaggi',
      steps: [
        {
          title: 'Registrati',
          description: 'Registrati scegliendo il pacchetto migliore per te. Puoi passare a un piano superiore o inferiore in qualsiasi momento e le modifiche entrano in vigore con il prossimo ciclo di fatturazione mensile.',
        },
        {
          title: 'Personalizzalo',
          description: 'Personalizza l\'aspetto del servizio secondo il tuo brand, incluso il logo, i colori del brand, i link ai social media, la descrizione dell\'azienda e altro ancora.',
        },
        {
          title: 'Crea l\'Inventario',
          description: 'Carica immagini delle parrucche che offri includendo informazioni sui prezzi, colori disponibili, descrizione, colore, nome, ecc. Se hai una grande varietà di parrucche o hai bisogno di aiuto, contattaci a service@tryyourwig.com.',
        },
        {
          title: 'Collega il Tuo Sito Web',
          description: 'Collega il tuo sito web al servizio, crea un codice QR o un link per guidare i visitatori del tuo sito alla tua pagina simulatore personalizzata che puoi configurare nell\'area admin. Se desideri integrare completamente il servizio TryYourWig nel tuo sito web, contattaci e lo renderemo possibile.',
        },
        {
          title: 'Pronto!',
          description: 'Il tuo servizio è completamente integrato e pronto, un\'esperienza completamente nuova e un servizio unico per i tuoi clienti.',
        },
      ],
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
