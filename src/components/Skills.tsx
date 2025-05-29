import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">Skills</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My technical expertise and competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-center text-accent">Programming</h3>
            
            <SkillBar name="Python" percentage={95} delay={0.1} />
            <SkillBar name="C/C++" percentage={90} delay={0.2} />
            <SkillBar name="Django" percentage={80} delay={0.3} />
            <SkillBar name="NodeJS" percentage={75} delay={0.4} />
            <SkillBar name="Haskell" percentage={70} delay={0.5} />
            <SkillBar name="Flutter" percentage={85} delay={0.6} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-center text-accent">Data Science</h3>
            
            <SkillBar name="PyTorch" percentage={95} delay={0.1} />
            <SkillBar name="TensorFlow" percentage={90} delay={0.2} />
            <SkillBar name="NNabla" percentage={85} delay={0.3} />
            <SkillBar name="CUDA" percentage={80} delay={0.4} />
            <SkillBar name="NumPy/Pandas" percentage={95} delay={0.5} />
            <SkillBar name="Scikit-learn" percentage={90} delay={0.6} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-montserrat font-bold mb-8 text-center text-accent">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "GNU/Linux", icon: "🐧" },
              { name: "Git", icon: "📊" },
              { name: "Bash", icon: "💻" },
              { name: "Sphinx", icon: "📚" },
              { name: "Docker", icon: "🐳" },
              { name: "GDB", icon: "🔧" },
              { name: "Vim", icon: "📝" },
              { name: "LaTeX", icon: "📄" }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-700 p-4 rounded-lg shadow-md border border-secondary/20 flex flex-col items-center justify-center text-center h-32"
              >
                <span className="text-3xl mb-2">{tool.icon}</span>
                <h4 className="text-lg font-medium text-accent">{tool.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="font-medium text-text-primary">{name}</span>
        </div>
        <span className="text-accent">{percentage}%</span>
      </div>
      <div className="h-3 bg-primary-600 rounded-full overflow-hidden">
        <motion.div 
          className="h-full gradient-bg rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default Skills;
