import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'orchid',
      name: 'Orchid Project',
      summary: 'A semi-detached home offering four bedrooms with en-suite and wash facilities, personalised care and community connection.',
      image: 'https://images.unsplash.com/photo-1598797369458-efbff9e6dc22?auto=format&fit=crop&w=800&q=80',
      description: 'A comfortable home with large gardens, private parking and spacious communal living areas for adults with learning disabilities.',
      link: '/projects/orchid',
    },
    {
      id: 'jasmine',
      name: 'Jasmine Bungalow',
      summary: 'A companion home with accessible ground-floor rooms, dedicated staff coordination space and person-centred support.',
      image: 'https://images.unsplash.com/photo-1726596984710-7075a1250f58?auto=format&fit=crop&w=800&q=80',
      description: 'A supportive residential house featuring strong local transport links and a focus on independence, choice and wellbeing.',
      link: '/projects/jasmine',
    },
    {
      id: 'lotus',
      name: 'Lotus Project',
      summary: 'A specialist supported living home that combines independence, life skills and meaningful community access.',
      image: 'https://plus.unsplash.com/premium_photo-1733317297744-23736fcc1995?auto=format&fit=crop&w=800&q=80',
      description: 'The Lotus Project supports people in a calm, person-centred setting with strong routines and wellbeing support.',
      link: '/projects/lotus',
    },
    {
      id: 'rose',
      name: 'Rose Project',
      summary: 'A warm residential setting focused on wellbeing, choice and social activities for adults with learning disabilities.',
      image: 'https://images.unsplash.com/photo-1579053778004-3a4d3f0fae19?auto=format&fit=crop&w=800&q=80',
      description: 'The Rose Project provides safe, compassionate care with regular planning and daily support.',
      link: '/projects/rose',
    },
    {
      id: 'lily',
      name: 'Lily Project',
      summary: 'A supportive living service centred on independence, life skills and household routines.',
      image: 'https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?auto=format&fit=crop&w=800&q=80',
      description: 'The Lily Project offers person-centred support, community participation and meaningful everyday goals.',
      link: '/projects/lily',
    },
    {
      id: 'homecare',
      name: 'Home Care',
      summary: 'Flexible home care and outreach support for people living in their own homes with tailored daily support.',
      image: 'https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=800&q=80',
      description: 'Home Care provides practical support with personal care, household tasks and community access while retaining independence.',
      link: '/projects/homecare',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Satash Community Care Projects</title>
        <meta
          name="description"
          content="Explore the Mollands Lane supported living homes from Satash Community Care with 24/7 person-centred care and community inclusion."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Satash Community Care Projects</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-satash-blue-50">
                Six specialist services that deliver supported living, home care and personalised person-centred support for adults with learning disabilities.
              </p>
              <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto text-satash-blue-100">
                Satash Community Care Projects Ltd is CQC registered and delivers personalized, person-centred support in a warm, community-focused environment.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-8 mb-12 text-center">
              <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                Our Mollands Lane homes support adults aged 18-65 with learning disabilities and associated mental health needs. Each house offers tailored care plans, regular reviews, and a strong focus on independence, choice and social inclusion.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'CQC Registered', value: '1-101645878' },
                  { label: 'Beds', value: '8 across two homes' },
                  { label: 'Location', value: 'South Ockendon, Essex' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                    <p className="text-3xl font-bold text-satash-blue-900">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group rounded-[2rem] border border-slate-200 bg-white shadow-soft overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-56 overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-satash-blue-900 mb-2">{project.name}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.summary}</p>
                    <Link
                      to={project.link}
                      className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-6 py-3 text-sm font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                    >
                      View details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-satash-blue-50">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-white p-12 shadow-soft border border-slate-200 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">Every person is supported to thrive</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                We work with service users, families, advocates and professionals to create plans that promote independence, dignity, and meaningful participation in everyday life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/reports"
                  className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                >
                  View reports
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-satash-blue-600 bg-satash-blue-50 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-blue-100 transition-colors"
                >
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

export default ProjectsPage;

