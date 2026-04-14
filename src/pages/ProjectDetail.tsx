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
    userInsights: {
      benefitsImage: "https://github.com/Lumystik/PortfolioLucia/blob/24c105399d5c5b7459ff928e9b9548627bc99a06/images/museon_userbenefits.png?raw=true",
      insightsImage: "https://github.com/Lumystik/PortfolioLucia/blob/24c105399d5c5b7459ff928e9b9548627bc99a06/images/museon_userinsights.png?raw=true"
    },
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
          image: "https://github.com/Lumystik/PortfolioLucia/blob/d61a1d4fb617fc9f6e56e3d1405bc8aeb7b5831c/images/mark.jpg?raw=true"
        }
      ],
      conclusion: "Both roles require a centralized dashboard, shared calendar, project tracking, and collection management to reduce switching costs."
    },
 
    branding: {
 description: "The design system was built to be clean, accessible, and highly functional, prioritizing data visualization and task management. It includes standardized colors, buttons, dropdown menus, and calendar components.",
  logoDescription: "We were drawn to the asterisk as a symbol of connection, and wanted to incorporate its radiating structure as a mark that points toward information, toward people, toward the institution itself.",
 logoImage: "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/museonlogo.png?raw=true",       // optional
  featuresImage: "https://github.com/Lumystik/PortfolioLucia/blob/dfc97077f6303fd7953feeb6d4e1a8efdce42b2e/images/button.png?raw=true", // optional

  shapes: [
    { color: "#000000", size: 120, x: "20%", y: "10%" },
    { color: "#6B6A6A", size: 100, x: "50%", y: "10%"},
    { color: "#D9D9D9", size: 90, x: "75%", y: "10%" },
    { color: "#1600FF", size: 110, x: "35%", y: "10%"},
    { color: "#1600FF", size: 110, x: "0%", y: "10%"}
  ]
    },
    keyFunctions: {
      description: "An all-in-one platform designed to reduce switching costs and improve team collaboration.",
      functions: [
        {
          title: "TASK & SHARED CALENDAR OVERVIEW",
          description: "See the busy and available times of people you have shared your calendar with and plan events accordingly.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/26391787e0d9077298f2f76639afcde92cfec7b1/images/calendar_museon.png?raw=true"
        },
        {
          title: "COLLECTION MANAGEMENT",
          description: "A dedicated collection page to easily check contents, export them, and manage items for specific exhibitions.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/9105bd68639edbb8309a3dd3a5d9993d9314a1b9/images/collection_museon.png?raw=true"
        },
       {
        title: "AI INTEGRATION",
        description: "AI utilizes conversation transcription to instantly detect tasks with a single click and direct users to the corresponding page.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/smart%20note%20widget.png?raw=true"
      }
 
      ]
    },
    interfaceImage:"https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_finalinterface%20(10).gif?raw=true",
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
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/carseedtag2.png?raw=true",
    overview: "Contextual human-centered advertisement. Built interactive ad creatives for Seedtag, a contextual advertising platform embedded in editorial content. Worked on 150+ campaigns across industries (automotive, food, fashion, tech).",
    scope: "Ad Tech (HTML5/JS)",
    role: "Frontend Dev (Vanilla JS), Creative QA",
    timeline: "150+ Campaigns",
    prototypeLink: "https://preview.seedtag.com/creative/62e004185650a9002c0208a6?device=Desktop&placement=InImage",
    workflow: "My workflow involved taking client briefs and creating custom graphics using Photoshop and Illustrator. I then brought these designs to life by hand-coding creative animations with HTML, CSS, and Vanilla JS (without relying on templates). Finally, these interactive ads were optimized and published directly into digital magazines and editorial content, ensuring flawless performance across all browsers and placements.",
    gallery: [
      "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car2.gif?raw=true",
      "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car3.gif?raw=true",
      "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car4.gif?raw=true",
      "https://github.com/Lumystik/PortfolioLucia/blob/main/images/portfolio-10.jpg?raw=true",
      "https://github.com/Lumystik/PortfolioLucia/blob/main/images/starbucks5.gif?raw=true"
    ],
    takeaways: "Working with global brands requires adaptability and a deep understanding of interactive design principles to drive engagement without being intrusive. I developed a strong intuition for attention and engagement, learning exactly what makes users stop scrolling.",
    nextProject: {
      title: "PIXELA",
      link: "/project/pixela"
    }
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
            className="w-full max-w-[350px] object-contain drop-shadow-xl"
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
                      <img src={persona.image} alt={persona.title} className="w-full h-full object-cover object-[50%_10%]" />
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

{project.branding && (
  <>
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold uppercase mb-6 text-[#131313]">
          Building the Brand
        </h3>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-[#131313]">
          {project.branding.description}
        </p>
      </div>
    </section>

    {project.branding.shapes && (
      <div className="relative w-full h-[200px] my-10 overflow-hidden">
        {project.branding.shapes.map((shape: any, idx: number) => (
          <div
            key={idx}
            className="absolute rounded-full"
            style={{
              backgroundColor: shape.color,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: shape.x,
              top: shape.y,
              transform: "translate(-50%, -50%)",
              opacity: shape.opacity ?? 1,
              filter: `blur(${shape.blur ?? 0}px)`
            }}
          />
        ))}
      </div>
    )}

    {project.branding.images?.[0] && (
      <section className="w-full mb-20 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img
            src={project.branding.images[0]}
            alt="Branding logo"
            className="w-full max-w-md md:max-w-lg h-auto object-contain"
          />
        </div>
      </section>
    )}
  </>
)}
{/* --- BRANDING SECTION --- */}
        {project.branding && (
          <div className="bg-white">
            {/* 1. Building the Brand: Left Aligned Title + Description */}
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

            {/* 2. Colors/Shapes - Centered and Complete */}
            {project.branding.shapes && (
              <section className="py-10 overflow-visible">
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

            {/* 3. Logo Design: 2-Column Desktop Layout */}
            {(project.branding.logoDescription || project.branding.logoImage) && (
              <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left Column: Text */}
                  <div className="flex flex-col gap-6">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#131313]">
                      Logo Design
                    </h4>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {project.branding.logoDescription}
                    </p>
                  </div>
                  {/* Right Column: Logo Image (Smaller) */}
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

            {/* 4. Feature Icons - Full Width Grid */}
            {project.branding.featuresImage && (
              <section className="py-16 border-t border-gray-50">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-8 flex-wrap">
                  <img  src={project.branding.logoImage} />
                </div>
              </section>
            )}
          </div>
        )}

        {/* 13. Key Functions: 2-Column Header Layout */}
        {project.keyFunctions && (
          <section className="py-16 md:py-24 w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
              {/* Top Header: 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                <div className="flex flex-col gap-6">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                    Key Functions
                  </h3>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                    {project.keyFunctions.description}
                  </p>
                </div>
                {/* Optional: You can put a secondary graphic or leave this side for balance */}
                <div className="hidden md:flex justify-end">
                  <div className="w-32 h-1 bg-[#E2F0A4]/20 rounded-full mt-6"></div>
                </div>
              </div>

              {/* Grid of Function Cards */}
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
                    <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center bg-[#1a1a1a] p-8">
                      <img
                        src={func.image}
                        alt={func.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-bold uppercase text-left text-white">
                        {func.title}
                      </h4>
                      <p className="text-base text-gray-400 leading-relaxed text-left">
                        {func.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

            {/* 4. Feature Icons/Images */}
            {project.branding.featuresImage && (
              <section className="flex justify-center gap-8 md:gap-16 py-20 flex-wrap px-6 bg-white">
                <img
                  src={project.branding.featuresImage}
                  alt="Feature 1"
                  className="w-20 md:w-28 h-auto object-contain"
                />
                <img
                  src={project.branding.featuresImage}
                  alt="Feature 2"
                  className="w-20 md:w-28 h-auto object-contain"
                />
                <img
                  src={project.branding.featuresImage}
                  alt="Feature 3"
                  className="w-20 md:w-28 h-auto object-contain"
                />
              </section>
            )}
          </>
        )}

        {/* 13. Key Functions */}
        {project.keyFunctions && (
          <section className="py-16 md:py-20 w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">
                  Key Functions
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  {project.keyFunctions.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.keyFunctions.functions.map((func: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group flex flex-col gap-4 text-white p-5 rounded-2xl"
                  >
                    <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
                      <img
                        src={func.image}
                        alt={func.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-bold uppercase text-center text-white">
                        {func.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed text-center">
                        {func.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 11. Key Features */}
        {project.keyFeatures && (
          <section className="py-16 md:py-20 w-full bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="mb-8 md:mb-10 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-[#131313]">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {project.keyFeatures.map((feature: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="flex flex-col gap-2 text-left"
                  >
                    <h4 className="text-xl font-bold uppercase tracking-tight text-[#131313]">
                      {feature.title}
                    </h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 15. Banner Quote */}
        {project.bannerQuote && (
          <section className="py-16 md:py-20 relative w-full h-[50vh] flex items-center justify-center">
            {project.bannerImage && (
              <div className="absolute inset-0 z-0">
                <img
                  src={project.bannerImage}
                  alt="Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            )}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-left text-white">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight max-w-4xl leading-tight">
                "{project.bannerQuote}"
              </h2>
            </div>
          </section>
        )}

        {/* 16. Takeaways */}
        {project.takeaways && (
          <section className="py-16 md:py-20 w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-white">
                  Takeaways
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-left">
                  {project.takeaways}
                </p>
              </div>
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
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-300 mb-4 block">
                Next Project
              </span>
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
