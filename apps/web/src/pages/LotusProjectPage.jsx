import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TeamMembers from '@/components/TeamMembers.jsx';
import members from '@/data/membersPage.jsx';

const LotusProjectPage = () => {
  const projectKey = 'lotus';
  const membersForProject = members.filter((m) => {
    const projects = Array.isArray(m.project) ? m.project : [m.project];
    return projects.includes(projectKey);
  });

  return (
    <>
      <Helmet>
        <title>Lotus Project - Satash Community Care</title>
        <meta
          name="description"
          content="The Lotus Project is a specialist supported living home that combines independence, wellbeing and community participation for adults with learning disabilities."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/projects" className="inline-flex items-center gap-2 text-satash-blue-100 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to all projects
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Lotus Project</h1>
            <p className="text-xl text-satash-blue-100">A specialist supported living service designed to strengthen independence and community connection.</p>
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
                src="https://plus.unsplash.com/premium_photo-1733317297744-23736fcc1995?auto=format&fit=crop&w=800&q=80"
                alt="Lotus Project supported living home"
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
                <h2 className="text-3xl font-bold text-satash-blue-900 mb-3">About the Lotus Project</h2>
                <p className="text-slate-600 leading-relaxed">
                  The Lotus Project supports adults with learning disabilities in a calm, structured environment. The service emphasises personal choice, positive routines and meaningful community engagement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">What we offer</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Individualised support plans tailored to each person’s goals.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Daily living skills coaching and wellbeing routines.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Supported access to local groups, activities and everyday community life.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Regular reviews with families, advocates and professionals.</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                >
                  Enquire about the Lotus Project
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

export default LotusProjectPage;
