import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields before submitting.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Store in localStorage
    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now(),
      };
      submissions.push(newSubmission);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Submission Error',
        description: 'There was an error submitting your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Satash Community Care</title>
        <meta
          name="description"
          content="Get in touch with Satash Community Care. Contact us for inquiries about our person-centered care services, support options, or to learn more about how we can help."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-satash-white-soft to-satash-blue-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-satash-blue-600 to-satash-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-satash-blue-50">
                We're here to help. Reach out to us with any questions or to learn more about
                our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:border-satash-blue-400 focus:ring-2 focus:ring-satash-blue-200 outline-none transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:border-satash-blue-400 focus:ring-2 focus:ring-satash-blue-200 outline-none transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:border-satash-blue-400 focus:ring-2 focus:ring-satash-blue-200 outline-none transition-all resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-satash-blue-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-satash-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We're here to answer your questions and provide the information you need.
                    Feel free to reach out through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                    <div className="p-3 bg-satash-blue-50 rounded-lg">
                      <MapPin className="w-6 h-6 text-satash-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        109 - 111 Mollands Lane, South Ockendon
                        <br />
                        Essex, RM15 6DJ,
                        <br />
                        London, UK
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                    <div className="p-3 bg-satash-green-50 rounded-lg">
                      <Phone className="w-6 h-6 text-satash-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <a
                        href="tel:+442012345678"
                        className="text-satash-blue-600 hover:text-satash-blue-700 transition-colors"
                      >
                        +44 08000257606
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
                    <div className="p-3 bg-satash-blue-50 rounded-lg">
                      <Mail className="w-6 h-6 text-satash-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:contact@satashcommunitycare.com"
                        className="text-satash-blue-600 hover:text-satash-blue-700 transition-colors"
                      >
                        contact@satashcommunitycare.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-6 bg-gradient-to-br from-satash-blue-600 to-satash-green-600 text-white rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-satash-blue-50">
                    <p>We operate 24 hours a day, 7 days a week, throughout the year.</p>
                  </div>
                  <p className="mt-4 text-sm text-satash-blue-100">
                    Emergency support is available 24/7 for existing service users.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;