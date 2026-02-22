import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Check,
  User, 
  Zap, 
  HeartHandshake, 
  Heart, 
  Lightbulb, 
  Award, 
  Shield, 
  ShieldCheck, 
  CheckCircle, 
  Users
} from 'lucide-react';
import ValueCard from '@/components/ValueCard.jsx';

const HomePage = () => {
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
        <title>Satash Community Care - Person-Centred Care That Supports Independence</title>
        <meta
          name="description"
          content="Satash Community Care provides person-centered care services that empower independence and ensure dignity for all individuals in our community."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1608140307536-059abac22ef8')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-satash-blue-900/90 via-satash-blue-800/85 to-satash-blue-700/80"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img
                  src="https://horizons-cdn.hostinger.com/d9b46d16-4dc3-4cd0-84b6-ed6cf9e16076/fe5debdf442433f8f7ad6befc8157312.png"
                  alt="Satash Community Care logo"
                  className="h-[80px] md:h-[110px] w-auto object-contain"
                />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Supporting Independent Lives
                <br />
                <span className="text-satash-green-400">with Care and Respect</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-satash-blue-50">
                At Satash Community Care, we believe in person-centered care that respects
                individual choices, promotes independence, and upholds the dignity of every
                person we serve. Our compassionate team is dedicated to empowering individuals
                to live fulfilling lives in their communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-satash-blue-400 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-satash-blue-500 transition-colors flex items-center space-x-2"
                  >
                    <span>Explore Our Projects</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </motion.button>
                </Link>

                <Link to="/reports">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-satash-blue-600 transition-all"
                  >
                    Inspection reports
                  </motion.button>
                </Link>

                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-satash-blue-600 transition-all"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-20 bg-satash-white-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are committed to providing high-quality, person-centered care that empowers
                individuals to maintain their independence, make their own choices, and live
                with dignity. Through compassionate support and tailored services, we help
                people thrive in their communities while respecting their unique needs,
                preferences, and aspirations.
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                A society where individuals with support needs are empowered to lead fulfilling
                lives with autonomy, choice, and dignity. We envision communities that are
                inclusive, supportive, and where each person's voice is heard and valued.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitments Section */}
        <section className="py-16 bg-satash-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
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
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
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

        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-br from-satash-blue-50 to-satash-green-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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

export default HomePage;