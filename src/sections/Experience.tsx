import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
  id: 1,
  title: 'Software Development Intern',
  company: 'ADesignGuy.co',
  period: 'Aug 2025 – Nov 2025',
  description:
    'Worked on building an AI agent to replace traditional customer support systems and implemented Retrieval-Augmented Generation (RAG) for accurate responses.'
},
{
  id: 2,
  title: 'Aspiring Full-Stack Developer',
  company: 'Masai School',
  period: '2024 - 2025',
  description:
    'Learned to build full-stack web applications using the MERN stack with hands-on projects.'
},
{
  id: 3,
  title: 'Bachelor of Commerce (B.Com)',
  company: 'University of Delhi',
  period: 'Nov 2022 – June 2025',
  description:
    'Graduated with a Bachelor of Commerce degree, developing strong analytical and business fundamentals.'
}

];

const achievements = [
  'Worked on 4+ real-world projects from development to deployment',
  'Built an AI-powered customer support agent for a SaaS product',
  'Implemented automated query resolution to handle customer support efficiently',
  'Gained hands-on experience in building production-ready web applications'
];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Experience & Journey"
          subtitle="My professional path and achievements"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-20 pb-12"
              >
                <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  {index === 0 ? <Briefcase className="w-4 h-4 text-white" /> :
                   index === 2 ? <GraduationCap className="w-4 h-4 text-white" /> :
                   <Briefcase className="w-4 h-4 text-white" />}
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <span className="text-blue-400 text-sm font-medium">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                  <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
