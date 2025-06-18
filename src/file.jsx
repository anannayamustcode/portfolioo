import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin , ArrowRight, Terminal, Coffee, Sparkles, Zap, Code, Database, Palette, Wrench, Sun, Moon, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const terminalLines = [
    '> whoami',
    'anannaya.exe',
    '> ls skills/',
    'react.js  nextjs  threejs  mongodb  python  cpp',
    '> cat inspiration.txt',
    '"anything you can imagine, you can create"',
    '> cd /fun-projects && ls',
    'todo-list/  space-confusion/',
    '> echo "ready to build something amazing"',
    'ready to build something amazing'
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    
    const typeEffect = () => {
      if (currentIndex < terminalLines.length) {
        const line = terminalLines[currentIndex];
        if (currentText.length < line.length) {
          currentText += line[currentText.length];
          setTerminalText(prev => {
            const lines = prev.split('\n');
            lines[currentIndex] = currentText;
            return lines.join('\n');
          });
          setTimeout(typeEffect, 50);
        } else {
          currentIndex++;
          currentText = '';
          setTerminalText(prev => prev + '\n');
          setTimeout(typeEffect, 500);
        }
      }
    };

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    setTimeout(typeEffect, 1000);

    return () => clearInterval(cursorBlink);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Safe Routes",
      subtitle: "hackathon that changed everything",
      description: "had no idea where to start, joined the team, hated them because they were so incredibly smart, ended up being one of the best experiences of my life, learnt so much.",
      fullDescription: "A comprehensive route planning application that prioritizes safety metrics, especially for women & children. Built during a 48-hour hackathon, this project uses real-time data to suggest the safest routes for users. Features include crime data integration, emergency contact alerts, and community-driven safety reporting.",
      tech: "full-stack · node.js · mongodb",
      techStack: ["Node.js", "MongoDB", "Express", "React", "Maps API","ML"],
      links: { github: "https://github.com/RAJWARDHAN-B/safetyRoutes", demo: "https://youtu.be/fGRj38KCEN8" },
      color: "bg-red-400",
      glowColor: "shadow-red-400/40",
      borderColor: "border-red-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "OneTask",
      subtitle: "for people who need help locking in",
      description: "i used to study all the time, made this for focus addicts like me. minimalist productivity without the productivity-guru nonsense.",
      fullDescription: "A simple minimalist productivity app designed for students and professionals who need to focus on one task at a time. Features include distraction blocking, time tracking, and progress visualization. Built with simplicity in mind to avoid feature bloat.",
      tech: "nextjs",
      techStack: ["React", "Local Storage", "CSS Animations"],
      links: { demo: "https://onetask-blush.vercel.app/" },
      color: "bg-blue-400",
      glowColor: "shadow-blue-400/40",
      borderColor: "border-blue-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Astronot",
      subtitle: "interactive space adventure",
      description: "nextjs + threejs, you can literally float around in 3d space. still my favorite thing i've built.",
      fullDescription: "An immersive 3D space exploration experience built with Three.js and Next.js. Users can navigate through a procedurally generated solar system, interact with celestial bodies, and learn about space through gamification. Includes realistic physics and stunning visual effects.",
      tech: "nextjs · threejs",
      techStack: ["Next.js", "Three.js", "React"],
      links: { github: "https://github.com/anannayamustcode/Astronot", demo: "https://youtu.be/8JuXp9Ge7_g" },
      color: "bg-purple-400",
      glowColor: "shadow-purple-400/40",
      borderColor: "border-purple-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Array of Hope",
      subtitle: "building for social impact",
      description: "sometimes code can do more than just look cool. working on projects that actually matter to people.",
      fullDescription: "A platform that can be used as a tool for requirement engineering.Makes use of GenAi, concepts like MOSCOW, and other requirement engineering techniques to help users gather and manage requirements effectively. Aimed at improving project management and collaboration in software development.",
      tech: "full stack ·requirements engineering · GenAi",
      techStack: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      links: { github: "https://github.com/anannayamustcode/arrayofhope", demo: "https://youtu.be/0aLIVgchDK8" },
      color: "bg-emerald-400",
      glowColor: "shadow-emerald-400/40",
      borderColor: "border-emerald-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "OnlyHTML",
      subtitle: "back to basics maze game",
      description: "realized i'd never made a project in pure html. ",
      fullDescription: "A challenging (not really) maze game built entirely with HTML.",
      tech: "pure html ",
      techStack: ["HTML5"],
      links: { demo: "https://onlyhtml-maze.vercel.app/" },
      color: "bg-orange-400",
      glowColor: "shadow-orange-400/40",
      borderColor: "border-orange-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Cosmic Game",
      subtitle: "the astro confusion incident",
      description: "thought 'Astro' meant space, stayed up all night, sent a space game to them. didn't get the internship but got a great story.",
      fullDescription: "A space-themed puzzle game that was built to make up for the confusion because i accidentally thought that 'Astro' meant space, turns out it's a framework. Sometimes the best projects come from happy accidents.",
      tech: "astro · confusion",
      techStack: ["Astro", "TypeScript", "Canvas"],
      links: { demo: "https://astro-nu-eight.vercel.app/" },
      color: "bg-indigo-400",
      glowColor: "shadow-indigo-400/40",
      borderColor: "border-indigo-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Cow Todo",
      subtitle: "because why not",
      description: "realized there are no cow-themed todo lists. fixed that. you're welcome. (i apologize in advance)",
      fullDescription: "The world's first (and possibly only) cow-themed todo list application. Features moo sound effects, cow puns, and udderly ridiculous animations. Built as a fun weekend project to explore creative UI design.",
      tech: "html · cows · regret",
      techStack: ["HTML", "CSS", "JavaScript", "Cow Puns"],
      links: { demo: "https://anannayamustcode.github.io/to-do/" },
      color: "bg-yellow-300",
      glowColor: "shadow-yellow-300/50",
      borderColor: "border-yellow-300/70",
      year: "2023",
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Nush",
      subtitle: "bday gift",
      description: "made a personalized game for my friend using Phaser. because generic gifts are boring when you can code something special.",
      fullDescription: "A personalized interactive experience designed specifically for a friend. Features custom gameplay mechanics, inside jokes, and personalized content. Demonstrates how code can be used to create meaningful, personal connections.",
      tech: "custom game logic",
      techStack: ["JavaScript", "Phaser", "HTML5"],
      links: { demo: "https://i-have-no-idea-what-i-am-doing.vercel.app/" },
      color: "bg-pink-400",
      glowColor: "shadow-pink-400/40",
      borderColor: "border-pink-400/60",
      year: "2024",
      image: "/api/placeholder/400/250"
    }
  ];

  const toggleProject = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const NotFound = () => (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">looks like this page got lost in space</p>
        <a href="/" className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors">
          go home
        </a>
      </div>
    </div>
  );

  const themeClasses = darkMode 
    ? "bg-black text-white" 
    : "bg-white text-gray-900";

  const cardBgClasses = darkMode 
    ? "bg-gradient-to-r from-white/5 to-white/10" 
    : "bg-gradient-to-r from-gray-100 to-gray-50";

  const borderClasses = darkMode 
    ? "border-white/10" 
    : "border-gray-200";

  return (
    <div className={`ml-15 min-h-screen ${themeClasses} font-mono transition-colors duration-300`}>
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur border-b ${borderClasses}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-lg sm:text-xl font-bold">anannaya.txt</div>
          <div className="flex items-center space-x-4">
<button
  onClick={() => setDarkMode(!darkMode)}
  className={`p-2 rounded-full transition-colors ${
    darkMode ? '!bg-black hover:bg-white/10' : 'bg-white hover:bg-gray-100'
  }`}
  aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
>
  {darkMode ? <Sun className="text-white w-5 h-5" /> : <Moon className="text-black w-5 h-5" />}
</button>

            <a 
              href="https://github.com/anannayamustcode" 
              className={`${darkMode ? 'hover:text-green-400' : 'hover:text-green-600'} transition-colors`}
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:anannayaagarwal@gmail.com" 
              className={`${darkMode ? 'hover:text-green-400' : 'hover:text-green-600'} transition-colors`}
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>            
            <a 
              href="https://www.linkedin.com/in/anannaya-agarwal/" 
              className={`${darkMode ? 'hover:text-green-400' : 'hover:text-green-600'} transition-colors`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-20 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
                i'm anannaya,<br/>
                <span className="text-green-400">i build things</span>
              </h1>
              
            <div className={`space-y-4 text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              <p>graduating in 2027</p>
              {/* <p>i aim to work at pinterest</p> */}
              <p>computer engineering student at PICT, Pune</p>
              <p>wanted to be an engineer long before I knew what engineers actually do</p>
              <p>passionate about coding with a strong foundation in both frontend and backend — now i am planning to explore into the world of AI/ML</p>
            </div>


              <div className="flex items-center space-x-4">
                <Coffee className="w-5 h-5 text-yellow-600" />
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>currently: in 3rd year</span>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-lg p-6 border`}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm ml-4`}>terminal</span>
              </div>
              <div className="text-green-400 text-sm leading-relaxed whitespace-pre-wrap">
                {terminalText}
                {showCursor && <span className="bg-green-400 text-black">_</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="py-12 sm:py-20">
          <div className="flex items-center space-x-4 mb-8 sm:mb-12">
            <Terminal className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl sm:text-3xl font-bold">selected works</h2>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block space-y-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`group cursor-pointer transition-all duration-500 relative ${
                  activeProject === project.id ? 'transform translate-x-4' : ''
                }`}
                onClick={() => toggleProject(project.id)}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  hoveredCard === project.id ? `${project.glowColor} shadow-2xl` : 'shadow-none'
                } ${activeProject === project.id ? 'shadow-xl' : ''}`}></div>
                
                <div className={`relative backdrop-blur-sm ${cardBgClasses} rounded-xl border transition-all duration-500 ${
                  hoveredCard === project.id ? `${project.borderColor} border-2` : borderClasses
                } ${activeProject === project.id ? `${darkMode ? 'bg-white/10' : 'bg-gray-100'}` : ''} overflow-hidden`}>
                  
                  <div className={`absolute inset-0 opacity-5 transition-opacity duration-500 ${
                    hoveredCard === project.id ? 'opacity-10' : 'opacity-5'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                  </div>

                  <div className="relative flex items-center space-x-6 p-6">
                    <div className={`relative transition-all duration-300 ${
                      activeProject === project.id ? 'w-4 h-4' : 'w-2 h-2'
                    }`}>
                      <div className={`rounded-full ${project.color} transition-all duration-300 ${
                        activeProject === project.id ? 'w-4 h-4' : 'w-2 h-2'
                      }`}></div>
                      {hoveredCard === project.id && (
                        <div className={`absolute inset-0 rounded-full ${project.color} animate-ping`}></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-4">
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${
                            hoveredCard === project.id ? (darkMode ? 'text-white' : 'text-gray-900') : (darkMode ? 'text-gray-100' : 'text-gray-800')
                          }`}>{project.title}</h3>
                          <span className={`text-sm px-3 py-1 rounded-full border transition-all duration-300 ${
                            hoveredCard === project.id ? `${project.borderColor} ${darkMode ? 'text-white bg-white/10' : 'text-gray-900 bg-gray-100'}` : `${borderClasses} ${darkMode ? 'text-gray-400' : 'text-gray-600'}`
                          }`}>{project.tech}</span>
                        </div>
                        <span className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'} font-mono`}>{project.year}</span>
                      </div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{project.subtitle}</p>
                      
                      {activeProject === project.id && (
                        <div className="mt-4 animate-in slide-in-from-top-4 duration-500">
                          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.fullDescription}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, index) => (
                              <span key={index} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex space-x-4">
                            {project.links.github && (
                              <a 
                                href={project.links.github}
                                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors hover:underline"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View ${project.title} source code`}
                              >
                                <Github className="w-4 h-4" />
                                <span>code</span>
                              </a>
                            )}
                            {project.links.demo && (
                              <a 
                                href={project.links.demo}
                                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View ${project.title} live demo`}
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>live</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      activeProject === project.id ? 'rotate-90 text-green-400' : (darkMode ? 'text-gray-400' : 'text-gray-600')
                    } ${hoveredCard === project.id ? 'transform translate-x-1' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
                  {projects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0 px-2">
                      <div className={`${cardBgClasses} rounded-xl border ${borderClasses} p-4 sm:p-6`}>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                          <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                          <span className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'} font-mono ml-auto`}>{project.year}</span>
                        </div>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2 text-sm`}>{project.subtitle}</p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm`}>{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.slice(0, 3).map((tech, index) => (
                            <span key={index} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          {project.links.github && (
                            <a 
                              href={project.links.github}
                              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm"
                              aria-label={`View ${project.title} source code`}
                            >
                              <Github className="w-4 h-4" />
                              <span>code</span>
                            </a>
                          )}
                          {project.links.demo && (
                            <a 
                              href={project.links.demo}
                              className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                              aria-label={`View ${project.title} live demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>live</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Controls */}
              <button
                onClick={prevProject}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextProject}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 p-2 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentProjectIndex ? 'bg-green-400' : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Origin Story */}
        <div className={`py-12 sm:py-20 border-t ${borderClasses}`}>
          <div className="flex items-center space-x-4 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl sm:text-3xl font-bold">origin story</h2>
          </div>
          
          <div className="max-w-4xl">
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
              it all started when i wanted to make my sister a birthday gift. so i made her a website. 
              <a href="https://anannayamustcode.github.io/Project15/" className="text-green-400 hover:text-green-300 underline mx-2">
                this website
              </a>
              actually.
            </p>
            
            <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed mb-6`}>
              turns out, building something from nothing is pretty addictive. coding became this space where 
              anything i could imagine, i could create. 
            </p>

            <div className={`${darkMode ? 'bg-white/5' : 'bg-gray-50'} rounded-lg p-4 sm:p-6 border-l-4 border-green-400`}>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} italic mb-2`}>
                "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion" 
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}><i>- Dead Poets Society</i></p>
              {/* <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>ok not to sound cheesy, but coding is like poetry to me. inexplicable. </p> */}
            </div>
          </div>
        </div>

        {/* Random Projects */}
        <div className={`py-12 sm:py-20 border-t ${borderClasses}`}>
          <div className="flex items-center space-x-4 mb-8">
            <Coffee className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl sm:text-3xl font-bold">random stuff i've built</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className={`${darkMode ? 'bg-white/5 border-white/10 hover:border-yellow-500/50' : 'bg-gray-50 border-gray-200 hover:border-yellow-500/50'} rounded-lg p-4 sm:p-6 border transition-colors`}>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Castle Games</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 text-sm sm:text-base`}>i'd be very shocked if you can finish it.</p>
              <a href="https://castle-jade.vercel.app/" className="text-blue-400 hover:text-blue-300 text-sm">
                play games →
              </a>
            </div>
            
            <div className={`${darkMode ? 'bg-white/5 border-white/10 hover:border-green-500/50' : 'bg-gray-50 border-gray-200 hover:border-green-500/50'} rounded-lg p-4 sm:p-6 border transition-colors`}>
              <h3 className="text-lg font-bold text-green-400 mb-2">GreenLight</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 text-sm sm:text-base`}>sustainability meets code in this environmental project</p>
              <div className="flex space-x-4">
                <a href="https://github.com/anannayamustcode/greenlightt" className="text-blue-400 hover:text-blue-300 text-sm">
                  code →
                </a>
                <a href="https://www.youtube.com/watch?v=H0Xb5AyhsmY" className="text-blue-400 hover:text-blue-300 text-sm">
                  demo →
                </a>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-white/5 border-white/10 hover:border-purple-500/50' : 'bg-gray-50 border-gray-200 hover:border-purple-500/50'} rounded-lg p-4 sm:p-6 border transition-colors`}>
              <h3 className="text-lg font-bold text-purple-400 mb-2">BharatVarta</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 text-sm sm:text-base`}>news aggregation with a twist (and probably some bugs)</p>
              <div className="flex space-x-4">
                <a href="https://github.com/anannayamustcode/BharatVarta" className="text-blue-400 hover:text-blue-300 text-sm">
                  code →
                </a>
                <a href="https://www.youtube.com/watch?v=FjXyO634U1k" className="text-blue-400 hover:text-blue-300 text-sm">
                  demo →
                </a>
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-white/5 border-white/10 hover:border-pink-500/50' : 'bg-gray-50 border-gray-200 hover:border-pink-500/50'} rounded-lg p-4 sm:p-6 border transition-colors`}>
              <h3 className="text-lg font-bold text-pink-400 mb-2">Felecity IITH</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-3 text-sm sm:text-base`}>hackathon project with the team - collaborative chaos at its finest</p>
              <a href="https://felecity.vercel.app/" className="text-blue-400 hover:text-blue-300 text-sm">
                check it out →
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className={`py-12 sm:py-20 border-t ${borderClasses}`}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-black mb-8 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              TECH ARSENAL
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind',
                'Three.js', 'Astro', 'Node.js', 'Express', 'MongoDB', 'MySQL',
                'Python', 'C++', 'Java', 'Git', 'Docker', 'Firebase'
              ].map((tech, i) => (
                <div
                  key={tech}
                  className={`p-3 sm:p-4 ${darkMode ? 'bg-gray-900 border-gray-700 hover:border-purple-500' : 'bg-gray-100 border-gray-300 hover:border-purple-500'} border transition-all duration-300 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg hover:scale-105`}
                  tabIndex="0"
                  role="button"
                  aria-label={`${tech} technology`}
                >
                  <div className={`text-xs sm:text-sm font-mono ${darkMode ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-600 group-hover:text-purple-600'} group-focus:text-purple-400 transition-colors text-center`}>
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`py-12 sm:py-20 border-t ${borderClasses}`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">let's build something</h2>
          
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
            <p className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              got an idea? let's turn it into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="mailto:anannayagarwala@gmail.com"
                className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors text-center"
              >
                email me
              </a>
              
              <a 
                href="https://github.com/anannayamustcode"
                className={`px-6 py-3 border ${borderClasses} rounded ${darkMode ? 'hover:bg-white/5' : 'hover:bg-gray-50'} transition-colors text-center`}
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`border-t ${borderClasses} py-8`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>footer (yes very creative, im aware)</p>
        </div>
      </div>

      {/* Custom 404 Component - Hidden by default */}
      <div id="not-found" className="hidden">
        <NotFound />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes slide-in-from-top {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: slide-in-from-top 0.5s ease-out;
        }

        .slide-in-from-top-4 {
          --tw-enter-translate-y: -1rem;
        }

        .duration-500 {
          animation-duration: 500ms;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }

        /* Responsive font sizes */
        @media (max-width: 640px) {
          .text-responsive {
            font-size: clamp(0.875rem, 2.5vw, 1rem);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;