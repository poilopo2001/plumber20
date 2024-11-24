'use client';

import { useState, useEffect } from 'react';
import { FaCalculator, FaTools, FaClock, FaEuroSign, FaPhone, FaEnvelope, FaPhoneAlt, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import Script from 'next/script';
import FloatingContact from '@/components/FloatingContact';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  urgencyMultiplier: number;
  timeEstimate: string;
  materials?: { name: string; price: number; }[];
}

const services: { [key: string]: ServiceOption[] } = {
  'Débouchage': [
    {
      id: 'debouchage-simple',
      name: 'Débouchage simple (évier, lavabo)',
      basePrice: 80,
      urgencyMultiplier: 1.5,
      timeEstimate: '30-60 min',
      materials: [
        { name: 'Furet professionnel', price: 20 },
        { name: 'Produit déboucheur', price: 15 }
      ]
    },
    {
      id: 'debouchage-complexe',
      name: 'Débouchage complexe (WC, canalisation)',
      basePrice: 120,
      urgencyMultiplier: 1.5,
      timeEstimate: '1-2h',
      materials: [
        { name: 'Machine haute pression', price: 40 },
        { name: 'Caméra inspection', price: 30 }
      ]
    }
  ],
  'Fuite': [
    {
      id: 'fuite-robinet',
      name: 'Réparation fuite robinet',
      basePrice: 70,
      urgencyMultiplier: 1.4,
      timeEstimate: '30-45 min',
      materials: [
        { name: 'Joint neuf', price: 5 },
        { name: 'Cartouche céramique', price: 25 }
      ]
    },
    {
      id: 'fuite-canalisation',
      name: 'Réparation fuite canalisation',
      basePrice: 150,
      urgencyMultiplier: 1.6,
      timeEstimate: '2-3h',
      materials: [
        { name: 'Tuyau PVC/Cuivre', price: 30 },
        { name: 'Raccords', price: 20 }
      ]
    }
  ],
  'Installation': [
    {
      id: 'installation-robinet',
      name: 'Installation nouveau robinet',
      basePrice: 90,
      urgencyMultiplier: 1.3,
      timeEstimate: '1h',
      materials: [
        { name: 'Flexibles', price: 15 },
        { name: 'Joints', price: 10 }
      ]
    },
    {
      id: 'installation-sanitaire',
      name: 'Installation sanitaire complet',
      basePrice: 200,
      urgencyMultiplier: 1.4,
      timeEstimate: '3-4h',
      materials: [
        { name: 'Kit fixation', price: 25 },
        { name: 'Évacuation', price: 35 }
      ]
    }
  ],
  'Chauffe-eau': [
    {
      id: 'reparation-chauffe-eau',
      name: 'Réparation chauffe-eau',
      basePrice: 120,
      urgencyMultiplier: 1.5,
      timeEstimate: '1-2h',
      materials: [
        { name: 'Résistance', price: 45 },
        { name: 'Thermostat', price: 30 }
      ]
    },
    {
      id: 'installation-chauffe-eau',
      name: 'Installation chauffe-eau neuf',
      basePrice: 300,
      urgencyMultiplier: 1.3,
      timeEstimate: '4-5h',
      materials: [
        { name: 'Groupe sécurité', price: 40 },
        { name: 'Raccords', price: 25 }
      ]
    }
  ]
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Devis Plomberie Luxembourg',
  'provider': {
    '@type': 'Plumber',
    'name': 'PlombierPro Luxembourg',
    'url': 'https://depannage-luxembourg.com'
  },
  'description': 'Obtenez un devis gratuit pour vos travaux de plomberie à Luxembourg. Calculateur en ligne pour estimation rapide.',
  'areaServed': {
    '@type': 'City',
    'name': 'Luxembourg-Ville'
  },
  'serviceType': ['Plomberie', 'Débouchage', 'Installation sanitaire'],
  'offers': {
    '@type': 'Offer',
    'availability': 'https://schema.org/InStock',
    'priceSpecification': {
      '@type': 'PriceSpecification',
      'price': '0',
      'priceCurrency': 'EUR',
      'description': 'Devis gratuit'
    }
  }
};

export default function DevisCalculator() {
  const [category, setCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([]);
  const [complexity, setComplexity] = useState('normal');

  const calculateTotal = () => {
    if (!selectedService) return 0;

    const service = Object.values(services)
      .flat()
      .find(s => s.id === selectedService);

    if (!service) return 0;

    let total = service.basePrice;

    // Ajout du coût des matériaux
    if (service.materials) {
      total += service.materials.reduce((acc, mat) => acc + mat.price, 0);
    }

    // Multiplicateur d'urgence
    if (isUrgent) {
      total *= service.urgencyMultiplier;
    }

    // Facteur de complexité
    switch (complexity) {
      case 'simple':
        total *= 0.8;
        break;
      case 'complexe':
        total *= 1.3;
        break;
      case 'tres-complexe':
        total *= 1.6;
        break;
    }

    // Options additionnelles
    if (additionalOptions.includes('camera')) total += 45;
    if (additionalOptions.includes('nettoyage')) total += 25;

    return Math.round(total);
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="flex flex-col min-h-screen -mt-24">
        <FloatingContact />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="mb-6 inline-block px-4 py-2 bg-blue-500/30 text-white rounded-full text-sm font-bold">
                  💰 Devis instantané gratuit
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                  Calculez votre devis en 2 minutes
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Suivez ces 3 étapes simples pour obtenir votre estimation précise
                </p>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                  <div className="bg-blue-500/20 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Sélectionnez le service</h3>
                    <p className="text-blue-100">Choisissez le type d'intervention dont vous avez besoin</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Précisez les détails</h3>
                    <p className="text-blue-100">Indiquez la complexité et l'urgence de votre besoin</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Obtenez le prix</h3>
                    <p className="text-blue-100">Recevez votre estimation instantanément</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#calculator"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('calculator')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    Commencer mon devis
                    <FaArrowRight className="ml-2" />
                  </a>
                  <a
                    href="tel:+352661297770"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors duration-200 shadow-lg"
                  >
                    <FaPhoneAlt className="mr-2" />
                    +352 661 29 77 70
                  </a>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium text-blue-100">Faites défiler pour calculer</span>
                <FaChevronDown className="animate-bounce w-6 h-6 text-blue-100" />
              </div>
            </div>
          </section>

          {/* Add smooth scroll behavior to the whole page */}
          <style jsx global>{`
            html {
              scroll-behavior: smooth;
            }
          `}</style>

          {/* Calculator Section */}
          <section id="calculator" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                    Calculateur de Devis
                  </h2>
                  <p className="text-lg text-gray-600">
                    Sélectionnez vos options ci-dessous pour obtenir une estimation instantanée
                  </p>
                </div>

                {/* Sélection de la catégorie */}
                <div className="mb-8">
                  <label className="block text-2xl font-bold text-gray-900 mb-4">
                    Type d'intervention
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Object.keys(services).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setCategory(cat);
                          setSelectedService('');
                        }}
                        className={`p-4 rounded-lg border-2 text-center transition-colors ${
                          category === cat
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sélection du service spécifique */}
                {category && (
                  <div className="mb-8">
                    <label className="block text-2xl font-bold text-gray-900 mb-4">
                      Service spécifique
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services[category].map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`p-4 rounded-lg border-2 text-left transition-colors ${
                            selectedService === service.id
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-gray-300 hover:border-blue-600 hover:bg-blue-50 text-gray-900'
                          }`}
                        >
                          <div className="font-medium">{service.name}</div>
                          <div className={`text-sm mt-1 ${selectedService === service.id ? 'text-blue-100' : 'text-gray-600'}`}>
                            À partir de {service.basePrice}€ • {service.timeEstimate}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Options supplémentaires */}
                {selectedService && (
                  <>
                    {/* Urgence */}
                    <div className="mb-8">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isUrgent}
                          onChange={(e) => setIsUrgent(e.target.checked)}
                          className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-lg text-gray-900">Intervention d'urgence (24/7)</span>
                      </label>
                    </div>

                    {/* Complexité */}
                    <div className="mb-8">
                      <label className="block text-2xl font-bold text-gray-900 mb-4">
                        Niveau de complexité
                      </label>
                      <select
                        value={complexity}
                        onChange={(e) => setComplexity(e.target.value)}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 text-lg p-3"
                      >
                        <option value="simple">Simple - Accès facile</option>
                        <option value="normal">Normal</option>
                        <option value="complexe">Complexe - Accès difficile</option>
                        <option value="tres-complexe">Très complexe - Travaux supplémentaires requis</option>
                      </select>
                    </div>

                    {/* Options additionnelles */}
                    <div className="mb-8">
                      <label className="block text-2xl font-bold text-gray-900 mb-4">
                        Options additionnelles
                      </label>
                      <div className="space-y-4">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={additionalOptions.includes('camera')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setAdditionalOptions([...additionalOptions, 'camera']);
                              } else {
                                setAdditionalOptions(additionalOptions.filter(o => o !== 'camera'));
                              }
                            }}
                            className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-lg text-gray-900">Inspection caméra (+45€)</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={additionalOptions.includes('nettoyage')}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setAdditionalOptions([...additionalOptions, 'nettoyage']);
                              } else {
                                setAdditionalOptions(additionalOptions.filter(o => o !== 'nettoyage'));
                              }
                            }}
                            className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-lg text-gray-900">Nettoyage complet après intervention (+25€)</span>
                        </label>
                      </div>
                    </div>

                    {/* Résultat */}
                    <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          Estimation : {calculateTotal()}€
                        </div>
                        <p className="text-blue-100 text-lg mb-6">
                          * Prix indicatif, peut varier selon les conditions sur place
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                          href="tel:+352661297770"
                          className="inline-flex items-center justify-center px-6 py-4 border-2 border-white text-lg font-bold rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors"
                        >
                          <FaPhone className="mr-2" />
                          Appeler Maintenant
                        </a>
                        <button
                          onClick={() => {/* TODO: Implement form submission */}}
                          className="inline-flex items-center justify-center px-6 py-4 bg-white text-lg font-bold rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <FaEnvelope className="mr-2" />
                          Demander un Devis Détaillé
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Questions Fréquentes sur nos Services
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quels sont vos délais d'intervention ?
                  </h3>
                  <p className="text-gray-700">
                    Pour les urgences, nous intervenons 24/7 dans l'heure qui suit votre appel. 
                    Pour les interventions standard, nous proposons des créneaux sous 24-48h selon votre disponibilité.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quelles zones couvrez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    Nous intervenons dans tout le Luxembourg : Luxembourg-Ville, Esch-sur-Alzette, 
                    Differdange, Dudelange, et toutes les communes environnantes.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Garantie de nos interventions
                  </h3>
                  <p className="text-gray-700">
                    Toutes nos interventions sont garanties. Nous nous engageons sur la qualité 
                    de notre travail et assurons un suivi professionnel.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Comment se déroule une intervention ?
                  </h3>
                  <p className="text-gray-700">
                    1. Diagnostic précis du problème<br/>
                    2. Présentation détaillée de la solution<br/>
                    3. Intervention avec équipement professionnel<br/>
                    4. Tests et vérification<br/>
                    5. Nettoyage complet
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Pourquoi Nous Choisir ?
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Intervention rapide 24/7
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Devis transparent sans surprise
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Équipe qualifiée et expérimentée
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Garantie sur toutes les interventions
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Matériel professionnel de qualité
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Nos Engagements
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Respect des délais annoncés
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Propreté du chantier garantie
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Solutions durables et économiques
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Conseils personnalisés
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Service client réactif
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
