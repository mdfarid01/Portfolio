import { ProjectCardProps } from "@/components/sections/Projects/ProjectCard";

export const projectsData: ProjectCardProps[] = [
  {
    title: "Offline UPI",
    href: "https://upi-offline-mesh-fb0a.onrender.com",
    github: "https://github.com/mdfarid01/UPI-OFFLINE",
    description:
      "An interactive Spring Boot demo that shows how a UPI-style payment could be created offline, carried through nearby phones, and settled later when a bridge node comes online.",
    status: "running",
    image: "/Projects/upi-offline.png",
    technologies: ["Java", "HTML", "Docker"],
    type: "Others",
  },
  {
    title: "AI SITE BUILDER",
    href: "https://sitebuilder.thefarid.xyz/",
    github: "https://github.com/mdfarid01/Site-Builder",
    description:
      "Site-Builder is an AI-powered website builder that lets users generate complete websites using artificial intelligence with a credit-based usage system.",
    status: "running",
  image: "/Projects/sitebuilder.png",
    technologies: ["React", "Node.js", "Solidity", "Ethereum"],
    type: "AI",
  },
  {
    title: "AI-WALLET-ASSISTANT",
    href: "https://ai-wallet-assistant.thefarid.xyz",
    github: "https://github.com/mdfarid01/AI-WALLET-ASSISTANT",
    description:
      "AI Wallet Assistant is a smart Web3-powered financial companion that helps users manage crypto wallets, track balances, monitor transactions, and get AI-driven insights for better digital asset management.",
    status: "running",
    image: "/Projects/ai-wallet-assistant.png",
    technologies: ["TypeScript", "JavaScript", "CSS", "Ethers.js", "Web3.js"],
    type: "Web3",
  },
  {
    title: "Web3 Coffee Shop",
    href: "#",
    github: "#",
    description:
      "A modern coffee shop website integrated with a Web3 wallet for crypto payments. Users can connect wallets, pay in ETH, and view transaction history.",
    status: "running",
  image: "/Projects/coffee-web3.svg",
    technologies: ["Next.js", "Solidity", "MetaMask"],
    type: "Web3",
  },
  {
    title: "FasalMittar",
    href: "#",
    github: "#",
    description:
      "An AI-based farming assistant that provides crop recommendations based on soil and weather data, predicts crop prices using dummy ML data, integrates OpenWeather API, supports soil PDF uploads, and features an AI chatbot in Hinglish.",
    status: "running",
  image: "/Projects/fasalmittar.svg",
    technologies: ["React", "Node.js", "OpenWeather API", "AI"],
    type: "AI / AgriTech",
  },
  {
    title: "Voice-to-Legal App (Bhasini Project)",
    href: "#",
    github: "#",
    description:
      "A platform that helps citizens in India file legal applications without a lawyer using the Bhasini API to convert voice input to text in multiple Indian languages.",
    status: "running",
  image: "/Projects/bhasini.svg",
    technologies: ["React", "Node.js", "Bhasini API"],
    type: "GovTech",
  },
  {
    title: "GreenRoute",
    href: "#",
    github: "#",
    description:
      "An upcoming EV charging spot finder app built with FlutterFlow, integrating route optimization and Web3 wallet support for payments.",
    status: "building",
  image: "/Projects/greenroute.svg",
    technologies: ["FlutterFlow", "Web3", "Maps API"],
    type: "Sustainability",
  },
  {
    title: "FinTech App (FlutterFlow)",
    href: "#",
    github: "#",
    description:
      "A concept-based FinTech platform prototype built with FlutterFlow, focusing on modern UI and financial management flows.",
    status: "running",
  image: "/Projects/fintech.svg",
    technologies: ["FlutterFlow", "Firebase"],
    type: "FinTech",
  },
];

// -----old card data

// export const projectsData = [
//   {
//     title: "SmartEssay",
//     icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//     href: "https://smartessay.mdfarid.dev/",
//     progress: "Ongoing",
//     description:
//       "A minimalist Essay Practice App built for placement initiative. Real-time tracking, smart feedback, and gamified challenges to enhance logic, structure, and vocabulary while tracking progress.",
//     technologies: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
//     links: [
//       {
//         type: "Source",
//         href: "https://github.com/mdfarid01/smartessay",
//         icon: <Icons.github className="size-3" />,
//       },
//     ],
//     image: "/anime.jpeg",
//     viewDetails: {
//       type: "Details",
//       href: "/smartessay",
//       icon: <Icons.squareArrowOutUpRight className="size-3" />,
//     },
//   },
// ];

// {
//   title: "DropitHere",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://dropithere.mdfarid.dev/",
//   progress: "Completed",
//   description:
//     "Created a platform to organize content like Twitter threads and YouTube videos into custom playlists, with shareable links for easy and structured dashboard sharing.",
//   technologies: ["React", "Express.js", "MongoDB", "TailwindCSS", "REST API"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/DropitHere",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/dropithereImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/dropithere",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Todo App",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://todo.mdfarid.dev/",
//   progress: "Completed",
//   description:
//     "A full-stack Todo app for managing your daily tasks efficiently.",
//   technologies: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/todo",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/todoImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/todo",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Course selling",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://github.com/mdfarid01/Course-selling-backend",
//   progress: "Completed",
//   description:
//     "Backend for a course selling platform with admin and user roles.",
//   technologies: ["React", "TailwindCSS", "TypeScript"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/Course-selling-backend",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/typingImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/typing",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "QR Generator",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://qrgenerator.mdfarid.dev/",
//   progress: "Completed",
//   description:
//     "Instantly generate QR codes for any link or text input.",
//   technologies: ["HTML", "CSS", "JavaScript"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/qrgenerator",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/qrgeneratorImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/qrgenerator",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Restaurant Website",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://restaurant.mdfarid.dev/",
//   progress: "Completed",
//   description:
//     "A modern responsive restaurant website landing page.",
//   technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/restaurant",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/restaurantImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/restaurant",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "DrumKit",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://drumkit.mdfarid.dev/",
//   progress: "Completed",
//   description:
//     "Fun browser drum kit with keyboard sound interaction.",
//   technologies: ["HTML", "CSS", "JavaScript"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/drumkit",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/drumkitImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/drumkit",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },

// {
//   title: "Tindog",
//   icon: <Icons.squareArrowOutUpRight className="size-4 gap-2" />,
//   href: "https://tindog-six-ashy.vercel.app/",
//   progress: "Completed",
//   description:
//     "A beautiful frontend landing page for a fictional dog dating app.",
//   technologies: ["HTML", "CSS", "Bootstrap"],
//   links: [
//     {
//       type: "Source",
//       href: "https://github.com/mdfarid01/tindog",
//       icon: <Icons.github className="size-3" />,
//     },
//   ],
//   image: "/tindogImg.png",
//   viewDetails: {
//     type: "Details",
//     href: "/tindog",
//     icon: <Icons.squareArrowOutUpRight className="size-3" />,
//   },
// },
// ];
