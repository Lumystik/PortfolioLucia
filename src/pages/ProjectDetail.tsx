import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';

const projectsData: Record<string, any> = {
  "museon": {
    id: "museon",
    title: "MUSE*ON",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_hero.jpg?raw=true",
    overview: "Developing an all in one software for small museums staff, that aims to streamline the work-flow and improve the management of the different areas of the institution. In order to optimize the current museum resources.",
    scope: "End-to-End App",
    role: "UX Research, Branding, UX/UI Design",
    timeline:"4 months",
    team: "Martina Braidotti, Lucia Medina, Ilario Pedone, Agnese Rosselli, Mark Waisara",
    prototypeLink: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1?raw=true",
    problem: "Staff at small museums often face fragmented workflows. \n\n With only 4 full-time staff managing 59 events and exhibitions a year across 6 different tools, the team is constantly stretched thin.",
    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/56aed6413b71c2bc18bd6c0dcd8054a3b546474d/images/complicatedworkflow_museon.jpg?raw=true",
    processMap: [
      { phase: "Research", steps: ["Desk research", "On site research", "Ecosystem map", "research key findings"] },
      { phase: "Define", steps: ["Design brief", "Personas & scenarios", "Heroflow & wireflow"] },
      { phase: "Develop", steps: ["User test results", "Design system", "Prototype"] }
    ],
    howMightWe: [ "solve the complexity of creating a smooth experience for small museum staff?", "streamline the workflow and improve the management of different areas of the institution?", "optimize the current museum resources to help staff develop a better experience for visitors?" ],
    ideation: {
      question: "How can we build a seamless workflow that maximizes museum staff efficiency? How can the platform adapt to different roles while maintaining a unified database?",
      heroFlow: "https://github.com/Lumystik/PortfolioLucia/blob/f8b832c9f326ed2f6d2fd32515316ec56fb143fa/images/workflow_museon.png?raw=true",
      heroFlowCaption: "Organizing a new temporary exhibition.", 
      wireframes: [
        {
          image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Dashboard_mobile_wireframe.png?raw=true",
          caption: "Dashboard"
        },
        {
          image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Calendar_mobile_wireframe%20(1).png?raw=true",
          caption: "Calendar"
        },
        {
          image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/smart%20notes%20pop%20up%20mobile.png?raw=true",
          caption: "Smart Notes"
        }
      ]
    },
    testingObjectives: [
      { title: "VALIDATE CONCEPT", description: "I wanted to ensure that the features are everything the user expects and wants out of this app. Hearing additional feedback and suggestions helped better tailor it towards the staff's needs." },
      { title: "OBSERVE USER FLOW", description: "Watching first-time users navigate the dashboard determined if the onboarding screens were helpful and if users were able to easily complete their tasks without errors." },
      { title: "BENCHMARK BRANDING", description: "As a new brand, I wanted to gauge how users responded to the name, color palette, and general aesthetics of the application." }
    ],
    usabilityResults: {
      title: "USABILITY RESULTS",
      description: "Both museum staff and interns had very positive reactions to the app. Staff had follow-up questions about connecting their existing calendars and internal databases, which indicates that they were considering real-life integration. All of the above were slated on the product roadmap which was extremely validating."
    },
    iterations: {
      title: "ITERATIONS + REFINEMENT",
      description: "While navigating their dashboard, users all had very similar behavior on the constraints page. This lead me to implement a couple changes:",
      items: [
        {
          title: "ADDING CLARIFICATION TO SETTINGS",
          description: "Users found themselves guessing what each input meant, and even though 100% of users correctly interpreted the title, I added a brief description to further clarify.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/be1755ca40682fbb1c571d38f3aa37d18cc7ada8/images/calendar_museo1.png?raw=true" 
        },
        {
          title: "UPDATING PRESET VIEWS",
          description: "4 out of the 5 staff members felt that the default monthly view was too broad and preferred a weekly view. Seeing as the majority chose this length, I updated the preset to reflect their preference.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/465f291d0d01afb736e1502a28db9b14b236e818/images/collection_museon1.png?raw=true" 
        }
      ]
    },
    niceToHaves: {
      title: "NICE TO HAVES",
      description: "These ideas are not reflected in the prototype, but I believe would positively improve the user experience based on their feedback.",
      items: [
        { title: "START OF SHIFT NOTIFICATION", description: "Staff can enable notifications to be alerted when priority tasks are due, so no matter where they are in the museum they'll never miss an update." },
        { title: "LIVE TRACKING", description: "Major museums have their own dedicated apps for tracking foot traffic, so it would be helpful to centralize that into the app for floor staff." },
        { title: "INSTANT NOTES", description: "Once a tour begins, staff will have the option to instantly send voice-transcribed notes for immediate documentation." }
      ]
    },

    userInsightsCards: [
      {
        title: "INTEGRATION IS ESSENTIAL",
        description: "10 out of 11 users expected tasks, calendars, collections, and notes to work as one connected system."
      },
      {
        title: "SHORTCUTS DRIVE EFFICIENCY",
        description: "9 out of 11 users looked for faster ways to create tasks, schedule events, or access project information."
      },
      {
        title: "VISIBILITY REDUCES FRICTION",
        description: "10 out of 11 users relied on shared calendar and team information before making planning decisions."
      }
    ],
    targetUsers: {
      description: "We identified two primary user archetypes within the museum staff ecosystem, each with distinct drivers and needs.",
      personas: [
        {
          title: "ALEX: THE CURATOR & MANAGER",
          description: "Role: Curator, Education, Office of the President, Guide, Ticket and Relations.\nDrivers: Contributing to cultural education, personal interest in the subject matter.\nEnvironment: Museum office.\nNeeds: Planning, team collaboration, task management.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/544af7d6cc6298448d4e8135adb4ec2bb51850c5/images/alexx.jpg?raw=true"
        },
        {
          title: "MARK: THE INTERN",
          description: "Role: Intern.\nDrivers: Learning and gaining experience in museum operations, impressing supervisors, contributing effectively during the visit.\nEnvironment: Home/On-site.\nNeeds: Clear task assignment, accessibility, collection lists.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/670da0db043a6e565e337fb2b744ed6f9f8518b6/images/mark.jpg?raw=true"
        }
      ],
      conclusion: "Both roles require a centralized dashboard, shared calendar, project tracking, and collection management to reduce switching costs."
    },
 
    branding: {
      description: "The design system was built to be clean, accessible, and highly functional, prioritizing data visualization and task management. It includes standardized colors, buttons, dropdown menus, and calendar components.",
      logoDescription: "We were drawn to the asterisk as a symbol of connection, and wanted to incorporate its radiating structure as a mark that points toward information, toward people, toward the institution itself.",
      logoImage: "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/museonlogo.png?raw=true",       
      featuresImage: "https://github.com/Lumystik/PortfolioLucia/blob/dfc97077f6303fd7953feeb6d4e1a8efdce42b2e/images/button.png?raw=true", 
      shapes: [
        { color: "#000000", size: 120, x: "20%", y: "10%" },
        { color: "#6B6A6A", size: 100, x: "50%", y: "10%"},
        { color: "#D9D9D9", size: 90, x: "75%", y: "10%" },
        { color: "#1600FF", size: 110, x: "35%", y: "10%"},
        { color: "#EE4904", size: 110, x: "0%", y: "10%"}
      ]
    },
    keyFunctions: {
      description: "An all-in-one platform designed to reduce switching costs and improve team collaboration.",
      functions: [
        {
          title: "TASK & SHARED CALENDAR OVERVIEW",
          description: "See the busy and available times of people you have shared your calendar with and plan events accordingly.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/be1755ca40682fbb1c571d38f3aa37d18cc7ada8/images/calendar_museo1.png?raw=true"
        },
        {
          title: "COLLECTION MANAGEMENT",
          description: "A dedicated collection page to easily check contents, export them, and manage items for specific exhibitions.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/465f291d0d01afb736e1502a28db9b14b236e818/images/collection_museon1.png?raw=true"
        },
       {
        title: "AI INTEGRATION",
        description: "AI utilizes conversation transcription to instantly detect tasks with a single click and direct users to the corresponding page.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/ccd5a596d938ff18c9cd80558a2f7d7f2df76b5e/images/smartnotes_museon1.png?raw=true"
      }
      ]
    },
    bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_finalinterface%20(10).gif?raw=true",
    finalPrototype: {
      link: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1?raw=true",
    },
    takeaways: "We solved the complexity of creating a smooth experience for small museum staff, enabling them to develop a better experience for visitors. By developing an all-in-one software, we streamlined the workflow and optimized current museum resources.",
    nextProject: {
      title: "ART BEYOND DIMENSION",
      link: "/project/art-beyond-dimension",
      image: "https://github.com/Lumystik/PortfolioLucia/blob/c39ead2c3b7c47add54a5363ffb7b42cb35b1adf/images/wall.jpg?raw=true"
    }
  },
  "art-beyond-dimension": {
    id: "art-beyond-dimension",
    title: "Art Beyond Dimension",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/0e95408be9b5b18ff336921926c7889c41d95380/images/hero_dimension.jpg?raw=true",
    interfaceImage: "https://github.com/Lumystik/PortfolioLucia/blob/85176369bcb78e03b473d799a45522474f753705/images/dimension_final.jpeg?raw=true",
    overview: "An immersive museum experience that helps young adults engage with art through interaction, AI, and playful learning.",
    scope: "Digital Experience & Totem Interface",
    role: "Digital and Interaction Design",
    timeline: "Final Design Studio",
    team: "Razieh Soleimani, Lucia Medina, Marjan Mehrabi, Fatemeh Khoshbazan",
    prototypeLink: "https://www.figma.com/proto/FnFqrWBxyChSOdL3aVzV9A/Prototype?node-id=616-1965&starting-point-node-id=564%3A1942&t=bIX74fMjWA7kTArF-1",
    problem: "Young visitors often disengage from static museum displays and need more active ways to connect with art.",
    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/a5eea34a05cf9395d6ed4f8b0ada858d50600186/images/ChatGPT%20Image%20Apr%2029%2C%202026%2C%2006_23_00%20PM.png?raw=true",
    researchObjectives: [
      "Understand how young adults engage with art in museums.",
      "Explore how digital interaction can support learning.",
      "Test whether creative participation increases interest."
    ],
    howMightWe: [
      "How might we make museum learning more interactive and personal for young visitors?"
    ],
    userTesting: {
      title: "User Testing & Validation",
      description: "Testing focused on clarity, voice guidance, and whether the print reward felt intuitive.",
      images: [
        "https://github.com/Lumystik/PortfolioLucia/blob/dd95a5f2ca9291229e663073fe9e1c8365466209/images/usertesting_dimension.jpg?raw=true"
      ]
    },
    userInsightsCards: [
      {
        title: "CURIOSITY",
        description: "Users were interested in the concept, but needed clearer onboarding."
      },
      {
        title: "VOICE INTERACTION",
        description: "Voice commands felt more natural than typing or touch."
      },
      {
        title: "SIMPLICITY",
        description: "The interface needed to stay simple in a busy museum setting."
      }
    ],
    keyFunctions: {
      description: "A dual-screen experience combining museum artworks, motion graphics, AI generation, and a printed takeaway.",
      functions: [
        {
          title: "INTERACTIVE LEARNING",
          description: "Users explore paintings and unlock the generator after selecting two artworks.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/5a21c692a5ce09da24b54267b421feeee842d5f6/images/learning_dimension.gif?raw=true"
        },
        {
          title: "AI VOICE PROMPT",
          description: "Users modify the generated artwork through spoken prompts.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/1b024e88bc55015091152250c65c8c7255d83730/images/questioning_dimension.gif?raw=true"
        },
        {
          title: "GAMIFIED PRINTING",
          description: "A short trivia question unlocks a printed version of the final artwork.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/8e602f1e3767619ff568eeb83699dded7863d840/images/gamified_dimension.gif?raw=true"
        }
      ]
    },
    targetUsers: {
      description: "Young adults seeking visual, social, and interactive cultural experiences.",
      personas: [
        {
          title: "Sara: The Explorer",
          description: "Student in Milan who enjoys visual discovery, social sharing, and memorable cultural experiences.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/45a4994bc6796acff20cf10557be4895111209d5/images/user_dimension.png?raw=true"
        }
      ],
      conclusion: "She wants museum experiences to feel personal, visual, and easy to engage with."
    },
    bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/e942b67bef52b6a8237dcd807e02a3f741f791a5/images/wall.jpg?raw=true",
    pillars: [
      {
        title: "Scenario 1: Art Discovery",
        description: "Visitors explore artworks with audio guidance and visual interaction.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/8d6557cb60be6d6c688474d132989b0a8bec9580/images/scenario_1.png?raw=true"
      },
      {
        title: "Scenario 2: Art Print",
        description: "Users answer trivia to receive a printed version of their generated artwork.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/7f099807a3f294985b4812c48bad188f22b5a349/images/scenario_2.png?raw=true"
      },
      {
        title: "Scenario 3: Voice Generation",
        description: "Users create personalized artwork through spoken prompts.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/2bf3def01ee15c268265d1090683a06785465d18/images/scenario_3.png?raw=true"
      }
    ],
    takeaways: "The project shows how museums can use interaction and AI to make art learning more active, personal, and memorable.",
    nextProject: {
      title: "FILMS FOUNDATION",
      link: "/project/films-foundation"
    }
  },
  // Other projects truncated for brevity...
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col gap-6">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Link to="/" className="text-[#131313] hover:underline flex items-center gap-2 text-base md:text-lg">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-[#131313] min-h-screen font-sans">
      <Navbar />
      
      <main className="w-full overflow-hidden">
        {/* 1. Hero Section */}
        <section className="w-full pt-24 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}
              className="w-full rounded-2xl overflow-hidden bg-gray-100"
            >
              <img src={project.heroImage} alt={project.title} className="w-full h-auto object-cover max-h-[70vh]" />
            </motion.div>
          </div>
        </section>

        {/* 2. Project Details & Overview */}
        <section className="pb-24 md:pb-32 w-full bg-white text-[#131313]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center text-left">
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Project Scope</h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.scope}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Role</h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Project Duration</h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.timeline}</p>
              </div>
              {project.team && (
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Team</h4>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.team}</p>
                </div>
              )}
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight break-words m-0"
              >
                {project.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-gray-800 leading-relaxed max-w-3xl font-bold"
              >
                {project.overview}
              </motion.p>
            </div>
          </div>
        </section>

        {/* 8. Process Map - CHANGED ORANGE TO BLACK */}
        {project.processMap && (
          <section className="py-16 md:py-20 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="mb-8 md:mb-10 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">Design Process Map</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {project.processMap.map((phase: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-4 text-left bg-[#131313] p-6 rounded-2xl shadow-sm border border-transparent text-white"
                  >
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white border-b-2 border-white/20 pb-2">{phase.phase}</h4>
                    <ul className="flex flex-col gap-2">
                      {phase.steps.map((step: string, stepIdx: number) => (
                        <li key={stepIdx} className="text-base md:text-lg text-white/90 leading-relaxed flex items-center gap-2">
                          <span className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-white"></span>
                          <span className="break-words">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Target Users - CHANGED ORANGE TO BLACK */}
        {project.targetUsers && (
          <section className="py-16 md:py-20 w-full bg-[#131313] text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">Target Users</h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">{project.targetUsers.description}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {project.targetUsers.personas.map((persona: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl"
                  >
                    <div className="w-full aspect-video bg-white rounded-xl overflow-hidden">
                      <img src={persona.image} alt={persona.title} className="w-full h-full object-cover object-[30%_10%]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-white">{persona.title}</h4>
                      <p className="text-base md:text-lg text-white/80 leading-relaxed whitespace-pre-line">{persona.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5B. User Insights - CHANGED ORANGE TO BLACK */}
        {(project.userInsights || project.userInsightsCards) && (
          <section className="py-16 md:py-20 w-full bg-[#131313] text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">User Insights</h3>
              
              {project.userInsightsCards && project.userInsightsCards.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {project.userInsightsCards.map((card: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-white/5 p-8 rounded-2xl shadow-sm border border-white/10 flex flex-col gap-4"
                    >
                      <h4 className="text-xl font-bold uppercase tracking-tight text-white">
                        {card.title}
                      </h4>
                      <p className="text-base md:text-lg text-white/70 leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* 9. Key Findings Stats - CHANGED ORANGE TO BLACK */}
        {project.keyFindings && (
          <section className="py-16 md:py-20 w-full bg-[#131313] text-white">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="mb-8 md:mb-10 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">Key Findings</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {project.keyFindings.map((finding: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-2 text-left"
                  >
                    <span className="text-5xl md:text-7xl font-bold text-white">{finding.stat}</span>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white">{finding.label}</h4>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed">{finding.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 16. Takeaways - CHANGED ORANGE TO BLACK */}
        {project.takeaways && (
          <section className="py-16 md:py-20 w-full bg-[#131313] text-white">
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-10">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                Takeaways
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed whitespace-pre-line max-w-3xl mx-auto font-medium">
                {project.takeaways}
              </p>
            </div>
          </section>
        )}

        {/* 17. Next Project */}
        {project.nextProject && (
          <section className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden group">
            <img 
              src={project.nextProject.image} 
              alt="Next Project" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/85 transition-colors duration-500 group-hover:bg-black/75" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 mb-4 block">Next Project</span>
              <Link 
                to={project.nextProject.link} 
                className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-white hover:text-gray-200 inline-block"
              >
                {project.nextProject.title}
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
