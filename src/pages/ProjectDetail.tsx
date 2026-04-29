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
    heroFlowCaption: "Alex Hero Flow: Organizing a new temporary exhibition.", 
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
    overview: "Immersive Experience of Future Museums. Our design solution enables young adults to gain knowledge about art in a fun and engaging way to bridge the information gap and foster greater appreciation for the heritage of museum.",
    scope: "Digital Experience & Totem Interface",
    role: "Digital and Interaction Design",
    timeline: "Final Design Studio",
    team: "Razieh Soleimani, Lucia Medina, Marjan Mehrabi, Fatemeh Khoshbazan",
    prototypeLink: "https://www.figma.com/proto/FnFqrWBxyChSOdL3aVzV9A/Prototype?node-id=616-1965&starting-point-node-id=564%3A1942&t=bIX74fMjWA7kTArF-1",
    problem:"The way young people experience culture is evolving at the same time technology does. They want interactive, personalized experiences. And are moving away from static displays and toward spaces where they can actively participate in cultural exploration.",
    researchObjectives: "\n• To explore ways to reduce information gaps in art understanding among young adults. \n• To investigate how digital interactions can support learning within traditional museum environments.\n• Users can create an artwork. \n• To assess how engagement strategies affect appreciation of artistic heritage.",
    howMightWe: [ "Blend interactive elements with the traditional museum experience to bridge the information gap and foster greater appreciation for the heritage of the art?" ],
    userTesting: {
      title: "User Testing & Validation",
      description: "We conducted in-person testing sessions to observe how users interacted with the interface naturally. We focused on whether the audio prompts were intuitive and if the gamified printing process felt rewarding.",
      images: [
        "https://github.com/Lumystik/PortfolioLucia/blob/dd95a5f2ca9291229e663073fe9e1c8365466209/images/usertesting_dimension.jpg?raw=true"
      ]
    },
    userInsightsCards: [
      {
        title: "EMOTIONAL REACTIONS",
        description: "Users reported initial confusion, curiosity, and excitement when encountering the concept. Some expressed fear or discomfort, especially among users unfamiliar with the technology. Quotes included: “I’d feel confused but excited because I’ve never seen something like that” and “I’d have a lot of fun interacting with it.”"
      },
      {
        title: "INTERACTION PREFERENCES",
        description: "Users showed a preference for speaking over touch or typing, describing speech as the most natural form of communication. There was a strong desire for novelty and realism, with comments like “the more realistic it feels, the cooler it would be.” Emotional resonance also emerged as important, such as music being described as something that connects to emotion."
      },
      {
        title: "DESIGN CONSIDERATIONS",
        description: "Key considerations include maintaining simplicity to avoid cognitive overload, ensuring accessible and high-quality audio interaction, designing for users unfamiliar with AI systems, and providing clear guidance to reduce confusion. Physical context factors such as contrast for holographic displays and crowd flow management were also highlighted."
      }
    ],
    keyFunctions: {
      description: "We aimed to position two screents next to each other at an angle: one displays previous generated artwork (the projection), while the other shows paintings from that floor of museum (the app). Built with Figma. I added in motion graphics that dd visual interest and show the history behind the paintings ",
      
     functions: [
        {
          title: "INTERACTIVE LEARNING",
          description: "Visitor stands in front of the screen and chooses paintings they are interested in. The user selects a painting to know more about and gets answers from the system. After selecting at least 2 paintings, the option to generate an artwork appears.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/5a21c692a5ce09da24b54267b421feeee842d5f6/images/learning_dimension.gif?raw=true"
        },
        {
          title: "AI VOICE PROMPT",
          description: "The system uses voice interaction (e.g., 'You selected Elasticità by Boccioni. Would you like to learn about its concept?'). Users can use voice prompts to modify the art (e.g., 'I want to make it more minimal with less colors'). The AI LLM generates the artwork based on these prompts.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/1b024e88bc55015091152250c65c8c7255d83730/images/questioning_dimension.gif?raw=true"
        },
        {
          title: "GAMIFIED PRINTING & SCREEN PROJECTION",
          description: "When users choose to print, the system asks related questions about the selected paintings (e.g., style, painter, concept). If answered correctly, the totem provides a printed version of the generated artwork.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/8e602f1e3767619ff568eeb83699dded7863d840/images/gamified_dimension.gif?raw=true"
        }
      ]
    },
      targetUsers: {
      description: "We identified one primary user archetype. Our design solution focus mainly on young adults.",
      personas: [
        {
          title: "Sara: The Explorer",
          description: "Role: Student.\nDrivers: Desire for new experiences, Drive to document and share experiences on social media.\nEnvironment: Milan, Italy.\nNeeds: Access to engaging and interactive experiences.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/45a4994bc6796acff20cf10557be4895111209d5/images/user_dimension.png?raw=true"
        }
      ],
      conclusion: "She is an experience-driven and socially oriented user who values interactive, flexible, and culturally enriching environments that support both learning and self-expression."
    },
     bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/e942b67bef52b6a8237dcd807e02a3f741f791a5/images/wall.jpg?raw=true",
       pillars: [
      {
        title: "Scenario 1: Interactive Art Discovery Experience with tablet and wall projector",
        description: "Two screens display artworks and available paintings. As the visitor approaches, the system activates and invites them to select pieces of interest. The user receives audio-guided information and can explore each artwork interactively. Then, they can choose to generate their own artwork which will be shared on the wall.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/8d6557cb60be6d6c688474d132989b0a8bec9580/images/scenario_1.png?raw=true"
      },
      {
        title: "Scenario 2: Interactive Art Print Experience",
        description: "After selecting at least two paintings, users can keep adding more combinations. Once ready, they can generate a new artwork, view it on a second screen, and choose to print it. Before printing, the system asks brief questions about the selected paintings; correct answers unlock the print. A voice guides the process and encourages further exploration.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/7f099807a3f294985b4812c48bad188f22b5a349/images/scenario_2.png?raw=true"
      },
      {
        title: "Senario 3: AI Voice Prompt",
        description: "The AI system generates the artwork based on the user’s words as a prompt.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/2bf3def01ee15c268265d1090683a06785465d18/images/scenario_3.png?raw=true"
      }
    ],
    takeaways: "The idea grabs the visitor's attention, which makes them want to learn. It has the capability of personalization based on the paintings visitors like most. The user can add their opinion to the prompt to add something more than just merging two paintings to the generative artwork with voice.",
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
    overview: "As a Seedtag Digital Designer, I created high-impact, AI-enhanced rich media ads and interactive display creatives, modifying brand assets to fit within contextual, privacy-first advertising campaigns. And combined graphic design with animation skills to enhance user engagement, working closely with sales teams and proprietary AI (Liz) for campaign optimization.",
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
      
      <main className="w-full overflow-x-hidden">
        
        {/* 1. Full-Bleed Hero Section */}
        <section className="w-full pt-20">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
              className="w-full"
            >
              <img src={project.heroImage} alt={project.title} className="w-full h-auto min-h-[50vh] max-h-[85vh] object-cover object-center" />
            </motion.div>
        </section>

        {/* 2. Massive Title & Meta Grid */}
        <section className="py-20 md:py-32 w-full max-w-[1500px] mx-auto px-6 lg:px-12">
           <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] break-words mb-12 text-[#131313]"
            >
              {project.title}
           </motion.h1>

           <motion.div 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-gray-200 mb-16"
           >
             <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Scope</h4>
                <p className="text-lg text-[#131313] font-medium leading-snug">{project.scope}</p>
             </div>
             <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Role</h4>
                <p className="text-lg text-[#131313] font-medium leading-snug">{project.role}</p>
             </div>
             <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Duration</h4>
                <p className="text-lg text-[#131313] font-medium leading-snug">{project.timeline}</p>
             </div>
             {project.team && (
               <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Team</h4>
                  <p className="text-lg text-[#131313] font-medium leading-snug">{project.team}</p>
               </div>
             )}
           </motion.div>

           <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-4xl lg:text-5xl text-[#131313] leading-[1.3] max-w-5xl font-semibold mb-12"
            >
              {project.overview}
           </motion.p>

           {project.prototypeLink && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#131313] text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity w-fit">
                  View Final Prototype
                </a>
              </motion.div>
           )}
        </section>

        {/* 3. The Problem */}
        {project.problem && (
          <section className="py-20 md:py-32 w-full bg-white border-t border-gray-100">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 flex flex-col gap-8">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313]">
                  The Problem
                </h3>
                <div className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium whitespace-pre-line">
                  {project.problem}
                </div>
              </div>
              <div className="lg:col-span-7 w-full h-[50vh] md:h-[70vh] bg-gray-50 overflow-hidden flex items-center justify-center p-8">
                <img
                  src={project.problemImage || "/placeholder-phone-mockup.png"}
                  alt="The Problem Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </section>
        )}

        {/* 4. Research Objectives & Insights (Horizontal Layout) */}
        {(project.researchObjectives || project.researchInsights || project.userInsightsCards) && (
          <section className="py-20 md:py-32 w-full bg-[#131313] text-white">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col gap-24">
              
              {project.researchObjectives && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                    Research Objectives
                  </h3>
                  <div className="text-xl md:text-2xl leading-relaxed whitespace-pre-line text-gray-300 font-light">
                    {Array.isArray(project.researchObjectives) ? (
                      <ul className="flex flex-col gap-6">
                        {project.researchObjectives.map((line: string, idx: number) => (
                          <li key={idx}>• {line}</li>
                        ))}
                      </ul>
                    ) : (
                      project.researchObjectives
                    )}
                  </div>
                </div>
              )}

              {/* Insights Carousel replacing standard grid */}
              {project.userInsightsCards && project.userInsightsCards.length > 0 && (
                <div className="flex flex-col gap-12">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
                    Research Insights
                  </h3>
                  <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {project.userInsightsCards.map((card: any, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[30vw] snap-center shrink-0 bg-[#1A1A1A] p-10 md:p-14 flex flex-col gap-6"
                      >
                        <h4 className="text-2xl font-bold uppercase tracking-tight text-white leading-snug">
                          "{card.title}"
                        </h4>
                        <p className="text-lg text-gray-400 leading-relaxed font-light">
                          {card.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Target Users (Personas Carousel) */}
        {project.targetUsers && (
          <section className="py-20 md:py-32 w-full bg-white">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="max-w-4xl">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313] mb-6">Target Users</h3>
                <p className="text-2xl leading-relaxed text-gray-700 font-medium">{project.targetUsers.description}</p>
              </div>
              
              <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {project.targetUsers.personas.map((persona: any, idx: number) => (
                  <div key={idx} className="min-w-[85vw] md:min-w-[50vw] lg:min-w-[35vw] snap-center shrink-0 flex flex-col gap-6 group">
                    <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                      <img src={persona.image} alt={persona.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black uppercase text-[#131313] tracking-tighter mb-4">{persona.title}</h4>
                      <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">{persona.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ideation / Wireframes Carousel */}
        {project.ideation && (
          <section className="py-20 md:py-32 w-full bg-gray-50 border-t border-gray-200">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col gap-20">
              <div className="max-w-4xl">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313] mb-8">
                  Ideation
                </h3>
                <p className="text-2xl leading-relaxed text-gray-800 font-medium border-l-4 border-[#131313] pl-8">
                  {project.ideation.question}
                </p>
              </div>

              {project.ideation.heroFlow && (
                 <div className="w-full bg-white p-8 md:p-16">
                    <img src={project.ideation.heroFlow} alt="Hero Flow" className="w-full h-auto" />
                    <p className="mt-6 text-sm font-bold uppercase tracking-widest text-center text-gray-400">{project.ideation.heroFlowCaption}</p>
                 </div>
              )}

              {/* Wireframes Horizontal List */}
              <div className="flex flex-col gap-8 mt-12">
                <h4 className="text-xl font-bold uppercase tracking-widest text-[#131313]">Initial Wireframes</h4>
                <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {project.ideation.wireframes.map((wire: any, idx: number) => (
                    <div key={idx} className="min-w-[70vw] md:min-w-[300px] snap-center shrink-0 flex flex-col gap-4">
                      <div className="w-full aspect-[9/16] bg-white border border-gray-200 overflow-hidden p-2 shadow-sm">
                        <img src={wire.image} alt={wire.caption} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-lg font-bold uppercase tracking-tight text-center text-[#131313]">{wire.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Branding */}
        {project.branding && (
           <section className="py-20 md:py-32 w-full bg-white">
             <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-8 order-2 lg:order-1">
                   <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313]">
                      Building the Brand
                   </h3>
                   <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium">
                      {project.branding.description}
                   </p>
                   {project.branding.logoDescription && (
                     <p className="text-lg text-gray-500 leading-relaxed font-light mt-4">
                        {project.branding.logoDescription}
                     </p>
                   )}
                </div>
                <div className="w-full flex items-center justify-center order-1 lg:order-2 bg-gray-50 p-12 aspect-square">
                   {project.branding.logoImage ? (
                      <img src={project.branding.logoImage} alt="Brand Logo" className="max-w-[70%] max-h-[70%] object-contain" />
                   ) : project.branding.shapes ? (
                      <div className="flex flex-wrap justify-center gap-6">
                        {project.branding.shapes.map((s:any, i:number) => (
                           <div key={i} style={{ backgroundColor: s.color, width: s.size, height: s.size }} className="rounded-full" />
                        ))}
                      </div>
                   ) : null}
                </div>
             </div>
           </section>
        )}

        {/* Key Functions Horizontal Scroll */}
        {project.keyFunctions && (
          <section className="py-20 md:py-32 w-full bg-[#131313] text-white overflow-hidden">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
              <div className="max-w-4xl">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white mb-6">
                  Key Functions
                </h3>
                <p className="text-2xl leading-relaxed text-gray-400 font-light">
                  {project.keyFunctions.description}
                </p>
              </div>

              <div className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {project.keyFunctions.functions.map((func: any, idx: number) => (
                  <div key={idx} className="min-w-[85vw] md:min-w-[50vw] lg:min-w-[35vw] snap-center shrink-0 flex flex-col gap-8">
                    <div className="w-full aspect-[4/5] md:aspect-square bg-[#1A1A1A] p-0 flex items-center justify-center overflow-hidden">
                      <img src={func.image} alt={func.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="flex flex-col gap-4 px-2">
                      <h4 className="text-2xl font-black uppercase tracking-tight">{func.title}</h4>
                      <p className="text-lg text-gray-400 leading-relaxed font-light">{func.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pillars / Scenarios (V2 Layout) - Using Grid layout like squarespace cards */}
        {(project.pillars2 || project.pillars) && (
          <section className="py-20 md:py-32 w-full bg-white">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col gap-24">
               <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313]">
                  Scenarios & Features
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                 {(project.pillars2 || project.pillars).map((item: any, idx: number) => (
                    <motion.div 
                       key={idx}
                       initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
                       className="flex flex-col gap-8 group"
                    >
                      <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center p-8">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700" />
                      </div>
                      <div className="max-w-xl">
                        <h4 className="text-2xl font-black uppercase tracking-tighter text-[#131313] mb-4 leading-tight">{item.title}</h4>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">{item.description}</p>
                      </div>
                    </motion.div>
                 ))}
               </div>
            </div>
          </section>
        )}

        {/* Responsibilities for Seedtag */}
        {project.id === 'seedtag' && project.responsibilities && (
          <section className="py-20 md:py-32 w-full bg-gray-50">
             <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex flex-col gap-24">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313]">Focus Areas</h3>
                
                {project.responsibilities.map((item: any, idx: number) => (
                   <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className={`flex flex-col gap-6 ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                        <h4 className="text-3xl font-black uppercase tracking-tighter text-[#131313]">{item.title}</h4>
                        <p className="text-xl text-gray-700 font-medium leading-relaxed">{item.desc}</p>
                     </div>
                     <div className={`w-full aspect-[4/3] bg-white p-4 shadow-sm ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                     </div>
                   </div>
                ))}
             </div>
          </section>
        )}

        {/* Final Prototype / Banner Image */}
        {(project.finalPrototype || project.bannerImage) && (
          <section className="py-20 md:py-32 w-full bg-white">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-16">
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#131313]">
                Final Prototype
              </h3>
              
              {project.bannerImage && (
                <div className="w-full h-[60vh] md:h-[80vh] bg-gray-100 w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                  <img src={project.bannerImage} className="w-full h-full object-cover" alt="Final Banner" />
                </div>
              )}

              {project.finalPrototype && (
                 <a href={project.finalPrototype.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-[#131313] text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                    Explore The Prototype
                 </a>
              )}
            </div>
          </section>
        )}

        {/* Takeaways */}
        {project.takeaways && (
          <section className="py-32 w-full bg-[#131313] text-white flex items-center justify-center">
             <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col gap-12">
               <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#E2F0A4]">
                 Takeaways
               </h3>
               <p className="text-2xl md:text-4xl leading-[1.4] font-medium whitespace-pre-line text-white/90">
                 {project.takeaways}
               </p>
             </div>
          </section>
        )}

        {/* Next Project (Full Bleed Link) */}
        {project.nextProject && (
          <Link to={project.nextProject.link} className="block w-full h-[50vh] md:h-[70vh] relative group overflow-hidden bg-black cursor-pointer">
             {project.nextProject.image && (
               <img src={project.nextProject.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-[1.05]" alt="Next Project" />
             )}
             {!project.nextProject.image && (
               <div className="absolute inset-0 w-full h-full bg-[#131313] transition-colors group-hover:bg-[#1a1a1a]" />
             )}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/60 mb-6">Next Project</span>
                <span className="text-5xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-white">
                  {project.nextProject.title}
                </span>
             </div>
          </Link>
        )}

      </main>
      <Footer />
    </div>
  );
}
