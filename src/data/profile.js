// Central place for content that isn't code — edit these values directly.
import profilePhoto from '../assets/profile.webp'

export const profile = {
  name: 'Chanyanud',
  fullName: 'Chanyanud Sriyota',
  initials: 'CS',
  title: 'UX Researcher & Designer',
  tagline: {
    before: 'Understanding ',
    highlight1: 'people',
    middle: ' before designing ',
    highlight2: 'products',
    after: '.',
  },
  annotation: 'This is how I Think!',
  bio: [
    "I'm a UX Researcher who loves turning user insights into meaningful digital experiences.",
    'Currently exploring Digital Banking, Accessibility and Human-Centered Design.',
  ],
  openToOpportunities: true,

  photo: profilePhoto,

  // TODO: put your resume PDF in /public (e.g. public/resume.pdf) and update this path
  resumeUrl: '/resume.pdf',

  // TODO: replace with your real profile URLs
  links: {
    linkedin: 'https://linkedin.com/in/TODO',
    github: 'https://github.com/TODO',
    email: 'mailto:TODO@example.com',
  },

  // Variant controls color: "purple" | "green" | "white"
  heroTags: [
    { label: 'UX Research', variant: 'purple', position: 'top-left' },
    { label: 'Human-Centered Design', variant: 'white', position: 'top-right' },
    { label: 'Usability Testing', variant: 'white', position: 'mid-left' },
    { label: 'Digital Product', variant: 'purple', position: 'mid-right' },
    { label: 'Insight Synthesis', variant: 'green', position: 'bottom-left' },
  ],

  about: {
    // TODO: replace with your own bio copy
    paragraphs: [
      'Computer Engineering graduate with a passion for understanding people and solving real problems.',
      'I enjoy turning complex user needs into simple, meaningful solutions through research, design and technology.',
    ],
    // TODO: update location / graduation date
    facts: [
      { icon: 'pin', label: 'Bangkok, Thailand' },
      { icon: 'cap', label: 'Graduated May 2026' },
    ],
  },

  interests: [
    {
      title: 'Research Interests',
      items: ['Digital Product', 'Human-Centered Design', 'Accessibility'],
    },
    {
      title: 'Working Style',
      items: ['Research-driven', 'Collaborative', 'Evidence-based'],
    },
    {
      title: 'Tools & Methods',
      items: ['Figma', 'FigJam', 'Quantitative & Qualitative Research'],
    },
  ],
}

export const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]
