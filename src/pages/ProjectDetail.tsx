import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

// ─── GRID COLUMN ALIASES ───────────────────────────────────────────────────
// FULL     → col-start-2 col-end-10  /  md:col-start-2 md:col-end-26
// CENTERED → col-start-2 col-end-10  /  md:col-start-4 md:col-end-23
//
// GRID TEMPLATE (mobile: 8 content cols, desktop: 24 content cols)
// grid-cols-[var(--sqs-mobile-site-gutter)_repeat(8,minmax(0,1fr))_var(--sqs-mobile-site-gutter)]
// md:grid-cols-[var(--sqs-site-gutter)_repeat(24,minmax(0,1fr))_var(--sqs-site-gutter)]
//
// RADIUS    → rounded-[10px] on all cards/images/buttons
// SECTION   → py-24 md:py-32  (only hero/next-project deviate)
// ANIMATION → duration: 0.65, delay: 1  (stagger: +0.1 per item)
// ──────────────────────────────────────────────────────────────────────────

const GRID = "w-full grid grid-cols-[var(--sqs-mobile-site-gutter)_repeat(8,minmax(0,1fr))_var(--sqs-mobile-site-gutter)] md:grid-cols-[var(--sqs-site-gutter)_repeat(24,minmax(0,1fr))_var(--sqs-site-gutter)]";
const FULL = "col-start-2 col-end-10 md:col-start-2 md:col-end-26";
const CENTERED = "col-start-2 col-end-10 md:col-start-4 md:col-end-23";
const SECTION = "py-24 md:py-32 w-full font-sans";
const ANIM = { duration: 0.65, delay: 1 };
const stagger = (i: number) => ({ duration: 0.65, delay: 1 + i * 0.1 });

const projectsData: Record<string, any> = {
  "museon": {
    id: "museon",
    title: "MUSE*ON",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/4244e0bc4f60f3ca20ddaa34410c705dd0f46562/images/thumbmuseonin.jpg?raw=true",
    overview: "Developing an all in one software for small museums staff, that aims to streamline the work-flow and improve the management of the different areas of the institution. In order to optimize the current museum resources.",
    scope: "End-to-End App",
    role: "UX Research, Branding, UX/UI Design",
    team: "Martina Braidotti, Lucia Medina, Ilario Pedone, Agnese Rosselli, Mark Waisara",
    prototypeLink: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1?raw=true",
    keyFindings: [
      { stat: "04", label: "full time employees", description: "limited human resources overwhelmed by the workload at hand." },
      { stat: "59", label: "event & exhibitions in 2023", description: "manage several exhibitions and events" },
      { stat: "06", label: "Different tools to manage", description: "facilitate access to functions already in use displaying them differently according to staff role and responsibility" }
    ],
    processMap: [
      { phase: "Research", steps: ["Desk research", "On site research", "Ecosystem map", "research key findings"] },
      { phase: "Define", steps: ["Design brief", "Personas & scenarios", "Heroflow & wireflow"] },
      { phase: "Develop", steps: ["User test results", "Design system", "Prototype"] }
    ],
    keyFeatures: [
      { title: "SHARED CALENDAR OVERVIEW", description: "With this feature, you can see the busy and available times of people you have shared your calendar with and plan events accordingly." },
      { title: "COLLECTION MANAGEMENT", description: "Collection page to easily check contents and export them. Collection section in the exhibition management to a comprehensive view." },
      { title: "TASK ASSIGNMENT & TRACKING", description: "Project overview for optimal management of many events." },
      { title: "SWITCHING COSTS REDUCTION", description: "AI utilize conversation transcription to instantly detect tasks with a single click and be directed to the corresponding page." }
    ],
    userInsights: {
      benefits: [
        { label: "Projects section and shortcut", percentage: 50, color: "#E2F0A4" },
        { label: "Calendar section", percentage: 30, color: "#C5D97A" },
        { label: "My task shortcut", percentage: 20, color: "#d1d5db" }
      ],
      priorities: [
        { label: "Complete", size: "w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64", color: "bg-[#E2F0A4]", position: "absolute bottom-[15%] left-[10%] md:bottom-[10%] md:left-[10%] z-10" },
        { label: "All-in one", size: "w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48", color: "bg-[#D4E68C]", position: "absolute bottom-[25%] right-[10%] md:bottom-[20%] md:right-[10%] z-20" },
        { label: "Fast", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40", color: "bg-[#C5D97A]", position: "absolute top-[25%] right-[15%] md:top-[25%] md:right-[15%] z-0" },
        { label: "Panoramic", size: "w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32", color: "bg-gray-300", position: "absolute top-[15%] left-[20%] md:top-[15%] md:left-[15%] z-0" },
        { label: "Useful", size: "w-14 h-14 sm:w-16 sm:h-16 md:w-28 md:h-28", color: "bg-gray-400", position: "absolute top-[10%] right-[30%] md:top-[10%] md:right-[25%] z-10" }
      ]
    },
    pillars: [
      {
        title: "Scenario 1: Temporary Exhibition",
        description: "Organizing a new temporary exhibition. Alex uses the platform to select dates, assign tasks with deadlines, and select items from the collection to display.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/0cbe2f18605013698d8943ab0856d195741d6d23/images/New%20task.png?raw=true"
      },
      {
        title: "Scenario 2: Assisting Visits",
        description: "Prepare for assisting Alex during a museum visit. Mark checks his assigned tasks and uses smart notes to gather information.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/Message.png?raw=true"
      },
      {
        title: "AI Integration",
        description: "AI utilizes conversation transcription to instantly detect tasks with a single click and direct users to the corresponding page.",
        image: "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/smart%20note%20widget.png?raw=true"
      }
    ],
    bannerImage: "[INSERT_GITHUB_IMAGE_LINK_BANNER]",
    bannerQuote: "HOW DO WE OPTIMIZE MUSEUM RESOURCES?",
    researchObjectives: "There is a pressing need to effectively handle the limited human resources in the museum, as they are frequently overwhelmed by the workload at hand.\n\nMuseums need to manage several exhibitions and events per year, collaborating with external partners, donors and institutions. They need an all-in-one platform to facilitate access to functions already in use, displaying them differently according to staff role and responsibility.",
    researchInsights: [
      {
        title: "THE CURRENT STATE",
        description: "Small museums typically operate with very limited staff (e.g., 4 full-time employees) while managing a high volume of activities (e.g., 59 events & exhibitions in 2023). They currently juggle up to 6 different tools to manage their workflow."
      },
      {
        title: "RESEARCH PROCESS",
        description: "Phase 1: Desk research analyzing official websites and social networks.\nPhase 2: On-site research including photo ethnography, self-experience, observation, and interviews."
      },
      {
        title: "ECOSYSTEM & ACTORS",
        description: "We mapped the heritage, actors, and ecosystem to understand the complex web of interactions between curators, interns, external partners, and visitors."
      }
    ],
    targetUsers: {
      description: "We identified two primary user archetypes within the museum staff ecosystem, each with distinct drivers and needs.",
      personas: [
        {
          title: "ALEX: THE CURATOR & MANAGER",
          description: "Role: Curator, Education, Office of the President, Guide, Ticket and Relations.\nDrivers: Contributing to cultural education, personal interest in the subject matter.\nEnvironment: Museum office.\nNeeds: Planning, team collaboration, task management.",
          image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_ALEX]"
        },
        {
          title: "MARK: THE INTERN",
          description: "Role: Intern.\nDrivers: Learning and gaining experience in museum operations, impressing supervisors, contributing effectively during the visit.\nEnvironment: Home/On-site.\nNeeds: Clear task assignment, accessibility, collection lists.",
          image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_MARK]"
        }
      ],
      conclusion: "Both roles require a centralized dashboard, shared calendar, project tracking, and collection management to reduce switching costs."
    },
    howMightWe: [
      "solve the complexity of creating a smooth experience for small museum staff?",
      "streamline the workflow and improve the management of different areas of the institution?",
      "optimize the current museum resources to help staff develop a better experience for visitors?"
    ],
    branding: {
      description: "The design system was built to be clean, accessible, and highly functional, prioritizing data visualization and task management. It includes standardized colors, buttons, dropdown menus, and calendar components.",
      logoDescription: "Developed as part of the Digital Design Studio.",
      images: [
        "https://github.com/Lumystik/PortfolioLucia/blob/1a39a63649eb9c9d264d3bc7d6d76052987002ea/images/branding.png?raw=true",
        "https://github.com/Lumystik/PortfolioLucia/blob/ac040a0ff68481a4ef9745568ded5b5c9b484a5b/images/museonlogo.png?raw=true"
      ]
    },
    keyFunctions: {
      description: "An all-in-one platform designed to reduce switching costs and improve team collaboration.",
      functions: [
        { title: "TASK ASSIGNMENT & TRACKING", description: "Assign tasks to colleagues with deadlines and priorities. Users receive notifications and can track their progress on a centralized dashboard.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_1]" },
        { title: "SHARED CALENDAR OVERVIEW", description: "See the busy and available times of people you have shared your calendar with and plan events accordingly.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_2]" },
        { title: "COLLECTION MANAGEMENT", description: "A dedicated collection page to easily check contents, export them, and manage items for specific exhibitions.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_3]" }
      ]
    },
    takeaways: "We solved the complexity of creating a smooth experience for small museum staff, enabling them to develop a better experience for visitors. By developing an all-in-one software, we streamlined the workflow and optimized current museum resources.",
    interfaceImage: "https://github.com/Lumystik/PortfolioLucia/blob/771b8c4bacd02003bc0f433782f36253b98e2e3a/images/museon_final.png?raw=true",
    nextProject: { title: "ART BEYOND DIMENSION", link: "/project/art-beyond-dimension" }
  },
  "art-beyond-dimension": {
    id: "art-beyond-dimension",
    title: "Art Beyond Dimension",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/art_1.png?raw=true",
    interfaceImage: "[INSERT_GITHUB_IMAGE_LINK_INTERFACE]",
    overview: "Immersive Experience of Future Museums. Our design solution enables young adults to gain knowledge about art in a fun and engaging way to bridge the information gap and foster greater appreciation for the heritage of museum.",
    scope: "Digital Experience & Totem Interface",
    role: "Digital and Interaction Design",
    timeline: "Final Design Studio",
    team: "Razieh Soleimani, Lucia Medina, Marjan Mehrabi, Fatemeh Khoshbazan",
    prototypeLink: "[INSERT_FIGMA_LINK_HERE]",
    pillars: [
      { title: "Attentive User Engagement", description: "Encourages users to engage more deeply with paintings, educates them about the heritage behind each artwork, and rewards their learning and attention.", image: "[INSERT_GITHUB_IMAGE_LINK_PILLAR_1]" },
      { title: "Reward System", description: "By actively engaging and paying attention, users are rewarded with personalized printed paintings inspired by the artworks they care most.", image: "[INSERT_GITHUB_IMAGE_LINK_PILLAR_2]" },
      { title: "Technology Utilization", description: "By introducing this idea, the museum—which currently has no screens—becomes more modern. When visitors aren't interacting with the totems, they serve as screens within the space, displaying the newly generated artworks.", image: "[INSERT_GITHUB_IMAGE_LINK_PILLAR_3]" }
    ],
    researchObjectives: "PROBLEMS IDENTIFIED:\n• Corridors block access to the main artwork\n• Other visitors block the relation between screen and artwork\n• Transparent OLED screen is hard to simulate\n\nSOLUTION IMPROVEMENT:\n• One system for all the paintings\n• Silent atmosphere of the museum is not disturbed\n• Users can create an artwork\n• Users can get a printed reward of their own artwork after learning the information",
    keyFunctions: {
      description: "Features two screens positioned next to each other at an angle: one displays previous generated artwork, while the other shows paintings from that floor of museum. Built with Figma/Protopie, utilizing Screen, Speaker, and Ultrasonic Sensor/Passive Infrared.",
      functions: [
        { title: "INTERACTIVE LEARNING", description: "Visitor stands in front of the screen and chooses paintings they are interested in. The user selects a painting to know more about and gets answers from the system. After selecting at least 2 paintings, the option to generate an artwork appears.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_1]" },
        { title: "AI VOICE PROMPT", description: "The system uses voice interaction (e.g., 'You selected Elasticità by Boccioni. Would you like to learn about its concept?'). Users can use voice prompts to modify the art (e.g., 'I want to make it more minimal with less colors'). The AI LLM generates the artwork based on these prompts.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_2]" },
        { title: "GAMIFIED PRINTING", description: "When users choose to print, the system asks related questions about the selected paintings (e.g., style, painter, concept). If answered correctly, the totem provides a printed version of the generated artwork.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_3]" }
      ]
    },
    takeaways: "The idea grabs the visitor's attention, which makes them want to learn. It has the capability of personalization based on the paintings visitors like most. The user can add their opinion to the prompt to add something more than just merging two paintings to the generative artwork with voice.",
    nextProject: { title: "FILMS FOUNDATION", link: "/project/films-foundation" }
  },
  "films-foundation": {
    id: "films-foundation",
    title: "Films Foundation (Cineteca Milano)",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/screenmainfilm.png?raw=true",
    interfaceImage: "[INSERT_GITHUB_IMAGE_LINK_INTERFACE]",
    overview: "A comprehensive UX/UI redesign for Cineteca Milano, an Italian film archive and cultural center. The project focuses on improving usability, accessibility, and the overall digital experience for booking tickets, exploring events, and accessing the film archive.",
    scope: "Web & Mobile UX/UI Redesign",
    role: "UX/UI Designer",
    timeline: "Academic Year 2024-25",
    team: "Kadam Tanishka, Lucia Medina Galan, Dilara Tanrıöven, Wang Xinyu, Wu Junxi",
    prototypeLink: "[INSERT_FIGMA_LINK_HERE]",
    pillars: [
      { title: "Streamlined Architecture", description: "Reorganized the website structure to introduce a clear Home page, categorized Films (In Theaters vs. Archives), and simplified navigation to reduce cognitive load.", image: "[INSERT_GITHUB_IMAGE_LINK_PILLAR_1]" },
      { title: "Timeless Rebranding", description: "Created a new visual identity using warm, earthy tones and a contemporary typography system to reflect the institution's historical and cultural significance.", image: "[INSERT_GITHUB_IMAGE_LINK_PILLAR_2]" },
      { title: "Accessible Design", description: "Ensured the new interface passes color blindness accessibility tests (Protanomaly, Deuteranomaly, Achromatopsia) and features highly legible components.", image: "[INSERT_GITHUB_IMAGE_LINK_PILLAR_3]" }
    ],
    researchObjectives: "ANALYSIS PHASE:\nWe conducted a Cognitive Walkthrough of the existing Cineteca Milano website and identified several pain points:\n• Limited exploration opportunities with no search function\n• Overwhelming and cluttered menu design\n• Confusing navigation with mixed content (activities vs. bookable films)\n• Fragmented and click-heavy ticket booking process\n\nCOMPETITIVE ANALYSIS:\nWe analyzed competitors like TATE, Getty, and Cineteca Bologna to identify industry standards, focusing on their task flows for viewing film details, exploring events, and booking tickets.",
    targetUsers: {
      description: "We developed personas representing diverse user needs, from creative professionals seeking inspiration to casual enthusiasts.",
      personas: [
        { title: "THE CREATOR", description: "Costume designers (like Eason) and film students (like Alex) looking for diverse creative inspiration, high-resolution archival films, and networking opportunities. They need reliable access to classic films for study.", image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_1]" },
        { title: "THE ENTHUSIAST", description: "Painters, engineers, and graphic designers (like Marco, Carlo, and Miranda) who enjoy retro films, attend local festivals, and seek quality resources on film history. They want clear event details and easy ticket booking.", image: "[INSERT_GITHUB_IMAGE_LINK_PERSONA_2]" }
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
      logoDescription: "The new logo introduces a distinctive symbol that is abstract yet clear, suggesting an archive. It features soft curves and can stand alone for branding purposes.",
      images: ["[INSERT_GITHUB_IMAGE_LINK_BRANDING_1]", "[INSERT_GITHUB_IMAGE_LINK_BRANDING_2]"]
    },
    keyFunctions: {
      description: "The redesigned platform focuses on three core tasks: Viewing Film Details, Exploring Events, and Booking Tickets across both Web and Mobile.",
      functions: [
        { title: "CENTRALIZED FILM DISCOVERY", description: "A newly added 'All Films' page categorizes content into 'In Theaters' and 'Our Archives'. It features robust filtering, cast highlights, and direct streaming access for archived films.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_1]" },
        { title: "STREAMLINED EVENT EXPLORATION", description: "Events are categorized using a sticky filter bar. A toggle switches between free and ticketed events, and individual event pages feature a 'Show Map' integration for quick location context.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_2]" },
        { title: "FRICTIONLESS TICKET BOOKING", description: "A step-by-step flow with a clean 'Select Date and Cinema' section. The seat selection interface clearly distinguishes between available, reserved, and selected seats, culminating in a mobile-friendly QR code ticket.", image: "[INSERT_GITHUB_IMAGE_LINK_FEATURE_3]" }
      ]
    },
    takeaways: "By applying ergonomic principles to the design, we transformed a cluttered and confusing website into a highly usable, accessible, and aesthetically pleasing platform. The new design significantly reduces cognitive load, improves task efficiency (e.g., streamlining the ticket booking flow), and provides a responsive experience across desktop and mobile devices.",
    nextProject: { title: "SEEDTAG", link: "/project/seedtag" }
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
    nextProject: { title: "PIXELA", link: "/project/pixela" }
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
        { title: "VINCENT VAN GOGH", description: "Achieve entering Van Gogh's bedroom and finding the exit door to pass through the portal. Van Gogh chases you, threatening to cut off your ear.", image: "[INSERT_GITHUB_IMAGE_LINK_VAN_GOGH]" },
        { title: "SALVADOR DALÍ", description: "Correctly navigate through the maze to find the portal and try to find an object from Dalí's paintings to escape.", image: "[INSERT_GITHUB_IMAGE_LINK_DALI]" },
        { title: "M. C. ESCHER", description: "Find the portal by traversing a path with altered reality. Stairs that go up and down the ceiling and walls. Villains chase you, and if they catch you, you die.", image: "[INSERT_GITHUB_IMAGE_LINK_ESCHER]" }
      ]
    },
    takeaways: "Integrating AI into game mechanics opened up new possibilities for dynamic art generation, creating a unique experience for every player.",
    nextProject: { title: "MUSE*ON", link: "/project/museon" }
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col gap-6">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Link to="/" className="text-[#E54D2E] hover:underline flex items-center gap-2">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-[#131313] min-h-screen font-sans overflow-x-hidden">
      <Navbar />

      <main className="w-full">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {/* Deviation: pt-32 pb-12 — intentional top clearance for navbar */}
        <section className="w-full pt-32 pb-12 bg-white font-sans">
          <div className={GRID}>
            <div className={FULL}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={ANIM}
                className="w-full rounded-[10px] overflow-hidden bg-gray-100"
              >
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-auto object-cover max-h-[80vh]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROJECT DETAILS & OVERVIEW ───────────────────────────────────── */}
        {/* Deviation: pt-12 md:pt-24 pb-24 md:pb-32 — hero bleeds into this */}
        <section className="pt-12 md:pt-24 pb-24 md:pb-32 w-full bg-white overflow-x-clip font-sans">
          <div className={`${GRID} gap-y-8 md:gap-y-0`}>

            {/* Left: Metadata — desktop cols 4–11 (inside CENTERED left half) */}
            <div className="col-start-2 col-end-10 md:col-start-4 md:col-end-11 flex flex-col gap-8">
              {[
                { label: "Project Scope", value: project.scope },
                { label: "Role", value: project.role },
                { label: "Project Duration", value: project.timeline },
                project.team ? { label: "Team", value: project.team } : null
              ].filter(Boolean).map((item: any) => (
                <div key={item.label} className="flex flex-col gap-2">
                  <h4 className="text-[1rem] font-bold uppercase tracking-widest text-[#131313]">{item.label}</h4>
                  <p className="text-[1.1rem] font-normal leading-[1.5em] text-gray-700">{item.value}</p>
                </div>
              ))}
              {project.prototypeLink && (
                <div className="mt-4">
                  <a
                    href={project.prototypeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-[#131313] text-[#131313] px-[1.2rem] py-[0.9rem] rounded-[10px] text-[1rem] font-medium uppercase tracking-[0.02em] hover:bg-[#131313] hover:text-white transition-all duration-300 w-fit"
                  >
                    View Final Prototype
                  </a>
                </div>
              )}
            </div>

            {/* Right: Title & Overview — desktop cols 12–23 (inside CENTERED right half) */}
            <div className="col-start-2 col-end-10 md:col-start-12 md:col-end-23 flex flex-col gap-6 mt-8 md:mt-0 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={ANIM}
                className="text-[2.3rem] md:text-[3.8rem] font-bold tracking-[-0.03em] leading-[1.4em] m-0 break-words"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 1.1 }}
                className="text-[1.1rem] font-normal leading-[1.5em] text-gray-800 max-w-full break-words mt-4"
              >
                {project.overview}
              </motion.p>
            </div>

          </div>
        </section>

        {/* ── PROCESS MAP ──────────────────────────────────────────────────── */}
        {project.processMap && (
          <section className={`${SECTION} bg-white`}>
            <div className={GRID}>
              <div className={FULL}>
                <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em] mb-16 text-left">Design Process Map</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {project.processMap.map((phase: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                      className="flex flex-col gap-6 text-left bg-[#FAF9F6] p-8 rounded-[10px] shadow-sm border border-gray-100"
                    >
                      <h4 className="text-[1.5rem] font-bold uppercase tracking-widest text-[#E54D2E] border-b-2 border-gray-100 pb-4">{phase.phase}</h4>
                      <ul className="flex flex-col gap-4">
                        {phase.steps.map((step: string, stepIdx: number) => (
                          <li key={stepIdx} className="text-[1.1rem] font-normal leading-[1.5em] text-gray-700 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#E2F0A4] shrink-0"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── KEY FINDINGS ─────────────────────────────────────────────────── */}
        {project.keyFindings && (
          <section className={`${SECTION} bg-[#131313] text-white`}>
            <div className={GRID}>
              <div className={FULL}>
                <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em] mb-16 text-left text-[#E2F0A4]">Key Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
                  {project.keyFindings.map((finding: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                      className="flex flex-col gap-4 text-left"
                    >
                      <span className="text-[3rem] md:text-[3.8rem] font-bold text-[#E2F0A4] leading-none tracking-tighter">{finding.stat}</span>
                      <h4 className="text-[1.1rem] font-bold uppercase tracking-widest">{finding.label}</h4>
                      <p className="text-[1rem] font-normal leading-[1.5em] text-gray-400">{finding.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── USER INSIGHTS ─────────────────────────────────────────────────── */}
        {project.userInsights && (
          <section className={`${SECTION} bg-white`}>
            <div className={GRID}>
              <div className={FULL}>
                <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em] mb-16 text-left text-[#131313]">User Insights</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                  {/* Benefits donut chart */}
                  <div className="flex flex-col items-center lg:items-start gap-12 w-full">
                    <h4 className="text-[1.5rem] font-bold uppercase tracking-widest text-center lg:text-left">User Perceived Benefits</h4>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-12 w-full">
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 shrink-0">
                        <div
                          className="w-full h-full rounded-full"
                          style={{
                            background: `conic-gradient(
                              ${project.userInsights.benefits[0].color} 0% ${project.userInsights.benefits[0].percentage}%,
                              ${project.userInsights.benefits[1].color} ${project.userInsights.benefits[0].percentage}% ${project.userInsights.benefits[0].percentage + project.userInsights.benefits[1].percentage}%,
                              ${project.userInsights.benefits[2].color} ${project.userInsights.benefits[0].percentage + project.userInsights.benefits[1].percentage}% 100%
                            )`
                          }}
                        />
                        <div className="absolute inset-0 m-auto w-3/5 h-3/5 bg-white rounded-full" />
                      </div>
                      <div className="flex flex-col gap-4 w-full max-w-[280px]">
                        {project.userInsights.benefits.map((benefit: any, idx: number) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: benefit.color }} />
                            <span className="text-[1rem] font-bold text-[#131313]">{benefit.label}</span>
                            <span className="text-[1rem] text-gray-500 ml-auto">{benefit.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Priorities bubble chart */}
                  {project.userInsights.priorities && (
                    <div className="flex flex-col items-center lg:items-start gap-12 w-full">
                      <h4 className="text-[1.5rem] font-bold uppercase tracking-widest text-center lg:text-left">User Priorities</h4>
                      <div className="relative w-full aspect-square max-w-[400px] md:max-w-[500px] mx-auto lg:mx-0">
                        {project.userInsights.priorities.map((item: any, idx: number) => (
                          <motion.div
                            key={idx}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={stagger(idx)}
                            className={`${item.size} ${item.color} ${item.position} rounded-full flex items-center justify-center text-center p-4 shadow-lg border border-white/20`}
                          >
                            <span className="text-[0.8rem] md:text-[1rem] font-bold leading-tight px-2 text-[#131313]">{item.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── BANNER QUOTE ─────────────────────────────────────────────────── */}
        {/* Deviation: fixed height — intentional banner behaviour */}
        {project.bannerQuote && (
          <section className="relative w-full h-[60vh] flex items-center justify-center bg-[#E2F0A4] font-sans">
            {project.bannerImage && (
              <div className="absolute inset-0 z-0 opacity-40">
                <img src={project.bannerImage} alt="Banner" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            )}
            <div className={`relative z-10 ${GRID}`}>
              <div className={CENTERED}>
                <h2 className="text-[2.3rem] md:text-[3.8rem] font-bold tracking-[-0.03em] leading-[1.4em]">
                  "{project.bannerQuote}"
                </h2>
              </div>
            </div>
          </section>
        )}

        {/* ── RESEARCH OBJECTIVES & INSIGHTS ───────────────────────────────── */}
        {(project.researchObjectives || project.researchInsights) && (
          <section className={`${SECTION} bg-white`}>
            <div className={`${GRID} gap-y-20`}>

              {/* Objectives: CENTERED, two-col internal split */}
              {project.researchObjectives && (
                <div className={CENTERED}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5 lg:col-span-4">
                      <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">Research Objectives</h3>
                    </div>
                    <div className="md:col-span-7 lg:col-span-8">
                      <div className="text-[1.1rem] md:text-[1.4rem] leading-[1.5em] font-normal whitespace-pre-line text-gray-800 break-words">
                        {project.researchObjectives}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Insights cards: FULL bleed */}
              {project.researchInsights && (
                <div className={FULL}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.researchInsights.map((insight: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                        className="flex flex-col gap-4 bg-[#FAF9F6] p-10 rounded-[10px] h-full"
                      >
                        <h4 className="text-[1.1rem] md:text-[1.4rem] font-bold uppercase tracking-widest">{insight.title}</h4>
                        <p className="text-[1.1rem] text-gray-700 leading-[1.5em] font-normal whitespace-pre-line">{insight.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </section>
        )}

        {/* ── TARGET USERS ─────────────────────────────────────────────────── */}
        {project.targetUsers && (
          <section className={`${SECTION} bg-[#E2F0A4] text-[#131313]`}>
            <div className={GRID}>
              <div className={`${FULL} flex flex-col gap-16`}>

                <div className="flex flex-col gap-6 max-w-3xl">
                  <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">Target Users</h3>
                  <p className="text-[1.1rem] md:text-[1.4rem] leading-[1.5em] font-normal">{project.targetUsers.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                  {project.targetUsers.personas.map((persona: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                      className="flex flex-col gap-8 bg-white/60 p-8 rounded-[10px]"
                    >
                      <div className="w-full aspect-video bg-white rounded-[10px] overflow-hidden">
                        <img src={persona.image} alt={persona.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4 className="text-[1.1rem] md:text-[1.4rem] font-bold uppercase tracking-widest">{persona.title}</h4>
                        <p className="text-[1rem] text-gray-700 leading-[1.5em] font-normal whitespace-pre-line">{persona.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {project.targetUsers.conclusion && (
                  <p className="text-[1.5rem] md:text-[2rem] font-bold leading-[1.2em] text-[#131313] max-w-4xl">
                    {project.targetUsers.conclusion}
                  </p>
                )}

              </div>
            </div>
          </section>
        )}

        {/* ── PILLARS / SCENARIOS ───────────────────────────────────────────── */}
        {project.pillars && (
          <section className={`${SECTION} bg-white`}>
            <div className={GRID}>
              <div className={`${FULL} grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16`}>
                {project.pillars.map((pillar: any, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                    className="flex flex-col gap-8 items-start text-left group"
                  >
                    <div className="w-full aspect-square md:aspect-[3/6] overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-contain drop-shadow-lg"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h4 className="text-[1.1rem] md:text-[1.4rem] font-bold uppercase tracking-widest leading-tight">{pillar.title}</h4>
                      <p className="text-[1rem] text-gray-600 leading-[1.5em] font-normal">{pillar.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── HOW MIGHT WE ─────────────────────────────────────────────────── */}
        {project.howMightWe && (
          <section className={`${SECTION} bg-[#E2F0A4]`}>
            <div className={GRID}>
              <div className={`${FULL} flex flex-col gap-12`}>
                <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">How Might We...</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {project.howMightWe.map((hmw: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                      className="bg-white/60 p-8 rounded-[10px] flex items-center justify-center text-center min-h-[200px]"
                    >
                      <p className="text-[1.1rem] md:text-[1.4rem] font-bold leading-[1.2em]">{hmw}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── BRANDING ─────────────────────────────────────────────────────── */}
        {project.branding && (
          <section className={`${SECTION} bg-white`}>
            <div className={GRID}>
              <div className={`${FULL} flex flex-col gap-16`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                  {/* Left: description — 1 of 3 cols */}
                  <div className="md:col-span-1 flex flex-col gap-6">
                    <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">Building the Brand</h3>
                    <p className="text-[1.1rem] leading-[1.5em] font-normal text-gray-600">{project.branding.description}</p>
                    {project.branding.logoDescription && (
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <h4 className="text-[1rem] font-bold uppercase tracking-widest text-gray-400 mb-4">Logo Design</h4>
                        <p className="text-[1.1rem] leading-[1.5em] font-normal text-gray-600">{project.branding.logoDescription}</p>
                      </div>
                    )}
                  </div>

                  {/* Right: images — 2 of 3 cols */}
                  <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {project.branding.images.map((img: string, idx: number) => (
                      <div
                        key={idx}
                        className={`w-full bg-[#F9F9F9] rounded-[10px] overflow-hidden border border-gray-100 flex items-center justify-center shadow-sm ${idx === 0 ? 'sm:col-span-2 p-0 md:p-12 lg:p-16' : 'p-8 md:p-12 lg:p-16'}`}
                      >
                        <img
                          src={img}
                          alt={`Branding ${idx}`}
                          className={`w-full h-auto object-contain drop-shadow-2xl ${idx === 0 ? 'max-h-none md:max-h-[85vh]' : 'max-h-[80vh]'}`}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── KEY FUNCTIONS ─────────────────────────────────────────────────── */}
        {project.keyFunctions && (
          <section className={`${SECTION} bg-[#E2F0A4]`}>
            <div className={GRID}>
              <div className={`${FULL} flex flex-col gap-16`}>

                <div className="flex flex-col gap-6 max-w-3xl">
                  <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">Key Functions</h3>
                  <p className="text-[1.1rem] md:text-[1.4rem] leading-[1.5em] font-normal text-gray-800">{project.keyFunctions.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {project.keyFunctions.functions.map((func: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={stagger(idx)}
                      className={`flex flex-col gap-6 bg-white p-6 rounded-[10px] shadow-sm border border-gray-100 ${idx === 0 ? 'md:col-span-2 lg:col-span-2 md:grid md:grid-cols-2 md:items-center' : ''}`}
                    >
                      <div className={`w-full bg-[#E2F0A4] rounded-[10px] overflow-hidden ${idx === 0 ? 'aspect-video' : 'aspect-square'}`}>
                        <img src={func.image} alt={func.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className={`flex flex-col gap-4 ${idx === 0 ? 'md:px-6' : ''}`}>
                        <h4 className="text-[1.1rem] md:text-[1.4rem] font-bold uppercase tracking-widest">{func.title}</h4>
                        <p className="text-gray-600 leading-[1.5em] font-normal">{func.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </section>
        )}

        {/* ── WORKFLOW ─────────────────────────────────────────────────────── */}
        {project.workflow && (
          <section className={`${SECTION} bg-white`}>
            <div className={GRID}>
              <div className={CENTERED}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-5 lg:col-span-4">
                    <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">Workflow</h3>
                  </div>
                  <div className="md:col-span-7 lg:col-span-8">
                    <div className="text-[1.1rem] md:text-[1.4rem] leading-[1.5em] font-normal whitespace-pre-line text-gray-800">
                      {project.workflow}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── GALLERY ──────────────────────────────────────────────────────── */}
        {project.gallery && (
          <section className={`${SECTION} bg-gray-50`}>
            <div className={GRID}>
              <div className={`${FULL} flex flex-col gap-12`}>
                <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em] text-left">Ad Creatives Gallery</h3>
                <div className="flex flex-col md:flex-row md:overflow-x-auto gap-8 pb-8 md:snap-x md:snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] items-center md:items-stretch">
                  {project.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="w-full max-w-[260px] md:max-w-none md:min-w-[300px] h-[320px] md:h-[400px] bg-white rounded-[10px] overflow-hidden shadow-sm md:snap-center flex-shrink-0 p-4 border border-gray-100">
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── INTERFACE IMAGE ───────────────────────────────────────────────── */}
        {project.interfaceImage && (
          <section className={`${SECTION} bg-white`}>
            <div className={GRID}>
              <div className={FULL}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={ANIM}
                  className="w-full rounded-[10px] overflow-hidden shadow-2xl border border-gray-100 bg-[#131313] p-0 md:p-10 lg:p-12 flex items-center justify-center"
                >
                  <img
                    src={project.interfaceImage}
                    alt={`${project.title} Interface`}
                    className="w-full h-auto max-h-none md:max-h-[70vh] object-contain drop-shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* ── TAKEAWAYS ─────────────────────────────────────────────────────── */}
        {project.takeaways && (
          <section className={`${SECTION} bg-light-accent`}>
            <div className={GRID}>
              <div className={`${CENTERED} flex flex-col items-center text-center gap-12`}>
                <h3 className="text-[2.3rem] md:text-[3rem] font-bold tracking-[-0.03em]">Takeaways</h3>
                <p className="text-[1.1rem] md:text-[1.4rem] leading-[1.5em] font-normal whitespace-pre-line break-words max-w-4xl">
                  {project.takeaways}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── NEXT PROJECT ─────────────────────────────────────────────────── */}
        {/* Deviation: py-32 — deliberate larger breathing room as page closer */}
        {project.nextProject && (
          <section className="py-32 w-full bg-black text-white font-sans">
            <div className={GRID}>
              <div className={`${CENTERED} flex flex-col md:flex-row justify-between items-start md:items-end gap-6`}>
                <span className="text-[1rem] font-normal uppercase tracking-widest text-gray-400">Next Project</span>
                <Link
                  to={project.nextProject.link}
                  className="text-[3rem] md:text-[7rem] font-bold uppercase tracking-tighter hover:opacity-70 transition-opacity text-left md:text-right leading-none"
                >
                  {project.nextProject.title}
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
