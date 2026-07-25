
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const InspectionReportsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const projectReports = [
    {
      id: 'orchid-project',
      title: 'Orchid Project',
      summary: 'A vibrant supported living service delivering person-centred care and strong community engagement.',
      detail: 'The report highlights excellent staff consistency, meaningful activity planning, and strong safeguarding practice at Orchid Project.',
    },
    {
      id: 'jasmine-bungalow',
      title: 'Jasmine Bungalow',
      summary: 'A residential home praised for personalised independence plans and responsive support.',
      detail: 'Inspectors noted clear communication with families, strong risk management, and consistent progress reviews at Jasmine Bungalow.',
    },
    {
      id: 'lotus-project',
      title: 'Lotus Project',
      summary: 'An empowering community service with a positive, strengths-based approach.',
      detail: 'The report describes Lotus Project as an environment where people feel valued, supported and able to contribute to local activities.',
    },
    {
      id: 'rose-project',
      title: 'Rose Project',
      summary: 'A high-quality residential setting offering stable care for complex needs.',
      detail: 'Inspectors praised Rose Project for excellent multi-disciplinary coordination and robust safety systems.',
    },
    {
      id: 'lily-project',
      title: 'Lily Project',
      summary: 'A calm, care-led project that focuses on wellbeing and respectful support.',
      detail: 'Lily Project is recognised for strong leadership, effective staff training, and responsive health planning.',
    },
    {
      id: 'home-care',
      title: 'Home Care',
      summary: 'A purpose-designed home-based service with a focus on independent daily living skills.',
      detail: 'Home Care is noted for its supportive environment and clear plans around choice, dignity and personal development.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Inspection Reports - Satash Community Care</title>
        <meta
          name="description"
          content="Inspection reports for Satash Community Care projects, showing commitment to quality care and regulatory compliance."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <section className="bg-[#2E5C8A] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6 text-[#52B788]" aria-hidden="true" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Official Inspection Reports</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-blue-100 mb-8">
                Explore project-level report summaries and follow the live report sections for every service location.
              </p>
              <div className="bg-[#4A90E2]/20 p-6 rounded-xl border border-[#4A90E2]/30 text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#52B788]">Registered services</h3>
                <p className="text-blue-50 leading-relaxed">
                  Our projects are registered and inspected against national standards to ensure safe, person-centred care across all locations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <FileText className="w-12 h-12 mx-auto mb-4 text-[#4A90E2]" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A]">Project report summaries</h2>
                <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                  Scroll through each project for a concise report description and the latest quality highlights.
                </p>
              </div>

              <div className="grid gap-6">
                {projectReports.map((project) => (
                  <section
                    key={project.id}
                    id={project.id}
                    className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#2E5C8A]">{project.title}</h3>
                        <p className="mt-2 text-slate-700">{project.summary}</p>
                      </div>
                      <a
                        href={`#${project.id}`}
                        className="inline-flex items-center justify-center rounded-full border border-satash-blue-700 bg-satash-blue-50 px-6 py-3 text-sm font-semibold text-satash-blue-900 hover:bg-satash-blue-100 transition-colors"
                      >
                        View live report section
                      </a>
                    </div>

                    <div className="bg-white rounded-[1.75rem] p-6 border border-slate-200">
                      <h4 className="text-lg font-semibold text-[#2E5C8A] mb-3">Report detail</h4>
                      <p className="text-slate-700 leading-relaxed">{project.detail}</p>
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#2D6A4F]/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center rounded-[2rem] bg-white p-10 shadow-soft border border-slate-200">
              <h2 className="text-3xl font-bold text-[#2E5C8A] mb-4">Want the full reports?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our full inspection findings are available through regulatory channels. Contact us on the contact page to request the latest report pack or discuss our quality approach.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-satash-blue-700 px-8 py-4 text-base font-semibold text-white shadow-soft hover:bg-satash-blue-800 transition-colors"
              >
                Contact us for details
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InspectionReportsPage;
