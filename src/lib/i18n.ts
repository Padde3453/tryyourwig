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
      title: 'Any Wig. Any Face.',
      titleHighlight: 'Instantly.',
      subtitle: 'The AI Virtual Try-On for Professional Wig Shops. Let your clients see their perfect look before they buy.',
      cta: 'Try the Demo',
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
      steps: [
      {
        step: '01',
        title: 'Upload Selfie',
        description: 'Customer takes or uploads a photo of themselves',
        overlayUploadTitle: 'Upload Selfie',
        overlayUploadSubtitle: 'Make sure your face is clearly visible',
        overlayStyleTitle: 'Desired style',
        overlayStyleSubtitle: 'Like the reference image',
        overlayGenerate: 'Generate image',
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
  },
  de: {
    nav: {
      demo: 'Demo',
      pricing: 'Preise',
      tryIt: 'Jetzt Testen',
    },
    hero: {
      badge: 'KI-Gestützte Virtuelle Anprobe',
      title: 'Jede Perücke. Jedes Gesicht.',
      titleHighlight: 'Sofort.',
      subtitle: 'Die KI-Virtuelle Anprobe für professionelle Perückengeschäfte. Lassen Sie Ihre Kunden ihren perfekten Look sehen, bevor sie kaufen.',
      cta: 'Demo Testen',
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
      steps: [
      {
        step: '01',
        title: 'Selfie Hochladen',
        description: 'Kunde macht oder lädt ein Foto von sich hoch',
        overlayUploadTitle: 'Selfie hochladen',
        overlayUploadSubtitle: 'Stelle sicher, dass dein Gesicht gut sichtbar ist',
        overlayStyleTitle: 'Gewünschter Stil',
        overlayStyleSubtitle: 'Wie das Referenzbild',
        overlayGenerate: 'Bild generieren',
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
  },
  es: {
    nav: {
      demo: 'Demo',
      pricing: 'Precios',
      tryIt: 'Pruébalo',
    },
    hero: {
      badge: 'Prueba Virtual con IA',
      title: 'Cualquier Peluca. Cualquier Rostro.',
      titleHighlight: 'Al Instante.',
      subtitle: 'La Prueba Virtual con IA para Tiendas Profesionales de Pelucas. Deja que tus clientes vean su look perfecto antes de comprar.',
      cta: 'Probar Demo',
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
      steps: [
      {
        step: '01',
        title: 'Subir Selfie',
        description: 'El cliente toma o sube una foto de sí mismo',
        overlayUploadTitle: 'Subir Selfie',
        overlayUploadSubtitle: 'Asegúrate de que tu rostro sea claramente visible',
        overlayStyleTitle: 'Estilo deseado',
        overlayStyleSubtitle: 'Como la imagen de referencia',
        overlayGenerate: 'Generar imagen',
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
  },
  fr: {
    nav: {
      demo: 'Démo',
      pricing: 'Tarifs',
      tryIt: 'Essayez',
    },
    hero: {
      badge: 'Essayage Virtuel par IA',
      title: 'N\'importe Quelle Perruque. N\'importe Quel Visage.',
      titleHighlight: 'Instantanément.',
      subtitle: 'L\'Essayage Virtuel par IA pour les Boutiques de Perruques Professionnelles. Permettez à vos clients de voir leur look parfait avant d\'acheter.',
      cta: 'Essayer la Démo',
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
      steps: [
      {
        step: '01',
        title: 'Télécharger un Selfie',
        description: 'Le client prend ou télécharge une photo de lui-même',
        overlayUploadTitle: 'Télécharger un Selfie',
        overlayUploadSubtitle: 'Assurez-vous que votre visage est bien visible',
        overlayStyleTitle: 'Style souhaité',
        overlayStyleSubtitle: 'Comme l\'image de référence',
        overlayGenerate: 'Générer l\'image',
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
