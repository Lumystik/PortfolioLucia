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

  "films-foundation": {
    id: "films-foundation",
    title: "Films Foundation",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/7cf2bd97f7815c8ba8a5a94d05606596cb94f9a9/images/hero_films.jpg?raw=true",
    interfaceImage: "https://github.com/Lumystik/PortfolioLucia/blob/111391b1702b61b5aaa76ef9f87035cffd4873b5/images/Minimalist%20Website%20Launch%20Computer%20Mockup%20Instagram%20Post.gif?raw=true",
    overview: "A comprehensive UX/UI redesign for Cineteca Milano, an Italian film archive and cultural center. The project focuses on improving usability, accessibility, and the overall digital experience for booking tickets, exploring events, and accessing the film archive.",
    scope: "Web & Mobile UX/UI Redesign",
    role: "UX/UI Designer",
    timeline: "Academic Year 2024-25",
    team: "Kadam Tanishka, Lucia Medina Galan, Dilara Tanrıöven, Wang Xinyu, Wu Junxi",
    prototypeLink: "https://www.figma.com/design/MWvYkF7ybuKjE7SPnGi8po/Assignment?node-id=689-5581&p=f&t=Iu5EfBOZk9ZYcJA2-0",
    pillars2: [
      {
        title: "Streamlined Architecture",
        description: "Reorganized the website structure to introduce a clear Home page, categorized Films (In Theaters vs. Archives), and simplified navigation to reduce cognitive load.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/480139cc265caba04a43d21ff472ecb4824be7ea/images/ia.png?raw=true"
      },
      {
        title: "Timeless Rebranding",
        description: "Created a new visual identity using warm, earthy tones and a contemporary typography system to reflect the institution's historical and cultural significance.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/472122f8a272fe070e22e2dfd8f160e41befbb0f/images/timeless_rebrandingfilms.png?raw=true"
      },
      {
        title: "Accessible Design",
        description: "Ensured the new interface passes color blindness accessibility tests (Protanomaly, Deuteranomaly, Achromatopsia) and features highly legible components.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/a6aa894fecb0c8e5cf48a6cb9971194b453a3e30/images/accessibility_test.gif?raw=true"
      }
    ],
    researchObjectives: "ANALYSIS PHASE:\nWe conducted a Cognitive Walkthrough of the existing Cineteca Milano website and identified several pain points:\n• Limited exploration opportunities with no search function\n• Overwhelming and cluttered menu design\n• Confusing navigation with mixed content (activities vs. bookable films)\n• Fragmented and click-heavy ticket booking process\n\nCOMPETITIVE ANALYSIS:\nWe analyzed competitors like TATE, Getty, and Cineteca Bologna to identify industry standards, focusing on their task flows for viewing film details, exploring events, and booking tickets.",
    targetUsers: {
      description: "We developed personas representing diverse user needs, from creative professionals seeking inspiration to casual enthusiasts.",
      personas: [
        {
          title: "THE CREATOR",
          description: "Costume designers (like Eason) and film students (like Alex) looking for diverse creative inspiration, high-resolution archival films, and networking opportunities. They need reliable access to classic films for study.",
          image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_1]"
        },
        {
          title: "THE ENTHUSIAST",
          description: "Painters, engineers, and graphic designers (like Marco, Carlo, and Miranda) who enjoy retro films, attend local festivals, and seek quality resources on film history. They want clear event details and easy ticket booking.",
          image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_2]"
        }
      ],
      conclusion: "Users needed a platform that allowed smooth switching between sections, clear event details, and a frictionless ticket booking experience with high error tolerance."
    },
    howMightWe: [
      "simplify the ticket booking process to reduce clicks and user frustration?",
      "reorganize the Information Architecture to make the film archive and current events easily discoverable?",
      "modernize the brand identity while preserving the historical and artistic significance of Cineteca Milano?"
    ],
    branding: {
      description: "The redesign moves away from a bold and playful identity to one that is timeless, mature, and elegant. The color palette uses warm, earthy brown and orange tones (#B65929, #2A1002) to reflect values from the past. Typography pairs 'New Spirit' for headings with 'Satoshi' for body text.",
      logoDescription: "New logo introduces a distinctive symbol. This new logo is abstract yet clear, suggesting an archive. It’s a clean, logo that can stand alone for branding purposes..",
      images: [
        "https://github.com/Lumystik/PortfolioLucia/blob/f4d86ca2eb3b0ac3117214ef8ff35634270ddb4b/images/films_branding1.png?raw=true",
        "https://github.com/Lumystik/PortfolioLucia/blob/6217c5f1edc51584a17ffed9f0a84e2d957e8d24/images/logo_cineteca.png?raw=true"
      ]
    },
    keyFunctions: {
      description: "The redesigned platform focuses on three core tasks: Viewing Film Details, Exploring Events, and Booking Tickets across both Web and Mobile.",
      functions: [
        {
          title: "CENTRALIZED FILM DISCOVERY",
          description: "A newly added 'All Films' page categorizes content into 'In Theaters' and 'Our Archives'. It features robust filtering, cast highlights, and direct streaming access for archived films.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/985c14161b727e75b350483da732b98d222fb4db/images/keyfunction_filmpage.png?raw=true"
        },
        {
          title: "STREAMLINED EVENT EXPLORATION",
          description: "Events are categorized using a sticky filter bar. A toggle switches between free and ticketed events, and individual event pages feature a 'Show Map' integration for quick location context.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/44bc54f167d5ef916b175ef981126accbc704003/images/keyfunction__events.png?raw=true"
        },
        {
          title: "FRICTIONLESS TICKET BOOKING",
          description: "A step-by-step flow with a clean 'Select Date and Cinema' section. The seat selection interface clearly distinguishes between available, reserved, and selected seats, culminating in a mobile-friendly QR code ticket.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/b64c5d8fa1db8781e593ab48479a5bda00e94823/images/keyfunction_tickets.png?raw=true"
        }
      ]
    },
    takeaways: "By applying ergonomic principles to the design, we transformed a cluttered and confusing website into a highly usable, accessible, and aesthetically pleasing platform. The new design significantly reduces cognitive load, improves task efficiency (e.g., streamlining the ticket booking flow), and provides a responsive experience across desktop and mobile devices.",
    nextProject: {
      title: "SEEDTAG",
      link: "/project/seedtag"
    }
  },
  "seedtag": {
    id: "seedtag",
    title: "Seedtag Interactive Ads",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/875f29a845d8d4c9b924b22af2bd821846e5eeae/images/hero_seedtag.png?raw=true",
    overview: "As a Seedtag Digital Designer, I created high-impact, AI-enhanced rich media ads and interactive display creatives, modifying brand assets to fit within contextual, privacy-first advertising campaigns. And combined graphic design with animation skills to enhance user engagement, working closely with sales teams and using proprietary AI (Liz) for campaign optimization.",
    scope: "Ad Tech (HTML5/JS)",
    role: "Digital Designer / Frontend Dev",
    timeline: "150+ Campaigns",
    responsibilities: [
      {
        title: "Creative Development",
        desc: "Designing interactive, high-impact ad formats (rich media) that are tailored to the context of the content, moving beyond static ads.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car2.gif?raw=true"
      },
      {
        title: "AI Integration",
        desc: "Modifying and enhancing creatives utilizing proprietary Neuro-Contextual AI ('Liz') to optimize, rather than replace, human design.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car3.gif?raw=true"
      },
      {
        title: "Animation & Interactivity",
        desc: "Adding captivating animations to boost user attention and engagement, turning assets into interactive experiences.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car4.gif?raw=true"
      },
      {
        title: "Collaboration",
        desc: "Working with sales teams and CSMs to align creatives with client objectives and campaign strategies.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/portfolio-10.jpg?raw=true"
      },
      {
        title: "Quality Assurance",
        desc: "Ensuring high-quality visual standards across all digital assets produced for global publishers.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/starbucks5.gif?raw=true"
      }
    ],
    takeaways: "Working with global brands requires adaptability and a deep understanding of interactive design principles. I developed a strong intuition for attention and engagement, learning exactly what makes users stop scrolling."
  },
  "pixela": {
    id: "pixela",
    title: "Pixela",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/pixela.png?raw=true",
    overview: "Pixela is an immersive first-person survival game where you play as an AI named Pixela, who is an unexpected anomaly in a scientific project designed to decode the minds of history's greatest artists. As Pixela, your primary objective is to escape from the scientists who have captured you, using your unique abilities to travel through the worlds of Dalí, Van Gogh and Escher.",
    scope: "Unity3D / C# Videogame Demo",
    role: "Game Designer & Developer",
    timeline: "150 hours",
    prototypeLink: "#",
    keyFunctions: {
      description: "GAME MECHANICS: Travel through the minds of history's greatest artists, each with unique challenges and environments.",
      functions: [
        {
          title: "VINCENT VAN GOGH",
          description: "Achieve entering Van Gogh's bedroom and finding the exit door to pass through the portal. Van Gogh chases you, threatening to cut off your ear.",
          image: "[INSERT_GITHUB_IMAGE_LINK_VAN_GOGH]"
        },
        {
          title: "SALVADOR DALÍ",
          description: "Correctly navigate through the maze to find the portal and try to find an object from Dalí's paintings to escape.",
          image: "[INSERT_GITHUB_IMAGE_LINK_DALI]"
        },
        {
          title: "M. C. ESCHER",
          description: "Find the portal by traversing a path with altered reality. Stairs that go up and down the ceiling and walls. Villains chase you, and if they catch you, you die.",
          image: "[INSERT_GITHUB_IMAGE_LINK_ESCHER]"
        }
      ]
    },
    takeaways: "Integrating AI into game mechanics opened up new possibilities for dynamic art generation, creating a unique experience for every player.",
    nextProject: {
      title: "MUSE*ON",
      link: "/project/museon"
    }
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(false);
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
              {project.prototypeLink && (
                <div className="mt-4">
                  <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-[#131313] text-[#131313] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#131313] hover:text-white transition-all duration-300 w-fit">
                    View Final Prototype
                  </a>
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

        {/* 3. The Problem */}
        {project.problem && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313] mb-6">
                    The Problem
                  </h3>
                  <div className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {project.problem}
                  </div>
                </div>
                <div className="lg:col-span-7 flex items-center justify-center p-2 md:p-4 overflow-hidden bg-[#F9F9F9] border border-gray-100 rounded-2xl">
                  <img
                    src={project.problemImage || "/placeholder-phone-mockup.png"}
                    alt="The Problem Illustration"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* 4. Research Objectives & Insights */}
        {(project.researchObjectives || project.researchInsights) && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 md:gap-24">
              {project.researchObjectives && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">
                      Research Objectives
                    </h3>
                  </div>

                  <div className="lg:col-span-7 lg:pt-1">
                    {Array.isArray(project.researchObjectives) ? (
                      <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-[#131313] leading-relaxed mb-6">
                          Through user interviews and surveys, I wanted to:
                        </p>
                        <ul className="flex flex-col gap-5">
                          {project.researchObjectives.map((line: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-4 text-base md:text-lg text-[#131313] leading-relaxed"
                            >
                              <span className="text-[#131313] font-bold select-none mt-1">•</span>
                              <span className="leading-relaxed">{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="max-w-2xl">
                        <p className="text-base md:text-lg text-[#131313] leading-relaxed mb-6">
                          Through user interviews and surveys, I wanted to:
                        </p>
                        <div className="text-base md:text-lg text-[#131313] leading-relaxed whitespace-pre-line">
                          {project.researchObjectives}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project.researchInsights && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {project.researchInsights.map((insight: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="flex flex-col gap-3 bg-[#FAF9F6] p-8 rounded-xl h-full"
                    >
                      <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">{insight.title}</h4>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{insight.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 8. Process Map */}
        {project.processMap && (
          <section className="py-16 md:py-20 w-full bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="mb-8 md:mb-10 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">Design Process Map</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {project.processMap.map((phase: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-4 text-left bg-[#E54D2E] p-6 rounded-2xl shadow-sm border border-transparent text-white"
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

        {/* 6. Target Users - Vibrant Red Background */}
        {project.targetUsers && (
          <section className="py-16 md:py-20 w-full bg-[#E54D2E] text-white">
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
                    className="flex flex-col gap-6 bg-black/20 border border-transparent p-6 rounded-2xl"
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
   
        {/* 7. How Might We - Alternate Black Background */}
        {project.howMightWe && project.howMightWe.length > 0 && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8 }}
                  className="bg-[#131313] text-white p-8 md:p-12 rounded-xl flex items-center min-h-[160px] w-full"
                >
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white m-0">
                    How Might We...
                  </h3>
                </motion.div>

                <div className="flex flex-col gap-4 md:gap-6 w-full">
                  {project.howMightWe.map((hmw: string, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="bg-[#131313] text-white p-8 md:p-12 rounded-xl flex items-center min-h-[160px] w-full"
                    >
                      <p className="text-base md:text-lg text-white/90 leading-relaxed">
                        {hmw}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- 11. IDEATION SECTION --- */}
        {project.ideation && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
              
              <div className="flex flex-col gap-8 max-w-4xl text-left">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">
                  Ideation
                </h3>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="w-full bg-[#F9F9F9] p-6 md:p-12 rounded-2xl border border-gray-100">
                  <img 
                    src={project.ideation.heroFlow} 
                    alt="Hero Flow" 
                    className="w-full h-auto object-contain max-w-5xl mx-auto" 
                  />
                </div>
                <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest text-center">
                  {project.ideation.heroFlowCaption}
                </p>
              </motion.div>

              <div className="bg-[#FAF9F6] p-8 md:p-16 rounded-[2rem] flex flex-col gap-12">
                <div className="flex flex-col gap-2 text-left">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">Laying the Foundation</h4>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">Initial Wireframe Iterations</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                  {project.ideation.wireframes.map((wire: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="w-full max-w-[280px] mx-auto aspect-[2/3] overflow-hidden shadow-sm border border-gray-100 bg-white">
                        <img 
                          src={wire.image} 
                          alt={wire.caption} 
                          className="w-full h-auto object-fit" 
                        />
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <p className="text-base md:text-lg font-bold uppercase tracking-tight text-[#131313]">
                          {wire.caption.includes(':') ? wire.caption.split(':')[0] : wire.caption}
                        </p>
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                          {wire.caption.includes(':') ? wire.caption.split(':')[1] : ""}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}
        
        {/* 10. Pillars / Scenarios (V2 Layout) */}
        {project.pillars2 && project.pillars2.length > 0 && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 md:gap-24">
              {project.pillars2[0] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                      <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight text-[#131313]">
                        {project.pillars2[0].title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {project.pillars2[0].description}
                      </p>
                    </div>
                    <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-gray-100 p-4 bg-white shadow-sm">
                      <img 
                        src={project.pillars2[0].image} 
                        alt={project.pillars2[0].title} 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {project.pillars2.length > 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                  {project.pillars2.slice(1).map((pillar: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                      className="flex flex-col gap-6 items-start text-left group"
                    >
                      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-gray-100 p-4 bg-white">
                        <img 
                          src={pillar.image} 
                          alt={pillar.title} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">
                          {pillar.title}
                        </h4>
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* 10. Pillars / Scenarios */}
        {project.pillars && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {project.pillars.map((pillar: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="flex flex-col gap-6 items-start text-left group"
                >
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border border-gray-100 p-2">
                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">{pillar.title}</h4>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 5A. User Testing */}
        {project.userTesting && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">
                  {project.userTesting.title || "User Testing"}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {project.userTesting.description}
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 gap-8">
                {project.userTesting.images.map((img: string, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="w-full rounded-2xl overflow-hidden bg-[#F9F9F9] border border-gray-100 p-2 md:p-3"
                  >
                    <img src={img} alt={`User Testing ${idx + 1}`} className="w-full h-auto object-cover rounded-xl" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5B. User Insights */}
        {(project.userInsights || project.userInsightsCards) && (
          <section className="py-16 md:py-20 w-full bg-[#E54D2E] text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">User Insights</h3>
              
              {project.userInsights && (project.userInsights.benefitsImage || project.userInsights.insightsImage) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {project.userInsights.benefitsImage && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-left text-white">User Perceived Benefits</h4>
                      <div className="w-full rounded-2xl overflow-hidden bg-white/10 p-4 border border-white/10 shadow-sm flex items-center justify-center">
                        <img src={project.userInsights.benefitsImage} alt="User Benefits" className="w-full max-w-md h-auto object-contain" />
                      </div>
                    </div>
                  )}
                  {project.userInsights.insightsImage && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-left text-white">User Priorities</h4>
                      <div className="w-full rounded-2xl overflow-hidden bg-white/10 p-4 border border-white/10 shadow-sm flex items-center justify-center">
                        <img src={project.userInsights.insightsImage} alt="User Insights" className="w-full max-w-md h-auto object-contain" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.userInsightsCards && project.userInsightsCards.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {project.userInsightsCards.map((card: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4"
                    >
                      <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">
                        {card.title}
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* 9. Key Findings Stats - Vibrant Red Background */}
        {project.keyFindings && (
          <section className="py-16 md:py-20 w-full bg-[#E54D2E] text-white">
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

        {/* Logo Design Section */}
        {(project.branding?.logoDescription || project.branding?.logoImage) && (
          <section className="py-16 md:py-20">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-6 mx-auto w-full">
              <div className="flex flex-col gap-6 max-w-lg">
                <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">
                  Logo Design
                </h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {project.branding.logoDescription}
                </p>
              </div>

              {project.branding.logoImage && (
                <div className="flex justify-center">
                  <img
                    src={project.branding.logoImage}
                    alt="Logo"
                    className="w-full max-w-[160px] md:max-w-[200px] h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Features Image Section */}
        {project.branding?.featuresImage && (
          <section className="py-16 md:py-20 border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-6">
              <img 
                src={project.branding.featuresImage} 
                alt="Feature" 
                className="w-full h-auto max-w-3xl mx-auto object-contain" 
              />
            </div>
          </section>
        )}

        {/* --- 13. KEY FUNCTIONS SECTION --- */}
        {project.keyFunctions && (
          <section className="py-16 md:py-20 w-full bg-white text-[#131313]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                <div className="flex flex-col gap-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">
                    Key Functions
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {project.keyFunctions.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {project.keyFunctions.functions.map((func: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group flex flex-col gap-6"
                  >
                    <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden flex items-center justify-center bg-[#F9F9F9] border border-gray-100 p-8">
                      <img
                        src={func.image}
                        alt={func.title}
                        className="w-full h-full max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">
                        {func.title}
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {func.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- TESTING OBJECTIVES (ADAPTED) - Alternate Black Background --- */}
        {project.testingObjectives && (
          <section className="py-16 md:py-20 w-full bg-[#131313] text-white">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="mb-12 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left">Testing Objectives</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {project.testingObjectives.map((obj: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col gap-4 p-8 bg-[#1a1a1a] rounded-2xl border border-gray-800">
                    <h4 className="text-xl font-bold uppercase tracking-tight">{obj.title}</h4>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">{obj.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- USABILITY RESULTS (ADAPTED) --- */}
        {project.usabilityResults && (
          <section className="py-16 md:py-24 w-full bg-white border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-8">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">{project.usabilityResults.title}</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium italic">"{project.usabilityResults.description}"</p>
            </div>
          </section>
        )}

        {/* --- ITERATIONS & REFINEMENT (ADAPTED) --- */}
        {project.iterations && (
          <section className="py-16 md:py-24 w-full bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 md:gap-20">
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">{project.iterations.title}</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.iterations.description}</p>
              </div>

              <div className="flex flex-col gap-16 md:gap-32">
                {project.iterations.items.map((item: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={`flex flex-col gap-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">{item.title}</h4>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                    <div className={`w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-2 md:p-6 bg-white flex justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <img src={item.image || "/placeholder-image.png"} alt={item.title} className="w-full max-w-[280px] h-auto object-contain drop-shadow-xl my-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- NICE TO HAVES (ADAPTED) --- */}
        {project.niceToHaves && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col gap-4 mb-12 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">{project.niceToHaves.title}</h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{project.niceToHaves.description}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {project.niceToHaves.items.map((item: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col gap-3 p-8 bg-[#F9F9F9] rounded-2xl border border-gray-100">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">{item.title}</h4>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- 15. FINAL PROTOTYPE SECTION --- */}
        {project.finalPrototype && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start gap-8">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">
                  Final Prototype
                </h3>
                <a 
                  href={project.finalPrototype.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-4 border border-[#131313] text-[#131313] uppercase tracking-widest text-base font-bold hover:bg-[#131313] hover:text-white transition-all duration-300 rounded-md"
                >
                  View Final Version
                </a>
              </div>
              <div className="w-full">
                {project.bannerImage && (
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                    <img 
                      src={project.bannerImage} 
                      alt="Final Prototype Showcase" 
                      className="max-w-[260px] h-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* Seedtag Specific Scrolling Gallery */}
        {project.id === 'seedtag' && (
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-center mb-16 text-[#131313]">Key Responsibilities & Focus Areas</h3>
              
              <div className="flex flex-col gap-24">
                {project.responsibilities.map((item: any, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313] mb-4">{item.title}</h4>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* --- 16. TAKEAWAYS - Vibrant Red Background --- */}
        {project.takeaways && (
          <section className="py-16 md:py-20 w-full bg-[#E54D2E] text-white">
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

        {/* --- 17. NEXT PROJECT --- */}
        {project.nextProject && (
          <section className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden group bg-[#131313]">
            {project.nextProject.image && (
              <img 
                src={project.nextProject.image} 
                alt="Next Project" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
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
