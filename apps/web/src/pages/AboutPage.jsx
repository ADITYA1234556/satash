
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

const AboutPage = () => {
  const coreValues = [
    {
      icon: User,
      title: 'Person-Centred Support',
      description: 'We place the individual at the heart of care, tailoring support plans to each person’s choices, preferences and aspirations.',
    },
    {
      icon: HeartHandshake,
      title: 'Respect & Dignity',
      description: 'Every person is valued, their privacy respected and their personal dignity protected in all aspects of daily life.',
    },
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Our team delivers support with empathy, kindness and a warm, reassuring approach.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Quality',
      description: 'We maintain safe, well-maintained homes with clear procedures and strong oversight for peace of mind.',
    },
    {
      icon: Users,
      title: 'Social Inclusion',
      description: 'We encourage people to be active in their local community and participate in meaningful social activities.',
    },
    {
      icon: BookOpen,
      title: 'Growth & Independence',
      description: 'We support service users to develop skills, make decisions and become as independent as possible.',
    },
  ];

  const commitments = [
    'Supporting adults with learning disabilities to experience the same activities as other adults.',
    'Creating personalised person-centred life plans with active input from each service user.',
    'Maintaining a home environment with dignity, choice, independence and social inclusion at its core.',
    'Delivering 24-hour support from trained staff and a strong multi-disciplinary care approach.',
    'Working closely with families, advocates and professionals to deliver consistent, compassionate care.',
    'Ensuring every home is CQC registered and operated to the highest standards of safety and quality.',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Satash Community Care</title>
        <meta
          name="description"
          content="Learn about Satash Community Care's mission, values and tailored support for adults with learning disabilities at Mollands Lane."
        />
      </Helmet>

      <section className="py-16 bg-satash-blue-50">
        <div className="container mx-auto px-4">
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
            <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">
              We help people live with independence, dignity and belonging.
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Satash Community Care Project Ltd supports adults with learning disabilities through residential homes at 109-111 Mollands Lane, South Ockendon. We make a positive difference by helping people reach their full potential, enjoy everyday activities and become equal members of the community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-8">
              <div className="rounded-[2rem] bg-satash-blue-50 p-10 shadow-soft border border-slate-200">
                <h3 className="text-3xl font-bold text-satash-blue-900 mb-4">What we believe</h3>
                <p className="text-slate-700 leading-relaxed">
                  Every adult with a learning disability has the right to respect, independence and choice. Our service is built on the principle that people should be valued, supported and included, with care plans designed around their individual needs and aspirations.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {commitments.map((commitment) => (
                  <div key={commitment} className="rounded-[2rem] border border-slate-200 bg-satash-blue-50 p-6 shadow-soft">
                    <p className="text-slate-700 leading-relaxed">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[2rem] bg-satash-blue-900 p-10 text-white shadow-soft border border-satash-blue-800">
                <h3 className="text-3xl font-bold mb-4">Our statement of purpose</h3>
                <p className="leading-relaxed text-satash-blue-100">
                  Satash Community Care Projects Ltd is an independent provider of residential care services for adults with learning disabilities. Our homes at 109 and 111 Mollands Lane offer eight beds across two semi-detached houses with en-suite or wash facilities, 24-hour support and a person-centred approach to living well.
                </p>
              </div>

              <div className="grid gap-4">
                {coreValues.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-satash-blue-600 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-satash-blue-900 mb-2">{value.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
