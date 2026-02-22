
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  User, 
  Zap, 
  HeartHandshake, 
  Heart, 
  Lightbulb, 
  Award, 
  Shield, 
  ShieldCheck, 
  CheckCircle, 
  Users,
  Check
} from 'lucide-react';
import ValueCard from '@/components/ValueCard.jsx';

const AboutPage = () => {
  const coreValues = [
    {
      icon: User,
      title: 'Person Centred',
      description: 'Placing the individual at the heart of their care, ensuring their choices, needs, and preferences guide all support provided.',
    },
    {
      icon: Zap,
      title: 'Empowering Service Users',
      description: 'Providing the tools, encouragement, and opportunities for individuals to take control of their lives and reach their full potential.',
    },
    {
      icon: HeartHandshake,
      title: 'Respect',
      description: 'Treating everyone with unconditional positive regard, valuing their unique identity, background, and personal journey.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Delivering care with genuine empathy, kindness, and a deep understanding of the emotional and physical needs of those we support.',
    },
    {
      icon: Lightbulb,
      title: 'Challenging Ways of Working',
      description: 'Continuously seeking innovative approaches and improvements to provide the highest quality of care and support possible.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in all aspects of our service delivery, training, and organizational practices.',
    },
    {
      icon: Shield,
      title: 'Dignity in Care',
      description: 'Ensuring that every interaction upholds the self-respect and personal dignity of the individuals we support.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety',
      description: 'Creating and maintaining secure environments where individuals feel protected, comfortable, and free from harm.',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Acting with honesty, transparency, and strong moral principles in all our relationships and professional duties.',
    },
    {
      icon: Users,
      title: 'Community Inclusion',
      description: 'Actively promoting and facilitating meaningful participation and integration within the wider local community.',
    },
  ];

  const commitments = [
    "Delivering truly person-centred care that adapts to changing needs and aspirations.",
    "Promoting independence and empowering individuals to make their own life choices.",
    "Ensuring the highest standards of safety and safeguarding in all our environments.",
    "Fostering a culture of continuous improvement and professional development for our staff.",
    "Working in close partnership with families, advocates, and healthcare professionals.",
    "Actively supporting meaningful community integration and social inclusion."
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Satash Community Care</title>
        <meta
          name="description"
          content="Learn about Satash Community Care's vision, mission, commitments, and core values in providing dignified, person-centered care."
        />
      </Helmet>

      <div className="min-h-screen bg-satash-white-soft">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-satash-green-600 to-satash-green-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-satash-green-50">
                Dedicated to empowering individuals through compassionate, person-centered care
                that respects dignity and promotes independence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our vision is to create safe, inclusive, and nurturing homes where individuals with learning difficulties are empowered to live fulfilling lives. We strive to be a beacon of excellence in community care, ensuring that every service user is supported to achieve their personal goals, maintain their independence, and be an active, valued member of their community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-satash-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our mission is to provide exceptional, person-centred support that places the service user at the heart of everything we do. We are dedicated to valuing and supporting individuals and their families, delivering tailored services that respect dignity, promote choice, and foster a deep sense of belonging and well-being.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-10 text-center">
                Our Commitments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commitments.map((commitment, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-satash-green-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 bg-satash-green-400 rounded-full flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {commitment}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-br from-satash-blue-50 to-satash-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-satash-blue-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape the care we provide to our service users every single day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <ValueCard
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
