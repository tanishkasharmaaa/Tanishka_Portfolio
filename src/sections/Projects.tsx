import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import GlassCard from '../components/GlassCard';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "AskAI – AI Powered Query App",
    description:
      "An AI-powered SaaS-style application that helps users ask questions and get intelligent responses using Google Gemini. Includes a clean UI and real-time responses.",
    image:
      "https://vercel.com/api/v0/deployments/dpl_CE6dkVNoy91XvbofjmdZbLWSQxUE/favicon?project=ask-ai&readyState=READY",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chakra UI",
      "Google Gemini"
    ],
    liveUrl: "https://ask-ai-mu-nine.vercel.app/",
    githubUrl: "https://github.com/tanishkasharmaaa/AskAI"
  },
  {
    id: 2,
    title: "Nordstrom Rack Clone",
    description:
      "A full-stack e-commerce clone of Nordstrom Rack featuring product listings, cart functionality, authentication, and a responsive UI.",
    image:
      "https://admin.itsnicethat.com/images/BTUPNMPIHlx4W6whwFz8-VloMA4=/239671/format-webp%7Cwidth-2880/jkr-nordstrom-rack-graphic-design-itsnicethat-07_JKBP5Wz.jpeg",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chakra UI"
    ],
    liveUrl: "https://nord-storm.vercel.app/",
    githubUrl: "https://github.com/tanishkasharmaaa/Nord_Storm"
  },
  {
    id: 3,
    title: "Myntra Clone",
    description:
      "A frontend-focused clone of Myntra showcasing product browsing, filtering, and a modern shopping UI inspired by the original platform.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQF3SxUgP2EulA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712121176528?e=1769040000&v=beta&t=g73RctYjPodjcrBmqQC8TvORYngDhOGe_iw6dAYhdMg",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chakra UI"
    ],
    liveUrl: "https://myntra-f8tp.vercel.app/",
    githubUrl: "https://github.com/tanishkasharmaaa/Myntra"
  },
  {
    id: 4,
    title: "Urban Company Clone",
    description:
      "A responsive clone of Urban Company focusing on service listings, category-based navigation, and a clean, user-friendly interface.",
    image:
      "https://img-cdn.publive.online/fit-in/1280x960/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2022/05/Urban-Company.jpg",
    techStack: ["React", "Chakra UI"],
    liveUrl: "https://urban-company-liart.vercel.app/",
    githubUrl: "https://github.com/tanishkasharmaaa/Urban_Company"
  },
  {
    id: 5,
    title: "Resume & Portfolio Generator",
    description:
      "A frontend-only resume and portfolio generator that allows users to create resumes, generate portfolio websites, and download deploy-ready files without any backend.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "https://resume-gen-navy-three.vercel.app/",
    githubUrl: "https://github.com/tanishkasharmaaa/ResumeGen"
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard>
                <div className="relative overflow-hidden rounded-lg mb-4 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
