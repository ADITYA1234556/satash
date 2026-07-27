import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ORGANIZATION, SERVICES, PROJECTS, CARE_VALUES } from '@/config/site.config.js';

const HomePage = () => {
  const servicesList = Array.isArray(SERVICES)
    ? SERVICES
    : Object.values(SERVICES || {});

  const resources = [
    { title: 'About us', description: 'Read about our values, mission and the people we support.', href: '/about' },
    { title: 'Standards', description: 'Discover how we maintain safety, quality and compliance.', href: '/standards' },
    { title: 'Inspection reports', description: 'View short report summaries and project findings.', href: '/reports' },
    { title: 'Contact us', description: 'Get in touch to discuss referrals, services or support needs.', href: '/contact' },
  ];

  return (
    <>
      <Helmet>
        <title>{ORGANIZATION.name} - Person-Centred Support and Community Living</title>
        <meta
          name="description"
          content={ORGANIZATION.description}
        />
        <meta name="keywords" content="residential care, supported living, learning disabilities, person-centred care, Essex" />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative bg-satash-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_30%),linear-gradient(180deg,_#0f1830_0%,_#0a1226_100%)]"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
              <div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-satash-green-500/15 text-satash-green-100 text-sm font-semibold tracking-[0.12em] uppercase mb-6">
                  Specialist Residential and Domiciliary Support in South Ockendon
                </span>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                  Person-centred residential and domiciliary support for children, young people and adults.
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-satash-blue-100 leading-8 mb-8">
                  {ORGANIZATION.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/projects" className="inline-flex">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                    >
                      Explore projects
                      <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                    </motion.button>
                  </Link>
                  <Link to="/contact" className="inline-flex">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:border-white hover:bg-white/20 transition-colors"
                    >
                      Contact us
                    </motion.button>
                  </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: '5', label: 'Core projects' },
                    { value: '24/7', label: 'Care & support' },
                    { value: 'All ages', label: 'Service users supported' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl bg-white/10 p-6 shadow-soft border border-white/10">
                      <p className="text-4xl font-bold text-white">{item.value}</p>
                      <p className="mt-3 text-sm text-satash-blue-100">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="rounded-[2rem] bg-white/10 border border-white/20 p-12 shadow-soft-lg">
                  <img
                    src="/favicon-logo.png"
                    alt="Satash Community Care logo"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-satash-white-soft">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-satash-green-50 text-satash-green-700 text-sm font-semibold uppercase tracking-[0.1em] mb-4">What we do</span>
                <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">Practical support that helps people live well.</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Our services focus on safety, development, communication and long-term outcomes through consistent, safeguarding-led practice.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {servicesList.map((service, idx) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="rounded-[2rem] bg-white p-8 shadow-soft border border-slate-200"
                    >
                      <h3 className="text-2xl font-semibold text-satash-blue-900 mb-4">{service.name}</h3>
                      <p className="text-slate-600 leading-relaxed">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] bg-white p-10 shadow-soft border border-slate-200">
                <h3 className="text-3xl font-bold text-satash-blue-900 mb-6">How we support people</h3>
                <div className="space-y-5">
                  {CARE_VALUES.map((value, idx) => (
                    <motion.div
                      key={value.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="rounded-3xl bg-satash-blue-50 p-6"
                    >
                      <h4 className="text-2xl font-semibold text-satash-blue-900 mb-3">{value.title}</h4>
                      <p className="text-slate-700 leading-relaxed">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-satash-blue-50 text-satash-blue-700 text-sm font-semibold uppercase tracking-[0.1em]">Our Projects</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-satash-blue-900">Six specialist services to meet different needs.</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Five residential projects plus domiciliary care, each with clear care planning and family partnership.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-8 shadow-soft"
                >
                  <h3 className="text-2xl font-semibold text-satash-blue-900 mb-4">{project.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-satash-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-satash-green-50 text-satash-green-700 text-sm font-semibold uppercase tracking-[0.1em] mb-4">Useful resources</span>
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900">Find what matters most.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <motion.a
                  key={resource.title}
                  href={resource.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="block rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft hover:border-satash-blue-300 hover:bg-satash-blue-50 transition-colors"
                >
                  <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">{resource.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{resource.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-satash-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-satash-blue-800/95 p-12 text-center shadow-soft-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to discover how Satash supports people?</h2>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-satash-blue-100 mb-8">
                Contact us to find out more about our services, project locations, and the care we provide every day.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/projects" className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors">
                  Explore projects
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
