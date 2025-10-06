export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }
  
  export const experience: Experience[] = [
    {
      title: "Software Developer Intern",
      company: "Averoft",
      location: "Bhopal, India",
      startDate: "August 2025",
      endDate: "Present",
      description: `Contributing to full-stack development using Next.js, React, Node.js, Express.js, and MongoDB\nWorking on scalable applications in AI, cloud, and digital transformation projects\nTech: Next.js, React, TypeScript, Node.js, Express.js, MongoDB, Tailwind CSS`,
    },
  ];

  export const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      university: "Your University Name",
      specialization: "Computer Science / Information Technology",
      expected_graduation: "Add Year",
      highlights: [
        "Completed Java SE and MERN Stack development training",
        "Currently exploring Blockchain Development and Rust programming",
      ],
    },
  ];

  export const hackathons = [
    {
      event: "SAP Hackfest 2025",
      team: "Tech Heaven",
      description: "Presented an innovative solution at Technocrats Auditorium focusing on practical, impactful tech.",
    },
    {
      event: "HackArenaa 2025",
      description: "Built FasalMittar under Smart Agriculture track.",
    },
    {
      event: "ETHGlobal 2025",
      project: "Rotare Finance",
      team: ["Adwait Keshari", "Swarna Nagrani", "Ishan", "Rhytm Nagrani"],
      description: "Learned blockchain deployment and dApp building hands-on.",
    },
    {
      event: "GirlScript Summer of Code Extended 2024",
      role: "Contributor",
      description: "Worked on open-source projects and collaborated with diverse dev teams.",
    },
    {
      event: "do_action 2024 (WordPress Initiative)",
      role: "Contributor",
      description: "Built community-oriented WordPress solutions for nonprofits.",
    },
    {
      event: "Google DevFest Bhopal 2024",
      role: "Volunteer & Organizer",
      description: "Helped coordinate and manage sessions and participants.",
    },
  ];

  export const community = [
    {
      role: "GDSC Lead Applicant",
      organization: "Google Developer Student Clubs",
      year: 2025,
    },
    {
      role: "GSoC 2025 Contributor Applicant",
      organization: "Unicode Consortium",
      project: "Reading Cross-Platform Locale Settings in Rust (ICU4X)",
    },
    {
      role: "Open Source Contributor",
      organizations: ["GirlScript", "WordPress", "ETHGlobal"],
    },
  ];
  