import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Users, GraduationCap, HeartHandshake, ShieldCheck, Award, Clock3, BookOpenCheck } from 'lucide-react';
import { ORGANIZATION } from '@/config/site.config.js';

const WorkForUsPage = () => {
  const vacancyTypes = [
    {
      id: 'vacancies',
      title: 'Current vacancies',
      description: 'Support Worker, Project Worker, Team Leader and specialist care roles across our services.',
      cta: 'View current vacancies',
    },
    {
      id: 'volunteers',
      title: 'Volunteer opportunities',
      description: 'Contribute your time and skills to support children and young people in meaningful ways.',
      cta: 'Explore volunteering',
    },
    {
      id: 'graduates',
      title: 'Graduates and apprentices',
      description: 'Start your career in care with structured development, supervision and progression pathways.',
      cta: 'Graduate and apprentice routes',
    },
  ];

  const benefits = [
    { icon: BookOpenCheck, title: 'Learning & Development', description: 'Role-based training, induction, safeguarding updates and progression support.' },
    { icon: Clock3, title: 'Flexible Working', description: 'Shift patterns and rotas that support service continuity and team wellbeing.' },
    { icon: Award, title: 'Recognition', description: 'We celebrate contribution, consistency and professional growth across teams.' },
    { icon: ShieldCheck, title: 'Safe Practice Culture', description: 'Clear safeguarding standards, supervision, and strong operational support.' },
  ];

  const stories = [
    {
      name: 'Support Worker Journey',
      role: 'From frontline care to leadership',
      quote:
        'I joined to make a difference and found a team that invested in my growth. With mentoring and training, I developed confidence, skills, and a real long-term career path.',
    },
    {
      name: 'Project Team Experience',
      role: 'Collaborative and person-centred culture',
      quote:
        'What stands out is the teamwork. We plan carefully, communicate openly with families and professionals, and always keep the child or young person at the centre of decisions.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Work for us - {ORGANIZATION.name}</title>
        <meta
          name="description"
          content="Join Satash Community Care Projects Ltd. Explore current vacancies, graduate and apprentice pathways, volunteer opportunities, benefits and staff development."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Build a meaningful career with {ORGANIZATION.shortName}</h1>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed text-satash-blue-100 mb-8">
                Join a safeguarding-led, person-centred service where your work helps children and young people feel safe, valued and supported to thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#vacancies" className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors">
                  View vacancies
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors">
                  Contact recruitment
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="commitment" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3 mb-14">
              {[
                { label: 'Core Focus', value: 'Person-Centred Support' },
                { label: 'Service Area', value: 'South Ockendon, Essex' },
                { label: 'Regulatory Culture', value: 'Safeguarding First' },
              ].map((item) => (
                <div key={item.label} className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-8 shadow-soft text-center">
                  <p className="text-sm font-semibold text-satash-blue-600 uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-satash-blue-900">{item.value}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">Why work with us</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We invest in our staff through training, supervision and practical support. You’ll work in a collaborative environment where quality, safeguarding and outcomes drive decision-making every day.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="vacancies" className="py-16 bg-satash-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-4">Vacancies</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Explore opportunities across operational care, specialist support and career-entry pathways.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {vacancyTypes.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id === 'vacancies' ? 'vacancies' : section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
              >
                  <h3 className="text-2xl font-semibold text-satash-blue-900 mb-4">{section.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{section.description}</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-6 py-3 text-sm font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                  >
                    {section.cta}
                  </a>
              </motion.section>
            ))}
          </div>
          </div>
        </section>

        <section id="people" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-4">Meet our people</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Real experiences from colleagues who have built rewarding careers in care.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {stories.map((story, index) => (
                <motion.article
                  key={story.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-8 shadow-soft"
                >
                  <h3 className="text-2xl font-semibold text-satash-blue-900 mb-2">{story.name}</h3>
                  <p className="text-sm uppercase tracking-wide text-satash-blue-600 font-semibold mb-4">{story.role}</p>
                  <p className="text-slate-700 leading-relaxed">{story.quote}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-satash-white-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-4">Benefits</h2>
              <p className="text-lg text-slate-600 leading-relaxed">Support that helps you grow, perform and build a long-term career.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-satash-blue-100 text-satash-blue-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-satash-blue-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-satash-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-satash-blue-800/95 p-12 text-center shadow-soft-lg max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to apply?</h2>
              <p className="text-lg text-satash-blue-100 max-w-2xl mx-auto mb-8">
                Start your next role with a team that values quality care, professional development and meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#vacancies" className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors">
                  Browse vacancies
                </a>
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

export default WorkForUsPage;
