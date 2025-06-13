
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"]
    },
    {
      title: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"]
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "Prisma"]
    },
    {
      title: "Tools & Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Cypress"]
    },
    {
      title: "Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Prototyping", "Wireframing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-slate-700/50 rounded-lg px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
