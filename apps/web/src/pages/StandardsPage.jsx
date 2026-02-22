import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  MapPin, 
  Globe, 
  CheckCircle, 
  Stethoscope, 
  Users, 
  ShieldAlert, 
  AlertTriangle 
} from 'lucide-react';

const StandardsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Our Standards & Quality of Care - Satash Community Care</title>
        <meta
          name="description"
          content="Learn about Satash Community Care's commitment to quality, safety, and person-centered care standards including accommodation, health, and safeguarding."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero / Introduction Section */}
        <section className="bg-[#2E5C8A] text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-[#52B788]" aria-hidden="true" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Standards & Quality of Care</h1>
              <p className="text-xl md:text-2xl leading-relaxed text-blue-100 mb-8">
                Committed to providing the highest standards of person-centered care that supports independence and ensures dignity.
              </p>
              <div className="bg-[#4A90E2]/20 p-6 rounded-xl border border-[#4A90E2]/30 text-left">
                <h3 className="text-xl font-semibold mb-3 text-[#52B788]">Our Commitment</h3>
                <p className="text-blue-50 leading-relaxed">
                  We are dedicated to delivering exceptional, person-centered support that places service users at the heart of everything we do. Our Standards ensure the highest levels of safety, quality, and regulatory compliance in all our services.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quality and Purpose of Care */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Heart className="w-12 h-12 mx-auto mb-4 text-[#4A90E2]" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A]">Quality and Purpose of Care</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-[#52B788]/10 p-8 rounded-2xl border border-[#52B788]/20">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Range of Needs</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We specialize in supporting young adults who may have:
                  </p>
                  <ul className="space-y-3">
                    {['Learning Disabilities', 'Autism Spectrum Conditions', 'Complex Care Needs', 'Challenging Behaviours', 'Communication Difficulties'].map((need, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#52B788] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{need}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="bg-[#4A90E2]/10 p-8 rounded-2xl border border-[#4A90E2]/20">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Ethos & Outcomes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our ethos is built on the foundation of respect, dignity, and empowerment. We strive to achieve positive outcomes by focusing on individual strengths, promoting independence, and developing essential life skills. We believe that with the right support, every young adult can reach their full potential and lead a fulfilling life within their community.
                  </p>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accommodation Details */}
        <section className="py-16 bg-[#2D6A4F]/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Shield className="w-12 h-12 mx-auto mb-4 text-[#2D6A4F]" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F]">Accommodation Details</h2>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#2E5C8A] mb-4">Facilities</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our Projects are spacious, detached property designed specifically to meet the needs of our service users. It features:
                    </p>
                    <ul className="space-y-3">
                      {['Fully furnished, personalized bedrooms', 'Accessible en-suite bathrooms', 'Spacious communal lounge and dining area', 'Modern, fully-equipped sensory kitchen', 'Large, secure landscaped garden', 'Dedicated sensory and relaxation room'].map((facility, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E5C8A] mb-4">Safety Features</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The safety and well-being of our residents is paramount. The bungalow is equipped with:
                    </p>
                    <ul className="space-y-3">
                      {['Comprehensive fire safety systems', 'Secure entry and exit points', 'Assistive technology where appropriate', '24/7 staff presence and support', 'Regular health and safety audits'].map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[#4A90E2]" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A] mb-8">Location & Community</h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-3">Local Amenities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Situated in a quiet, residential neighborhood, Jasmine Bungalow offers easy access to local shops, parks, leisure centers, and healthcare facilities. This prime location encourages community integration and social participation.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#2D6A4F] mb-3">Transport Links</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Excellent public transport links are available nearby, including bus routes and train stations, facilitating travel for education, employment, leisure activities, and family visits.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cultural, Linguistic and Religious Support */}
        <section className="py-16 bg-[#4A90E2]/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-[#52B788]" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A] mb-6">Cultural, Linguistic & Religious Support</h2>
              <p className="text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                We celebrate diversity and are deeply committed to supporting the cultural, linguistic, and religious needs of every individual. Care plans are meticulously tailored to respect personal beliefs, dietary requirements, and cultural practices. We actively facilitate attendance at places of worship, celebrate cultural festivals, and provide access to translation services or staff who speak multiple languages whenever possible, ensuring everyone feels truly at home and understood.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Health Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Stethoscope className="w-12 h-12 mx-auto mb-4 text-[#4A90E2]" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A]">Health & Wellbeing</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Healthcare Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We ensure all service users are registered with local healthcare providers, including GPs, dentists, and opticians upon admission. Comprehensive health action plans are developed and regularly reviewed to address all physical and mental health needs proactively.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Medication Administration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our staff are fully trained in the safe handling, administration, and recording of medication. We follow strict protocols and regular audits to ensure compliance with national guidelines, promoting self-administration where safe and appropriate.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Health Promotion</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We actively promote healthy lifestyles through balanced, nutritious meal planning, encouraging regular physical activity, and providing education on personal hygiene and healthy choices tailored to individual understanding.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Specialized Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We maintain strong links with specialized community health teams, including speech and language therapists, occupational therapists, and community learning disability nurses, ensuring seamless access to expert support when required.
                  </p>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Positive Relationships Section */}
        <section className="py-16 bg-[#52B788]/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-12 h-12 mx-auto mb-4 text-[#52B788]" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F]">Positive Relationships</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Contact Arrangements</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We actively encourage and facilitate meaningful contact with family and friends. Visiting times are flexible, and we provide comfortable, private spaces for visits. We also support home visits and holidays with family where appropriate.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Communication Methods</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We utilize various communication methods, including phone calls, video calls, and letters, to help service users maintain relationships. Staff provide necessary support to use technology and ensure communication is accessible.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Key Worker Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Each individual is assigned a dedicated Key Worker who builds a trusting relationship, acts as a primary point of contact for families, and advocates for the service user's needs, wishes, and aspirations.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Partnership Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We believe in working collaboratively with families, advocates, and external professionals. Regular reviews and open communication channels ensure everyone involved in the individual's care is informed and engaged.
                  </p>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Protection of Children Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <ShieldAlert className="w-12 h-12 mx-auto mb-4 text-red-500" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E5C8A]">Protection of Children & Vulnerable Adults</h2>
              </div>
              
              <div className="space-y-12">
                {/* Safeguarding */}
                <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">Safeguarding</h3>
                  <div className="space-y-6">
                    <article>
                      <h4 className="text-xl font-semibold text-red-800 mb-2">Value Statement</h4>
                      <p className="text-gray-800 leading-relaxed">
                        Satash Community Care is fundamentally committed to the safety and protection of all individuals in our care. We maintain a zero-tolerance approach to any form of abuse, neglect, or exploitation.
                      </p>
                    </article>
                    <article>
                      <h4 className="text-xl font-semibold text-red-800 mb-2">Guidance</h4>
                      <p className="text-gray-800 leading-relaxed">
                        All staff undergo rigorous safeguarding training and are familiar with local authority multi-agency safeguarding procedures. We maintain robust reporting mechanisms and ensure all concerns are escalated immediately to the appropriate authorities.
                      </p>
                    </article>
                  </div>
                </div>

                {/* Bullying */}
                <div className="bg-[#4A90E2]/5 p-8 rounded-xl border border-[#4A90E2]/20">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-6">Bullying</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <article>
                      <h4 className="text-xl font-semibold text-[#2E5C8A] mb-2">Value Statement</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Every individual has the right to live in an environment free from bullying, harassment, and intimidation. We actively promote a culture of respect and kindness.
                      </p>
                    </article>
                    <article>
                      <h4 className="text-xl font-semibold text-[#2E5C8A] mb-2">Guidance</h4>
                      <p className="text-gray-700 leading-relaxed">
                        We recognize that bullying can take many forms (physical, verbal, emotional, cyber). Staff are trained to identify signs of bullying and intervene promptly and sensitively.
                      </p>
                    </article>
                    <article>
                      <h4 className="text-xl font-semibold text-[#2E5C8A] mb-2">Procedure for Staff</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Staff must report any observed or suspected bullying immediately. Incidents are recorded, investigated, and addressed through targeted support, mediation, and risk management strategies.
                      </p>
                    </article>
                    <article>
                      <h4 className="text-xl font-semibold text-[#2E5C8A] mb-2">Child Protection</h4>
                      <p className="text-gray-700 leading-relaxed">
                        If bullying reaches the threshold of significant harm, it will be treated as a safeguarding concern and referred to the local authority safeguarding team and police if necessary.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Absence Without Authority Section */}
        <section className="py-16 bg-[#2D6A4F]/5">
          <div className="container mx-auto px-4">
            <motion.div {...fadeIn} className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-500" aria-hidden="true" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F]">Absence Without Authority</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-400">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Risk Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive risk assessments are conducted for all individuals to identify the likelihood of absconding. Preventative measures and individualized support plans are implemented to minimize risks while respecting independence.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-400">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Absconding Procedures</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the event of an unauthorized absence, staff follow immediate, clear protocols. This includes searching the immediate vicinity, contacting known associates or family, and gathering essential information for authorities.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-400">
                  <h3 className="text-2xl font-bold text-[#2E5C8A] mb-4">Police Involvement</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If an individual cannot be located and is deemed at risk, the police are notified immediately. We provide authorities with a detailed profile, recent photograph, and known risk factors to assist in a safe return.
                  </p>
                </article>

                <article className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-orange-400">
                  <h3 className="text-2xl font-bold text-[#2D6A4F] mb-4">Return Support</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upon return, the individual is welcomed back warmly and assessed for any immediate health or wellbeing needs. A debriefing occurs to understand the reasons for the absence and to update risk assessments and support plans accordingly.
                  </p>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default StandardsPage;
