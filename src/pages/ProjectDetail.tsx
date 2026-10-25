import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect, useRef, useState } from 'react';

// Shared image style: every content image fits its frame and is centred the same way.
const mediaImg = "block w-full h-auto min-h-[120px] max-h-[480px] object-contain mx-auto bg-white";

// One vertical rhythm for every section, so the gutter between any two sections is identical.
const SECTION_Y = "py-12 md:py-16";

const projectsData: Record<string, any> = {
  "museon": {
    id: "museon",
    title: "MUSE*ON",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_hero.jpg?raw=true",
    overview: "Developing an all-in-one software for small museum staff that aims to streamline the workflow and improve the management of different areas of the institution, in order to optimize current museum resources.",
    scope: "End-to-End App",
    role: "UX Research, Branding, UX/UI Design",
    timeline:"4 months",
    team: "Lucia Medina, Martina Braidotti, Ilario Pedone, Agnese Rosselli, Mark Waisara",
    prototypeLink: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1",
    problem: "Staff at small museums often face fragmented workflows. \n\n With only 4 full-time staff managing 59 events and exhibitions a year across 6 different tools, the team is constantly stretched thin.",
    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/e26793d1c7a5be6de4360cc29f526af2d89a09e6/images/museon_problem.png?raw=true",
    processMap: [
      { phase: "Research", steps: ["Desk research", "On-site research", "Ecosystem map", "Research key findings"] },
      { phase: "Define", steps: ["Design brief", "Personas & scenarios", "Hero flow & wireflow", "User test results"] },
      { phase: "Develop", steps: ["Design system", "Prototype"] }
    ],
    howMightWe: [ "solve the complexity of creating a smooth experience for small museum staff?", "streamline the workflow and improve the management of different areas of the institution?", "optimize the current museum resources to help staff develop a better experience for visitors?" ],
    ideation: {
      question: "How can we build a seamless workflow that maximizes museum staff efficiency? How can the platform adapt to different roles while maintaining a unified database?",
      heroFlow: "https://github.com/Lumystik/PortfolioLucia/blob/f8b832c9f326ed2f6d2fd32515316ec56fb143fa/images/workflow_museon.png?raw=true",
      heroFlowCaption: "Heroflow: Organizing a new temporary exhibition.",
      wireframes: [
        { image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Dashboard_mobile_wireframe.png?raw=true", caption: "Dashboard" },
        { image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Calendar_mobile_wireframe%20(1).png?raw=true", caption: "Calendar" },
        { image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/smart%20notes%20pop%20up%20mobile.png?raw=true", caption: "Smart Notes" }
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
    conversionRate: {
      title: "CONVERSION RATE SIMULATION",
      description: "Results simulated from a 20-user testing group, including current museum staff and interns.",
      metrics: [
        { label: "Task Completion", value: "95%" },
        { label: "Staff Adoption", value: "18/20" },
        { label: "Workflow Speed", value: "+40%" }
      ]
    },
    iterations: {
      title: "ITERATIONS + REFINEMENT",
      description: "While navigating their dashboard, users all had very similar behavior on the constraints page. This led me to implement a couple of changes:",
      items: [
        { title: "ADDING CLARIFICATION TO SETTINGS", description: "Users found themselves guessing what each input meant, and even though 100% of users correctly interpreted the title, I added a brief description to further clarify.", image: "https://github.com/Lumystik/PortfolioLucia/blob/be1755ca40682fbb1c571d38f3aa37d18cc7ada8/images/calendar_museo1.png?raw=true" },
        { title: "UPDATING PRESET VIEWS", description: "4 out of the 5 staff members felt that the default monthly view was too broad and preferred a weekly view. Seeing as the majority chose this length, I updated the preset to reflect their preference.", image: "https://github.com/Lumystik/PortfolioLucia/blob/465f291d0d01afb736e1502a28db9b14b236e818/images/collection_museon1.png?raw=true" }
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
      { title: "INTEGRATION IS ESSENTIAL", description: "10 out of 11 users expected tasks, calendars, collections, and notes to work as one connected system." },
      { title: "SHORTCUTS DRIVE EFFICIENCY", description: "9 out of 11 users looked for faster ways to create tasks, schedule events, or access project information." },
      { title: "VISIBILITY REDUCES FRICTION", description: "10 out of 11 users relied on shared calendar and team information before making planning decisions." }
    ],
    targetUsers: {
      description: "We identified two primary user archetypes within the museum staff ecosystem, each with distinct drivers and needs.",
      personas: [
        { title: "ALEX: THE CURATOR & MANAGER", description: "ROLE: Curator, Education, Office of the President, Guide, Ticket and Relations.\nDRIVERS: Contributing to cultural education, personal interest in the subject matter.\nENVIRONMENT: Museum office.\nNEEDS: Planning, team collaboration, task management.", image: "https://github.com/Lumystik/PortfolioLucia/blob/ef20cf53e7c6dffb9f6b8a4408721a8fd6cb4d60/images/curator.png?raw=true" },
        { title: "MARK: THE INTERN", description: "ROLE: Intern.\nDRIVERS: Learning and gaining experience in museum operations, impressing supervisors, contributing effectively during the visit.\nENVIRONMENT: Home/On-site.\nNEEDS: Clear task assignment, accessibility, collection lists.", image: "https://github.com/Lumystik/PortfolioLucia/blob/ef20cf53e7c6dffb9f6b8a4408721a8fd6cb4d60/images/intern.png?raw=true" }
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
        { title: "TASK & SHARED CALENDAR OVERVIEW", description: "See the busy and available times of people you have shared your calendar with and plan events accordingly.", image: "https://github.com/Lumystik/PortfolioLucia/blob/be1755ca40682fbb1c571d38f3aa37d18cc7ada8/images/calendar_museo1.png?raw=true" },
        { title: "COLLECTION MANAGEMENT", description: "A dedicated collection page to easily check contents, export them, and manage items for specific exhibitions.", image: "https://github.com/Lumystik/PortfolioLucia/blob/465f291d0d01afb736e1502a28db9b14b236e818/images/collection_museon1.png?raw=true" },
        { title: "AI INTEGRATION", description: "AI utilizes conversation transcription to instantly detect tasks with a single click and direct users to the corresponding page.", image: "https://github.com/Lumystik/PortfolioLucia/blob/ccd5a596d938ff18c9cd80558a2f7d7f2df76b5e/images/smartnotes_museon1.png?raw=true" }
      ]
    },
    bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/988251ade7a50360d870b2b630818e7291a7d458/images/museon_finalinterface%20(10).gif?raw=true",
    finalPrototype: {
      link: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1",
    },
    takeaways: "We began with an in-depth research phase to understand the museum as an ecosystem of interconnected stakeholders, workflows, and responsibilities. This background-research process was complex and took over a month, as we needed to clearly define the core problem before moving into solutions. Through staff interviews and organizational mapping, we created visual schemas that helped us analyze how the museum operates and explain the problem from a top-down perspective. ",
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
    overview: "An immersive museum experience that helps young adults engage with art through interaction, AI integration, and playful learning.",
    scope: "Digital Experience & Totem Interface",
    role: "Digital and Interaction Design",
    timeline: "6 months · Master’s studio project",
    team: "Razieh Soleimani, Lucia Medina, Marjan Mehrabi, Fatemeh Khoshbazan",
    prototypeLink: "https://www.figma.com/proto/FnFqrWBxyChSOdL3aVzV9A/Prototype?node-id=616-1965&starting-point-node-id=564%3A1942&t=bIX74fMjWA7kTArF-1",
    problem: "Young visitors often disengage from static museum displays and need more active ways to connect with art.",
    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/ffb517c91a1b42a32e021413db4899eddbdbe05f/images/problem_dimensionn.png?raw=true",
    researchObjectives: [
      "Understand how young adults engage with art in museums.",
      "Explore how digital interaction can support learning.",
      "Test whether creative participation increases interest."
    ],
    howMightWe2: [
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
      { title: "CURIOSITY", description: "Users were interested in the concept, but needed clearer onboarding." },
      { title: "VOICE INTERACTION", description: "Voice commands felt more natural than typing or touch." },
      { title: "SIMPLICITY", description: "The interface needed to stay simple in a busy museum setting." }
    ],
    keyFunctions: {
      description: "A dual-screen experience combining museum artworks, motion graphics, AI generation, and a printed takeaway.",
      functions: [
        { title: "INTERACTIVE LEARNING", description: "Users explore paintings and unlock the generator after selecting two artworks.", image: "https://github.com/Lumystik/PortfolioLucia/blob/5a21c692a5ce09da24b54267b421feeee842d5f6/images/learning_dimension.gif?raw=true" },
        { title: "AI VOICE PROMPT", description: "Users modify the generated artwork through spoken prompts.", image: "https://github.com/Lumystik/PortfolioLucia/blob/1b024e88bc55015091152250c65c8c7255d83730/images/questioning_dimension.gif?raw=true" },
        { title: "GAMIFIED PRINTING", description: "A short trivia question unlocks a printed version of the final artwork.", image: "https://github.com/Lumystik/PortfolioLucia/blob/8e602f1e3767619ff568eeb83699dded7863d840/images/gamified_dimension.gif?raw=true" }
      ]
    },
    targetUsers: {
      description: "Young adults seeking visual, social, and interactive cultural experiences.",
      personas: [
        { title: "Sara: The Explorer", description: "Student in Milan who enjoys visual discovery, social sharing, and memorable cultural experiences.", image: "https://github.com/Lumystik/PortfolioLucia/blob/45a4994bc6796acff20cf10557be4895111209d5/images/user_dimension.png?raw=true" }
      ],
      conclusion: "She wants museum experiences to feel personal, visual, and easy to engage with."
    },
    pillars: [
      { title: "Scenario 1: Art Discovery", description: "Visitors explore artworks with audio guidance and visual interaction.", image: "https://github.com/Lumystik/PortfolioLucia/blob/8d6557cb60be6d6c688474d132989b0a8bec9580/images/scenario_1.png?raw=true" },
      { title: "Scenario 2: Art Print", description: "Users answer trivia to receive a printed version of their generated artwork.", image: "https://github.com/Lumystik/PortfolioLucia/blob/7f099807a3f294985b4812c48bad188f22b5a349/images/scenario_2.png?raw=true" },
      { title: "Scenario 3: Voice Generation", description: "Users create personalized artwork through spoken prompts.", image: "https://github.com/Lumystik/PortfolioLucia/blob/2bf3def01ee15c268265d1090683a06785465d18/images/scenario_3.png?raw=true" }
    ],
    bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/0182dd8ebc2b79c3b2d70c12906039a138c2ca8b/images/Untitled%20design%20(2).gif?raw=true",
    finalPrototype: {
      link: "https://www.figma.com/proto/FnFqrWBxyChSOdL3aVzV9A/Prototype?node-id=564-1942&starting-point-node-id=564%3A1942&t=qxU8emggwdYKJFm1-1",
    },
    takeaways: "Information Architecture is the core of projects; the skeleton where design takes place as an intuitive experience.",
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
      { title: "Streamlined Architecture", description: "Reorganized the website structure to introduce a clear Home page, categorized Films (In Theaters vs. Archives), and simplified navigation to reduce cognitive load.", image: "https://github.com/Lumystik/PortfolioLucia/blob/480139cc265caba04a43d21ff472ecb4824be7ea/images/ia.png?raw=true" },
      { title: "Timeless Rebranding", description: "Created a new visual identity using warm, earthy tones and a contemporary typography system to reflect the institution's historical and cultural significance.", image: "https://github.com/Lumystik/PortfolioLucia/blob/472122f8a272fe070e22e2dfd8f160e41befbb0f/images/timeless_rebrandingfilms.png?raw=true" },
      { title: "Accessible Design", description: "Ensured the new interface passes color blindness accessibility tests (Protanomaly, Deuteranomaly, Achromatopsia) and features highly legible components.", image: "https://github.com/Lumystik/PortfolioLucia/blob/a6aa894fecb0c8e5cf48a6cb9971194b453a3e30/images/accessibility_test.gif?raw=true" }
    ],
    processMap: [
      { phase: "Analysis Phase", items: [
        { title: "Website", description: "Provide a detailed summary of the website, explaining its main purpose, the type of content or functionality it offers, and the specific services it provides to users." },
        { title: "Users", description: "Utilize personas to represent target users, allowing for a deeper analysis of their needs and challenges." },
        { title: "Tasks", description: "Analyze the primary functions of the website while employing heuristic evaluation to identify potential issues and areas for improvement." },
        { title: "Competitors", description: "Conduct a thorough analysis of similar websites' strengths and weaknesses, identifying their key features, functionalities, and areas for improvement to gain insights for comparison and potential enhancement." }
      ]},
      { phase: "Redesign Phase", items: [
        { title: "Information Architecture", description: "Existing IA and its problematic areas, a few testing rounds, and the design of the new IA of the website." },
        { title: "Wireframes", description: "Wireframes for Cineteca Milano are preliminary sketches that outline the website’s structure, navigation flow, and key user interactions, ensuring a seamless and user-focused design." },
        { title: "Design System", description: "Design patterns and components ensure consistency in branding and user interface." },
        { title: "High Fidelity", description: "Finalize the user interface design for Cineteca Milano on both desktop and mobile, and simulate interactions to ensure a better user experience." }
      ]}
    ],
    benchmarking: {
      title: "Benchmarking",
      subtitle: "Competitive Analysis",
      description: "We analyzed cultural and archive-based platforms to identify common patterns in film discovery, event exploration, and ticket booking.",
      competitors: [
        { name: "TATE", strengths: ["Filterable events with multiple navigation routes.", "Clear visual hierarchy and strong event highlighting.", "Suggested content supports continued exploration."], weaknesses: ["Booking redirects to another site.", "Some flows require many clicks.", "Menu overlay can feel repetitive on mobile."] },
        { name: "Getty", strengths: ["Clean content presentation.", "Clear step-by-step ticket purchase process.", "Strong digital archive and educational resources."], weaknesses: ["Inconsistent navigation styles across pages.", "Fragmented journeys for tickets and planning.", "No clear back button in some flows."] },
        { name: "Cineteca Bologna", strengths: ["Color-coded categories support navigation.", "Flexible film search by title or director.", "Clear ticket interface with seat selection."], weaknesses: ["No multilingual options.", "Content organization can feel fragmented.", "Some functions are redundant or unclear."] }
      ],
      taskMatrix: [
        { task: "View Film Details", cineteca: "2 pages / 1 click", tate: "5 pages / 4 clicks", getty: "5 pages / 3 clicks", bologna: "6 pages / 5 clicks" },
        { task: "Explore Events", cineteca: "3 pages / 2 clicks", tate: "3 pages / 10 clicks", getty: "12 pages / 11 clicks", bologna: "6 pages / 8 clicks" },
        { task: "Book Tickets", cineteca: "4 pages / 7 clicks", tate: "10 pages / 11 clicks", getty: "9 pages / 12 clicks", bologna: "7 pages / 11 clicks" }
      ],
      findings: [
        "Event filtering and clear categorization were common strengths in competitor platforms.",
        "Ticket booking often became fragmented when users were redirected or forced through long flows.",
        "Search, filters, recommendations, and clear CTAs became key patterns to carry into the redesign."
      ]
    },
    ideation: {
      question: "How can we restructure Cineteca Milano into a clearer, more usable experience for discovering films, exploring events, and booking tickets?",
      heroFlow: "https://github.com/Lumystik/PortfolioLucia/blob/480139cc265caba04a43d21ff472ecb4824be7ea/images/ia.png?raw=true",
      heroFlowCaption: "Redesigned IA and core user flows: discovering films, exploring events, and booking tickets.",
      wireframes: [
        { image: "https://github.com/Lumystik/PortfolioLucia/blob/4823c9e1d3a9abfd4b02520efa9105a9551424c8/images/image.png?raw=true", caption: "Discover: Home Page" },
        { image: "https://github.com/Lumystik/PortfolioLucia/blob/4823c9e1d3a9abfd4b02520efa9105a9551424c8/images/image%20(2).png?raw=true", caption: "Explore: All Films" },
        { image: "https://github.com/Lumystik/PortfolioLucia/blob/4823c9e1d3a9abfd4b02520efa9105a9551424c8/images/image%20(1).png?raw=true", caption: "Book: Ticket Flow" }
      ]
    },
    targetUsers2: {
      persona: {
        name: "Marco",
        role: "Painter",
        age: "27 years old",
        archetype: "The Enthusiast",
        bio: "Marco finds inspiration in the imaginative worlds of sci-fi films, often incorporating futuristic elements into his artwork. Documentaries fuel his curiosity, helping him explore diverse subjects and perspectives. He aims to bridge the gap between art and cinema.",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&q=80",
        personality: [
          { left: "Introvert", right: "Extrovert", value: 40 },
          { left: "Analytical", right: "Creative", value: 90 },
          { left: "Passive", right: "Active", value: 60 },
        ],
        empathyMap: { say: "I need more content that combines art and film.", think: "Will this film spark my creativity?", does: "Notes ideas after watching; shares insights with art communities.", feel: "Frustrated by cluttered interfaces and limited content." },
        interests: ["Sci-fi films", "Documentaries", "Art galleries", "Concept art"],
        goals: ["Host a sci-fi inspired exhibition", "Collaborate with filmmakers"],
        painPoints: ["Hard to navigate huge archives", "Too many clicks to book tickets"]
      }
    },
    howMightWe: [
      "simplify the ticket booking process to reduce clicks and user frustration?",
      "reorganize the Information Architecture to make the film archive and current events easily discoverable?",
      "modernize the brand identity while preserving the historical and artistic significance of Cineteca Milano?"
    ],
    branding2: {
      sectionLabel: "Design System",
      title: "Building the Brand",
      intro: "Warm earthy tones, restrained typography, and refined iconography were chosen to reflect the institution’s cultural and historical significance. ",
      rebranding: { title: "Rebranding", description: "From Bold to Timeless: The redesign moves away from a bold and playful identity to one that is timeless, mature, and elegant." },
      colorPalette: { title: "Color Palette", description: "Warm tones and a clean visual language resonate with the institution’s cultural significance.", colors: ["#B65929", "#762C06", "#2A1002", "#6F5548", "#A4948C", "#CDC5C0", "#F5F5F7"] },
      typography: [
        { name: "New Spirit", role: "Display Typeface", sample: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 ?!”:;.,$#%&@*()", description: "Used for headings and key moments in the interface, New Spirit adds a timeless and expressive tone that feels cultural and distinctive." },
        { name: "Satoshi", role: "Body Typeface", sample: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789 ?!”:;.,$#%&@*()", description: "Chosen for body copy and UI labels, Satoshi offers smooth curves and understated elegance, making the interface readable, contemporary, and highly usable." }
      ],
      iconSet: { title: "Icon Set", description: "Rounded edges contribute to a soft, welcoming aesthetic that matches the brand tone. The icon set aligns with the brand’s refined and cultural tone while remaining highly legible.", image: "https://github.com/Lumystik/PortfolioLucia/blob/90447a2f7ee111e8353ee9c4b73e1a751b76556a/images/logo_set.png?raw=true" },
      logo: { title: "Logo Design", description: "The new logo introduces a distinctive symbol that is abstract yet clear, suggesting an archive.", image: "https://github.com/Lumystik/PortfolioLucia/blob/6217c5f1edc51584a17ffed9f0a84e2d957e8d24/images/logo_cineteca.png?raw=true" }
    },
    keyFunctions: {
      description: "The redesigned platform focuses on three core tasks: Viewing Film Details, Exploring Events, and Booking Tickets across both Web and Mobile.",
      functions: [
        { title: "CENTRALIZED FILM DISCOVERY", description: "A newly added 'All Films' page categorizes content into 'In Theaters' and 'Our Archives'.", image: "https://github.com/Lumystik/PortfolioLucia/blob/985c14161b727e75b350483da732b98d222fb4db/images/keyfunction_filmpage.png?raw=true" },
        { title: "STREAMLINED EVENT EXPLORATION", description: "Events are categorized using a sticky filter bar. ", image: "https://github.com/Lumystik/PortfolioLucia/blob/44bc54f167d5ef916b175ef981126accbc704003/images/keyfunction__events.png?raw=true" },
        { title: "FRICTIONLESS TICKET BOOKING", description: "A step-by-step flow with a clean 'Select Date and Cinema' section. ", image: "https://github.com/Lumystik/PortfolioLucia/blob/b64c5d8fa1db8781e593ab48479a5bda00e94823/images/keyfunction_tickets.png?raw=true" }
      ]
    },
    niceToHaves: {
      title: "NICE TO HAVES",
      description: "These features were not fully developed in the prototype, but could further improve personalization and discovery.",
      items: [
        { title: "PERSONALIZED RECOMMENDATIONS", description: "Suggest films and events based on previous browsing, saved interests, or favorite genres." },
        { title: "SCREENING REMINDERS", description: "Allow users to save screenings and receive reminders before tickets sell out or events begin." },
        { title: "MULTILINGUAL SUPPORT", description: "Improve accessibility for international visitors by offering clearer language switching across the site." }
      ]
    },
    bannerImage: "https://github.com/Lumystik/PortfolioLucia/blob/11d3fa9ee9136bb0c7e859de3eadc6867282e25b/images/finalinterface_films.png?raw=true",
    finalPrototype: { link: "https://www.figma.com/design/MWvYkF7ybuKjE7SPnGi8po/Assignment?node-id=689-5581&p=f&t=u3MsALKiA01A94Ii-0" },
    takeaways: "By applying ergonomic principles to the design, we transformed a cluttered and confusing website into a highly usable, accessible, and aesthetically pleasing platform. The new design significantly reduces cognitive load, improves task efficiency (e.g., streamlining the ticket booking flow), and provides a responsive experience across desktop and mobile devices.",
    nextProject: { title: "SEEDTAG", link: "/project/seedtag" }
  },

  "seedtag": {
    id: "seedtag",
    title: "Seedtag Interactive Ads",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/875f29a845d8d4c9b924b22af2bd821846e5eeae/images/hero_seedtag.png?raw=true",
    overview: "At Seedtag, I designed interactive rich media campaigns for multiple global brands across automotive, food, beverage, and lifestyle sectors, combining visual design, animation, and digital storytelling.",
    scope: "Ad Tech (HTML5/JS)",
    role: "Digital Designer / Frontend Dev (AI Tools)",
    timeline: "150+ Campaigns",
    responsibilities: [
      { title: "Creative Development", desc: "Designing interactive, high-impact ad formats (rich media) that are tailored to the context of the content, moving beyond static ads.", image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car2.gif?raw=true" },
      { title: "AI Integration", desc: "Modifying and enhancing creatives utilizing proprietary Neuro-Contextual AI ('Liz') to optimize, rather than replace, human design.", image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car3.gif?raw=true" },
      { title: "Animation & Interactivity", desc: "Adding captivating animations to boost user attention and engagement, turning assets into interactive experiences.", image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/car4.gif?raw=true" },
      { title: "Collaboration", desc: "Working with sales teams and CSMs to align creatives with client objectives and campaign strategies.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" },
      { title: "Quality Assurance", desc: "Ensuring high-quality visual standards across all digital assets produced for global publishers.", image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/starbucks5.gif?raw=true" }
    ],
    takeaways: "Working with global brands requires adaptability and a deep understanding of interactive design principles. I developed a strong intuition for attention and engagement, learning exactly what makes users stop scrolling.",
    nextProject: { title: "AGENTIC SOC", link: "/project/soc" }
  },

  "pixela": {
    id: "pixela",
    title: "Pixela",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/pixela.png?raw=true",
    overview: "Pixela is an immersive first-person survival game where you play as an AI named Pixela, who is an unexpected anomaly in a scientific project designed to decode the minds of history's greatest artists. As Pixela, your primary objective is to escape from the scientists who have captured you, using your unique abilities to travel through the worlds of Dalí, Van Gogh and Escher.",
    scope: "Unity3D / C# Videogame Demo",
    role: "Game Designer & Developer (AI Integration)",
    timeline: "150 hours",
    keyFunctions: {
      description: "GAME MECHANICS: Travel through the minds of history's greatest artists, each with unique challenges and environments.",
      functions: [
        { title: "VINCENT VAN GOGH", description: "Achieve entering Van Gogh's bedroom and finding the exit door to pass through the portal. Van Gogh chases you, threatening to cut off your ear.", image: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?w=800&q=80" },
        { title: "SALVADOR DALÍ", description: "Correctly navigate through the maze to find the portal and try to find an object from Dalí's paintings to escape.", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" },
        { title: "M. C. ESCHER", description: "Find the portal by traversing a path with altered reality. Stairs that go up and down the ceiling and walls. Villains chase you, and if they catch you, you die.", image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&q=80" }
      ]
    },
    takeaways: "Integrating AI into game mechanics opened up new possibilities for dynamic art generation, creating a unique experience for every player.",
    nextProject: { title: "MUSE*ON", link: "/project/museon" }
  },

  "soc": {
    id: "soc",
    title: "Agentic SOC",
    heroImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/Screenshot%202026-10-12%20at%2016.39.17.png?raw=true",
    overview: "I'm building the design system for AmagisTech's Agentic SOC platform, which runs as a Google plugin: a dark, dense workspace where security analysts and AI agents work the same incident queue side by side.",
    scope: "Cybersecurity Design System, CISO Interface & Conversational Agent",
    role: "UX/UI Designer (Design System, CISO Interface, Prototyping, Handoff)",
    timeline: "Ongoing",
    cisoInterface: {
      label: "CISO & Executive Interface",
      title: "The Big Picture, On Request",
      description: "I designed a dedicated interface for CISOs and executives, who need the overall picture rather than analyst detail.",
      image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/soc_ciso_interface.jpg?raw=true",
      features: [
        { title: "Quarterly milestones", description: "Losses avoided, analyst hours reclaimed, mean time to contain and the share of alerts handled without a human." },
        { title: "Suggested questions", description: "Recent, frequent and recommended questions to start from instead of a blank page." },
        { title: "One-tap reports", description: "Quick reports such as MTTR, weekly ROI and threat status." },
        { title: "Ask and it's built", description: "Executives ask for any report in plain language and the agent builds it." },
        { title: "Autonomy always visible", description: "A status line always shows the agents' current autonomy level." }
      ],
      note: "Figures shown are illustrative."
    },
    conversationalAgent: {
      label: "Conversational Agent",
      title: "A Persistent Workspace, Not a Chat Log",
      description: "As a team, we designed a conversational agent built around a persistent workspace, so context, actions and assumptions stay visible while the analyst and the agent work through a problem together.",
      image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/soc_agent_workspace.png?raw=true",
      features: [
        { title: "Session state rail", description: "Keeps the active goal, target host and timeframe in view." },
        { title: "Conversation feed", description: "Every tool call the agent makes is shown as it happens." },
        { title: "Visual canvas", description: "Anchors such as network topology diagrams, tied to the conversation." },
        { title: "Ghost layer", description: "Shows the assumptions the agent inferred, so the analyst can check or correct them." }
      ]
    },
    disclosure: "Developed during my internship at AmagisTech Italia. Figures and case data shown are illustrative, and internal product details are omitted under my confidentiality agreement.",
    contribution: [
      { title: "Design System", description: "Building the platform's design system, from tokens and atoms to page templates, and preparing clean handoff files for the engineering team." },
      { title: "CISO Interface", description: "Designed a dedicated interface for CISOs and executives with milestones, suggested questions and on-demand reports." },
      { title: "Research & Prototyping", description: "Ran card sorting with CISOs and analysts, then worked from rough sketches to interactive Figma prototypes, documenting each iteration." }
    ],
    howMightWe: [ "make agent activity and human decisions readable in the same queue?", "keep a dense analyst interface calm and scannable over long sessions, while giving executives and CISOs the view they actually need?", "give a design system one shared vocabulary for an agentic system?" ],
    team: "AmagisTech. Andrea Curcio (senior designer), Antonio Cervadoro (developer)",
    problem: "Security teams work across many disconnected tools, each with its own login and way of working. Much of the job is repetitive, manual work that doesn't scale as a provider takes on more customers. Analysts should spend their time on judgment, not data entry, and whatever an AI does on their behalf has to stay visible while it happens.",
    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/problem.png?raw=true",
    problem2: "SOCs currently consider only one stakeholder: the analyst. But CISOs and executives need to understand what the SOC is doing too, including the risk it removes and the value it delivers, without digging through analyst-level detail.",
    solution: "An AI layer that sits across the existing tools and handles the repetitive, well-defined work. A coordinating AI understands a request, such as onboarding a new customer or looking into an alert, and hands it to a specialised AI worker built for that one job. Analysts keep the judgment calls, and whoever oversees the system sees each tool call, finding and decision as it happens.",
    audiences: [
      { title: "Buyers", description: "Companies looking for centralised AI security management across their whole environment." },
      { title: "Users", description: "Security analysts who would use it every day inside a security operations centre." }
    ],
    testing: {
      title: "First Iteration: User Testing",
      description: "A six-step interactive workshop run with participants. First, a card-sorting step to find which building blocks people actually rely on, as opposed to those that would only be nice to have. Then a peer-review round, in which participants reviewed consoles built by others and answered short agreement-scale statements about fit, ease of use and how they prefer to interact with the system."
    },
    processMap: [
      { phase: "Research", steps: ["Webinar 1 co-design with Andrea Curcio (Senior Designer)", "Full SOC component map", "Vendor analysis", "Card sorting & CISO questionnaire (14 executive cybersecurity chiefs, CTF session)"] },
      { phase: "Define", steps: ["Analysis of card sorting & questionnaire data", "Component placement agreement (CISO & Analyst)", "Webinar 2: CISO and Analyst screens"] },
      { phase: "Develop", steps: ["Atomic design system (tokens, atoms, molecules, organisms)", "CISO interface & conversational agent", "UX/UI project scope document with the developer team", "Developer handoff"] }
    ],
    keyFunctions: {
      description: "The workspace is built from a small set of reusable parts: a navigation rail, page header, filter bar, data table and an agent panel.",
      functions: [
        { title: "CENTRALIZED TOOLS", description: "One workspace brings the separate security tools together, so analysts no longer log in to and switch between each one.", visual: "chip" },
        { title: "NO BLACK BOX FOR ANALYSTS", description: "Every action the AI takes is visible as it happens: which tool it called, what it found, and what decision it made.", image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/soc_no_black_box.png?raw=true" },
        { title: "ADAPTABLE TO CISOS TOO", description: "The same system serves executives looking at the overall picture and analysts working through individual cases.", image: "https://github.com/Lumystik/PortfolioLucia/blob/main/images/soc_ciso_interface.jpg?raw=true" }
      ]
    },
    takeaways: "Designing for a dark analyst tool meant that structure, hierarchy and a restrained colour system do the work that shadows and decoration would do elsewhere. Writing the system down as tokens, atoms and regions made handoff to engineering much faster, and designing a separate CISO view showed how one system can serve very different users.",
    nextProject: { title: "PIXELA", link: "/project/pixela" }
  }
};

// Component styling mapped exactly to seamless black/white requirements
const problemFolderCss = `
.pf-card { position: relative; display: block; width: 100%; max-width: 380px; height: 280px; margin: 0 auto; cursor: pointer; }
.pf-toggle { position: absolute; opacity: 0; pointer-events: none; }
.pf-hint { position: absolute; top: 0; right: 0; color: #000; font: 600 12px/1 Inter, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; transition: opacity 0.3s; }
.pf-toggle:checked ~ .pf-hint { opacity: 0; }
.pf-container { position: absolute; inset: 28px 0 0 0; }
.pf-back { position: absolute; inset: 0; border-radius: 14px; background: #fff; border: 1px solid #000; }
.pf-file { position: absolute; left: 10%; right: 10%; bottom: 16%; height: 130px; display: flex; flex-direction: column; justify-content: space-between; padding: 14px; border-radius: 10px; border: 1px solid #000; background: #fff; color: #000; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.pf-file-text { font: 600 14px/1.2 Inter, sans-serif; }
.pf-file-tag { font: 500 11px/1 "JetBrains Mono", monospace; color: #000; letter-spacing: 0.06em; text-transform: uppercase; }
.pf-file-1 { z-index: 1; }
.pf-file-2 { z-index: 2; }
.pf-file-3 { z-index: 3; }
.pf-file-4 { z-index: 4; }
.pf-toggle:checked ~ .pf-container .pf-file-1 { transform: translateY(-70px) rotate(-4deg); }
.pf-toggle:checked ~ .pf-container .pf-file-2 { transform: translateY(-110px) rotate(2deg); }
.pf-toggle:checked ~ .pf-container .pf-file-3 { transform: translateY(-150px) rotate(-2deg); }
.pf-toggle:checked ~ .pf-container .pf-file-4 { transform: translateY(-190px) rotate(3deg); }
.pf-front { position: absolute; left: 0; right: 0; bottom: 0; height: 62%; z-index: 10; border-radius: 14px; background: #fff; border: 1px solid #000; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
.pf-toggle:checked ~ .pf-container .pf-front { transform: translateY(38%); }
.pf-counter { display: flex; align-items: center; gap: 8px; color: #000; font: 600 11px/1 "JetBrains Mono", monospace; letter-spacing: 0.1em; }
.pf-dot { width: 7px; height: 7px; border-radius: 9999px; background: #000; }
.pf-label { color: #000; font: 700 18px/1.2 Inter, sans-serif; }
`;

function ProblemFolder({ tools }: { tools: string[] }) {
  return (
    <>
      <style>{problemFolderCss}</style>
      <label className="pf-card">
        <input type="checkbox" className="pf-toggle" />
        <div className="pf-hint">Click to open</div>
        <div className="pf-container">
          <div className="pf-back" />
          {tools.slice(0, 4).map((tool, i) => (
            <div key={tool} className={`pf-file pf-file-${i + 1}`}>
              <span className="pf-file-text">{tool}</span>
              <span className="pf-file-tag">Tool {String(i + 1).padStart(2, "0")}</span>
            </div>
          ))}
          <div className="pf-front">
            <div className="pf-counter">
              <span className="pf-dot" />
              <span>TOOLS</span>
              <span>{String(Math.min(tools.length, 4)).padStart(2, "0")}</span>
            </div>
            <div className="pf-label">Too many tools, one analyst</div>
          </div>
        </div>
      </label>
    </>
  );
}

const stakeholderTerminalCss = `
.st-container { width: 100%; max-width: 440px; height: 232px; margin: 0 auto; }
.st-toolbar { display: flex; height: 30px; align-items: center; padding: 0 8px; box-sizing: border-box; border-top-left-radius: 5px; border-top-right-radius: 5px; background: #fff; border: 1px solid #000; border-bottom: none; justify-content: space-between; }
.st-butt { display: flex; align-items: center; }
.st-btn { display: flex; justify-content: center; align-items: center; padding: 0; margin-right: 5px; font-size: 8px; height: 12px; width: 12px; box-sizing: border-box; border: 1px solid #000; border-radius: 100%; background: #fff; }
.st-btn:hover { cursor: pointer; }
.st-btn:focus { outline: none; }
.st-user { color: #000; margin-left: 6px; font-size: 14px; line-height: 15px; font-family: "JetBrains Mono", ui-monospace, monospace; }
.st-add-tab { border: 1px solid #000; color: #000; padding: 0 6px; border-radius: 4px 4px 0 0; border-bottom: none; cursor: pointer; font-family: ui-monospace, monospace; }
.st-body { background: #fff; border: 1px solid #000; height: calc(100% - 30px); padding: 10px 12px; margin-top: -1px; font-size: 13px; line-height: 1.7; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; font-family: "JetBrains Mono", ui-monospace, monospace; color: #000; }
.st-prompt { display: flex; align-items: center; flex-wrap: wrap; }
.st-prompt span { margin-left: 4px; }
.st-prompt span:first-child { margin-left: 0; }
.st-user-name { color: #000; }
.st-location { color: #000; }
.st-bling { color: #000; }
.st-out { color: #000; padding-left: 14px; }
.st-missing { color: #000; font-weight: bold; }
.st-cursor { display: block; height: 14px; width: 6px; margin-left: 10px; background: #000; animation: st-curbl 1200ms linear infinite; }
@keyframes st-curbl { 0% { opacity: 1; } 49% { opacity: 1; } 50% { opacity: 0; } 99% { opacity: 0; } 100% { opacity: 1; } }
`;

function StakeholderTerminal() {
  return (
    <>
      <style>{stakeholderTerminalCss}</style>
      <div className="st-container" aria-label="Terminal: the SOC only supports the analyst">
        <div className="st-toolbar">
          <div className="st-butt">
            <button type="button" className="st-btn st-btn--exit" aria-hidden="true" tabIndex={-1} />
            <button type="button" className="st-btn" aria-hidden="true" tabIndex={-1} />
            <button type="button" className="st-btn" aria-hidden="true" tabIndex={-1} />
          </div>
          <p className="st-user">analyst@soc: ~</p>
          <div className="st-add-tab">+</div>
        </div>
        <div className="st-body">
          <div className="st-prompt">
            <span className="st-user-name">analyst@soc:</span>
            <span className="st-location">~</span>
            <span className="st-bling">$ stakeholders --supported</span>
          </div>
          <div className="st-out">→ analyst</div>
          <div className="st-prompt">
            <span className="st-user-name">analyst@soc:</span>
            <span className="st-location">~</span>
            <span className="st-bling">$ stakeholders --missing</span>
          </div>
          <div className="st-out st-missing">→ ciso, executives</div>
          <div className="st-prompt">
            <span className="st-user-name">ciso@soc:</span>
            <span className="st-location">~</span>
            <span className="st-bling">$ show risk overview</span>
          </div>
          <div className="st-out st-missing">→ view not available</div>
          <div className="st-prompt">
            <span className="st-user-name">ciso@soc:</span>
            <span className="st-location">~</span>
            <span className="st-bling">$</span>
            <span className="st-cursor" />
          </div>
        </div>
      </div>
    </>
  );
}

const centralizedChipCss = `
.cc-main-container { display: flex; justify-content: center; align-items: center; height: 100%; width: 100%; }
.cc-loader { width: 100%; height: 100%; }
.cc-loader svg { display: block; width: 100%; height: 100%; }
.cc-trace-bg { stroke: #000; stroke-width: 1.8; fill: none; }
.cc-trace-flow { stroke-width: 1.8; stroke: #000; fill: none; stroke-dasharray: 40 400; stroke-dashoffset: 438; animation: cc-flow 3s cubic-bezier(0.5, 0, 0.9, 1) infinite; }
.cc-chip-text { font-weight: bold; letter-spacing: 1px; fill: #000; }
.cc-chip-pin { stroke: #000; stroke-width: 0.5; fill: #fff; }
.cc-dot { fill: #000; }
@keyframes cc-flow { to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) { .cc-trace-flow { animation: none; stroke-dasharray: none; } }
`;

function CentralizedChip() {
  return (
    <>
      <style>{centralizedChipCss}</style>
      <div className="cc-main-container">
        <div className="cc-loader">
          <svg viewBox="280 -110 300 720" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Separate security tools connecting into one centralised workspace">
            <g transform="rotate(90 400 250)">
              <g>
                <path d="M100 100 H200 V210 H326" className="cc-trace-bg" />
                <path d="M100 100 H200 V210 H326" className="cc-trace-flow" />
                <path d="M80 180 H180 V230 H326" className="cc-trace-bg" />
                <path d="M80 180 H180 V230 H326" className="cc-trace-flow" />
                <path d="M60 260 H150 V250 H326" className="cc-trace-bg" />
                <path d="M60 260 H150 V250 H326" className="cc-trace-flow" />
                <path d="M100 350 H200 V270 H326" className="cc-trace-bg" />
                <path d="M100 350 H200 V270 H326" className="cc-trace-flow" />
                <path d="M700 90 H560 V210 H474" className="cc-trace-bg" />
                <path d="M700 90 H560 V210 H474" className="cc-trace-flow" />
                <path d="M740 160 H580 V230 H474" className="cc-trace-bg" />
                <path d="M740 160 H580 V230 H474" className="cc-trace-flow" />
                <path d="M720 250 H590 V250 H474" className="cc-trace-bg" />
                <path d="M720 250 H590 V250 H474" className="cc-trace-flow" />
                <path d="M680 340 H570 V270 H474" className="cc-trace-bg" />
                <path d="M680 340 H570 V270 H474" className="cc-trace-flow" />
              </g>
              <rect x="330" y="170" width="140" height="160" rx="20" ry="20" fill="#fff" stroke="#000" strokeWidth="3" />
              <g>
                <rect x="322" y="205" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="322" y="225" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="322" y="245" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="322" y="265" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="470" y="205" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="470" y="225" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="470" y="245" width="8" height="10" rx="2" className="cc-chip-pin" />
                <rect x="470" y="265" width="8" height="10" rx="2" className="cc-chip-pin" />
              </g>
              <circle cx="100" cy="100" r="5" className="cc-dot" />
              <circle cx="80" cy="180" r="5" className="cc-dot" />
              <circle cx="60" cy="260" r="5" className="cc-dot" />
              <circle cx="100" cy="350" r="5" className="cc-dot" />
              <circle cx="700" cy="90" r="5" className="cc-dot" />
              <circle cx="740" cy="160" r="5" className="cc-dot" />
              <circle cx="720" cy="250" r="5" className="cc-dot" />
              <circle cx="680" cy="340" r="5" className="cc-dot" />
            </g>
            <text x="400" y="250" fontFamily="Arial, sans-serif" fontSize="19" textAnchor="middle" dominantBaseline="middle" className="cc-chip-text">
              Centralised
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}

const hoverTitleCss = `
.soc-hover-title { position: relative; display: inline-block; }
.soc-hover-overlay {
  position: absolute; inset: 0; box-sizing: border-box;
  color: #000; width: 0%; overflow: hidden; white-space: nowrap;
  border-right: 6px solid #000;
  -webkit-text-stroke: 1px #000;
  transition: width 0.5s;
}
.soc-hover-title:hover .soc-hover-overlay { width: 100%; }
`;

function HoverTitle({ text }: { text: string }) {
  return (
    <>
      <style>{hoverTitleCss}</style>
      <span className="soc-hover-title" data-text={text}>
        <span>{text}</span>
        <span aria-hidden="true" className="soc-hover-overlay">{text}</span>
      </span>
    </>
  );
}

// Design Process Map: one phase per slide, swipe / arrow / dot navigation
function ProcessCarousel({ phases }: { phases: any[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const lastIndex = phases.length - 1;
  const go = (i: number) => setIndex(Math.max(0, Math.min(lastIndex, i)));

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-6">
        <span className="text-xs uppercase tracking-[0.22em] text-black">
          {String(index + 1).padStart(2, "0")} / {String(phases.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous phase"
            className="h-12 w-12 rounded-full border border-black flex items-center justify-center text-black transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === lastIndex}
            aria-label="Next phase"
            className="h-12 w-12 rounded-full border border-black flex items-center justify-center text-black transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden rounded-[2rem]"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {phases.map((phase: any, phaseIndex: number) => {
            const processItems = phase.items || phase.steps?.map((step: string) => ({ title: step, description: "" })) || [];
            return (
              <div key={phaseIndex} className="w-full shrink-0" aria-hidden={index !== phaseIndex}>
                <div className="h-full min-h-[420px] rounded-[2rem] bg-white border border-black p-8 md:p-14 flex flex-col gap-10">
                  <div className="flex items-start justify-between">
                    <span className="text-6xl md:text-8xl font-bold leading-none text-black">0{phaseIndex + 1}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-black mt-2">Phase {phaseIndex + 1} of {phases.length}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black">{phase.phase}</h3>
                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                    {processItems.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} className="flex flex-col gap-2 border-t border-black pt-4">
                        <p className="text-sm md:text-base font-bold uppercase tracking-tight text-black">{item.title}</p>
                        {item.description && <p className="text-sm text-black leading-relaxed">{item.description}</p>}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        {phases.map((_: any, i: number) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to phase ${i + 1}`}
            className={`h-2 rounded-full bg-black transition-all duration-500 ease-out ${i === index ? "w-10" : "w-2 opacity-25 hover:opacity-60"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ScrollyTelling wrapper handling fixed index, moving content, smooth animation
function ScrollyTelling({ project }: { project: any }) {
  const sections = [];

  // 4. Research & Empathy
  if (project.audiences || project.targetUsers || project.targetUsers2 || project.researchObjectives || project.researchInsights || project.userInsightsCards || project.keyFindings) {
    sections.push({
      id: "research",
      title: "Research & Empathy",
      desc: "Target Users, Personas, Insights, Research Objectives",
      content: (
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {project.audiences && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.audiences.map((aud: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-3 p-8 bg-white rounded-[2rem] border border-black">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-black">Audience 0{idx + 1}</span>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">{aud.title}</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">{aud.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.targetUsers && (
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">Target Users</h3>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.targetUsers.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {project.targetUsers.personas.map((persona: any, idx: number) => {
                  const descriptionParts = persona.description.split('\n').map((part: string) => part.trim());
                  const hasStructuredDetails = descriptionParts.some((part: string) => part.includes(':'));
                  const personaMetrics = project.id === 'museon' && persona.title.toLowerCase().includes('alex')
                    ? [ { label: 'Planning', value: 95 }, { label: 'Team coordination', value: 90 }, { label: 'Task management', value: 85 } ]
                    : project.id === 'museon'
                    ? [ { label: 'Task clarity', value: 95 }, { label: 'Accessibility', value: 85 }, { label: 'Guided workflow', value: 80 } ]
                    : project.id === 'art-beyond-dimension'
                    ? [ { label: 'Interactivity', value: 95 }, { label: 'Visual discovery', value: 90 }, { label: 'Ease of use', value: 85 } ]
                    : project.id === 'films-foundation' && persona.title.toLowerCase().includes('creator')
                    ? [ { label: 'Archive access', value: 95 }, { label: 'Searchability', value: 90 }, { label: 'Creative inspiration', value: 85 } ]
                    : [ { label: 'Easy booking', value: 95 }, { label: 'Event discovery', value: 85 }, { label: 'Mobile clarity', value: 80 } ];

                  const personaTags = project.id === 'museon' && persona.title.toLowerCase().includes('alex')
                    ? ['Museum staff', 'Planning', 'Collaboration', 'Office workflow']
                    : project.id === 'museon'
                    ? ['Intern', 'On-site support', 'Clear tasks', 'Learning']
                    : project.id === 'art-beyond-dimension'
                    ? ['Young adult', 'Visual discovery', 'Social sharing', 'Interactive learning']
                    : project.id === 'films-foundation' && persona.title.toLowerCase().includes('creator')
                    ? ['Creative research', 'Archive access', 'Film references', 'Inspiration']
                    : ['Cultural visitor', 'Events', 'Ticket booking', 'Mobile use'];

                  return (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col bg-white border border-black rounded-[2rem] overflow-hidden">
                      <div className="p-5 md:p-6 flex flex-col gap-5 border-b border-black">
                        <div className="w-full aspect-[4/3] bg-white rounded-[1.5rem] overflow-hidden">
                          <img src={persona.image} alt={persona.title} className={mediaImg} loading="lazy" decoding="async" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="inline-flex w-fit px-3 py-1 rounded-full bg-white border border-black text-black text-[10px] md:text-xs uppercase tracking-widest">
                            Persona 0{idx + 1}
                          </div>
                          <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black">{persona.title}</h4>
                          {!hasStructuredDetails && (
                            <p className="text-base md:text-lg text-black leading-relaxed">{persona.description}</p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {personaTags.map((tag: string, tagIdx: number) => (
                            <span key={tagIdx} className="px-3 py-1.5 rounded-full bg-white border border-black text-xs md:text-sm text-black">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="px-5 md:px-6 py-5 md:px-6 flex flex-col gap-5">
                        {hasStructuredDetails && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {descriptionParts.map((part: string, partIdx: number) => {
                              const [label, ...rest] = part.split(':');
                              return (
                                <div key={partIdx} className="bg-white border border-black rounded-2xl p-4">
                                  <p className="text-xs font-bold uppercase tracking-widest text-black mb-2">{label}</p>
                                  <p className="text-sm md:text-base text-black leading-relaxed">{rest.join(':').trim()}</p>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        <div className="bg-white border border-black rounded-2xl p-4">
                          <h5 className="text-xs font-bold uppercase tracking-widest text-black mb-4">Key Needs</h5>
                          <div className="space-y-4">
                            {personaMetrics.map((item: any, metricIdx: number) => (
                              <div key={metricIdx}>
                                <div className="flex justify-between gap-4 text-xs md:text-sm text-black mb-1.5">
                                  <span>{item.label}</span>
                                  <span>{item.value}%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-white border border-black overflow-hidden">
                                  <div className="h-full bg-black" style={{ width: `${item.value}%` }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {project.targetUsers2 && (
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-black mb-16">Detailed Persona</h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden">
                    <img src={project.targetUsers2.persona.image} alt="Marco" className={mediaImg} loading="lazy" decoding="async" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold uppercase tracking-tighter text-black">{project.targetUsers2.persona.name}</h3>
                    <p className="text-lg text-black">{project.targetUsers2.persona.archetype} • {project.targetUsers2.persona.age}</p>
                  </div>
                  <p className="text-black leading-relaxed">{project.targetUsers2.persona.bio}</p>
                </div>

                <div className="lg:col-span-5 border-l border-black pl-12">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-10 text-black">Empathy Map</h4>
                  <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                    <div className="flex flex-col gap-3"><span className="text-2xl font-bold italic text-black">SAY</span><p className="text-md text-black leading-snug">"{project.targetUsers2.persona.empathyMap.say}"</p></div>
                    <div className="flex flex-col gap-3"><span className="text-2xl font-bold italic text-black">THINK</span><p className="text-md text-black leading-snug">{project.targetUsers2.persona.empathyMap.think}</p></div>
                    <div className="flex flex-col gap-3"><span className="text-2xl font-bold italic text-black">DOES</span><p className="text-md text-black leading-snug">{project.targetUsers2.persona.empathyMap.does}</p></div>
                    <div className="flex flex-col gap-3"><span className="text-2xl font-bold italic text-black">FEEL</span><p className="text-md text-black leading-snug">{project.targetUsers2.persona.empathyMap.feel}</p></div>
                  </div>

                  <div className="mt-16">
                     <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-black">Personality</h4>
                     {project.targetUsers2.persona.personality.map((trait: any, i: number) => (
                       <div key={i} className="mb-4">
                         <div className="flex justify-between text-[10px] text-black uppercase font-bold mb-1">
                           <span>{trait.left}</span>
                           <span>{trait.right}</span>
                         </div>
                         <div className="h-[4px] bg-white border border-black w-full relative">
                           <div className="absolute h-full bg-black" style={{ width: '8px', top: '-1px', left: `${trait.value}%` }} />
                         </div>
                       </div>
                     ))}
                  </div>
                </div>

                <div className="lg:col-span-3 flex flex-col gap-12">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-black">Goals</h4>
                    <ul className="flex flex-col gap-3">
                      {project.targetUsers2.persona.goals?.map((p: string, i: number) => <li key={i} className="text-sm text-black border-l-2 border-black pl-3">{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-black">Pain Points</h4>
                    <ul className="flex flex-col gap-3">
                      {project.targetUsers2.persona.painPoints?.map((p: string, i: number) => <li key={i} className="text-sm text-black border-l-2 border-black pl-3">{p}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.researchObjectives && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">
                  Research Objectives
                </h3>
              </div>
              <div className="lg:col-span-7 lg:pt-1">
                {Array.isArray(project.researchObjectives) ? (
                  <div className="max-w-2xl">
                    <p className="text-base md:text-lg text-black leading-relaxed mb-6">Through user interviews and surveys, I wanted to:</p>
                    <ul className="flex flex-col gap-5">
                      {project.researchObjectives.map((line: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-4 text-base md:text-lg text-black leading-relaxed">
                          <span className="text-black font-bold select-none mt-1">•</span>
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="max-w-2xl">
                    <p className="text-base md:text-lg text-black leading-relaxed mb-6">Through user interviews and surveys, I wanted to:</p>
                    <div className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line">{project.researchObjectives}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {project.researchInsights && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {project.researchInsights.map((insight: any, idx: number) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-3 bg-white border border-black p-8 rounded-xl h-full">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-black">{insight.title}</h4>
                  <p className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {(project.userInsights || project.userInsightsCards) && (
            <div className="rounded-[2.5rem] bg-white border border-black p-8 md:p-12 lg:p-16 flex flex-col gap-12">
              <div className="flex flex-col gap-3 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-black">Research Signal</span>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">User Insights</h3>
              </div>
              {project.userInsights && (project.userInsights.benefitsImage || project.userInsights.insightsImage) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {project.userInsights.benefitsImage && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-left text-black">User Perceived Benefits</h4>
                      <div className="w-full rounded-[2rem] overflow-hidden bg-white p-4 flex items-center justify-center">
                        <img src={project.userInsights.benefitsImage} alt="User Benefits" className={mediaImg} loading="lazy" decoding="async" />
                      </div>
                    </div>
                  )}
                  {project.userInsights.insightsImage && (
                    <div className="flex flex-col gap-4">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-left text-black">User Priorities</h4>
                      <div className="w-full rounded-[2rem] overflow-hidden bg-white p-4 flex items-center justify-center">
                        <img src={project.userInsights.insightsImage} alt="User Insights" className={mediaImg} loading="lazy" decoding="async" />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {project.userInsightsCards && project.userInsightsCards.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {project.userInsightsCards.map((card: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="bg-white p-8 rounded-[2rem] border border-black flex flex-col gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-black">Insight 0{idx + 1}</span>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-black leading-tight">{card.title}</h4>
                      <p className="text-base md:text-lg text-black leading-relaxed">{card.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {project.keyFindings && (
            <div>
              <h3 className="mb-8 md:mb-10 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">Key Findings</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {project.keyFindings.map((finding: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-2 text-left bg-white border border-black rounded-2xl p-6">
                    <span className="text-5xl md:text-7xl font-bold text-black">{finding.stat}</span>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">{finding.label}</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">{finding.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    });
  }

  // 5. Ideation & Definition
  if (project.howMightWe || project.howMightWe2 || project.pillars || project.pillars2 || project.ideation || project.solution) {
    sections.push({
      id: "ideation",
      title: "Ideation & Definition",
      desc: "How Might We, Pillars, Ideation, Solution",
      content: (
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {project.howMightWe && (
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-black text-white rounded-[2rem] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] transition-shadow duration-500 hover:shadow-[0_32px_70px_-24px_rgba(0,0,0,0.55)] p-8 md:p-12 min-h-[220px] md:min-h-[280px] flex items-center overflow-hidden relative">
                <div className="absolute inset-x-8 top-8 h-px bg-white/25" />
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-none text-white">How Might We...</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {project.howMightWe.map((question: string, index: number) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="rounded-[2rem] bg-white text-black p-6 md:p-8 min-h-[220px] flex flex-col justify-between border border-black">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-black">Question 0{index + 1}</span>
                    <p className="text-xl md:text-2xl leading-relaxed font-medium tracking-[-0.01em]">{question}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.howMightWe2 && (
            <div className="rounded-[2.5rem] bg-white text-black p-8 md:p-12 min-h-[220px] md:min-h-[280px] flex flex-col justify-between border border-black overflow-hidden relative">
              <div className="absolute inset-x-8 top-8 h-px bg-black" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-black">Question 01</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight max-w-5xl text-black">{project.howMightWe2[0]}</h2>
            </div>
          )}

          {project.pillars2 && project.pillars2.length > 0 && (
            <div className="flex flex-col gap-16 md:gap-24">
              {project.pillars2[0] && (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                      <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight text-black">{project.pillars2[0].title}</h3>
                      <p className="text-base md:text-lg text-black leading-relaxed">{project.pillars2[0].description}</p>
                    </div>
                    <div className="lg:col-span-8 rounded-2xl overflow-hidden p-4 bg-white">
                      <img src={project.pillars2[0].image} alt={project.pillars2[0].title} className={mediaImg} loading="lazy" decoding="async" />
                    </div>
                  </div>
                </motion.div>
              )}
              {project.pillars2.length > 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                  {project.pillars2.slice(1).map((pillar: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-6 items-start text-left group">
                      <div className="w-full aspect-video rounded-2xl overflow-hidden p-4 bg-white">
                        <img src={pillar.image} alt={pillar.title} className={mediaImg} loading="lazy" decoding="async" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h4 className="text-xl font-bold uppercase tracking-tight text-black">{pillar.title}</h4>
                        <p className="text-base md:text-lg text-black leading-relaxed">{pillar.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {project.pillars && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {project.pillars.map((pillar: any, idx: number) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-6 items-start text-left group">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden p-2 bg-white">
                    <img src={pillar.image} alt={pillar.title} className={mediaImg} loading="lazy" decoding="async" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">{pillar.title}</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {project.ideation && (
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-8 max-w-4xl text-left">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">Ideation</h3>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <div className="w-full bg-white p-6 md:p-12 rounded-2xl">
                  <img src={project.ideation.heroFlow} alt="Hero Flow" className={mediaImg} loading="lazy" decoding="async" />
                </div>
                <p className="text-xs md:text-sm text-black font-bold uppercase tracking-widest text-center">{project.ideation.heroFlowCaption}</p>
              </motion.div>
              <div className="bg-white border border-black p-8 md:p-16 rounded-[2rem] flex flex-col gap-12">
                <div className="flex flex-col gap-2 text-left">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">Laying the Foundation</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">Initial Wireframe Iterations</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                  {project.ideation.wireframes.map((wire: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                      <div className="w-full max-w-[280px] mx-auto overflow-hidden rounded-xl flex justify-center items-center bg-white">
                        <img src={wire.image} alt={wire.caption} className={mediaImg} loading="lazy" decoding="async" />
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <p className="text-base md:text-lg font-bold uppercase tracking-tight text-black">{wire.caption.includes(':') ? wire.caption.split(':')[0] : wire.caption}</p>
                        <p className="text-sm md:text-base text-black leading-relaxed">{wire.caption.includes(':') ? wire.caption.split(':')[1] : ""}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {project.solution && (
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">The Solution</h3>
              <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl">{project.solution}</p>
            </div>
          )}
        </div>
      )
    });
  }

  // 6. Design & Architecture
  if (project.branding || project.branding2 || project.designSystem || project.keyFunctions || project.cisoInterface || project.conversationalAgent) {
    sections.push({
      id: "design",
      title: "Design & Architecture",
      desc: "Branding, Design System, Key Functions, Interfaces",
      content: (
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {project.branding && (
            <div className="flex flex-col gap-16 md:gap-20">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black mb-8">Building the Brand</h3>
                <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl">{project.branding.description}</p>
              </div>
              {project.branding.shapes && (
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  {project.branding.shapes.map((shape: any, idx: number) => (
                    <div key={idx} className="rounded-full border border-black" style={{ backgroundColor: shape.color ?? '#000', width: `${shape.size}px`, height: `${shape.size}px`, opacity: shape.opacity ?? 1, filter: `blur(${shape.blur ?? 0}px)` }} />
                  ))}
                </div>
              )}
              {(project.branding.logoDescription || project.branding.logoImage) && (
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mx-auto max-w-5xl w-full">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-lg">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">Logo Design</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">{project.branding.logoDescription}</p>
                  </div>
                  <div className="flex justify-center items-center p-4 rounded-xl bg-white">
                    <img src={project.branding.logoImage} alt="Logo" className={mediaImg} loading="lazy" decoding="async" />
                  </div>
                </div>
              )}
              {project.branding.featuresImage && (
                <div className="border-t border-black pt-16">
                  <img src={project.branding.featuresImage} alt="Feature" className={`${mediaImg} rounded-xl`} loading="lazy" decoding="async" />
                </div>
              )}
            </div>
          )}

          {project.branding2 && (
            <div className="flex flex-col gap-10 md:gap-14">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-black mb-3">{project.branding2.sectionLabel}</p>
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-5">{project.branding2.title}</h3>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.branding2.intro}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
                <div className="flex flex-col gap-6">
                  <div className="rounded-[2rem] bg-white border border-black p-6 md:p-8 h-full">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-black mb-3">{project.branding2.rebranding.title}</p>
                    <p className="text-base md:text-lg text-black leading-relaxed">{project.branding2.rebranding.description}</p>
                  </div>
                  <div className="rounded-[2rem] bg-white border border-black p-6 md:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-black mb-3">{project.branding2.colorPalette.title}</p>
                    <p className="text-base md:text-lg text-black leading-relaxed mb-6">{project.branding2.colorPalette.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {project.branding2.colorPalette.colors.map((color: string, idx: number) => (
                        <div key={idx} className="rounded-2xl overflow-hidden border border-black bg-white">
                          <div className="w-full h-20" style={{ backgroundColor: color }} />
                          <div className="px-4 py-3 border-t border-black"><p className="text-sm font-medium text-black">{color}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[2rem] bg-white border border-black p-6 md:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-black mb-3">{project.branding2.iconSet.title}</p>
                    <p className="text-base md:text-lg text-black leading-relaxed">{project.branding2.iconSet.description}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="rounded-[2rem] bg-white border border-black p-6 md:p-8 flex flex-col gap-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-black">Typography</p>
                    {project.branding2.typography.map((type: any, idx: number) => (
                      <div key={idx} className="rounded-2xl bg-white border border-black p-5 md:p-6">
                        <div className="flex flex-col gap-2 mb-4">
                          <h4 className="text-xl md:text-2xl font-bold text-black">{type.name}</h4>
                          <p className="text-xs md:text-sm uppercase tracking-widest text-black">{type.role}</p>
                        </div>
                        <p className="text-sm md:text-base text-black leading-relaxed mb-4 break-words">{type.sample}</p>
                        <p className="text-sm md:text-base text-black leading-relaxed">{type.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[2rem] bg-white border border-black p-6 md:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-black mb-3">{project.branding2.logo.title}</p>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                      <div><p className="text-base md:text-lg text-black leading-relaxed">{project.branding2.logo.description}</p></div>
                      <div className="flex justify-center md:justify-end">
                        <div className="rounded-2xl bg-white p-6">
                          <img src={project.branding2.logo.image} alt="Films Foundation Logo" className={mediaImg} loading="lazy" decoding="async" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.designSystem && (
            <div className="flex flex-col gap-16">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-black mb-3">Design System</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">Built with {project.designSystem.method}</h2>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.designSystem.description}</p>
              </div>
              {project.designSystem?.tokens && (
                <div className="rounded-2xl overflow-hidden bg-white">
                  <img src={project.designSystem.tokens.atomsImage} alt="Atoms" className="block w-full h-auto" loading="lazy" decoding="async" />
                </div>
              )}
            </div>
          )}

          {project.keyFunctions && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                <div className="flex flex-col gap-6 text-left">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">Key Functions</h3>
                  <p className="text-base md:text-lg text-black leading-relaxed">{project.keyFunctions.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {project.keyFunctions.functions.map((func: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="group flex flex-col gap-6">
                    <div className={`w-full aspect-[2/3] rounded-2xl overflow-hidden flex items-center justify-center bg-white ${func.visual === 'chip' ? 'p-6 sm:p-8' : 'p-8'}`}>
                      {func.visual === 'chip' ? <CentralizedChip /> : <img src={func.image} alt={func.title} className={project.id === 'soc' ? 'block w-full h-full object-cover object-top' : mediaImg} loading="lazy" decoding="async" />}
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <h4 className="text-xl font-bold uppercase tracking-tight text-black">{func.title}</h4>
                      <p className="text-base md:text-lg text-black leading-relaxed">{func.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.cisoInterface && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="lg:col-span-5 rounded-2xl overflow-hidden">
                <img src={project.cisoInterface.image} alt="CISO interface" className="block w-full h-auto max-h-[760px] object-contain mx-auto bg-white" loading="lazy" decoding="async" />
              </motion.div>
              <div className="lg:col-span-7 flex flex-col gap-6">
                <p className="text-sm uppercase tracking-[0.22em] text-black">{project.cisoInterface.label}</p>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black">{project.cisoInterface.title}</h2>
                <p className="text-base md:text-lg text-black leading-relaxed font-medium">{project.cisoInterface.description}</p>
                <ul className="flex flex-col divide-y divide-black border-t border-b border-black">
                  {project.cisoInterface.features.map((f: any, idx: number) => (
                    <li key={idx} className="py-4 flex gap-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                      <p className="text-base md:text-lg text-black leading-relaxed"><span className="font-bold text-black">{f.title}: </span>{f.description}</p>
                    </li>
                  ))}
                </ul>
                {project.cisoInterface.note && <p className="text-sm text-black">{project.cisoInterface.note}</p>}
              </div>
            </div>
          )}

          {project.conversationalAgent && (
            <div className="flex flex-col gap-10">
              <div className="max-w-3xl flex flex-col gap-4">
                <p className="text-sm uppercase tracking-[0.22em] text-black">{project.conversationalAgent.label}</p>
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black">{project.conversationalAgent.title}</h2>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.conversationalAgent.description}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 rounded-2xl bg-white p-4 md:p-6">
                  <img src={project.conversationalAgent.image} alt="Persistent workspace" className="block w-full h-auto" loading="lazy" decoding="async" />
                </div>
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.conversationalAgent.features.map((f: any, idx: number) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="rounded-2xl bg-white border border-black p-6 flex flex-col gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.22em] text-black">0{idx + 1}</span>
                      <h4 className="text-lg font-bold uppercase tracking-tight text-black">{f.title}</h4>
                      <p className="text-sm md:text-base text-black leading-relaxed">{f.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )
    });
  }

  // 7. Prototyping & Testing
  if (project.testing || project.testingObjectives || project.userTesting || project.usabilityResults || project.iterations) {
    sections.push({
      id: "testing",
      title: "Prototyping & Testing",
      desc: "Prototypes, Testing Objectives, Usability Results",
      content: (
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {project.testing && (
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">{project.testing.title}</h3>
              <p className="text-base md:text-lg text-black leading-relaxed max-w-3xl">{project.testing.description}</p>
            </div>
          )}

          {project.testingObjectives && (
            <div>
              <h3 className="mb-12 text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">Testing Objectives</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {project.testingObjectives.map((obj: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-4 p-8 bg-white rounded-2xl border border-black">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">{obj.title}</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">{obj.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.userTesting && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">{project.userTesting.title || "User Testing"}</h3>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.userTesting.description}</p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 gap-8">
                {project.userTesting.images.map((img: string, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="w-full rounded-2xl overflow-hidden bg-white p-2 md:p-3">
                    <img src={img} alt={`User Testing ${idx + 1}`} className={mediaImg} loading="lazy" decoding="async" />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.usabilityResults && (
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-8">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">{project.usabilityResults.title}</h3>
              <p className="text-base md:text-lg text-black leading-relaxed font-medium italic">"{project.usabilityResults.description}"</p>
            </div>
          )}

          {project.iterations && (
            <div className="flex flex-col gap-16 md:gap-20">
              <div className="flex flex-col gap-4 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">{project.iterations.title}</h3>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.iterations.description}</p>
              </div>
              <div className="flex flex-col gap-16 md:gap-32">
                {project.iterations.items.map((item: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className={`flex flex-col gap-4 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-black">{item.title}</h4>
                      <p className="text-base md:text-lg text-black leading-relaxed">{item.description}</p>
                    </div>
                    <div className={`w-full rounded-2xl overflow-hidden p-2 md:p-6 bg-white flex justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <img src={item.image || "/placeholder-image.png"} alt={item.title} className={mediaImg} loading="lazy" decoding="async" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    });
  }

  // 8. Outcomes & Delivery
  if (project.finalPrototype || project.conversionRate || project.niceToHaves || project.responsibilities || project.takeaways) {
    sections.push({
      id: "outcomes",
      title: "Outcomes & Delivery",
      desc: "Final Prototype, Conversion Rate, Nice to Haves, Takeaways",
      content: (
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          {project.conversionRate && (
            <div>
              <div className="flex flex-col gap-4 mb-10 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">{project.conversionRate.title}</h3>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.conversionRate.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.conversionRate.metrics.map((metric: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col justify-center items-center gap-2 p-10 bg-black text-white rounded-[2rem] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] transition-shadow duration-500 hover:shadow-[0_32px_70px_-24px_rgba(0,0,0,0.55)] text-center">
                    <span className="text-5xl font-bold text-white mb-2">{metric.value}</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-white">{metric.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.niceToHaves && (
            <div>
              <div className="flex flex-col gap-4 mb-12 max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">{project.niceToHaves.title}</h3>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.niceToHaves.description}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {project.niceToHaves.items.map((item: any, idx: number) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col gap-3 p-8 bg-white rounded-2xl border border-black">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-black">{item.title}</h4>
                    <p className="text-base md:text-lg text-black leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.responsibilities && (
            <div className="max-w-6xl mx-auto w-full">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-center mb-16 text-black">Key Responsibilities & Focus Areas</h3>
              <div className="flex flex-col gap-24">
                {project.responsibilities.map((item: any, index: number) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.3 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <h4 className="text-xl font-bold uppercase tracking-tight text-black mb-4">{item.title}</h4>
                      <p className="text-base md:text-lg text-black leading-relaxed">{item.desc}</p>
                    </div>
                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="rounded-xl overflow-hidden bg-white p-4">
                        <img src={item.image} alt={item.title} className={mediaImg} loading="lazy" decoding="async" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {project.takeaways && (
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-10">
              <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">Takeaways</h3>
              <p className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line max-w-3xl mx-auto font-medium">{project.takeaways}</p>
            </div>
          )}

          {project.finalPrototype && (
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center bg-white rounded-[2rem] p-6 md:p-10 lg:p-12 border border-black">
              <div className="flex flex-col items-start gap-6">
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black">Final Prototype</h3>
                <a href={project.finalPrototype.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-black text-black uppercase tracking-widest text-sm md:text-base font-bold hover:bg-black hover:text-white transition-all duration-300 rounded-md">View Final Version</a>
              </div>
              {project.bannerImage && (
                <div className="w-full rounded-2xl overflow-hidden bg-white">
                  <img src={project.bannerImage} alt="Final Prototype Showcase" className={mediaImg} loading="lazy" decoding="async" />
                </div>
              )}
            </div>
          )}
        </div>
      )
    });
  }

  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  // The bar belongs to this section only: it hides once the section has scrolled past the viewport bottom
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [barVisible, setBarVisible] = useState(true);
  const barRef = useRef<HTMLDivElement>(null);

  // A string key, so the listener only re-attaches when the section list really changes
  const sectionIdsKey = sections.map(s => s.id).join(",");

  useEffect(() => {
    const ids = sectionIdsKey ? sectionIdsKey.split(",") : [];
    let frame = 0;

    const update = () => {
      frame = 0;
      // The section whose top has crossed the middle of the viewport is the one being read
      const readingLine = window.innerHeight * 0.5;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= readingLine) current = id;
      }
      setActiveSection(current);
      const wrapper = wrapperRef.current;
      if (wrapper) setBarVisible(wrapper.getBoundingClientRect().bottom > window.innerHeight);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sectionIdsKey]);

  if (!sections.length) return null;

  return (
    <div ref={wrapperRef} className="relative w-full bg-white border-t border-black">
      {/* Sticky UI Overlay */}
      <div className={`sticky top-0 h-[100dvh] -mb-[100dvh] w-full pointer-events-none flex flex-col justify-end z-50 transition-opacity duration-200 ${barVisible ? "opacity-100" : "opacity-0"}`}>
        <div ref={barRef} className="w-full bg-white border-t border-black py-8 px-6 pointer-events-auto">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
            {/* Index */}
            <div className="flex flex-col gap-2 w-1/2">
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={activeSection === s.id ? "true" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(s.id);
                    if (!el) return;
                    // Centre the section in the space above the fixed bar
                    const barH = barRef.current?.offsetHeight ?? 0;
                    const sectionMid = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2;
                    window.scrollTo({ top: Math.max(0, sectionMid - (window.innerHeight - barH) / 2), behavior: "smooth" });
                  }}
                  className={`text-[25px] md:text-[40px] leading-none transition-colors duration-200 ease-out ${
                    activeSection === s.id ? "text-black font-semibold" : "text-neutral-600 font-medium hover:text-black"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </div>
            {/* Description */}
            <div className="w-1/2 relative h-[100px] md:h-[120px] flex items-end justify-end">
              {sections.map(s => (
                <div
                  key={s.id}
                  aria-hidden={activeSection !== s.id}
                  className={`absolute bottom-0 right-0 w-full md:w-[400px] text-right transition-all duration-200 ease-out ${
                    activeSection === s.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  <span className="text-[18px] md:text-[25px] lg:text-[30px] leading-tight text-black font-medium block">
                    {s.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white">
        {sections.map(s => (
          <div id={s.id} key={s.id} className={SECTION_Y}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
              <div className="w-full h-px opacity-0" />
              {s.content}
            </div>
          </div>
        ))}
        {/* Clearance so the last section can scroll clear of the fixed bar */}
        <div aria-hidden="true" className="h-[40vh]" />
      </div>
    </div>
  );
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-white border border-black">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col gap-6">
          <h1 className="text-4xl font-bold text-black">Project Not Found</h1>
          <Link to="/" className="text-black hover:underline flex items-center gap-2 text-base md:text-lg">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      <Navbar />

      {/* overflow-x-clip (not overflow-hidden) keeps the sticky index/description bar fixed while scrolling */}
      <main className="w-full overflow-x-clip bg-white">

        {/* ========================================================= */}
        {/* 1. OVERVIEW & CONTEXT */}
        {/* ========================================================= */}
        <section className="w-full bg-white pt-28 md:pt-32 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }}
              className="w-full rounded-2xl overflow-hidden bg-white"
            >
              <img fetchPriority="high" decoding="async" src={project.heroImage} alt={project.title} className="w-full h-auto object-cover max-h-[70vh]" />
            </motion.div>
          </div>
        </section>

        <section className={`${SECTION_Y} w-full bg-white text-black`}>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center text-left">
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-black">Project Scope</h4>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.scope}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-black">My Role</h4>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-bold uppercase tracking-widest text-black">Project Duration</h4>
                <p className="text-base md:text-lg text-black leading-relaxed">{project.timeline}</p>
              </div>
              {project.team && (
                <div className="flex flex-col gap-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-black">Team</h4>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    {project.team.split(', ').map((member: string, index: number, arr: string[]) => (
                      <span key={member}>
                        <span className={member.toLowerCase().includes('lucia') ? 'font-bold text-black' : ''}>
                          {member}
                        </span>
                        {index < arr.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                </div>
              )}
              {project.prototypeLink && (
                <div className="mt-4">
                  <a href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-black text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-fit">
                    View Final Prototype
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight break-words m-0 text-black"
              >
                {project.id === 'soc' ? <HoverTitle text={project.title} /> : project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-black leading-relaxed max-w-3xl font-bold"
              >
                {project.overview}
              </motion.p>
            </div>
          </div>
        </section>

        {(project.video || project.contribution || project.disclosure) && (
          <section className={`${SECTION_Y} w-full bg-white text-black`}>
            <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12">
              {project.video && (/\.gif(\?|$)/i.test(project.video) ? (
                <img src={project.video} alt={`${project.title} walkthrough`} loading="lazy" decoding="async" className="w-full rounded-2xl bg-white object-contain" />
              ) : (
                <video src={project.video} controls playsInline preload="metadata" className="w-full rounded-2xl bg-white" />
              ))}
              {project.contribution && (
                <div className="flex flex-col gap-8">
                  <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black">What I Did</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.contribution.map((item: any, idx: number) => (
                      <div key={idx} className="flex flex-col gap-3 p-8 bg-white rounded-2xl border border-black">
                        <h4 className="text-xl font-bold uppercase tracking-tight text-black">{item.title}</h4>
                        <p className="text-base md:text-lg text-black leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.disclosure && (
                <p className="text-sm md:text-base text-black leading-relaxed border-l-2 border-black pl-4">
                  <span className="font-bold uppercase tracking-widest text-black">Confidentiality. </span>
                  {project.disclosure}
                </p>
              )}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 2. PROCESS MAP */}
        {/* ========================================================= */}
        {project.processMap && (
          <section className={`${SECTION_Y} w-full bg-white`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 md:mb-16 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.22em] text-black mb-3">Process</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">Design Process Map</h2>
                <p className="text-base md:text-lg text-black leading-relaxed">A structured overview of the research, definition, and design phases that shaped the project.</p>
              </div>
              <ProcessCarousel phases={project.processMap} />
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 3. PROBLEM SPACE */}
        {/* ========================================================= */}
        {(project.problem || project.problem2 || project.benchmarking) && (
          <section className={`${SECTION_Y} w-full bg-white`}>
            <div className="max-w-7xl mx-auto px-6">
              {project.problem && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-left text-black mb-6">The Problem</h3>
                    <div className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line">{project.problem}</div>
                  </div>
                  <div className={`lg:col-span-8 flex items-center justify-center w-full ${project.id === 'soc' ? 'overflow-visible pt-32 pb-4' : 'overflow-hidden rounded-2xl'}`}>
                    {project.id === 'soc' ? <ProblemFolder tools={["Endpoint protection", "Threat intelligence feeds", "Security information system", "Ticketing"]} /> : (
                      <img src={project.problemImage || "/placeholder-phone-mockup.png"} alt="The Problem Illustration" className={`${mediaImg} rounded-2xl`} loading="lazy" decoding="async" />
                    )}
                  </div>
                </div>
              )}
              {project.problem2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-16 md:mt-24">
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-black mb-4">One Stakeholder, Not Enough</h4>
                    <div className="text-base md:text-lg text-black leading-relaxed whitespace-pre-line">{project.problem2}</div>
                  </div>
                  <div className="lg:col-span-8 flex items-center justify-center w-full">
                    <StakeholderTerminal />
                  </div>
                </div>
              )}
              {project.benchmarking && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-16 md:mt-24 border-t border-black pt-16">
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <h4 className="text-2xl font-bold uppercase text-black">{project.benchmarking.title}</h4>
                    <p className="text-black leading-relaxed">{project.benchmarking.description}</p>
                  </div>
                  <div className="lg:col-span-8 flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {project.benchmarking.competitors.map((c: any, idx: number) => (
                        <div key={idx} className="border border-black rounded-2xl p-6 bg-white">
                          <h5 className="font-bold text-lg uppercase text-black mb-4">{c.name}</h5>
                          <div className="mb-4">
                            <span className="font-bold text-xs uppercase text-black mb-1 block">Strengths</span>
                            <ul className="list-disc pl-4 text-sm text-black space-y-1">
                              {c.strengths.map((s: string, i: number) => <li key={i}>{s}</li>)}
                            </ul>
                          </div>
                          <div>
                            <span className="font-bold text-xs uppercase text-black mb-1 block">Weaknesses</span>
                            <ul className="list-disc pl-4 text-sm text-black space-y-1">
                              {c.weaknesses.map((w: string, i: number) => <li key={i}>{w}</li>)}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    {project.benchmarking.findings && (
                      <div className="border border-black rounded-2xl p-6 bg-white">
                        <span className="font-bold text-xs uppercase text-black mb-3 block">Findings</span>
                        <ul className="list-disc pl-4 text-base text-black space-y-2">
                          {project.benchmarking.findings.map((f: string, i: number) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* SCROLLY TELLING WRAPPER FOR SECTIONS 4-8 */}
        {/* ========================================================= */}
        <ScrollyTelling project={project} />

        {/* Next Project Footer */}
        {project.nextProject && (
          <section className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden group bg-white border-t border-black">
            {project.nextProject.image && (
              <img src={project.nextProject.image} alt="Next Project" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
            )}
            <div className="absolute inset-0 bg-white/90 transition-colors duration-500 group-hover:bg-white/70" />
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-black mb-4 block">Next Project</span>
              <Link to={project.nextProject.link} className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-black hover:text-gray-600 transition-colors inline-block">
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
