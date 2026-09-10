// Centralized Site Configuration for AURA UGC
// Easily swap copy, links, creator image, services, or portfolio items

import creatorImage from '../assets/hero-creator.jpg';

export const SITE_CONFIG = {
  brand: {
    name: "AURA UGC",
    subtitle: "Creative Studio",
    tagline: "AI UGC CREATIVE STUDIO",
    copyrightYear: "2026",
  },

  navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  headerCta: {
    label: "Start a Project",
    href: "#contact",
  },

  hero: {
    smallLabel: "AI UGC CREATIVE STUDIO",
    headlineLine1: "Stop Making Ads.",
    headlineLine2: "Start Testing Creatives.",
    subheadline: "AI-powered UGC ad creatives for D2C skincare brands.",
    primaryButton: {
      label: "See Our Work",
      href: "#work",
    },
    secondaryButton: {
      label: "Start a Project",
      href: "#contact",
    },
    metaItems: [
      "D2C Skincare Focus",
      "Organic UGC Aesthetic",
      "Rapid Creative Iterations",
    ],
    creatorVisual: {
      imageSrc: creatorImage,
      alt: "Young adult female skincare creator filming authentic UGC video holding a luxury serum bottle",
      title: "Hydra-Serum Creator Cut",
      formatTag: "Organic UGC",
    },
  },

  selectedWork: {
    heading: "Selected Work",
    subheadline: "UGC creatives built for attention, trust and conversion.",
    items: [
      {
        id: "work-1",
        brand: "Hydra-Barrier Serum",
        creativeType: "Problem / Solution",
        hook: "Hook: 'If your skin feels tight after washing...'",
        videoSrc: null,
        poster: creatorImage,
        duration: "0:24",
        aspect: "9:16",
        result: "Creative Winner",
      },
      {
        id: "work-2",
        brand: "Botanical Glow Elixir",
        creativeType: "Texture & Application",
        hook: "Hook: 'The 3-second morning routine glow'",
        videoSrc: null,
        poster: null,
        duration: "0:18",
        aspect: "9:16",
        result: "Top Performer",
      },
      {
        id: "work-3",
        brand: "Daily Peptide Essence",
        creativeType: "Unboxing & Routine",
        hook: "Hook: 'Why I stopped using 7 skincare steps'",
        videoSrc: null,
        poster: null,
        duration: "0:28",
        aspect: "9:16",
      },
      {
        id: "work-4",
        brand: "Restorative Night Balm",
        creativeType: "Founder Story & Review",
        hook: "Hook: 'How I repaired my damaged barrier in 14 days'",
        videoSrc: null,
        poster: null,
        duration: "0:32",
        aspect: "9:16",
        result: "Scaled Concept",
      },
      {
        id: "work-5",
        brand: "Mineral Sunshield SPF 50",
        creativeType: "No-White-Cast Demo",
        hook: "Hook: 'Testing the only sunscreen that doesn't pill'",
        videoSrc: null,
        poster: null,
        duration: "0:20",
        aspect: "9:16",
      },
      {
        id: "work-6",
        brand: "Renewing Clarifying Polish",
        creativeType: "Before & After Focus",
        hook: "Hook: 'My esthetician told me to throw away scrubs'",
        videoSrc: null,
        poster: null,
        duration: "0:26",
        aspect: "9:16",
        result: "Testing Winner",
      },
    ],
  },

  services: {
    heading: "What We Create",
    subheadline: "Tailored UGC ad formats designed specifically for paid social acquisition and organic growth.",
    items: [
      {
        id: "ugc-ads",
        number: "01",
        title: "UGC Ad Creatives",
        description: "High-converting, organic-style short-form video ads tailored for TikTok, Reels, and Meta campaigns.",
        features: ["Native organic aesthetic", "High-retention hooks", "Direct response messaging"],
      },
      {
        id: "product-videos",
        number: "02",
        title: "Product Videos",
        description: "Detailed texture shots, unboxing experiences, and routine demonstrations that highlight real product value.",
        features: ["Macro texture captures", "Unboxing & ritual steps", "Skin finish close-ups"],
      },
      {
        id: "creative-testing",
        number: "03",
        title: "Creative Testing",
        description: "Multiple hook variations, alternative pacing, and distinct visual angles to identify your top-performing ad concepts.",
        features: ["3-5 hook variations per concept", "Pacing & audio variations", "CTA angle iterations"],
      },
      {
        id: "ai-ugc",
        number: "04",
        title: "AI UGC",
        description: "Next-generation generative AI workflows combining authentic creator footage with rapid variation scaling.",
        features: ["AI script generation", "Multi-language voice localization", "Rapid creative scaling"],
      },
    ],
  },

  about: {
    label: "ABOUT AURA",
    headlineLine1: "Creator-led content.",
    headlineLine2: "AI-powered production.",
    description1: "AURA is a creator-first creative studio built for modern D2C skincare brands. We believe the highest converting ads don't look like ads—they look like authentic creator recommendations.",
    description2: "By blending native on-camera creator talent with AI-assisted script testing and rapid iteration frameworks, we deliver performance-ready UGC assets without traditional production friction.",
    creatorVisual: {
      imageSrc: creatorImage,
      alt: "AURA UGC Skincare Creator",
      caption: "Creator-led production & testing",
    },
    principles: [
      {
        title: "Authentic Skincare Focus",
        desc: "Deep understanding of cosmetic ingredients, texture demos, and genuine skincare routines.",
      },
      {
        title: "Hook-First Methodology",
        desc: "Optimizing the first 3 seconds to maximize thumb-stop rates and watch time.",
      },
      {
        title: "Rapid Creative Iterations",
        desc: "Delivering multiple angle and hook variations ready to deploy into ad sets.",
      },
    ],
  },

  contact: {
    heading: "READY TO CREATE",
    headingLine2: "YOUR NEXT UGC AD?",
    subheadline: "Tell us what you're launching.",
    buttonLabel: "Start a Project",
    email: "hello@auraugc.studio",
    projectTypes: [
      "UGC Ad Creatives",
      "Product Videos",
      "Creative Testing Batch",
      "AI UGC Variations",
    ],
  },

  footer: {
    brandMark: "AURA UGC",
    brandSubtitle: "Creative Studio",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: "© 2026 AURA UGC",
  },
};

// Re-export HERO_CONTENT for backwards compatibility
export const HERO_CONTENT = {
  brandMark: SITE_CONFIG.brand.name,
  brandSubtitle: SITE_CONFIG.brand.subtitle,
  smallLabel: SITE_CONFIG.hero.smallLabel,
  headlineLine1: SITE_CONFIG.hero.headlineLine1,
  headlineLine2: SITE_CONFIG.hero.headlineLine2,
  subheadline: SITE_CONFIG.hero.subheadline,
  primaryButton: SITE_CONFIG.hero.primaryButton,
  secondaryButton: SITE_CONFIG.hero.secondaryButton,
  creatorVisual: SITE_CONFIG.hero.creatorVisual,
};
