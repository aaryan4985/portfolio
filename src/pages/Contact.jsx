import { useState, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    console.log('Public Key:', process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const templateParams = {
        to_name: 'Aaryan', // You can make this dynamic if needed
        from_name: formData.name,
        message: formData.message,
        from_email: formData.email,
        subject: formData.subject,
      };

      console.log('Sending email with params:', templateParams); // For debugging

      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', result); // For debugging

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully!'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "pradhanaaryan@gmail.com",
      link: "mailto:pradhanaaryan@gmail.com" // Fixed email link
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91 9910029473",
      link: "tel:+12345678900"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Gurugram, Haryana, India",
      link: "https://g.co/kgs/2927mcP"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen py-24 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-amber-100/50">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-20"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-amber-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-amber-700 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-amber-100/80 backdrop-blur-sm rounded-2xl hover:bg-amber-200 transition-all duration-300 border border-amber-200/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-amber-600">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {info.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="font-medium text-amber-900">{info.title}</h3>
                    <p className="text-amber-700 mt-1">{info.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  variants={inputVariants}
                  whileHover="focus"
                  whileTap="blur"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div 
                  variants={inputVariants}
                  whileHover="focus"
                  whileTap="blur"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </motion.div>
              </div>

              <motion.div 
                variants={inputVariants}
                whileHover="focus"
                whileTap="blur"
              >
                <label htmlFor="subject" className="block text-sm font-medium text-amber-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </motion.div>

              <motion.div 
                variants={inputVariants}
                whileHover="focus"
                whileTap="blur"
              >
                <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </motion.div>

              {/* Status Messages */}
              <AnimatePresence>
                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-lg ${
                      status.success ? 'bg-green-100 text-green-700' : 
                      status.error ? 'bg-red-100 text-red-700' : ''
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status.loading}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-300 disabled:bg-amber-300 shadow-md"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}