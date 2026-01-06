import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  ShieldCheck,
  GitBranch,
  Cloud,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import GlassCard from "../components/GlassCard";

const skills = [
  { name: "React.js", icon: Layout, color: "from-blue-400 to-cyan-400" },
  { name: "TypeScript", icon: Code2, color: "from-blue-600 to-blue-800" },
  {
    name: "JavaScript (ES6+)",
    icon: Code2,
    color: "from-yellow-400 to-orange-500",
  },

  { name: "Node.js", icon: Server, color: "from-green-400 to-emerald-500" },
  { name: "Express.js", icon: Server, color: "from-gray-500 to-gray-700" },

  { name: "MongoDB", icon: Database, color: "from-green-500 to-teal-500" },
  { name: "REST APIs", icon: Server, color: "from-purple-400 to-indigo-500" },

  { name: "JWT Auth", icon: ShieldCheck, color: "from-red-400 to-rose-500" },

  { name: "Tailwind CSS", icon: Layout, color: "from-cyan-400 to-blue-500" },
  { name: "Chakra UI", icon: Layout, color: "from-teal-400 to-green-500" },

  { name: "Git & GitHub", icon: GitBranch, color: "from-gray-600 to-gray-800" },
  {
    name: "Deployment (Vercel / Render)",
    icon: Cloud,
    color: "from-indigo-400 to-purple-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Passionate developer with a love for clean code and innovative solutions"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold text-white mb-4">
                Full Stack Developer (MERN)
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                I am a Full Stack Developer with practical experience in
                building scalable, real-world web applications using MongoDB,
                Express.js, React, and Node.js.
              </p>

              <p className="text-gray-300 mb-4 leading-relaxed">
                My expertise includes developing RESTful APIs, implementing JWT
                and Google OAuth authentication, integrating Cloudinary for
                media handling, and creating responsive, user-friendly
                interfaces using Chakra UI and modern JavaScript (ES6+).
              </p>

              <p className="text-gray-300 leading-relaxed">
                I focus on writing clean, maintainable code with an emphasis on
                performance, security, and real-world problem solving. Open to
                remote opportunities and collaborative development environments.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard>
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}
                      >
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
