
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const InspectionReportsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Inspection Reports - Satash Community Care</title>
        <meta
          name="description"
          content="Inspection reports of Satash Community Care's services, showcasing our commitment to quality care and regulatory compliance. Read our latest Ofsted reports and see how we maintain high standards in supporting individuals with learning disabilities and complex needs."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero / Introduction Section */}
        <section className="bg-[#2E5C8A] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6 text-[#52B788]" aria-hidden="true" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Official Inspection Reports</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-blue-100 mb-8">
                Our official regulatory reports and inspection findings
              </p>
              <div className="bg-[#4A90E2]/20 p-6 rounded-xl border border-[#4A90E2]/30 text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#52B788]">Ofsted Registration</h3>
                <p className="text-blue-50 leading-relaxed">
                  Our Projects are fully registered with Ofsted, ensuring the highest standards of safety, quality, and regulatory compliance in all our services. Our most recent inspection reports are available below.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Official Reports Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <FileText className="w-12 h-12 mx-auto mb-4 text-[#4A90E2]" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A]">Inspection Reports</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#4A90E2] transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#2E5C8A] mb-2">Latest Ofsted Inspection Report</h3>
                      <p className="text-gray-700 mb-3">Comprehensive assessment of our services and compliance standards</p>
                    </div>
                    <Download className="w-6 h-6 text-[#4A90E2] flex-shrink-0" aria-hidden="true" />
                  </div>
                  <button className="bg-[#4A90E2] hover:bg-[#2E5C8A] text-white px-6 py-2 rounded-lg transition-colors duration-300">
                    Download Report
                  </button>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#4A90E2] transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#2E5C8A] mb-2">Previous Inspection Report</h3>
                      <p className="text-gray-700 mb-3">Historical inspection findings and recommendations</p>
                    </div>
                    <Download className="w-6 h-6 text-[#4A90E2] flex-shrink-0" aria-hidden="true" />
                  </div>
                  <button className="bg-[#4A90E2] hover:bg-[#2E5C8A] text-white px-6 py-2 rounded-lg transition-colors duration-300">
                    Download Report
                  </button>
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-lg font-bold text-[#2E5C8A] mb-3">Need More Information?</h3>
                <p className="text-gray-700">
                  For detailed information about our quality standards, care approach, and regulatory compliance, please visit our <a href="/standards" className="text-[#4A90E2] hover:underline font-semibold">Standards & Quality of Care</a> page.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-16 bg-[#2D6A4F]/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-2xl mx-auto text-center">
              <p className="text-gray-700 text-lg">
                All inspection reports are conducted by independent regulatory bodies and reflect our commitment to maintaining the highest standards of care and safety.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InspectionReportsPage;
