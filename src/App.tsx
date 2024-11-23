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
            Luca Santino Cevasco
          </h1>
          <p className="text-xl text-blue-200 mb-8 font-light">
            Software Engineer
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/lucacevasco" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/lucacevasco" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:thelucazip@gmail.com" className="hover:text-blue-400 transition-colors">
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
              Experienced and versatile software engineer with a strong foundation in full-stack development across both web and
              mobile platforms. Successfully contributed to high-impact projects across diverse industries, including DeFi, finance,
              and e-commerce, emphasizing clean code, robust architecture, and scalability. Expertise in end-to-end development in
              complex environments, particularly with blockchain technologies and decentralized finance (DeFi) protocols.
              Collaborated on high-visibility projects such as those funded by Y Combinator, leveraging skills in bridging traditional
              finance systems with crypto, developing cross-chain functionalities, and implementing secure and efficient CI/CD
              processes. Adept at navigating multiple stacks and technologies, blending technical skills with a strategic focus on
              product enhancement and user satisfaction.
            </p>
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
                { 
                  name: 'Programming Languages', 
                  skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C#','Go', 'Rust', 'Solidity'] 
                },
                { 
                  name: 'Web & Mobile', 
                  skills: ['React', 'React Native', 'NextJS', 'NodeJS', 'NestJS', 'JAMstack'] 
                },
                { 
                  name: 'Blockchain', 
                  skills: ['Ethereum', 'DeFi protocols', 'Blockchain Bridges', 'Solana', 'Cosmos'] 
                },
                { 
                  name: 'Cloud & DevOps', 
                  skills: ['AWS Lambda', 'CI/CD', 'Terraform', 'GitHub Actions'] 
                }
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
                  title: 'TranscribeMe/Go',
                  tech: ['NodeJS', 'React', 'AI'],
                  description: 'Created a bot on WhatsApp and Telegram for free audio-to-text transcription and AI-based summarization. We won the 2023 Innovation Prize in New Technologies (La Nacion & VISA).',
                  link: 'https://www.transcribeme.app/'
                },
                {
                  title: 'Ping (YC S22)',
                  tech: ['React Native', 'Blockchain', 'CI/CD'],
                  description: 'Developed a hybrid mobile app for financial operations, integrating crypto functionalities across multiple blockchains.',
                  link: 'https://www.letsping.com/'
                },
                {
                  title: "TAO-MVX Bridge",
                  tech: ['NodeJS', 'Polkadot', 'DeFi', 'Blockchain'],
                  description: 'Developed a cross-chain bridge for the TAO token to the MVX ecosystem. +$16M USD were invested in the TAO Bridge, reflecting strong user adoption and trust.',
                  link: 'https://www.ratherlabs.com/portfolio/tao-bridge'
                },
                {
                  title: "SoundIT",
                  tech: ['Solidity', 'Ethereum', 'Social Network', "React"],
                  description: 'SoundIt is a revolutionary audio-centric social decentralized platform (dPlat) challenging the traditional audio value chain. Our work involved modifications to facilitate the creation of custom modules, enabling ERC-2771 inspired meta-transactions compatibility, all while reducing the original contract size.',
                  link: 'https://soundit.app/'
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
                  title: 'Blockchain Engineer - Fullstack Engineer',
                  company: 'Rather Labs, Inc',
                  period: 'Nov 2022 - Present',
                  description: 'Worked on multiple high-impact projects, delivering effective developments and ensuring continuous product improvement. Contributed as a sales engineer in AI projects, estimating project scopes and technical requirements.'
                },
                {
                  title: 'Lead Developer',
                  company: 'Cuéntalo',
                  period: 'Jan 2023 - May 2023',
                  description: 'Led the development of an anonymous Q&A platform focusing on promoting positive and healthy interactions. Enhanced user well-being by fostering a safe, supportive, and positive environment.'
                },
                {
                  title: 'Full Stack Engineer',
                  company: 'TranscribeMe',
                  period: 'May 2023 - Present',
                  description: 'Built a WhatsApp/Telegram bot for free, secure transcription with AI-based summarization. Contributed to the product that won the 2023 Innovation Prize in New Technologies (La Nacion & VISA).'
                },
                {
                  title: 'Lead Mobile Developer',
                  company: 'Ping (YC S22)',
                  period: 'Sep 2021 - Dec 2022',
                  description: 'Developed a hybrid mobile app for financial operations, integrating crypto functionalities across multiple blockchains. Established CI/CD processes using GitHub Actions for stable deployment.'
                },
                {
                  title: "Lead Mobile Developer",
                  company: "Antorcha Digital",
                  period: "jun 2021 - Sep 2021",
                  description: "Project Leadership, led development and architectural decisions for hybrid mobile apps using React Native"
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

            {/* Education Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <SectionTitle icon={GraduationCap} title="Education" />
            <div className="space-y-8">
              {[
                {
                  degree: 'Bachelor in Computer Engineering',
                  school: 'Universidad Argentina de la Empresa (UADE)',
                  period: '2022 - Expected 2026',
                  description: 'Buenos Aires, Argentina'
                },
                {
                  degree: 'Bachelor in Computer Engineering',
                  school: 'Universidad Nacional de La Matanza',
                  period: '2020 - 2021',
                  description: 'Buenos Aires, Argentina'
                },
                {
                  degree: 'CS50x Introduction to Computer Science',
                  school: 'Harvard University',
                  period: '2020',
                  description: ''
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