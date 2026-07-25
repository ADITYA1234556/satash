import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TeamMembers from '@/components/TeamMembers.jsx';
import members from '@/data/membersPage.jsx';

const RoseProjectPage = () => {
  const projectKey = 'rose';
  const membersForProject = members.filter((m) => {
    const projects = Array.isArray(m.project) ? m.project : [m.project];
    return projects.includes(projectKey);
  });
  
  return (
    <>
      <Helmet>
        <title>Rose Project - Satash Community Care</title>
        <meta
          name="description"
          content="The Rose Project provides a warm shared home environment for adults with learning disabilities, focusing on wellbeing, social activities and personalised support."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/projects" className="inline-flex items-center gap-2 text-satash-blue-100 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to all projects
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Rose Project</h1>
            <p className="text-xl text-satash-blue-100">A welcoming residential service centred on stability, compassion and everyday choice.</p>
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
                src="https://images.unsplash.com/photo-1579053778004-3a4d3f0fae19?auto=format&fit=crop&w=800&q=80"
                alt="Rose Project home"
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
                <h2 className="text-3xl font-bold text-satash-blue-900 mb-3">About the Rose Project</h2>
                <p className="text-slate-600 leading-relaxed">
                  The Rose Project is a homely shared care setting that supports adults with learning disabilities to build confidence, independence and meaningful routines.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">Service highlights</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Structured daily support in a safe, nurturing home.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Opportunities for social connection and local activities.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Health, wellbeing and communication support from a trained team.</span></li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span><span>Regular plans shaped by the individual, family and professionals.</span></li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                >
                  Learn more about Rose
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

export default RoseProjectPage;
