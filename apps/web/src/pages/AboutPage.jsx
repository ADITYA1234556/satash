
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  User,
  HeartHandshake,
  Heart,
  ShieldCheck,
  Users,
  BookOpen,
} from 'lucide-react';
import { ORGANIZATION, CARE_VALUES } from '@/config/site.config.js';
import { ContentSection, PageContainer } from '@/layouts/MainLayout.jsx';

const AboutPage = () => {
  const commitments = [
    'Supporting children and young people with learning disabilities through safe, structured and nurturing environments.',
    'Creating person-centred plans with active involvement from the young person, families and professionals.',
    'Promoting rights, dignity, equality and anti-discriminatory practice in all areas of care.',
    'Delivering 24/7 support with trained staff, safeguarding oversight and clear incident reporting.',
    'Working in partnership with schools, social workers and health professionals for consistent outcomes.',
    'Maintaining Ofsted-registered standards and continuous service improvement through quality assurance.',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - {ORGANIZATION.name}</title>
        <meta
          name="description"
          content="Learn about Satash Community Care Project Ltd, our statement of purpose, safeguarding-led approach, and specialist support for children and young people."
        />
        <meta name="keywords" content="about us, statement of purpose, children services, Ofsted, safeguarding, person-centred care" />
      </Helmet>

      <ContentSection background="blue-50" padding="py-16">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-satash-green-50 text-satash-green-700 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Our mission
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">
              We support children and young people to feel safe, valued and ready to thrive.
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              {ORGANIZATION.name} provides specialist support for children and young people, including Jasmine Bungalow at 53 Mollands Lane. Our approach combines person-centred care, safeguarding, education support and family partnership.
            </p>
          </motion.div>
        </PageContainer>
      </ContentSection>

      <ContentSection background="white" padding="py-16">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            {/* Left Column: What We Believe & Commitments */}
            <div className="space-y-8">
              <div className="rounded-[2rem] bg-satash-blue-50 p-10 shadow-soft border border-slate-200">
                <h2 className="text-3xl font-bold text-satash-blue-900 mb-4">What we believe</h2>
                <p className="text-slate-700 leading-relaxed">
                  Every child and young person has the right to safety, dignity, voice and opportunity. Our services are built on person-centred planning, safeguarding, consistent routines and respectful partnership with families and professionals.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {commitments.map((commitment, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-6 shadow-soft hover:shadow-lg transition-shadow"
                  >
                    <p className="text-slate-700 leading-relaxed">{commitment}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Statement of Purpose & Core Values */}
            <div className="space-y-8">
              <div className="rounded-[2rem] bg-satash-blue-900 p-10 text-white shadow-soft border border-satash-blue-800">
                <h2 className="text-3xl font-bold mb-4">Our statement of purpose</h2>
                <p className="leading-relaxed text-satash-blue-100">
                  {ORGANIZATION.name} delivers residential and community support with a clear statement of purpose: safe care, positive development, and successful transition outcomes for each child or young person.
                </p>
              </div>

              <div className="grid gap-4">
                {CARE_VALUES.map((value) => {
                  const iconComponents = {
                    User,
                    HeartHandshake,
                    Heart,
                    ShieldCheck,
                    Users,
                    BookOpen,
                  };
                  const Icon = iconComponents[value.icon];
                  return (
                    <motion.div
                      key={value.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="flex gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft hover:shadow-lg transition-shadow"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-satash-blue-600 text-white flex-shrink-0">
                        {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-satash-blue-900 mb-2">{value.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </PageContainer>
      </ContentSection>

      {/* Additional Section: Why Choose Us */}
      <ContentSection background="soft-white" padding="py-16">
        <PageContainer>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-satash-blue-900 mb-4">
                Why families choose Satash
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We combine specialist experience, safe care practice and clear communication to deliver stable, high-quality support for each child and young person.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Ofsted-Registered Service Quality',
                  description: 'Our children’s service operates to Ofsted-regulated standards, with robust governance and quality oversight.',
                },
                {
                  title: 'Trained & Compassionate Team',
                  description: 'Our team is trained in safeguarding, behaviour support, risk awareness and person-centred practice.',
                },
                {
                  title: 'Family Partnership',
                  description: 'We work collaboratively with families, advocates and professionals to deliver coordinated, consistent care.',
                },
                {
                  title: 'Outcomes & Transition Focus',
                  description: 'We focus on meaningful progress in wellbeing, education, skills and readiness for future transitions.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
                >
                  <h3 className="text-xl font-semibold text-satash-blue-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </ContentSection>
    </>
  );
};

export default AboutPage;
