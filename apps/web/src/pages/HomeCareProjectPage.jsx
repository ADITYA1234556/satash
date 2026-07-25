import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TeamMembers from '@/components/TeamMembers.jsx';
import members from '@/data/membersPage.jsx';

const HomeCareProjectPage = () => {
  const projectKey = 'homecare';
  const membersForProject = members.filter((m) => {
    const projects = Array.isArray(m.project) ? m.project : [m.project];
    return projects.includes(projectKey);
  });
  
  return (
    <>
      <Helmet>
        <title>Home Care - Satash Community Care</title>
        <meta
          name="description"
          content="Satash Community Care Home Care offers flexible support for adults with learning disabilities who want to live independently in their own homes."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/projects" className="inline-flex items-center gap-2 text-satash-blue-100 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to all projects
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Home Care</h1>
            <p className="text-xl text-satash-blue-100">Flexible home care and outreach support for adults living independently.</p>
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
                src="https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?auto=format&fit=crop&w=800&q=80"
                alt="Home Care support"
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
                <h2 className="text-3xl font-bold text-satash-blue-900 mb-3">About our Home Care</h2>
                <p className="text-slate-600 leading-relaxed">
                  Satash Home Care supports adults with learning disabilities to live safely, comfortably and confidently in their own homes, with flexible visits and round-the-clock support when needed.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">What we provide</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Personal care, medication support and health appointments.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Practical support with cooking, shopping and household tasks.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Community access, social activity planning and wellbeing support.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Flexible support packages shaped around each person’s daily routine.</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                >
                  Talk to our Home Care team
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

export default HomeCareProjectPage;
