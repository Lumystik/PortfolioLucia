i wanna make the wireframe section bigger covering the size of the image, sch as the keyfunction section but without gray area around.... and can we use less text in some ections, o rreduce words, just use core sentences without double dashes so on?? keep and send the same exact precise code import { motion } from 'motion/react';
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
    overview: "MUSE*ON is an all-in-one management platform designed for small museum teams. The project focuses on reducing fragmented workflows, centralizing daily operations, and helping staff manage exhibitions, collections, tasks, and events with greater clarity and efficiency.",
    scope: "End-to-End App",
    role: "UX Research, Branding, UX/UI Design",
    team: "Martina Braidotti, Lucia Medina, Ilario Pedone, Agnese Rosselli, Mark Waisara",
    prototypeLink: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1?raw=true",
    problem: "Small museum teams often work with limited staff, limited time, and scattered tools.\n\nIn our research context, only 4 full-time staff members were responsible for managing 59 events and exhibitions per year while relying on 6 different tools. This created duplicated work, unclear responsibilities, and constant switching between platforms.",
    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/56aed6413b71c2bc18bd6c0dcd8054a3b546474d/images/complicatedworkflow_museon.jpg?raw=true",
    processMap: [
      { phase: "Research", steps: ["Desk research", "On-site research", "Ecosystem map", "Research key findings"] },
      { phase: "Define", steps: ["Design brief", "Personas & scenarios", "Hero flow & wireflow"] },
      { phase: "Develop", steps: ["User test results", "Design system", "Prototype"] }
    ],
    howMightWe: [ "How might we reduce workflow complexity for small museum teams?", "How might we centralize the management of different museum operations without overwhelming staff?", "How might we help museum staff use their existing resources more efficiently so they can create a better visitor experience?" ],
ideation: {
    question: "How can we create a seamless workflow that supports museum staff across different roles while keeping information centralized, accessible, and easy to act on?",
    heroFlow: "https://github.com/Lumystik/PortfolioLucia/blob/f8b832c9f326ed2f6d2fd32515316ec56fb143fa/images/workflow_museon.png?raw=true",
    heroFlowCaption: "Alex Hero Flow: Organizing a new temporary exhibition.", // Fixed: Added quotes here
    wireframes: [
      {
        image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Dashboard_mobile_wireframe.png?raw=true",
        caption: "Dashboard: Centralized overview for daily museum operations"
      },
      {
        image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Calendar_mobile_wireframe%20(1).png?raw=true",
        caption: "Calendar: Shared scheduling and team availability"
      },
      {
        image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Dashboard_mobile_wireframe.png?raw=true",
        caption: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/smart%20notes%20pop%20up%20mobile.png"
      }
    ]
  },
userInsightsCards: [
  {
    title: "INTEGRATION IS ESSENTIAL",
    description: "Staff needed one system to reduce tool-switching and improve collaboration."
  },
  {
    title: "SHORTCUTS DRIVE EFFICIENCY",
    description: "Quick access to tasks, projects, and key actions helped staff move faster."
  },
  {
    title: "VISIBILITY REDUCES FRICTION",
    description: "A shared overview made calendars, collections, and responsibilities easier to manage."
  }
],
    targetUsers: {
      description: "We identified two main user archetypes within the museum staff ecosystem. Each one had different responsibilities, but both needed clearer coordination and easier access to shared information.",
      personas: [
        {
          title: "ALEX: THE CURATOR & MANAGER",
          description: "Role: Curator, education coordinator, office support, guide, ticketing and visitor relations.\nDrivers: Contributing to cultural education and sharing knowledge with visitors.\nEnvironment: Museum office.\nNeeds: Planning, team collaboration, task management, and clear project visibility.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/544af7d6cc6298448d4e8135adb4ec2bb51850c5/images/alexx.jpg?raw=true"
        },
        {
          title: "MARK: THE INTERN",
          description: "Role: Intern.\nDrivers: Learning museum operations, supporting the team, and contributing effectively during visits and exhibitions.\nEnvironment: Home and on-site.\nNeeds: Clear task assignments, accessible information, and easy-to-use collection lists.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/670da0db043a6e565e337fb2b744ed6f9f8518b6/images/mark.jpg?raw=true"
        }
      ],
      conclusion: "Both roles required a centralized dashboard, shared calendar, project tracking, and collection management tools to reduce switching costs and support smoother collaboration."
    },
 
    branding: {
 description: "The design system was created to be clean, accessible, and task-oriented. We prioritized clarity, data visibility, and reusable components for dashboards, calendars, dropdowns, buttons, and management flows.",
  logoDescription: "The asterisk became a symbol of connection. Its radiating structure represents information, people, objects, and institutional knowledge coming together in one shared system.",
 logoImage: "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/museonlogo.png?raw=true",       // optional
  featuresImage: "https://github.com/Lumystik/PortfolioLucia/blob/dfc97077f6303fd7953feeb6d4e1a8efdce42b2e/images/button.png?raw=true", // optional

  shapes: [
    { color: "#000000", size: 120, x: "20%", y: "10%" },
    { color: "#6B6A6A", size: 100, x: "50%", y: "10%"},
    { color: "#D9D9D9", size: 90, x: "75%", y: "10%" },
    { color: "#1600FF", size: 110, x: "35%", y: "10%"},
    { color: "#EE4904", size: 110, x: "0%", y: "10%"}
  ]
    },
    keyFunctions: {
      description: "An all-in-one platform created to reduce switching costs, improve visibility, and support collaboration across small museum teams.",
      functions: [
        {
          title: "TASK & SHARED CALENDAR OVERVIEW",
          description: "A shared calendar helps staff understand team availability, plan events, and coordinate responsibilities without relying on separate communication tools.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/be1755ca40682fbb1c571d38f3aa37d18cc7ada8/images/calendar_museo1.png?raw=true"
        },
        {
          title: "COLLECTION MANAGEMENT",
          description: "A dedicated collection page allows staff to review items, organize exhibition materials, export information, and manage objects from one central space.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/465f291d0d01afb736e1502a28db9b14b236e818/images/collection_museon1.png?raw=true"
        },
       {
        title: "AI INTEGRATION",
        description: "AI-supported notes transform conversation transcripts into actionable tasks, helping users move directly from discussion to execution.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/ccd5a596d938ff18c9cd80558a2f7d7f2df76b5e/images/smartnotes_museon1.png?raw=true"
      }
 
      ]
    },
    bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_finalinterface%20(10).gif?raw=true",
    
    // ADD THIS BLOCK HERE:
    finalPrototype: {
      link: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1?raw=true", // Put your figma or prototype link here
    },
    takeaways: "MUSE*ON addressed the complexity of small museum operations by bringing tasks, calendars, collections, projects, and AI-supported notes into one connected workflow. The final solution helps staff reduce tool-switching, improve coordination, and dedicate more attention to the visitor experience.",
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
    overview: "Art Beyond Dimension explores how future museum experiences can become more interactive, personal, and engaging for young adults. The project uses digital interaction, AI voice prompts, and generative artwork to help visitors understand art in a more active and memorable way.",
    scope: "Digital Experience & Totem Interface",
    role: "Digital and Interaction Design",
    timeline: "Final Design Studio",
    team: "Razieh Soleimani, Lucia Medina, Marjan Mehrabi, Fatemeh Khoshbazan",
    prototypeLink: "https://www.figma.com/proto/FnFqrWBxyChSOdL3aVzV9A/Prototype?node-id=616-1965&starting-point-node-id=564%3A1942&t=bIX74fMjWA7kTArF-1",
    problem:"Young visitors increasingly expect cultural spaces to be interactive, personalized, and participatory. Traditional museum displays can feel static, making it harder for younger audiences to connect emotionally with artworks or understand their historical and artistic context.",
    researchObjectives: "\n• Explore ways to reduce information gaps in art understanding among young adults. \n• Investigate how digital interactions can support learning within traditional museum environments.\n• Understand how visitors can become active participants by creating their own artwork. \n• Assess how engagement strategies influence appreciation of artistic heritage.",
    howMightWe: [ "How might we combine interactive technology with the traditional museum experience to reduce information gaps and help young visitors build a stronger appreciation for artistic heritage?" ],
    userTesting: {
      title: "User Testing & Validation",
      description: "We conducted in-person testing sessions to observe how users interacted with the interface in a natural setting. We focused on whether the audio guidance was understandable, whether the interaction felt intuitive, and whether the gamified printing process created a rewarding moment.",
      images: [
        "https://github.com/Lumystik/PortfolioLucia/blob/dd95a5f2ca9291229e663073fe9e1c8365466209/images/usertesting_dimension.jpg?raw=true"
      ]
    },
    userInsightsCards: [
      {
        title: "EMOTIONAL REACTIONS",
        description: "Users described the concept with a mix of curiosity, excitement, and initial uncertainty. For participants unfamiliar with this type of technology, clear guidance became essential to transform confusion into engagement."
      },
      {
        title: "INTERACTION PREFERENCES",
        description: "Participants preferred speaking over typing or touching the screen, describing voice interaction as more natural and expressive. They also valued realism, novelty, and emotional connection, especially when sound and storytelling supported the experience."
      },
      {
        title: "DESIGN CONSIDERATIONS",
        description: "The main design challenges were reducing cognitive overload, making the audio interaction accessible, supporting first-time AI users, and designing for the physical museum context, including visibility, contrast, and crowd flow."
      }
    ],
    keyFunctions: {
      description: "The experience is built around two connected screens: one interface for selecting and learning about artworks, and one projection surface where generated artworks are displayed. Motion graphics support storytelling and help visitors understand the history behind selected paintings.",
      
     functions: [
        {
          title: "INTERACTIVE LEARNING",
          description: "Visitors choose artworks they are interested in and receive guided information about each piece. After selecting at least two paintings, they can generate a new artwork based on their choices.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/5a21c692a5ce09da24b54267b421feeee842d5f6/images/learning_dimension.gif?raw=true"
        },
        {
          title: "AI VOICE PROMPT",
          description: "The system uses voice interaction to guide visitors and collect creative prompts. Users can ask to modify the generated artwork, for example by making it more minimal, colorful, abstract, or emotional.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/1b024e88bc55015091152250c65c8c7255d83730/images/questioning_dimension.gif?raw=true"
        },
        {
          title: "GAMIFIED PRINTING & SCREEN PROJECTION",
          description: "Before printing, the system asks short questions about the selected paintings. Correct answers unlock a printed version of the generated artwork, turning learning into a playful reward.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/8e602f1e3767619ff568eeb83699dded7863d840/images/gamified_dimension.gif?raw=true"
        }
      ]
    },
      targetUsers: {
      description: "We focused on one primary user archetype: young adults who seek cultural experiences that are interactive, social, and personally meaningful.",
      personas: [
        {
          title: "Sara: The Explorer",
          description: "Role: Student.\nDrivers: Looking for new experiences, documenting meaningful moments, and sharing cultural activities socially.\nEnvironment: Milan, Italy.\nNeeds: Engaging, flexible, and interactive experiences that support both learning and self-expression.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/45a4994bc6796acff20cf10557be4895111209d5/images/user_dimension.png?raw=true"
        }
      ],
      conclusion: "Sara represents an experience-driven visitor who values cultural learning when it feels active, personal, and easy to engage with."
    },
     bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/e942b67bef52b6a8237dcd807e02a3f741f791a5/images/wall.jpg?raw=true",
       pillars: [
      {
        title: "Scenario 1: Interactive Art Discovery Experience with tablet and wall projector",
        description: "Two screens display available artworks and generated outputs. As the visitor approaches, the system invites them to select pieces of interest, listen to audio-guided explanations, and explore each artwork interactively. Once ready, they can generate a new artwork that appears on the projection wall.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/8d6557cb60be6d6c688474d132989b0a8bec9580/images/scenario_1.png?raw=true"
      },
      {
        title: "Scenario 2: Interactive Art Print Experience",
        description: "After selecting at least two paintings, visitors can combine them into a new artwork. Before printing, the system asks brief learning questions about the selected works. Correct answers unlock a physical print, creating a memorable reward for engagement.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/7f099807a3f294985b4812c48bad188f22b5a349/images/scenario_2.png?raw=true"
      },
      {
        title: "Scenario 3: AI Voice Prompt",
        description: "The AI system generates a new artwork based on the visitor’s spoken prompts, allowing them to influence the visual result through language, preference, and interpretation.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/2bf3def01ee15c268265d1090683a06785465d18/images/scenario_3.png?raw=true"
      }
    ],
    takeaways: "The final concept uses personalization, voice interaction, and gamification to turn passive observation into active cultural exploration. By allowing visitors to learn, create, and take home a generated artwork, the experience encourages curiosity and makes museum learning more memorable.",
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
    overview: "A UX/UI redesign for Cineteca Milano, an Italian film archive and cultural center. The project focuses on improving usability, accessibility, and the overall digital experience for discovering films, exploring cultural events, and booking tickets.",
    scope: "Web & Mobile UX/UI Redesign",
    role: "UX/UI Designer",
    timeline: "Academic Year 2024-25",
    team: "Kadam Tanishka, Lucia Medina Galan, Dilara Tanrıöven, Wang Xinyu, Wu Junxi",
    prototypeLink: "https://www.figma.com/design/MWvYkF7ybuKjE7SPnGi8po/Assignment?node-id=689-5581&p=f&t=Iu5EfBOZk9ZYcJA2-0",
    pillars2: [
      {
        title: "Streamlined Architecture",
        description: "We reorganized the website structure by introducing a clearer homepage, separating current screenings from archival films, and simplifying navigation to reduce cognitive load.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/480139cc265caba04a43d21ff472ecb4824be7ea/images/ia.png?raw=true"
      },
      {
        title: "Timeless Rebranding",
        description: "We developed a warmer and more contemporary visual identity that respects the institution’s historical value while making the interface feel more modern and accessible.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/472122f8a272fe070e22e2dfd8f160e41befbb0f/images/timeless_rebrandingfilms.png?raw=true"
      },
      {
        title: "Accessible Design",
        description: "We tested the color system for different forms of color blindness and designed components with stronger legibility, contrast, and usability across devices.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/a6aa894fecb0c8e5cf48a6cb9971194b453a3e30/images/accessibility_test.gif?raw=true"
      }
    ],
    researchObjectives: "ANALYSIS PHASE:\nWe conducted a cognitive walkthrough of the existing Cineteca Milano website and identified several usability pain points:\n• Limited exploration opportunities and no clear search function\n• Overwhelming menu structure\n• Confusing navigation between activities, screenings, and archive content\n• Fragmented and click-heavy ticket booking process\n\nCOMPETITIVE ANALYSIS:\nWe analyzed cultural institutions such as Tate, Getty, and Cineteca Bologna to understand industry standards for film discovery, event exploration, and ticket booking flows.",
    targetUsers: {
      description: "We developed personas representing different user needs, from creative professionals looking for archival material to casual visitors interested in cultural events.",
      personas: [
        {
          title: "THE CREATOR",
          description: "Costume designers and film students looking for creative inspiration, high-quality archival films, and reliable resources for research and study.",
          image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_1]"
        },
        {
          title: "THE ENTHUSIAST",
          description: "Film lovers, artists, engineers, and designers interested in retro films, festivals, and cultural events. They need clear event information and a simple booking experience.",
          image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_2]"
        }
      ],
      conclusion: "Users needed a platform that supported smooth navigation between sections, clearer event details, stronger discoverability, and a ticket booking flow with fewer steps and higher error tolerance."
    },
    howMightWe: [
      "How might we simplify the ticket booking process to reduce clicks and user frustration?",
      "How might we reorganize the information architecture so films, events, and archive content become easier to discover?",
      "How might we modernize the brand identity while preserving the historical and artistic value of Cineteca Milano?"
    ],
    branding: {
      description: "The redesign moves from a playful visual identity toward a more timeless, mature, and elegant direction. The color palette uses warm earthy tones to reference the past, while the typography system combines expressive headings with clean, readable body text.",
      logoDescription: "The new logo introduces a distinctive abstract symbol inspired by the idea of an archive. It is simple enough to work as a standalone mark while giving the platform a stronger and more recognizable identity.",
      images: [
        "https://github.com/Lumystik/PortfolioLucia/blob/f4d86ca2eb3b0ac3117214ef8ff35634270ddb4b/images/films_branding1.png?raw=true",
        "https://github.com/Lumystik/PortfolioLucia/blob/6217c5f1edc51584a17ffed9f0a84e2d957e8d24/images/logo_cineteca.png?raw=true"
      ]
    },
    keyFunctions: {
      description: "The redesigned platform focuses on three core tasks: discovering films, exploring events, and booking tickets across desktop and mobile.",
      functions: [
        {
          title: "CENTRALIZED FILM DISCOVERY",
          description: "A new All Films page separates current screenings from archival content and supports discovery through filters, cast highlights, and direct access to archived films.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/985c14161b727e75b350483da732b98d222fb4db/images/keyfunction_filmpage.png?raw=true"
        },
        {
          title: "STREAMLINED EVENT EXPLORATION",
          description: "Events are organized with a sticky filter bar, free/ticketed event toggles, and location support through map integration, helping users quickly understand what is available and where it happens.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/44bc54f167d5ef916b175ef981126accbc704003/images/keyfunction__events.png?raw=true"
        },
        {
          title: "FRICTIONLESS TICKET BOOKING",
          description: "A step-by-step booking flow helps users select a date, cinema, and seat with fewer distractions. The mobile ticket includes a QR code for a smoother visit experience.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/b64c5d8fa1db8781e593ab48479a5bda00e94823/images/keyfunction_tickets.png?raw=true"
        }
      ]
    },
    takeaways: "By applying usability and accessibility principles, we transformed a cluttered website into a clearer and more responsive cultural platform. The redesign reduces cognitive load, improves film and event discovery, and creates a more efficient ticket booking experience across web and mobile.",
    nextProject: {
      title: "SEEDTAG",
      link: "/project/seedtag"
    }
  },
"seedtag": {
    id: "seedtag",
    title: "Seedtag Interactive Ads",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/875f29a845d8d4c9b924b22af2bd821846e5eeae/images/hero_seedtag.png?raw=true",
    overview: "As a Digital Designer at Seedtag, I designed high-impact rich media ads and interactive display creatives for contextual, privacy-first advertising campaigns. My work combined visual design, motion, HTML5/CSS/JavaScript, and cross-functional collaboration to adapt global brand assets into engaging digital experiences.",
    scope: "Ad Tech (HTML5/JS)",
    role: "Digital Designer / Frontend Dev",
    timeline: "150+ Campaigns",
    // These are the pairs for your two-column layout
    responsibilities: [
      {
        title: "Creative Development",
        desc: "Designed interactive rich media formats that transformed static brand assets into contextual digital experiences tailored to each campaign environment.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car2.gif?raw=true"
      },
      {
        title: "AI Integration",
        desc: "Adapted and enhanced creatives using Seedtag’s proprietary Neuro-Contextual AI, using AI as a support tool for optimization while keeping human design judgment at the center.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car3.gif?raw=true"
      },
      {
        title: "Animation & Interactivity",
        desc: "Built animated and interactive elements to increase attention, create stronger engagement, and make each digital ad feel more dynamic across devices.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car4.gif?raw=true"
      },
      {
        title: "Collaboration",
        desc: "Worked closely with sales teams and client-facing stakeholders to align creative execution with campaign goals, brand guidelines, and performance expectations.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/portfolio-10.jpg?raw=true"
      },
      {
        title: "Quality Assurance",
        desc: "Maintained high visual and technical standards across digital assets, ensuring consistency, responsiveness, and polished delivery for global publishers and brands.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/starbucks5.gif?raw=true"
      }
    ],
    takeaways: "Working on more than 150 campaigns taught me how to design quickly, adapt to different brand systems, and balance visual impact with technical constraints. I developed a strong understanding of attention, interaction, and what makes users stop scrolling."
  },
  "pixela": {
    id: "pixela",
    title: "Pixela",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/pixela.png?raw=true",
    overview: "Pixela is an immersive first-person survival game where the player becomes an AI anomaly inside a scientific project created to decode the minds of famous artists. The experience takes users through surreal worlds inspired by Dalí, Van Gogh, and Escher, combining escape mechanics with art-driven storytelling.",
    scope: "Unity3D / C# Videogame Demo",
    role: "Game Designer & Developer",
    timeline: "150 hours",
    prototypeLink: "#",
    keyFunctions: {
      description: "GAME MECHANICS: Players travel through the minds of iconic artists, each represented through a unique environment, challenge, and visual logic.",
      functions: [
        {
          title: "VINCENT VAN GOGH",
          description: "Players enter Van Gogh’s bedroom and search for the exit portal while being chased through an emotionally charged environment inspired by his life and work.",
          image: "[INSERT_GITHUB_IMAGE_LINK_VAN_GOGH]"
        },
        {
          title: "SALVADOR DALÍ",
          description: "Players navigate a surreal maze and search for an object inspired by Dalí’s paintings in order to progress through the world.",
          image: "[INSERT_GITHUB_IMAGE_LINK_DALI]"
        },
        {
          title: "M. C. ESCHER",
          description: "Players move through an altered architectural space where stairs, ceilings, and walls challenge perception while enemies create pressure and urgency.",
          image: "[INSERT_GITHUB_IMAGE_LINK_ESCHER]"
        }
      ]
    },
    takeaways: "Building Pixela helped me explore how game mechanics, narrative, and visual references can work together to create an immersive interactive experience. It also strengthened my understanding of Unity, C#, and environmental storytelling.",
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
          <Link to="/" className="text-[#131313] hover:underline flex items-center gap-2">
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
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center text-left">
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Project Scope</h4>
                <p className="text-lg text-gray-700">{project.scope}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Role</h4>
                <p className="text-lg text-gray-700">{project.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Project Duration</h4>
                <p className="text-lg text-gray-700">{project.timeline}</p>
              </div>
              {project.team && (
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#131313]">Team</h4>
                  <p className="text-lg text-gray-700">{project.team}</p>
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
                className="text-xl md:text-2xl text-gray-800 leading-relaxed max-w-3xl font-bold"
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
        
        {/* Left Column: Text */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313] mb-6">
            The Problem
          </h3>
          <div className="text-lg md:text-xl text-gray-800 leading-relaxed whitespace-pre-line">
            {project.problem}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:col-span-7 flex items-center justify-center p-8 md:p-12 overflow-hidden bg-[#F9F9F9] border border-gray-100 rounded-2xl">
          <img
            src={project.problemImage || "/placeholder-phone-mockup.png"}
            alt="The Problem Illustration"
            className="w-full max-w-[220px] md:max-w-md h-auto object-contain drop-shadow-2xl"
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                  <div className="lg:col-span-4">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">
                      Research<br />Objectives
                    </h3>
                  </div>

                  <div className="lg:col-span-8">
                    {Array.isArray(project.researchObjectives) ? (
                      <ul className="flex flex-col gap-6">
                        {project.researchObjectives.map((line: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3 text-lg md:text-xl text-gray-800">
                            <span className="text-[#131313] font-bold select-none mt-0.5">•</span>
                            <span className="leading-relaxed">{line}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-gray-800">
                        {project.researchObjectives}
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
                      <h4 className="text-base font-bold uppercase tracking-wide text-[#131313]">{insight.title}</h4>
                      <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">{insight.description}</p>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {project.processMap.map((phase: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-4 text-left bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <h4 className="text-xl font-bold text-[#131313] border-b-2 border-gray-100 pb-2 uppercase">{phase.phase}</h4>
                    <ul className="flex flex-col gap-2">
                      {phase.steps.map((step: string, stepIdx: number) => (
                        <li key={stepIdx} className="text-base font-medium text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-[#131313]"></span>
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


        {/* 6. Target Users */}
        {project.targetUsers && (
          <section className="py-16 md:py-20 w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">Target Users</h3>
                <p className="text-lg md:text-xl leading-relaxed">{project.targetUsers.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.targetUsers.personas.map((persona: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-6 bg-[#1A1A1A] border border-gray-800 p-6 rounded-2xl"
                  >
                    <div className="w-full aspect-video bg-white rounded-xl overflow-hidden">
                      <img src={persona.image} alt={persona.title} className="w-full h-full object-cover object-[30%_10%]" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-bold uppercase text-white">{persona.title}</h4>
                      <p className="text-base text-gray-300 leading-relaxed whitespace-pre-line">{persona.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
   
        {/* 7. How Might We */}
        {project.howMightWe && project.howMightWe.length > 0 && (
          <section className="py-16 md:py-20 w-full">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
                {/* Left Column: Title Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8 }}
                  className="bg-black text-white p-8 md:p-12 rounded-xl flex items-center min-h-[160px] w-full"
                >
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white m-0">
                    How Might We...
                  </h3>
                </motion.div>

                {/* Right Column: Content Card(s) */}
                <div className="flex flex-col gap-4 md:gap-6 w-full">
                  {project.howMightWe.map((hmw: string, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className="bg-black text-white p-8 md:p-12 rounded-xl flex items-center min-h-[160px] w-full"
                    >
                      <p className="text-lg md:text-xl font-medium leading-relaxed text-white">
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
  <section className="py-16 md:py-24 w-full bg-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
      
      {/* Header: Title and Question */}
      <div className="flex flex-col gap-8 max-w-4xl text-left">
        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#131313]">
          Ideation
        </h3>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium italic border-l-4 border-[#E2F0A4] pl-6">
          {project.ideation.question}
        </p>
      </div>

      {/* 1. HERO FLOW (One Large Image) */}
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

{/* 2. WIREFRAMES (3 Column Grid) */}
<div className="flex flex-col gap-12">
  <div className="flex flex-col gap-2 text-left">
    <h4 className="text-sm font-bold uppercase tracking-widest opacity-60">Laying the Foundation</h4>
    <p className="text-lg font-bold">Initial Wireframe Iterations</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {project.ideation.wireframes.map((wire: any, idx: number) => (
      <motion.div 
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="group flex flex-col gap-6"
      >
        <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden flex items-center justify-center bg-white border border-gray-100 shadow-sm p-0">
          <img 
            src={wire.image} 
            alt={wire.caption} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
        <div className="flex flex-col gap-2 text-left">
          <p className="text-sm font-bold uppercase tracking-tight text-[#131313]">
            {wire.caption.includes(':') ? wire.caption.split(':')[0] : wire.caption}
          </p>
          <p className="text-xs text-gray-500 leading-tight">
            {wire.caption.includes(':') ? wire.caption.split(':')[1] : ""}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</div>
        
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
                      <p className="text-lg text-gray-600 leading-relaxed font-light">
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
                        <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight text-[#131313]">
                          {pillar.title}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed font-light">
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
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
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
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight leading-tight text-[#131313]">{pillar.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed font-light">{pillar.description}</p>
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
                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
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

        {/* 5B. User Insightsk */}
        {(project.userInsights || project.userInsightsCards) && (
          <section className="py-16 md:py-20 w-full bg-[#FDFBF7] text-[#131313]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">User Insights</h3>
              
              {project.userInsights && (project.userInsights.benefitsImage || project.userInsights.insightsImage) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {project.userInsights.benefitsImage && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-left opacity-60 text-[#131313]">User Perceived Benefits</h4>
                      <div className="w-full rounded-2xl overflow-hidden bg-white/40 p-4 border border-white/20 shadow-sm flex items-center justify-center">
                        <img src={project.userInsights.benefitsImage} alt="User Benefits" className="w-full max-w-md h-auto object-contain" />
                      </div>
                    </div>
                  )}
                  {project.userInsights.insightsImage && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-left opacity-60 text-[#131313]">User Priorities</h4>
                      <div className="w-full rounded-2xl overflow-hidden bg-white/40 p-4 border border-white/20 shadow-sm flex items-center justify-center">
                        <img src={project.userInsights.insightsImage} alt="User Insights" className="w-full max-w-md h-auto object-contain" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.userInsightsCards && project.userInsightsCards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <p className="text-base text-gray-700 leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
{/* 9. Key Findings Stats */}
        {project.keyFindings && (
          <section className="py-16 md:py-20 w-full bg-[#131313] text-white">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="mb-8 md:mb-10 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">Key Findings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {project.keyFindings.map((finding: any, idx: number) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-2 text-left"
                  >
                    <span className="text-5xl md:text-7xl font-bold text-[#E2F0A4]">{finding.stat}</span>
                    <h4 className="text-lg font-bold uppercase tracking-wide text-white">{finding.label}</h4>
                    <p className="text-gray-400 text-base leading-relaxed">{finding.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}



{/* --- 12. BRANDING SECTION --- */}
        {project.branding && (
          <div className="bg-white">
            <section className="py-16 md:py-20">
              <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313] mb-8">
                  Building the Brand
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-[#131313] max-w-3xl">
                  {project.branding.description}
                </p>
              </div>
            </section>

            {project.branding.shapes && (
              <section className="py-10">
                <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-6 flex-wrap">
                  {project.branding.shapes.map((shape: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-full shadow-sm"
                      style={{
                        backgroundColor: shape.color,
                        width: `${shape.size}px`,
                        height: `${shape.size}px`,
                        opacity: shape.opacity ?? 1,
                        filter: `blur(${shape.blur ?? 0}px)`
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {(project.branding.logoDescription || project.branding.logoImage) && (
              <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-6">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#131313]">
                      Logo Design
                    </h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {project.branding.logoDescription}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <img
                      src={project.branding.logoImage}
                      alt="Logo"
                      className="w-full max-w-[280px] md:max-w-sm h-auto object-contain"
                    />
                  </div>
                </div>
              </section>
            )}

            {project.branding.featuresImage && (
              <section className="py-16 border-t border-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                  <img 
                    src={project.branding.featuresImage} 
                    alt="Feature" 
                    className="w-full h-auto max-w-3xl mx-auto object-contain" 
                  />
                </div>
              </section>
            )}
          </div>
        )}

        {/* --- 13. KEY FUNCTIONS SECTION --- */}
        {project.keyFunctions && (
          <section className="py-16 md:py-24 w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                <div className="flex flex-col gap-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                    Key Functions
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    {project.keyFunctions.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {project.keyFunctions.functions.map((func: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group flex flex-col gap-6"
                  >
                    <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden flex items-center justify-center bg-[#1a1a1a] p-0">
                      <img
                        src={func.image}
                        alt={func.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <h4 className="text-xl font-bold uppercase text-white">
                        {func.title}
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed">
                        {func.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* --- 15. FINAL PROTOTYPE SECTION --- */}
        {project.finalPrototype && (
          <section className="py-20  w-full">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start gap-8">
                <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#131313]">
                  Final Prototype
                </h3>
                <a 
                  href={project.finalPrototype.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-4 border border-[#131313] text-[#131313] uppercase tracking-widest text-xs font-bold hover:bg-[#131313] hover:text-white transition-all duration-300 rounded-md"
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
                      className="w-full max-h-[380px] object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
{/* Seedtag Specific Scrolling Gallery */}
{project.id === 'seedtag' && (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold mb-16 text-center">Key Responsibilities & Focus Areas</h3>
      
      <div className="flex flex-col gap-24">
        {project.responsibilities.map((item: any, index: number) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column: Text */}
            <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Right Column: Image/GIF */}
            <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
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
        {/* --- 16. TAKEAWAYS --- */}
        {project.takeaways && (
          <section className="py-24 md:py-32 w-full bg-[#E54D2E] text-white">
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-10">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                Takeaways
              </h3>
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line max-w-3xl mx-auto font-medium">
                {project.takeaways}
              </p>
            </div>
          </section>
        )}

        {/* --- 17. NEXT PROJECT --- */}
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
