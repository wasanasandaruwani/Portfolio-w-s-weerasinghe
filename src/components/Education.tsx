import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      period: '2023 – Present',
      degree: 'HNDIT',
      institution: 'Advanced Technological Institute, Rathnapura',
      description: 'Higher National Diploma in Information Technology',
      type: 'education'
    },
    {
      period: '2020',
      degree: 'G.C.E. A/L',
      institution: 'Biological Science',
      description: 'Advanced Level Examination in Biological Science',
      type: 'education'
    },
    {
      period: '2016',
      degree: 'G.C.E. O/L',
      institution: 'Ordinary Level',
      description: 'Ordinary Level Examination',
      type: 'education'
    }
  ];

  const certificates = [
    {
      name: 'ESOFT IT Certificate',
      description: 'Information Technology fundamentals and basics'
    },
    {
      name: 'Advanced English',
      description: 'Advanced English language proficiency'
    },
    {
      name: 'Web Design Course',
      description: 'University of Moratuwa - Web design and development'
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My educational journey and professional certifications that have shaped my IT career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-primary-600" />
              Educational Background
            </h3>

            <div className="space-y-8">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-2 w-3 h-3 bg-primary-600 rounded-full"></div>
                  
                  {/* Content */}
                  <div className="ml-16">
                    <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
                      <FaCalendarAlt />
                      <span className="font-medium">{item.period}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.degree}
                    </h4>
                    
                    <p className="text-lg text-gray-700 mb-2">
                      {item.institution}
                    </p>
                    
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
              <FaCertificate className="text-primary-600" />
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaCertificate className="text-primary-600 text-xl" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Continuous Learning Journey
              </h4>
              <p className="text-gray-700 leading-relaxed">
                I believe in the power of continuous education and skill development. 
                Each certification represents a step forward in my professional growth 
                and commitment to excellence in the IT field.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
