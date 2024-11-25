import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    id: 1,
    title: "Comment bien préparer sa rénovation énergétique ?",
    description: "Guide complet pour planifier et réussir votre projet de rénovation énergétique, des premières étapes aux aides financières disponibles.",
    category: "Rénovation énergétique",
    author: "Marie Dubois",
    date: "15 Mars 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: 2,
    title: "Les tendances 2024 en rénovation d'intérieur",
    description: "Découvrez les dernières tendances en matière de design d'intérieur et de rénovation pour créer un espace moderne et fonctionnel.",
    category: "Design d'intérieur",
    author: "Thomas Martin",
    date: "10 Mars 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea"
  },
  {
    id: 3,
    title: "L'extension en bois : guide pratique",
    description: "Tout ce que vous devez savoir sur les extensions en bois : avantages, réglementation, coûts et étapes de construction.",
    category: "Extensions",
    author: "Lucas Bernard",
    date: "5 Mars 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    id: 4,
    title: "Optimiser l'isolation de sa maison",
    description: "Les meilleures techniques et matériaux pour une isolation performante de votre habitat, de la cave au grenier.",
    category: "Isolation",
    author: "Sophie Lambert",
    date: "1 Mars 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
  },
  {
    id: 5,
    title: "Rénover sa salle de bain : les erreurs à éviter",
    description: "Guide des erreurs courantes lors de la rénovation d'une salle de bain et comment les éviter pour un résultat optimal.",
    category: "Salle de bain",
    author: "Pierre Durand",
    date: "25 Février 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea"
  },
  {
    id: 6,
    title: "Les aides financières pour la rénovation en 2024",
    description: "Panorama complet des aides et subventions disponibles pour vos projets de rénovation : MaPrimeRénov', CEE, etc.",
    category: "Financement",
    author: "Claire Moreau",
    date: "20 Février 2024",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  }
]

export const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog Rénovation | REMAKE - Conseils et Actualités</title>
        <meta name="description" content="Découvrez nos articles sur la rénovation : conseils d'experts, tendances, guides pratiques et actualités du secteur de la rénovation en Île-de-France." />
        <meta name="keywords" content="blog rénovation, conseils rénovation, actualités rénovation, guide rénovation, Île-de-France" />
        <link rel="canonical" href="https://remake.fr/blog" />
      </Helmet>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Conseils d'experts, tendances et actualités de la rénovation
            </p>
          </motion.div>

          <motion.div 
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="relative w-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={`/blog/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-gray-600">{post.readTime} de lecture</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
