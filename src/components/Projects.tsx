import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLaravel, FaReact, FaDatabase, FaCog } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'WildRide Udawalawe',
      subtitle: 'Jeep Safari Booking System',
      description: 'A comprehensive online booking platform for jeep safaris in Udawalawe National Park, featuring user management, booking system, and admin dashboard.',
      technologies: ['Laravel', 'React', 'MySQL'],
      features: [
        'User registration and authentication',
        'Online jeep booking system',
        'Package selection and customization',
        'Hotel and attraction search',
        'Admin dashboard for management',
        'Responsive design for all devices'
      ],
      image: '/project-placeholder.jpg', // This would be replaced with actual project screenshots
      github: 'https://github.com/wasanasandaruwani',
      live: '#',
      status: 'Completed'
    }
  ];

  const techIcons: { [key: string]: any } = {
    'Laravel': FaLaravel,
    'React': FaReact,
    'MySQL': FaDatabase
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing my development skills through real-world projects that demonstrate 
            problem-solving abilities and technical expertise.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-center">
                      <FaCog className="text-6xl text-primary-600 mx-auto mb-4 animate-spin" />
                      <p className="text-primary-700 font-medium">Project Screenshot</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="p-6 lg:p-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    
                    <p className="text-xl text-primary-600 font-medium">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => {
                          const Icon = techIcons[tech];
                          return (
                            <motion.div
                              key={tech}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 px-3 py-2 bg-primary-100 text-primary-700 rounded-lg font-medium"
                            >
                              {Icon && <Icon />}
                              {tech}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                      >
                        <FaGithub />
                        View Code
                      </motion.a>
                      
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              More Projects Coming Soon!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm constantly working on new projects and improving my skills. 
              Check back regularly to see my latest work and developments.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
