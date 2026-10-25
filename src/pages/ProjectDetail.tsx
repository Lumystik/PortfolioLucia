import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

// Shared image style: every content image fits its frame and is centred the same way.
const mediaImg = "block w-full h-auto min-h-[120px] max-h-[480px] object-contain mx-auto bg-white";

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
  {
    phase: "Research",
    steps: [
      "Desk research",
      "On-site research",
      "Ecosystem map",
      "Research key findings"
    ]
  },
  {
    phase: "Define",
    steps: [
      "Design brief",
      "Personas & scenarios",
      "Hero flow & wireflow",
      "User test results"
    ]
  },
  {
    phase: "Develop",
    steps: [
      "Design system",
      "Prototype"
    ]
  }
],
    howMightWe: [ "solve the complexity of creating a smooth experience for small museum staff?", "streamline the workflow and improve the management of different areas of the institution?", "optimize the current museum resources to help staff develop a better experience for visitors?" ],
    ideation: {
      question: "How can we build a seamless workflow that maximizes museum staff efficiency? How can the platform adapt to different roles while maintaining a unified database?",
      heroFlow: "https://github.com/Lumystik/PortfolioLucia/blob/f8b832c9f326ed2f6d2fd32515316ec56fb143fa/images/workflow_museon.png?raw=true",
      heroFlowCaption: "Heroflow: Organizing a new temporary exhibition.",
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
          description: "ROLE: Curator, Education, Office of the President, Guide, Ticket and Relations.\nDRIVERS: Contributing to cultural education, personal interest in the subject matter.\nENVIRONMENT: Museum office.\nNEEDS: Planning, team collaboration, task management.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/ef20cf53e7c6dffb9f6b8a4408721a8fd6cb4d60/images/curator.png?raw=true"
        },
        {
          title: "MARK: THE INTERN",
          description: "ROLE: Intern.\nDRIVERS: Learning and gaining experience in museum operations, impressing supervisors, contributing effectively during the visit.\nENVIRONMENT: Home/On-site.\nNEEDS: Clear task assignment, accessibility, collection lists.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/ef20cf53e7c6dffb9f6b8a4408721a8fd6cb4d60/images/intern.png?raw=true"
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
    { color: "#000000", size: 100, x: "50%", y: "10%"},
    { color: "#000000", size: 90, x: "75%", y: "10%" },
    { color: "#000000", size: 110, x: "35%", y: "10%"},
    { color: "#000000", size: 110, x: "0%", y: "10%"}
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
      description: "Testing focused on clarity, voice guidance, and
