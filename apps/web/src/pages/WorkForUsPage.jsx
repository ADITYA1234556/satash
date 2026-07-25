import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const WorkForUsPage = () => {
  const sections = [
    {
      id: 'vacancies',
      title: 'Current vacancies',
      description: 'Browse the latest roles across our supported living services, community teams, and care coordination functions.',
    },
    {
      id: 'commitment',
      title: 'Commitment to staff',
      description: 'We invest in training, development and wellbeing so our team can deliver outstanding support every day.',
    },
    {
      id: 'people',
      title: 'Meet our people',
      description: 'Get to know the team behind Satash Community Care and hear how they create safe, meaningful support.',
    },
    {
      id: 'graduates',
      title: 'Graduate and apprentices',
      description: 'Explore opportunities for graduates, apprentices and career starters to grow in care and leadership roles.',
    },
    {
      id: 'volunteers',
      title: 'Volunteers',
      description: 'Discover volunteer opportunities that make a difference in our community and support service users directly.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Work for us - Satash Community Care</title>
        <meta
          name="description"
          content="Work for us at Satash Community Care. Explore vacancies, staff commitment, people stories, graduate roles, apprenticeships, and volunteering opportunities."
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
              <p className="text-sm uppercase tracking-[0.22em] text-satash-blue-100 mb-4">Work for us</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Satash Community Care</h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-satash-blue-100">
                Choose an area that fits your skills and values, then explore the role, team culture, and career support we provide.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft"
              >
                <h2 className="text-3xl font-semibold text-satash-blue-900 mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.description}</p>
              </motion.section>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkForUsPage;
