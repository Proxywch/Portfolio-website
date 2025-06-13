
import { Code, Database, Globe, Smartphone, Server, Palette, Shield, BarChart3, Users, BookOpen, Gavel, Brain, ChartPie, FileSearch, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Structures & Algorithms",
      icon: <Code className="w-8 h-8" />,
      skills: ["Big O Notation", "Binary Trees", "Hash Tables", "Graph Traversal", "Sorting Algorithms", "Time & Space Complexity"]
    },
    {
      title: "Programming Languages",
      icon: <Server className="w-8 h-8" />,
      skills: ["Java", "C#", "JavaScript", "TypeScript", ".NET Framework", "Object-Oriented Design"]
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: ["SQL", "ER Modeling", "Database Normalization", "Stored Procedures", "Triggers", "DBMS Design"]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: ["React", "HTML5", "CSS3", "Responsive Design", "GUI Development", "Web Components"]
    },
    {
      title: "UX Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "Axure", "User Personas", "Usability Testing", "Wireframing", "Design Systems"]
    },
    {
      title: "Business Analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Cost Analysis", "Statistical Analysis", "Decision Support", "Financial Modeling", "Risk Assessment", "Data Quality"]
    },
    {
      title: "Project Management",
      icon: <Users className="w-8 h-8" />,
      skills: ["Agile Methods", "Scrum", "Kanban", "PMBOK", "Lean", "Stakeholder Management"]
    },
    {
      title: "Enterprise Systems",
      icon: <Settings className="w-8 h-8" />,
      skills: ["ERP Systems", "System Architecture", "Procurement Analysis", "System Integration", "Organizational Impact", "Lifecycle Management"]
    },
    {
      title: "Data Security",
      icon: <Shield className="w-8 h-8" />,
      skills: ["Cryptography", "Penetration Testing", "SQL Injection Prevention", "XSS Protection", "Security Assessment", "Vulnerability Analysis"]
    },
    {
      title: "IT Law & Ethics",
      icon: <Gavel className="w-8 h-8" />,
      skills: ["GDPR Compliance", "Cybersecurity Law", "IP Rights", "Data Protection", "AI Ethics", "Privacy Regulations"]
    },
    {
      title: "Development Tools",
      icon: <FileSearch className="w-8 h-8" />,
      skills: ["Visual Studio", "Git", "ASP.NET", "ADO.NET", "WPF", "Version Control"]
    },
    {
      title: "Research & Analysis",
      icon: <Brain className="w-8 h-8" />,
      skills: ["Requirement Analysis", "System Design", "Technical Documentation", "Critical Evaluation", "Solution Architecture", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Comprehensive expertise gained through a 3-year Bachelor's program in Information Technology, 
            spanning Development, UX Design, Business Understanding, and Security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="bg-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Academic Foundation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-700/30 rounded-xl p-4">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Development</h4>
              <p className="text-slate-300 text-sm">Data structures, algorithms, programming languages, and database management</p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <Palette className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">UX Design</h4>
              <p className="text-slate-300 text-sm">User-centered design, prototyping, and digital work environments</p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <ChartPie className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Business</h4>
              <p className="text-slate-300 text-sm">Cost analysis, project management, and enterprise systems</p>
            </div>
            <div className="bg-slate-700/30 rounded-xl p-4">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-1">Security</h4>
              <p className="text-slate-300 text-sm">Data security, cybersecurity, and IT law compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
