import { motion } from 'framer-motion';
import { 
  FaJava, FaCode, FaDatabase, FaTools, FaUsers, 
  FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaReact,
  FaPhp, FaPython, FaServer
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'Java', icon: FaJava, level: 'Advanced' },
        { name: 'C#', icon: FaCode, level: 'Intermediate' },
        { name: 'PHP', icon: FaPhp, level: 'Intermediate' },
        { name: 'Python', icon: FaPython, level: 'Basic' }
      ]
    },
    {
      title: 'Web Development',
      icon: FaHtml5,
      skills: [
        { name: 'HTML', icon: FaHtml5, level: 'Advanced' },
        { name: 'CSS', icon: FaCss3Alt, level: 'Advanced' },
        { name: 'JavaScript', icon: FaJs, level: 'Intermediate' }
      ]
    },
    {
      title: 'Frameworks',
      icon: FaReact,
      skills: [
        { name: 'Laravel', icon: FaLaravel, level: 'Basic' },
        { name: 'React', icon: FaReact, level: 'Basic' }
      ]
    },
    {
      title: 'Database',
      icon: FaDatabase,
      skills: [
        { name: 'MySQL', icon: FaDatabase, level: 'Intermediate' }
      ]
    },
    {
      title: 'Tools',
      icon: FaTools,
      skills: [
        { name: 'VS Code', icon: FaCode, level: 'Advanced' },
        { name: 'NetBeans', icon: FaCode, level: 'Intermediate' },
        { name: 'XAMPP', icon: FaServer, level: 'Intermediate' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: FaUsers,
      skills: [
        { name: 'Teamwork', icon: FaUsers, level: 'Advanced' },
        { name: 'Communication', icon: FaUsers, level: 'Advanced' },
        { name: 'Problem-Solving', icon: FaCode, level: 'Advanced' },
        { name: 'Fast Learning', icon: FaCode, level: 'Advanced' }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-600 bg-green-100';
      case 'Intermediate':
        return 'text-blue-600 bg-blue-100';
      case 'Basic':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies in various areas of IT and development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <category.icon className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-gray-600 text-lg" />
                      <span className="font-medium text-gray-800">{skill.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              My passion for learning drives me to explore new frameworks, tools, and methodologies 
              to deliver better solutions and stay competitive in the IT industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
