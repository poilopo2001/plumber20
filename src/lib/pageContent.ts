import { generateContent } from './openrouter';

export interface PageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    schema: {
      '@context': string;
      '@type': string;
      name: string;
      description: string;
      areaServed: string;
      priceRange: string;
    };
  };
  sections: {
    hero: {
      headline: string;
      subheadline: string;
      urgencyMessage: string;
      primaryCTA: string;
      secondaryCTA: string;
    };
    mainService: {
      description: string;
      benefits: string[];
      guarantees: string[];
      expertise: {
        years: number;
        certifications: string[];
        specializations: string[];
      };
    };
    localService: {
      areaDescription: string;
      availableTimes: string;
      responseTime: string;
      coverage: string[];
      localKnowledge: string;
      nearbyAreas: string[];
    };
    pricing: {
      ranges: {
        service: string;
        priceRange: string;
        note?: string;
      }[];
      disclaimer: string;
      paymentMethods: string[];
      specialOffers: string[];
    };
    quickFix: {
      title: string;
      safetyWarning: string;
      temporarySolutions: {
        title: string;
        steps: string[];
        materials: string[];
        difficulty: 'Facile' | 'Moyen' | 'Difficile';
        timeEstimate: string;
        cautionNotes: string[];
      }[];
      whenToCallPro: string[];
      preventionTips: string[];
    };
    quickFixes: {
      title: string;
      description: string;
      tips: {
        problem: string;
        solution: string;
        warning?: string;
      }[];
      professionalAdvice: string;
    };
    faq: {
      title: string;
      description: string;
      questions: {
        question: string;
        answer: string;
        category?: string;
      }[];
    };
    emergency: {
      title: string;
      description: string;
      steps: {
        step: string;
        instruction: string;
      }[];
      warningSign: string[];
      contactInfo: {
        phone: string;
        availability: string;
        response: string;
      };
    };
    testimonials: {
      title: string;
      subtitle: string;
      reviews: {
        name: string;
        rating: number;
        comment: string;
        date: string;
        service: string;
      }[];
      overallRating: {
        average: number;
        total: number;
      };
    };
    qualityGuarantees: {
      title: string;
      description: string;
      guarantees: {
        name: string;
        description: string;
        icon?: string;
      }[];
      certifications: string[];
    };
    callToAction: {
      mainMessage: string;
      phoneMessage: string;
      emailMessage: string;
      urgencyIndicator: string;
      benefits: string[];
    };
    relatedServices: {
      title: string;
      description: string;
      services: {
        name: string;
        description: string;
        link: string;
      }[];
    };
  };
}

export async function generatePageContent(quartier: string, service: string): Promise<PageContent> {
  const formattedQuartier = quartier.charAt(0).toUpperCase() + quartier.slice(1).replace(/-/g, ' ');
  const formattedService = service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ');

  const context = `
  Pour la section quickFix, créez un contenu détaillé avec :
  - Un titre accrocheur
  - Un avertissement de sécurité clair
  - 2-3 solutions temporaires avec :
    * Titre descriptif
    * Étapes détaillées
    * Liste de matériel nécessaire
    * Niveau de difficulté (Facile/Moyen/Difficile)
    * Temps estimé
    * Points de vigilance
  - Liste des cas nécessitant un professionnel
  - Conseils de prévention
  `;

  const prompt = `Generate a JSON response for a plumbing service website in Luxembourg.
  Service: ${formattedService}
  Location: ${formattedQuartier}

  IMPORTANT: Return ONLY a valid JSON object with this exact structure:
  {
    "metadata": {
      "title": "titre SEO optimisé",
      "description": "description SEO optimisée",
      "keywords": ["mots-clés pertinents"],
      "schema": {
        "@context": "https://schema.org",
        "@type": "PlumbingService",
        "name": "nom du service",
        "description": "description du service",
        "areaServed": "zone desservie",
        "priceRange": "fourchette de prix"
      }
    },
    "sections": {
      "hero": {
        "headline": "titre principal accrocheur en français",
        "subheadline": "sous-titre engageant en français",
        "urgencyMessage": "message d'urgence en français",
        "primaryCTA": "Appeler le plombier|tel:+352661297770",
        "secondaryCTA": "Prendre un RDV|/contact"
      },
      "mainService": {
        "description": "description détaillée du service",
        "benefits": ["avantage 1", "avantage 2", "avantage 3"],
        "guarantees": ["garantie 1", "garantie 2"],
        "expertise": {
          "years": 15,
          "certifications": ["certification 1", "certification 2"],
          "specializations": ["spécialisation 1", "spécialisation 2"]
        }
      },
      "localService": {
        "areaDescription": "description de la zone de service",
        "availableTimes": "24/7",
        "responseTime": "30 minutes",
        "coverage": ["zone 1", "zone 2"],
        "localKnowledge": "connaissance locale détaillée",
        "nearbyAreas": ["zone proche 1", "zone proche 2"]
      },
      "pricing": {
        "ranges": [
          {
            "service": "service standard",
            "priceRange": "50€-100€",
            "note": "note sur le prix"
          }
        ],
        "disclaimer": "avertissement sur les prix",
        "paymentMethods": ["méthode 1", "méthode 2"],
        "specialOffers": ["offre 1", "offre 2"]
      },
      "quickFix": {
        "title": "Solutions Rapides",
        "safetyWarning": "Avertissement de sécurité",
        "temporarySolutions": [
          {
            "title": "Solution temporaire",
            "steps": ["étape 1", "étape 2"],
            "materials": ["matériel 1", "matériel 2"],
            "difficulty": "Facile",
            "timeEstimate": "10 minutes",
            "cautionNotes": ["note 1", "note 2"]
          }
        ],
        "whenToCallPro": ["cas 1", "cas 2"],
        "preventionTips": ["conseil 1", "conseil 2"]
      },
      "quickFixes": {
        "title": "Solutions Rapides",
        "description": "Description des solutions",
        "tips": [
          {
            "problem": "problème courant",
            "solution": "solution rapide",
            "warning": "avertissement"
          }
        ],
        "professionalAdvice": "conseil professionnel"
      },
      "faq": {
        "title": "Questions Fréquentes",
        "description": "Description FAQ",
        "questions": [
          {
            "question": "question fréquente",
            "answer": "réponse détaillée",
            "category": "catégorie"
          }
        ]
      },
      "emergency": {
        "title": "Urgences",
        "description": "Description urgences",
        "steps": [
          {
            "step": "étape 1",
            "instruction": "instruction détaillée"
          }
        ],
        "warningSign": ["signe 1", "signe 2"],
        "contactInfo": {
          "phone": "+352 661 297 770",
          "availability": "24/7",
          "response": "30 minutes"
        }
      },
      "testimonials": {
        "title": "Témoignages",
        "subtitle": "Avis clients",
        "reviews": [
          {
            "name": "Client",
            "rating": 5,
            "comment": "excellent service",
            "date": "2024-03",
            "service": "service effectué"
          }
        ],
        "overallRating": {
          "average": 5,
          "total": 50
        }
      },
      "qualityGuarantees": {
        "title": "Garanties",
        "description": "Nos garanties",
        "guarantees": [
          {
            "name": "garantie",
            "description": "description garantie",
            "icon": "icon-name"
          }
        ],
        "certifications": ["certification 1", "certification 2"]
      },
      "callToAction": {
        "mainMessage": "message principal",
        "phoneMessage": "message téléphone",
        "emailMessage": "message email",
        "urgencyIndicator": "indicateur urgence",
        "benefits": ["bénéfice 1", "bénéfice 2"]
      },
      "relatedServices": {
        "title": "Services Connexes",
        "description": "Description services",
        "services": [
          {
            "name": "service connexe",
            "description": "description service",
            "link": "/service-link"
          }
        ]
      }
    }
  }

  The content must be in French and optimized for SEO.`;

  try {
    const response = await generateContent(prompt, context);
    return JSON.parse(response);
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}
