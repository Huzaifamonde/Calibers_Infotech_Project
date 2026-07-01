export const portfolioData = [
  {
    id: 'wings-of-fire-exam',
    title: 'Wings of Fire Olympiad Platform',
    client: 'Wings of Fire Foundation',
    category: 'web', // categories: 'web', 'mobile', 'erp', 'ecommerce', 'uiux'
    industry: 'Ed-Tech',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'PWA'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    description: 'A resilient online exam portal built to host multilingual talent assessments for thousands of rural and urban school students concurrently.',
    challenge: 'The platform had to support heavy student traffic spikes (20k+ concurrent users) and continue running smoothly even when mobile network signals fluctuated in rural Maharashtra regions.',
    solution: 'We engineered a Progressive Web App (PWA) with client-side test caching. If the connection drops during an exam, the student can continue answering, and answers automatically sync to the server the moment connection returns.',
    result: 'Successfully examined 45,000+ students in the latest talent search cycles with a 99.9% exam completion rate and zero server outages.'
  },
  {
    id: 'maratha-industrial-directory',
    title: 'B2B Manufacturers Directory',
    client: 'Maratha Industrial Organisation',
    category: 'erp',
    industry: 'Industrial Association',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    description: 'An interactive member search directory and subscription portal connecting small and medium industrial factories across Maharashtra.',
    challenge: 'The organization used manual sheets and checks to collect annual membership dues, leading to delayed listings and hard-to-track member information.',
    solution: 'We engineered a web portal featuring profile management, custom search filters for buyer inquiries, and automated invoice reminders with direct UPI payment gate integrations.',
    result: 'Digitized over 650 industrial businesses, boosting member engagement and cutting billing administration overhead by 90%.'
  },
  {
    id: 'disha-learning-system',
    title: 'Student Training & Course Storefront',
    client: 'Disha Computer Institute',
    category: 'ecommerce',
    industry: 'Professional Education',
    technologies: ['React.js', 'Node.js', 'Express', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    description: 'A dynamic e-commerce education marketplace allowing students to browse, buy, and study computer certification courses.',
    challenge: 'Migrating physical computer course enrollments to a clean digital pipeline that supports automated exam results and instant PDF certificate verification.',
    solution: 'Created an online store with course preview libraries, integrated merchant API, custom video players with progress tracking, and secure certificate generation with QR code validation.',
    result: 'Processed 12,000+ course purchases with zero payment faults and automated certification processing for student branches.'
  },
  {
    id: 'sahyadri-agri-trade',
    title: 'Farmer-to-Merchant Wholesale App',
    client: 'Sahyadri Agro Wholesalers',
    category: 'mobile',
    industry: 'Agriculture Logistics',
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80',
    description: 'A localized Android app enabling regional farmers to photograph crop harvests and receive direct wholesale price bids.',
    challenge: 'Providing a visual, easy-to-use app interface in Marathi for farmers who possess varying levels of digital literacy and operate on older Android versions.',
    solution: 'Designed an ultra-simplified visual UI emphasizing icons, native Marathi speech cues, and one-tap camera crop listings that queue offline when internet isn\'t present.',
    result: 'Over 2,200 farmers registered in Nashik district, reducing middleman margins and securing fairer produce deals.'
  },
  {
    id: 'wings-olympiad-redesign',
    title: 'Wings of Fire Branding & UI/UX Audit',
    client: 'Wings of Fire Olympiad',
    category: 'uiux',
    industry: 'Ed-Tech',
    technologies: ['Figma', 'UI Research', 'Design System'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    description: 'A complete user journey mapping, design system creation, and visual brand identity overhaul for the student talent search initiative.',
    challenge: 'The old registration process was long and confusing, resulting in a 40% user drop-off rate during signup pages.',
    solution: 'We restructured the onboarding flow into simple progressive stages, cleaned up layout contrasts, and compiled a comprehensive Sora-based design system containing color assets and layouts.',
    result: 'Cut signup completion time by 55%, lifting verified candidate registrations by 32% year-over-year.'
  }
];
