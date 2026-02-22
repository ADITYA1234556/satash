
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

      {/* Introductory Section */}
      <section className="py-16 bg-satash-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-satash-blue-900 mb-6">
              Welcome to Satash Community Care
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Satash Community Care is a respectable independent service provider for Adults with Learning Difficulties; we provide unique and tailored person-centred services. Everything we do is about valuing and supporting individuals and their families. Our Service User's 'Drive' all we do and are at the 'Centre' of all we do.
            </p>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default AboutPage;
