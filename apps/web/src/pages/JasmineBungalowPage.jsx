import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import TeamMembers from '@/components/TeamMembers.jsx';
import members from '@/data/membersPage.jsx';

const JasmineBungalowPage = () => {
  const projectKey = 'jasmine';
  const membersForProject = members.filter((m) => {
    const projects = Array.isArray(m.project) ? m.project : [m.project];
    return projects.includes(projectKey);
  });

  return (
    <>
      <Helmet>
        <title>111 Mollands Lane - Satash Community Care</title>
        <meta
          name="description"
          content="111 Mollands Lane offers four supported living bedrooms with ground-floor accessible facilities, staff coordination space, and a strong focus on choice and community participation."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/projects" className="inline-flex items-center gap-2 text-satash-blue-100 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to all projects
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">111 Mollands Lane</h1>
            <p className="text-xl text-satash-blue-100">A four-bedroom companion home with accessible ground-floor facilities and dedicated staff support.</p>
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
                src="https://images.unsplash.com/photo-1726596984710-7075a1250f58?auto=format&fit=crop&w=800&q=80"
                alt="111 Mollands Lane"
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
                <h2 className="text-3xl font-bold text-satash-blue-900 mb-3">About 111 Mollands Lane</h2>
                <p className="text-slate-600 leading-relaxed">
                  111 Mollands Lane is the second home within the Mollands Lane Project, offering specialist supported living with a focus on accessibility, choice and community participation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">Features</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span> Four bedrooms with two ground-floor rooms offering wash/wet room facilities and two first-floor ensuite rooms.</li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span> Dedicated staff handover / office / meeting room and spacious communal living spaces.</li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span> Support for meaningful activities, hobbies and local community access.</li>
                  <li className="flex gap-3"><span className="text-satash-green-500 font-bold">•</span> Person-centred care that encourages choice, independence and regular reviews with service users.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-satash-blue-900 mb-3">Local links</h3>
                <p className="text-slate-600 leading-relaxed">
                  The home is well connected to local transport and amenities, with Ockendon train station under one mile away and access to local shops, doctors, dentists and community centres.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-satash-green-400 px-8 py-4 text-base font-semibold text-satash-blue-900 shadow-soft hover:bg-satash-green-300 transition-colors"
                >
                  Contact us about this home
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

export default JasmineBungalowPage;
