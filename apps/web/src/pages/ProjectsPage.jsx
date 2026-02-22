
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Home, Star, Brain, Users, FolderHeart as HandHeart } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: Heart,
      title: 'Complex Care',
      description:
        'Specialized support for individuals with complex health needs, delivered by our highly trained team. We provide person-centered care that addresses medical, emotional, and social needs with compassion and expertise.',
    },
    {
      icon: Home,
      title: 'Live-in Care',
      description:
        'Round-the-clock support in the comfort of your own home. Our dedicated caregivers provide 24/7 assistance while respecting your independence and personal preferences, ensuring safety and dignity.',
    },
    {
      icon: Star,
      title: 'Extra Care',
      description:
        'Enhanced support services designed to promote independent living with additional assistance when needed. We empower individuals to maintain their lifestyle while providing the care they require.',
    },
    {
      icon: Brain,
      title: 'Learning Disabilities Care',
      description:
        'Specialized, person-centered support for individuals with learning disabilities. We focus on empowerment, skill development, and creating opportunities for meaningful community participation.',
    },
    {
      icon: Users,
      title: 'Supported Living',
      description:
        'Tailored support that promotes independence and community integration. We help individuals develop life skills, make their own choices, and live fulfilling lives in their chosen environment.',
    },
    {
      icon: HandHeart,
      title: 'Home Care',
      description:
        'Flexible care services delivered in your home, from personal care to companionship. Our compassionate team provides the support you need while respecting your independence and dignity.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Satash Community Care</title>
        <meta
          name="description"
          content="Explore our comprehensive range of person-centered care services including Complex Care, Live-in Care, Extra Care, Learning Disabilities Care, Supported Living, and Home Care."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-satash-white-soft to-satash-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-satash-blue-50">
                Comprehensive, person-centered care services designed to empower independence
                and ensure dignity for every individual we serve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-satash-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Learn More?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-satash-blue-50">
                Contact us today to discuss how our person-centered care services can support
                you or your loved ones.
              </p>
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-satash-blue-600 rounded-lg font-semibold text-lg shadow-lg hover:bg-satash-blue-50 transition-colors"
                >
                  Get in Touch
                </motion.button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
