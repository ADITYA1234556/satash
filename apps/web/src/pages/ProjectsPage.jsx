import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ORGANIZATION, PROJECTS } from '@/config/site.config.js';
import { ContentSection, PageContainer } from '@/layouts/MainLayout.jsx';

/**
 * Projects Page Component
 * Showcases all specialized care services and projects
 */
const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - {ORGANIZATION.name}</title>
        <meta
          name="description"
          content="Explore our specialist residential and supported living services for adults with learning disabilities. Professional, person-centred care across multiple locations."
        />
        <meta name="keywords" content="residential care, supported living, learning disabilities, person-centred care, Essex care services" />
      </Helmet>

      {/* Hero Section */}
      <ContentSection background="blue-900" padding="py-20" className="text-white">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Specialist Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-satash-blue-50 mb-4">
              Five specialist projects plus domiciliary care, delivering person-centred support for children and young people.
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto text-satash-blue-100">
              {ORGANIZATION.description}
            </p>
          </motion.div>
        </PageContainer>
      </ContentSection>

      {/* Overview Section */}
      <ContentSection background="white" padding="py-16">
        <PageContainer>
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-satash-blue-900 mb-4">
                Comprehensive Support Across Multiple Settings
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our project settings and outreach support focus on learning disabilities and associated needs, with safeguarding, communication, education and daily development at the centre of each plan.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: 'Core Focus', value: 'Person-Centred Care' },
                { label: 'Setting', value: 'South Ockendon, Essex' },
                { label: 'Regulatory Status', value: 'Ofsted Registered' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-6 shadow-soft"
                >
                  <p className="text-sm font-semibold text-satash-blue-600 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-2xl font-bold text-satash-blue-900">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </ContentSection>

      {/* Projects Grid */}
      <ContentSection background="soft-white" padding="py-20">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">
              Our Current Service Portfolio
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each project is designed to meet specific care needs while maintaining our core values of dignity, independence, and community inclusion.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-[2rem] border border-slate-200 bg-white shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <p className="text-xs font-bold text-satash-green-600 uppercase tracking-wider mb-2">
                      {project.type}
                    </p>
                    <h3 className="text-xl font-bold text-satash-blue-900 mb-2">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <p className="text-sm text-satash-blue-600 font-semibold mb-4">
                    📍 {project.location}
                  </p>

                  <Link
                    to={project.link}
                    className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-6 py-3 text-sm font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors mt-auto"
                  >
                    Explore this service
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </PageContainer>
      </ContentSection>

      {/* Care Approach Section */}
      <ContentSection background="white" padding="py-20">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-satash-blue-900 mb-4">
                Our Care Approach
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every service shares common values and professional standards
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: '24/7 Professional Support',
                  description: 'Trained staff available round-the-clock to provide care, support with daily activities, and emergency assistance.',
                },
                {
                  title: 'Individualised Care Plans',
                  description: 'Each person receives a personalised plan developed collaboratively, reviewed regularly, and adapted to changing needs.',
                },
                {
                  title: 'Community Participation',
                  description: 'We actively facilitate meaningful engagement in local activities, hobbies, employment, and social relationships.',
                },
                {
                  title: 'Health & Wellbeing',
                  description: 'Practical support for health appointments, medication procedures, and wellbeing monitoring in partnership with families and professionals.',
                },
                {
                  title: 'Safety & Safeguarding',
                  description: 'Rigorous staff training, clear safeguarding procedures, and commitment to protecting vulnerable adults.',
                },
                {
                  title: 'Family Partnership',
                  description: 'Collaborative working with families and advocates to ensure consistency, communication, and shared decision-making.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-8 shadow-soft"
                >
                  <h3 className="text-lg font-bold text-satash-blue-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageContainer>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="blue-900" padding="py-16" className="text-white">
        <PageContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-satash-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our services can meet individual needs or to arrange a visit to one of our homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
              >
                About Our Approach
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </PageContainer>
      </ContentSection>
    </>
  );
};

export default ProjectsPage;

