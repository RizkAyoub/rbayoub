import type { ContentSchema } from './en';

export const fr: ContentSchema = {
  lang: 'fr',
  langLabel: 'FR',
  switchLang: 'EN',
  switchLangFull: 'English',

  meta: {
    siteName: 'RB AYOUB Solutions Inc.',
    home: {
      title: 'RB AYOUB Solutions Inc. | Conseil en architecture technologique senior',
      description:
        'RB AYOUB Solutions Inc. est une firme d\'architecture technologique basée à Laval, au Québec. Nous concevons et gouvernons des systèmes complexes — cloud, IA, blockchain et infrastructure réglementée — pour des organisations partout au Canada.',
    },
    services: {
      title: 'Services | RB AYOUB Solutions Inc.',
      description:
        'Revues d\'architecture, conception de solutions, architecture de systèmes IA, stratégie de plateformes cloud, infrastructure blockchain et gouvernance technique — par RB AYOUB Solutions Inc., à Laval, Québec.',
    },
    work: {
      title: 'Réalisations | RB AYOUB Solutions Inc.',
      description:
        'Mandats d\'architecture représentatifs dans des contextes réglementés, d\'entreprise, financiers, publics, IA et systèmes distribués au Canada.',
    },
    method: {
      title: 'Méthode | RB AYOUB Solutions Inc.',
      description:
        'Une méthode architecturale disciplinée : cadrage du mandat, cartographie des systèmes, analyse des risques, architecture cible, documentation et gouvernance de livraison.',
    },
    company: {
      title: 'Firme | RB AYOUB Solutions Inc.',
      description:
        'RB AYOUB Solutions Inc. est une firme boutique canadienne d\'architecture technologique basée à Laval, Québec, dirigée par l\'architecte principal Rizk Ayoub.',
    },
    contact: {
      title: 'Contact | RB AYOUB Solutions Inc.',
      description:
        'Discutez d\'un mandat d\'architecture technologique avec RB AYOUB Solutions Inc. — revues, conception de solutions, systèmes IA, plateformes cloud et gouvernance de livraison.',
    },
  },

  nav: {
    home: 'Accueil',
    services: 'Services',
    work: 'Mandats',
    method: 'Méthode',
    company: 'Société',
    contact: 'Contact',
  },

  home: {
    eyebrow: 'RB AYOUB Solutions Inc.',
    headline: 'Architecture senior pour les systèmes\noù l\'improvisation coûte cher.',
    paragraph:
      'Nous conseillons, concevons et gouvernons des systèmes technologiques complexes lorsque l\'intégration, l\'échelle, la sécurité, la conformité ou les comportements pilotés par l\'IA créent un risque architectural.',
    secondaryParagraph:
      'Basée à Laval, Québec. Les mandats comprennent les revues d\'architecture, la conception de solutions, la documentation technique, les stratégies cloud et plateforme, l\'architecture des systèmes IA, l\'infrastructure blockchain et la gouvernance de livraison.',
    cta1: 'Discuter d\'un mandat',
    cta2: 'Voir les services',
    credibilityStrip: [
      'Architecture d\'entreprise',
      'Plateformes cloud',
      'Systèmes IA',
      'Systèmes distribués',
      'Blockchain & tokenisation',
      'Gouvernance technique',
    ],
    whatWeDoTitle: 'Architecture, conseil et accompagnement pour systèmes complexes.',
    services: [
      {
        id: '01',
        title: 'Revue d\'architecture',
        description:
          'Évaluation indépendante de la structure système, des risques d\'intégration, de la scalabilité, de la posture de sécurité et de la dette technique.',
      },
      {
        id: '02',
        title: 'Architecture de solutions',
        description:
          'Architecture cible, frontières de services, contrats API, conception événementielle, flux de données et feuilles de route d\'implémentation.',
      },
      {
        id: '03',
        title: 'Architecture des systèmes IA',
        description:
          'Intégration LLM, pipelines RAG, workflows agentiques, évaluation, observabilité et modèles de gouvernance.',
      },
      {
        id: '04',
        title: 'Architecture cloud & plateforme',
        description:
          'Infrastructure cloud-native, Kubernetes, CI/CD, observabilité, fondations de sécurité et modèles opérationnels de plateforme.',
      },
      {
        id: '05',
        title: 'Blockchain & systèmes réglementés',
        description:
          'Tokenisation, contrats intelligents, auditabilité, intégration des paiements et architecture orientée conformité.',
      },
      {
        id: '06',
        title: 'Gouvernance technique',
        description:
          'Modèles C4, ADR, documentation SRS/HLSD, appui aux énoncés de travaux, estimations et cadres de décision architecturale.',
      },
    ],
    whenTitle: 'La décision compte avant que la construction commence.',
    whenItems: [
      'Une plateforme devient difficile à faire évoluer ou à maintenir.',
      'Plusieurs systèmes doivent être intégrés sans créer un couplage à long terme.',
      'Une initiative IA ou d\'automatisation nécessite une gouvernance avant la mise en production.',
      'Une proposition technique, un énoncé de travaux ou un dossier d\'architecture doit être crédible pour les dirigeants, les clients ou les bailleurs de fonds.',
      'Une équipe produit a besoin d\'un jugement architectural senior avant de s\'engager dans des mois de livraison.',
    ],
    methodTeaserTitle: 'Une méthode disciplinée.',
    methodTeaser:
      'Chaque mandat suit une approche structurée : clarifier le mandat, cartographier le système actuel, identifier les risques architecturaux, définir l\'architecture cible, produire une documentation décisionnelle et accompagner la mise en œuvre.',
    methodLink: 'Voir la méthode',
    viewAllServices: 'Voir tous les services',
    ctaFinal: 'Discuter d\'un mandat',
  },

  services: {
    eyebrow: 'Services',
    headline: 'Services pour mandats techniques à fort enjeu.',
    intro:
      'RB AYOUB Solutions Inc. fournit des services d\'architecture senior et de conseil technique aux organisations qui ont besoin de clarté avant de construire, faire évoluer, intégrer ou gouverner des systèmes complexes.',
    ctaLabel: 'Engager un mandat',
    deliverablesLabel: 'Livrables',
    sections: [
      {
        id: '01',
        title: 'Revue d\'architecture & évaluation technique',
        description:
          'Une revue structurée des systèmes existants, des décisions architecturales, des points d\'intégration, de la dette technique, des risques de scalabilité, des préoccupations de sécurité et des contraintes de livraison.',
        deliverables: [
          'Mémo d\'évaluation architecturale',
          'Registre des risques',
          'Cartographie de l\'état actuel',
          'Recommandations prioritaires',
          'Résumé exécutif',
        ],
      },
      {
        id: '02',
        title: 'Architecture de solutions & d\'entreprise',
        description:
          'Conception de l\'architecture cible pour plateformes, produits, programmes de modernisation et systèmes d\'entreprise.',
        deliverables: [
          'Architecture cible',
          'Diagrammes C4',
          'Frontières de services',
          'Contrats API et d\'intégration',
          'Registre de décisions architecturales',
          'Feuille de route d\'implémentation',
        ],
      },
      {
        id: '03',
        title: 'Architecture des systèmes IA & agentiques',
        description:
          'Architecture pour systèmes IA, intégrations LLM, pipelines RAG, workflows agentiques, évaluation, auditabilité et gouvernance.',
        deliverables: [
          'Architecture du système IA',
          'Modèle de workflows et d\'orchestration',
          'Conception de gouvernance des données et du contexte',
          'Plan d\'évaluation et d\'observabilité',
          'Contrôles de risque pour la mise en production',
        ],
      },
      {
        id: '04',
        title: 'Architecture cloud, plateforme & intégration',
        description:
          'Architecture cloud-native, fondations de plateforme, Kubernetes, CI/CD, observabilité, plateformes API et intégration événementielle.',
        deliverables: [
          'Plan directeur cloud/plateforme',
          'Modèle de déploiement et d\'environnements',
          'Architecture d\'intégration',
          'Revue de préparation opérationnelle',
          'Recommandations de sécurité et d\'observabilité',
        ],
      },
      {
        id: '05',
        title: 'Blockchain, tokenisation & systèmes réglementés',
        description:
          'Architecture pour systèmes blockchain où l\'auditabilité, le cycle de vie des tokens, les contrats intelligents, l\'intégration des paiements ou les contraintes réglementaires sont déterminants.',
        deliverables: [
          'Architecture de tokenisation',
          'Conception du système de contrats intelligents',
          'Modèle de piste d\'audit',
          'Notes sur les risques réglementaires et opérationnels',
          'Conception d\'intégration',
        ],
      },
      {
        id: '06',
        title: 'Documentation, énoncés de travaux & gouvernance technique',
        description:
          'Documentation décisionnelle pour équipes, dirigeants, clients, fournisseurs et contextes d\'approvisionnement.',
        deliverables: [
          'SRS / HLSD',
          'Modèle C4',
          'Registre ADR',
          'Appui à l\'énoncé de travaux',
          'Estimations techniques',
          'Modèle de gouvernance de livraison',
        ],
      },
    ],
  },

  work: {
    eyebrow: 'Mandats',
    headline: 'Mandats d\'architecture représentatifs.',
    intro:
      'Mandats sélectionnés dans des contextes réglementés, d\'entreprise, financiers, publics, IA et systèmes distribués. Chaque entrée reflète un travail d\'architecture réel ; les descriptions sont généralisées conformément aux exigences habituelles de confidentialité professionnelle.',
    labels: {
      sector: 'Secteur',
      context: 'Contexte',
      role: 'Rôle architectural',
      outcome: 'Résultat',
    },
    engagements: [
      {
        id: '01',
        sector: 'Gouvernement / services réglementés',
        title: 'Plateforme numérique du secteur public',
        context:
          'Un service numérique sécurisé requérant identité, pistes d\'audit, intégration des paiements et coordination avec des systèmes intergouvernementaux.',
        role: 'Conception de l\'architecture de plateforme, du modèle d\'intégration, des contrôles de sécurité et de la documentation nécessaire pour aligner les parties prenantes opérationnelles, de conformité et de livraison.',
        outcome:
          'Une architecture structurée pour un flux numérique sensible, avec traçabilité, préparation à l\'intégration et gouvernance orientée production.',
      },
      {
        id: '02',
        sector: 'Systèmes d\'entreprise',
        title: 'ERP & PDV distribués pour la vente au détail',
        context:
          'Un environnement de vente au détail distribué avec des centaines de succursales nécessitant une synchronisation fiable des stocks, des ventes et des opérations.',
        role: 'Conception des patterns de systèmes distribués, de la synchronisation événementielle, des frontières de services et des contrôles opérationnels pour des opérations à grande échelle.',
        outcome:
          'Une clarté architecturale améliorée pour les opérations en temps réel, la cohérence système et une expansion maintenable entre les sites distribués.',
      },
      {
        id: '03',
        sector: 'Fintech / blockchain',
        title: 'Plateforme fintech et immobilier tokenisé',
        context:
          'Une plateforme d\'investissement réglementée impliquant des actifs réels tokenisés, des flux investisseurs, l\'intégration des paiements et des transactions soumises à des exigences de conformité.',
        role: 'Direction de l\'architecture de solution sur le cycle de vie des tokens, la conception des contrats intelligents, les frontières d\'intégration, l\'infrastructure cloud et la documentation technique.',
        outcome:
          'Une architecture documentée adaptée à la revue technique, juridique et des parties prenantes avant et pendant l\'implémentation.',
      },
      {
        id: '04',
        sector: 'Systèmes IA',
        title: 'Workflows de décision assistés par IA',
        context:
          'Un système nécessitant une analyse assistée par IA dans des workflows transactionnels tout en préservant le contrôle opérationnel, l\'auditabilité et l\'intégration avec les services existants.',
        role: 'Conception des patterns d\'intégration des composants IA, des frontières de workflows, des considérations d\'évaluation et des exigences d\'observabilité.',
        outcome:
          'Un chemin plus clair vers la mise en production de fonctionnalités IA sans traiter le modèle comme une boîte noire incontrôlée.',
      },
      {
        id: '05',
        sector: 'Gouvernance technique',
        title: 'Documentation d\'architecture et gouvernance de livraison',
        context:
          'Des équipes ayant besoin de dossiers d\'architecture crédibles, de plans d\'implémentation, d\'estimations et de registres de décisions pour des environnements de livraison complexes.',
        role: 'Production de SRS, HLSD, vues C4, ADR, estimations de projet et documentation technique pour soutenir la livraison et l\'alignement des parties prenantes.',
        outcome:
          'Une documentation décisionnelle ayant réduit l\'ambiguïté et amélioré la préparation à l\'exécution.',
      },
    ],
  },

  method: {
    eyebrow: 'Méthode',
    headline: 'Une méthode disciplinée pour clarifier l\'architecture.',
    intro:
      'Les systèmes complexes échouent rarement parce qu\'une technologie manquait. Ils échouent parce que les responsabilités étaient floues, les frontières d\'intégration fragiles, les risques non documentés et les décisions prises localement sans structure de gouvernance.',
    steps: [
      {
        number: '01',
        title: 'Clarifier le mandat',
        description:
          'Définir l\'objectif d\'affaires, les contraintes techniques, les parties prenantes, la tolérance au risque et l\'horizon de décision.',
      },
      {
        number: '02',
        title: 'Cartographier le système actuel',
        description:
          'Documenter les systèmes, les intégrations, les flux de données, les dépendances, les contraintes opérationnelles et les points de défaillance connus.',
      },
      {
        number: '03',
        title: 'Identifier les risques architecturaux',
        description:
          'Distinguer les problèmes d\'implémentation des risques structuraux : couplage, scalabilité, exposition de sécurité, propriété floue, intégrations fragiles et lacunes de gouvernance.',
      },
      {
        number: '04',
        title: 'Définir l\'architecture cible',
        description:
          'Concevoir l\'état futur à travers les frontières de services, les interfaces, les flux de données, les patterns d\'infrastructure, les contrôles de sécurité et le séquençage de livraison.',
      },
      {
        number: '05',
        title: 'Produire une documentation décisionnelle',
        description:
          'Créer des artefacts architecturaux réellement utilisables par les dirigeants, les équipes de livraison, les fournisseurs et les parties prenantes techniques : vues C4, ADR, SRS, HLSD, feuilles de route et notes de risque.',
      },
      {
        number: '06',
        title: 'Accompagner l\'implémentation et la gouvernance',
        description:
          'Aider les équipes à préserver l\'intention architecturale pendant la livraison par des revues, des registres de décisions, des orientations techniques et l\'adaptation lorsque la réalité évolue.',
      },
    ],
    closing:
      'L\'objectif n\'est pas de rendre l\'architecture impressionnante. L\'objectif est de rendre le système compréhensible, gouvernable et constructible.',
  },

  company: {
    eyebrow: 'Société',
    headline: 'Une firme boutique d\'architecture guidée par un jugement technique senior.',
    intro:
      'RB AYOUB Solutions Inc. est une firme canadienne d\'architecture technologique et de conseil basée à Laval, Québec. La firme accompagne les organisations qui ont besoin d\'un jugement architectural senior pour concevoir, évaluer, documenter ou gouverner des systèmes technologiques complexes — avant, pendant ou après la mise en œuvre.',
    principalLabel: 'Architecte principal',
    principal:
      'La firme est dirigée par Rizk Ayoub, architecte principal et architecte solutions senior, fort de plus d\'une décennie d\'expérience dans les secteurs gouvernemental, financier, de la santé, des systèmes d\'entreprise, des plateformes cloud, des systèmes distribués, des workflows IA et de l\'infrastructure blockchain.',
    capabilitiesLabel: 'Capacités',
    capabilities: [
      'Architecture d\'entreprise et de solutions',
      'Systèmes distribués et intégration',
      'Plateformes cloud-natives',
      'Systèmes IA et agentiques',
      'Blockchain et tokenisation',
      'Gouvernance technique et documentation',
    ],
    principlesLabel: 'Principes opérationnels',
    principles: [
      'La clarté avant la complexité',
      'L\'architecture avant l\'improvisation',
      'Les preuves avant les affirmations',
      'Une documentation qui soutient les décisions',
      'Des choix technologiques opérables et maintenables',
    ],
    rdLabel: 'Travaux de R&D connexes',
    rdNote:
      'Les travaux de produits et de protocoles sont publiés séparément sous EPICORTEK Technologies Inc., une société de produits et de R&D axée sur l\'infrastructure d\'intelligence synthétique de confiance. RB AYOUB Solutions Inc. demeure la firme de services et de conseil en architecture.',
  },

  contact: {
    eyebrow: 'Contact',
    headline: 'Discuter d\'un mandat.',
    intro:
      'Utilisez ce formulaire pour discuter d\'une revue d\'architecture, d\'un mandat-conseil, d\'un dossier de documentation technique, d\'une conception de plateforme, d\'une architecture de systèmes IA ou d\'une gouvernance de livraison.',
    labels: {
      name: 'Nom',
      email: 'Courriel',
      org: 'Organisation',
      mandateType: 'Type de mandat',
      message: 'Message',
    },
    mandateTypeDefault: 'Sélectionner le type de mandat',
    mandateTypes: [
      'Revue d\'architecture',
      'Architecture de solutions',
      'Architecture de systèmes IA',
      'Architecture cloud/plateforme',
      'Système blockchain ou réglementé',
      'Documentation / énoncé de travaux / gouvernance',
      'Autre',
    ],
    submit: 'Envoyer le message',
    submitting: 'Envoi en cours…',
    successMessage:
      'Votre message a bien été reçu. Nous examinerons votre demande et donnerons suite sous peu.',
    errorMessage:
      'Le message n\'a pas pu être envoyé. Veuillez réessayer ou écrire directement à hello@rbayoub.com.',
    contactNote:
      'Précisez le contexte, les contraintes, l\'échéancier et si le travail est consultatif, de conception seulement ou avec accompagnement à la livraison. Vous pouvez aussi écrire directement à hello@rbayoub.com.',
    emailLabel: 'Courriel',
    email: 'hello@rbayoub.com',
    linkedinLabel: 'LinkedIn',
    linkedin: 'linkedin.com/in/rbayoub',
    linkedinHref: 'https://www.linkedin.com/in/rbayoub',
  },

  footer: {
    tagline: 'Architecture senior pour systèmes complexes.',
    copyright: '© 2026 RB AYOUB Solutions Inc. Tous droits réservés.',
    location: 'Basée à Laval, Québec.',
  },
};
