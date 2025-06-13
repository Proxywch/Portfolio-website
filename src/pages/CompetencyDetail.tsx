
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Code, Database, Globe, Smartphone, Server, Palette, Shield, BarChart3, Users, BookOpen, Gavel, Brain, ChartPie, FileSearch, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompetencyDetail = () => {
  const { competencyId } = useParams<{ competencyId: string }>();

  const competencyData = {
    "data-structures-algorithms": {
      title: "Data Structures & Algorithms",
      icon: <Code className="w-12 h-12" />,
      description: "Foundation of computer science focusing on efficient data organization and problem-solving methodologies.",
      skills: ["Big O Notation", "Binary Trees", "Hash Tables", "Graph Traversal", "Sorting Algorithms", "Time & Space Complexity"],
      details: {
        overview: "Data structures and algorithms form the core foundation of computer science and software engineering. This competency covers the essential concepts needed to write efficient, scalable code.",
        keyLearnings: [
          "Understanding time and space complexity analysis using Big O notation",
          "Implementing and optimizing various data structures including arrays, linked lists, trees, and graphs",
          "Mastering fundamental algorithms for searching, sorting, and graph traversal",
          "Problem-solving techniques for technical interviews and real-world applications"
        ],
        applications: [
          "Database optimization and indexing strategies",
          "Web application performance optimization",
          "Game development and AI pathfinding",
          "System design and architecture decisions"
        ]
      }
    },
    "programming-languages": {
      title: "Programming Languages",
      icon: <Server className="w-12 h-12" />,
      description: "Proficiency in multiple programming paradigms and languages for diverse software development needs.",
      skills: ["Java", "C#", "JavaScript", "TypeScript", ".NET Framework", "Object-Oriented Design"],
      details: {
        overview: "Multi-language programming expertise enables versatile software development across different platforms and paradigms.",
        keyLearnings: [
          "Object-oriented programming principles and design patterns",
          "Functional programming concepts and implementations",
          "Type systems and their benefits in large-scale applications",
          "Framework-specific development practices and conventions"
        ],
        applications: [
          "Enterprise application development with Java and C#",
          "Modern web development with JavaScript and TypeScript",
          "Cross-platform development using .NET Framework",
          "API development and microservices architecture"
        ]
      }
    },
    "database-management": {
      title: "Database Management",
      icon: <Database className="w-12 h-12" />,
      description: "Comprehensive database design, implementation, and optimization for data-driven applications.",
      skills: ["SQL", "ER Modeling", "Database Normalization", "Stored Procedures", "Triggers", "DBMS Design"],
      details: {
        overview: "Database management encompasses the complete lifecycle of data storage, retrieval, and maintenance in enterprise applications.",
        keyLearnings: [
          "Relational database design using entity-relationship modeling",
          "Advanced SQL query optimization and performance tuning",
          "Database normalization techniques to reduce redundancy",
          "Implementation of stored procedures and triggers for business logic"
        ],
        applications: [
          "E-commerce platform data architecture",
          "Financial systems with transaction integrity",
          "Content management systems with complex relationships",
          "Analytics and reporting database design"
        ]
      }
    },
    "frontend-development": {
      title: "Frontend Development",
      icon: <Globe className="w-12 h-12" />,
      description: "Modern web development focusing on user interfaces and interactive experiences.",
      skills: ["React", "HTML5", "CSS3", "Responsive Design", "GUI Development", "Web Components"],
      details: {
        overview: "Frontend development creates engaging, accessible, and performant user interfaces that provide exceptional user experiences.",
        keyLearnings: [
          "Component-based architecture with React and modern frameworks",
          "Responsive design principles for multi-device compatibility",
          "Web accessibility standards and implementation",
          "Performance optimization and bundle management"
        ],
        applications: [
          "Single-page applications with complex state management",
          "Progressive web applications for mobile-first experiences",
          "Dashboard and data visualization interfaces",
          "E-commerce and customer-facing web applications"
        ]
      }
    },
    "ux-design": {
      title: "UX Design",
      icon: <Palette className="w-12 h-12" />,
      description: "User-centered design approach focusing on creating intuitive and engaging digital experiences.",
      skills: ["Figma", "Axure", "User Personas", "Usability Testing", "Wireframing", "Design Systems"],
      details: {
        overview: "UX design bridges the gap between user needs and technical implementation, ensuring products are both functional and delightful to use.",
        keyLearnings: [
          "User research methodologies and persona development",
          "Information architecture and user journey mapping",
          "Prototyping and wireframing with industry-standard tools",
          "Usability testing and iterative design improvement"
        ],
        applications: [
          "Mobile app interface design and optimization",
          "Web application user flow design",
          "Design system creation for consistent branding",
          "Accessibility-focused interface development"
        ]
      }
    },
    "business-analysis": {
      title: "Business Analysis",
      icon: <BarChart3 className="w-12 h-12" />,
      description: "Strategic analysis and decision support for business process optimization and growth.",
      skills: ["Cost Analysis", "Statistical Analysis", "Decision Support", "Financial Modeling", "Risk Assessment", "Data Quality"],
      details: {
        overview: "Business analysis provides the analytical foundation for strategic decision-making and process improvement in organizations.",
        keyLearnings: [
          "Financial modeling and cost-benefit analysis techniques",
          "Statistical methods for data-driven decision making",
          "Risk assessment frameworks and mitigation strategies",
          "Process mapping and optimization methodologies"
        ],
        applications: [
          "Digital transformation project evaluation",
          "Product development ROI analysis",
          "Market research and competitive analysis",
          "Operational efficiency improvement initiatives"
        ]
      }
    },
    "project-management": {
      title: "Project Management",
      icon: <Users className="w-12 h-12" />,
      description: "Comprehensive project lifecycle management using industry-standard methodologies and frameworks.",
      skills: ["Agile Methods", "Scrum", "Kanban", "PMBOK", "Lean", "Stakeholder Management"],
      details: {
        overview: "Project management ensures successful delivery of complex initiatives through structured planning, execution, and control processes.",
        keyLearnings: [
          "Agile and Scrum methodologies for iterative development",
          "Stakeholder management and communication strategies",
          "Risk management and issue resolution techniques",
          "Resource allocation and timeline optimization"
        ],
        applications: [
          "Software development project leadership",
          "Cross-functional team coordination",
          "Product launch and go-to-market strategies",
          "Organizational change management initiatives"
        ]
      }
    },
    "enterprise-systems": {
      title: "Enterprise Systems",
      icon: <Settings className="w-12 h-12" />,
      description: "Large-scale system architecture and integration for organizational efficiency and scalability.",
      skills: ["ERP Systems", "System Architecture", "Procurement Analysis", "System Integration", "Organizational Impact", "Lifecycle Management"],
      details: {
        overview: "Enterprise systems management focuses on the strategic implementation and optimization of large-scale business systems.",
        keyLearnings: [
          "Enterprise resource planning system design and implementation",
          "System integration patterns and best practices",
          "Business process automation and workflow optimization",
          "Change management for system implementations"
        ],
        applications: [
          "ERP system customization and deployment",
          "Legacy system modernization projects",
          "API-first architecture design",
          "Business process digitization initiatives"
        ]
      }
    },
    "data-security": {
      title: "Data Security",
      icon: <Shield className="w-12 h-12" />,
      description: "Comprehensive cybersecurity practices protecting digital assets and ensuring compliance.",
      skills: ["Cryptography", "Penetration Testing", "SQL Injection Prevention", "XSS Protection", "Security Assessment", "Vulnerability Analysis"],
      details: {
        overview: "Data security encompasses the protection of digital information through technical controls, risk assessment, and compliance frameworks.",
        keyLearnings: [
          "Cryptographic protocols and implementation best practices",
          "Web application security vulnerabilities and prevention",
          "Security assessment methodologies and tools",
          "Incident response and forensic analysis techniques"
        ],
        applications: [
          "Secure web application development",
          "Enterprise security policy development",
          "Compliance audit and assessment",
          "Security awareness training and implementation"
        ]
      }
    },
    "it-law-ethics": {
      title: "IT Law & Ethics",
      icon: <Gavel className="w-12 h-12" />,
      description: "Legal and ethical frameworks governing technology use and digital rights in the modern era.",
      skills: ["GDPR Compliance", "Cybersecurity Law", "IP Rights", "Data Protection", "AI Ethics", "Privacy Regulations"],
      details: {
        overview: "IT law and ethics provides the legal and moral framework for responsible technology development and deployment.",
        keyLearnings: [
          "Data protection regulations and compliance requirements",
          "Intellectual property rights in software development",
          "Ethical considerations in artificial intelligence",
          "Privacy by design principles and implementation"
        ],
        applications: [
          "Privacy policy development and implementation",
          "Software licensing and intellectual property management",
          "AI ethics framework development",
          "Regulatory compliance assessment and monitoring"
        ]
      }
    },
    "development-tools": {
      title: "Development Tools",
      icon: <FileSearch className="w-12 h-12" />,
      description: "Proficiency in modern development environments and productivity tools for efficient software creation.",
      skills: ["Visual Studio", "Git", "ASP.NET", "ADO.NET", "WPF", "Version Control"],
      details: {
        overview: "Development tools mastery enhances productivity and code quality through effective use of IDEs, frameworks, and version control systems.",
        keyLearnings: [
          "Integrated development environment optimization and customization",
          "Version control workflows and collaboration strategies",
          "Framework-specific development patterns and best practices",
          "Debugging and profiling techniques for performance optimization"
        ],
        applications: [
          "Enterprise application development with Visual Studio",
          "Collaborative development using Git workflows",
          "Desktop application development with WPF",
          "Web application development with ASP.NET"
        ]
      }
    },
    "research-analysis": {
      title: "Research & Analysis",
      icon: <Brain className="w-12 h-12" />,
      description: "Systematic approach to problem-solving through research, analysis, and evidence-based decision making.",
      skills: ["Requirement Analysis", "System Design", "Technical Documentation", "Critical Evaluation", "Solution Architecture", "Performance Optimization"],
      details: {
        overview: "Research and analysis skills enable systematic problem-solving and evidence-based decision making in complex technical environments.",
        keyLearnings: [
          "Requirements gathering and stakeholder analysis techniques",
          "System architecture design and documentation practices",
          "Critical thinking and evaluation methodologies",
          "Performance analysis and optimization strategies"
        ],
        applications: [
          "Technical feasibility studies and recommendations",
          "System requirements analysis and specification",
          "Architecture review and optimization",
          "Research-driven technology adoption decisions"
        ]
      }
    }
  };

  const competency = competencyData[competencyId as keyof typeof competencyData];

  if (!competency) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Competency Not Found</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-block mb-8">
          <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
          <div className="flex items-center mb-6">
            <div className="text-green-400 mr-4">
              {competency.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{competency.title}</h1>
              <p className="text-xl text-slate-300">{competency.description}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-slate-300 leading-relaxed text-lg">{competency.details.overview}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-700/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Learning Areas</h3>
              <ul className="space-y-3">
                {competency.details.keyLearnings.map((learning, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-700/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Practical Applications</h3>
              <ul className="space-y-3">
                {competency.details.applications.map((application, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-700/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Technical Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {competency.skills.map((skill) => (
                <span 
                  key={skill}
                  className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetencyDetail;
