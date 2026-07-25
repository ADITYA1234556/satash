import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TeamMembers from '@/components/TeamMembers.jsx';
import members from '@/data/membersPage.jsx';

const LilyProjectPage = () => {
  const projectKey = 'lily';
  const membersForProject = members.filter((m) => {
    const projects = Array.isArray(m.project) ? m.project : [m.project];
    return projects.includes(projectKey);
  });

  return (
    <>
      <Helmet>
        <title>Lily Project - Satash Community Care</title>
        <meta
          name="description"
          content="The Lily Project offers person-centred supported living with a focus on independence, life skills and meaningful daily living for adults with learning disabilities."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/projects" className="inline-flex items-center gap-2 text-satash-blue-100 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to all projects
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Lily Project</h1>
            <p className="text-xl text-satash-blue-100">A supportive living service built around choice, wellbeing and everyday skills.</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?auto=format&fit=crop&w=800&q=80"
                alt="Lily Project supported living home"
                className="rounded-[2rem] w-full h-[500px] object-cover shadow-soft border border-slate-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-satash-blue-900 mb-3">About the Lily Project</h2>
                <p className="text-slate-600 leading-relaxed">
                  The Lily Project supports people in a warm, homely setting with an emphasis on personal choice, life skills and meaningful relationships.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">Service highlights</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Person-centred support for daily routines, health and independence.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Skill-building sessions focused on confidence and everyday living.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Regular community activities and social opportunities.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Support that is planned with the individual and their wider circle.</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                >
                  Find out about Lily
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <TeamMembers members={membersForProject} />
      </div>
    </>
  );
};

export default LilyProjectPage;
