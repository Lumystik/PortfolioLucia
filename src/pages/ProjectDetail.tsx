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
    
    overview: "MUSE*ON is an all-in-one platform for small museum teams. It centralizes exhibitions, collections, tasks, and events to simplify daily work.",

    scope: "End-to-End App",
    role: "UX Research, Branding, UX/UI Design",
    team: "Martina Braidotti, Lucia Medina, Ilario Pedone, Agnese Rosselli, Mark Waisara",

    prototypeLink: "https://www.figma.com/proto/16viMWZsHOU9SkmpbSpTd5/FINAL-UI-spaced?node-id=2248-9671&starting-point-node-id=703%3A8427&scaling=scale-down&content-scaling=fixed&t=aO2g8BW8sOtXyiVT-1?raw=true",

    problem: "Small museum teams work with limited staff and scattered tools.\n\n4 staff managed 59 events using 6 tools, causing duplication and constant switching.",

    problemImage: "https://github.com/Lumystik/PortfolioLucia/blob/56aed6413b71c2bc18bd6c0dcd8054a3b546474d/images/complicatedworkflow_museon.jpg?raw=true",

    ideation: {
      question: "How can we create a seamless workflow that keeps information centralized and easy to use?",
      heroFlow: "https://github.com/Lumystik/PortfolioLucia/blob/f8b832c9f326ed2f6d2fd32515316ec56fb143fa/images/workflow_museon.png?raw=true",
      heroFlowCaption: "Alex Flow: Planning an exhibition",

      wireframes: [
        {
          image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Dashboard_mobile_wireframe.png?raw=true",
          caption: "Dashboard: Daily overview"
        },
        {
          image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/Calendar_mobile_wireframe%20(1).png?raw=true",
          caption: "Calendar: Team planning"
        },
        {
          image: "https://github.com/Lumystik/PortfolioLucia/blob/78d82c3bb5eae3c9be12ddde7b066b62a51cc24a/images/smart%20notes%20pop%20up%20mobile.png?raw=true",
          caption: "Smart Notes: AI support"
        }
      ]
    },

    userInsightsCards: [
      {
        title: "INTEGRATION",
        description: "One system reduced tool switching."
      },
      {
        title: "SPEED",
        description: "Shortcuts improved efficiency."
      },
      {
        title: "VISIBILITY",
        description: "Shared overview reduced confusion."
      }
    ],

    keyFunctions: {
      description: "One platform to manage tasks, collections, and collaboration.",
      functions: [
        {
          title: "CALENDAR",
          description: "Plan events and track availability.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/be1755ca40682fbb1c571d38f3aa37d18cc7ada8/images/calendar_museo1.png?raw=true"
        },
        {
          title: "COLLECTIONS",
          description: "Manage and organize items.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/465f291d0d01afb736e1502a28db9b14b236e818/images/collection_museon1.png?raw=true"
        },
        {
          title: "AI NOTES",
          description: "Turn conversations into tasks.",
          image: "https://github.com/Lumystik/PortfolioLucia/blob/ccd5a596d938ff18c9cd80558a2f7d7f2df76b5e/images/smartnotes_museon1.png?raw=true"
        }
      ]
    }
  }
};

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <div className="bg-white text-[#131313] min-h-screen">
      <Navbar />

      <main className="w-full">

        {/* HERO */}
        <section className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6">
            <img src={project.heroImage} className="rounded-2xl w-full" />
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl font-medium">{project.overview}</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Problem</h3>
              <p className="text-lg whitespace-pre-line">{project.problem}</p>
            </div>
            <img src={project.problemImage} className="rounded-xl" />
          </div>
        </section>

        {/* IDEATION */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">

            <h3 className="text-3xl font-bold">Ideation</h3>

            {/* HERO FLOW */}
            <img src={project.ideation.heroFlow} className="w-full" />

            {/* WIREFRAMES */}
            <div className="grid md:grid-cols-3 gap-10">
              {project.ideation.wireframes.map((wire: any, idx: number) => (
                <div key={idx} className="flex flex-col gap-4">
                  
                  <div className="w-full aspect-[2/3] bg-white rounded-2xl border">
                    <img src={wire.image} className="w-full h-full object-contain" />
                  </div>

                  <p className="text-sm font-bold">{wire.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FUNCTIONS */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-10">Key Functions</h3>

            <div className="grid md:grid-cols-3 gap-10">
              {project.keyFunctions.functions.map((f: any, idx: number) => (
                <div key={idx} className="flex flex-col gap-4">
                  
                  <div className="aspect-[2/3] bg-[#1a1a1a] rounded-2xl">
                    <img src={f.image} className="w-full h-full object-contain" />
                  </div>

                  <h4 className="font-bold">{f.title}</h4>
                  <p className="text-gray-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
