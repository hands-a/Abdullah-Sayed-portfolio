// ─── PROJECTS — CV SOURCE OF TRUTH ──────────────────────────────────────────
// All 5 projects documented in Abdullah Sayed's CV.
// Do NOT add fake metrics, fake clients, or unverified technologies.

export const projects = [
  {
    id: 1,
    num: '01',
    name: 'E-Learning Platform',
    tagline: 'Full-stack educational platform with role-based access control.',
    description:
      'A full-stack educational platform built with React and Strapi CMS. Features role-based access control (RBAC) allowing different permissions for admins, instructors, and students, alongside a full content management backend.',
    challenge:
      'Architecting a multi-role access system that cleanly separates what each user type can view and manage, while keeping the frontend component tree maintainable and the API integration efficient.',
    solution:
      'Used Strapi as a headless CMS providing RESTful endpoints, managed application state with Context API, and built a permission-aware component layer that conditionally renders UI based on the authenticated user role.',
    technologies: ['React.js', 'Tailwind CSS', 'Strapi CMS', 'Context API', 'RBAC', 'REST API'],
    image: '/images/elearning.png',
    url: 'https://final-project-azure-three.vercel.app/',
    github: null,
    featured: true,
  },
  {
    id: 2,
    num: '02',
    name: '3D Car Showcase',
    tagline: 'Interactive 3D automotive showroom powered by React Three Fiber.',
    description:
      'An in-browser 3D automotive showroom that lets users explore a car model with real-time lighting, orbital camera controls, and animated transitions — achieving smooth performance at 60fps.',
    challenge:
      'Delivering high-fidelity 3D rendering inside a React app without sacrificing load time or frame rate, while keeping the scene management declarative and maintainable.',
    solution:
      'Built the scene declaratively with React Three Fiber, applied GLTF/Draco compressed models for fast loading, and layered Framer Motion for UI transitions alongside Three.js lighting for a cinematic feel.',
    technologies: ['React.js', 'React Three Fiber', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'GLTF'],
    image: '/images/jeep-showroom.png',
    url: 'https://cars-project-g54d.vercel.app/',
    github: null,
    featured: true,
  },
  {
    id: 3,
    num: '03',
    name: 'Modern E-Commerce SPA',
    tagline: 'Full-featured e-commerce single-page application with cart and checkout.',
    description:
      'A furniture e-commerce SPA with product browsing, advanced filtering, cart state management, and a full checkout flow built with Formik for form validation.',
    challenge:
      'Managing complex cart state with immutable update patterns, implementing performant product filtering across multiple dimensions, and handling form validation cleanly.',
    solution:
      'Architected state with Context API using reducer patterns for cart operations, used Formik for checkout form management, and implemented memoized filter logic to keep UI responsive on large product sets.',
    technologies: ['React.js', 'Tailwind CSS', 'Context API', 'Formik', 'JavaScript ES6+'],
    image: '/images/vineta.png',
    url: 'https://vanita.vercel.app/',
    github: null,
    featured: false,
  },
  {
    id: 4,
    num: '04',
    name: 'Restaurantly',
    tagline: 'Restaurant web application with Vite, Tailwind, and Context API.',
    description:
      'A restaurant web application featuring a dynamic menu, reservation flow, and smooth page transitions. Built with Vite for fast development and optimized production builds.',
    challenge:
      'Creating an engaging restaurant experience with smooth transitions and a clear content hierarchy while keeping the build optimized and the codebase organized.',
    solution:
      'Scaffolded with Vite for instant HMR, organized state with Context API for reservation and menu data, and used Tailwind CSS utility classes throughout for consistent, maintainable styling.',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Context API', 'JavaScript ES6+'],
    image: '/images/image.png',
    url: '#',
    github: null,
    featured: false,
  },
  {
    id: 5,
    num: '05',
    name: 'Event Linker',
    tagline: 'Event discovery and management platform with live REST API integration.',
    description:
      'An event management platform for discovering, filtering, and managing events. Connects to a live REST API for real-time event data, with advanced search and filter capabilities.',
    challenge:
      'Synchronizing complex filter state with live API requests without excessive re-fetching, while keeping the UI snappy and the component tree clean.',
    solution:
      'Designed a debounced filter-to-API pipeline, lifted filter state to a shared context, and built a component architecture that separates data fetching from display concerns.',
    technologies: ['React.js', 'Tailwind CSS', 'REST APIs', 'JavaScript ES6+'],
    image: '/images/event-linker.png',
    url: 'https://event-linker-r-s2l3.vercel.app/',
    github: null,
    featured: false,
  },
];
