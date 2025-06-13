
import { Award, Coffee, Heart, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Coffee className="w-6 h-6" />, number: "500+", label: "Cups of Coffee" },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, number: "20+", label: "Happy Clients" },
    { icon: <Heart className="w-6 h-6" />, number: "3+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly applications. My journey in web development started 3 years ago, and I've been constantly learning and evolving ever since.
              </p>
              <p>
                I specialize in modern web technologies like React, Node.js, and TypeScript, but I'm always excited to explore new tools and frameworks. I believe in writing clean, maintainable code and creating seamless user experiences.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or enjoying a good cup of coffee while brainstorming the next big idea.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3 text-blue-400">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Building scalable web applications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Exploring AI and machine learning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Contributing to open source
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Mentoring junior developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
