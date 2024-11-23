import React, { useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  GraduationCap,
  Briefcase,
  Rocket
} from 'lucide-react';
import StarField from './components/StarField';
import SectionTitle from './components/SectionTitle';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <StarField />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, rgba(0,149,255,0.1) 0%, rgba(0,0,0,0) 70%)',
          animation: 'pulse 4s infinite'
        }} />
        
        <div className="z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            John Doe
          </h1>
          <p className="text-xl text-blue-200 mb-8 font-light">
            Senior Software Engineer
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <p className="text-sm text-blue-300 mb-2">Scroll to explore</p>
          <div className="w-1 h-8 bg-blue-400/20 rounded-full mx-auto">
            <div className="w-full h-1/2 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <SectionTitle icon={Terminal} title="About Me" />
            <p className="text-gray-300 leading-relaxed">
              A passionate software engineer with 5+ years of experience in building scalable applications.
              Specialized in React, Node.js, and cloud technologies. Always exploring new technologies
              and pushing the boundaries of what's possible in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="space-y-8">
              {[
                {
                  degree: 'Master of Science in Computer Science',
                  school: 'Tech University',
                  period: '2016 - 2018',
                  description: 'Specialized in Artificial Intelligence and Machine Learning'
                },
                {
                  degree: 'Bachelor of Science in Software Engineering',
                  school: 'Engineering College',
                  period: '2012 - 2016',
                  description: 'Graduated with First Class Honors'
                }
              ].map((edu, index) => (
                <div key={index} className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-blue-300">{edu.degree}</h3>
                  <p className="text-gray-400 mb-2">{edu.school} | {edu.period}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <SectionTitle icon={Code2} title="Technical Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS'] },
                { name: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL'] },
                { name: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD'] },
                { name: 'Tools', skills: ['Git', 'VS Code', 'Jira'] }
              ].map((category, index) => (
                <div key={index} className="bg-blue-900/10 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <SectionTitle icon={Rocket} title="Featured Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI-Powered Analytics Platform',
                  tech: ['React', 'Python', 'TensorFlow'],
                  description: 'Built a real-time analytics dashboard using machine learning for predictive insights',
                  link: '#'
                },
                {
                  title: 'E-commerce Microservices',
                  tech: ['Node.js', 'Docker', 'Kubernetes'],
                  description: 'Developed a scalable microservices architecture handling 1M+ daily transactions',
                  link: '#'
                },
                {
                  title: 'Smart Home IoT Platform',
                  tech: ['React Native', 'MQTT', 'AWS IoT'],
                  description: 'Created a mobile app for controlling smart home devices with real-time updates',
                  link: '#'
                },
                {
                  title: 'Blockchain Trading Bot',
                  tech: ['TypeScript', 'Web3.js', 'GraphQL'],
                  description: 'Automated trading bot with advanced algorithms and real-time market analysis',
                  link: '#'
                }
              ].map((project, index) => (
                <div key={index} className="group bg-blue-900/10 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-blue-300 group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/10 rounded-full text-xs text-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project <Rocket className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <SectionTitle icon={Briefcase} title="Experience" />
            <div className="space-y-12">
              {[
                {
                  title: 'Senior Software Engineer',
                  company: 'Tech Corp',
                  period: '2020 - Present',
                  description: 'Led development of scalable microservices architecture'
                },
                {
                  title: 'Software Engineer',
                  company: 'StartUp Inc',
                  period: '2018 - 2020',
                  description: 'Developed and maintained multiple React applications'
                }
              ].map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-500/20">
                  <div className="absolute w-4 h-4 bg-blue-500/20 rounded-full -left-[9px] top-0 border-2 border-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-300">{job.title}</h3>
                  <p className="text-gray-400 mb-2">{job.company} | {job.period}</p>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <div className="inline-flex gap-6 p-4 bg-blue-900/20 rounded-lg">
              <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;