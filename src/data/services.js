import { Laptop, Phone, Shield, Palette, Cloud, Target } from 'lucide-react';

export const servicesData = [
  {
    id: 'web-development',
    icon: Laptop,
    title: 'Web Development',
    description: 'Fast, responsive, custom websites and web applications designed to showcase your business and convert visitors into clients.',
    tags: ['React', 'Node.js', 'Custom CMS', 'E-Commerce'],
    details: {
      overview: 'We build websites that are fast, accessible, and designed for real-world growth. From simple landing pages to complex e-commerce portals, we focus on responsive UI and high performance.',
      features: [
        'Custom Static & Dynamic Websites',
        'Headless & Traditional CMS (WordPress, Custom builders)',
        'Comprehensive E-commerce platforms with payment integrations',
        'Secure admin portals and business application frontends'
      ],
      technologies: ['React.js', 'Vite', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB', 'PostgreSQL']
    }
  },
  {
    id: 'mobile-app-development',
    icon: Phone,
    title: 'Mobile App Development',
    description: 'High-quality, native and cross-platform mobile apps for Android and iOS that deliver a premium, seamless user experience.',
    tags: ['Android', 'iOS', 'Flutter', 'React Native'],
    details: {
      overview: 'Deliver your business straight to your customer\'s pockets. We design, develop, and publish mobile solutions built on optimized hybrid and native frameworks.',
      features: [
        'Native Android & iOS Application Development',
        'Cross-platform Flutter & React Native applications',
        'Offline-first app architectures with local database caching',
        'Play Store and App Store submission & optimization'
      ],
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite']
    }
  },
  {
    id: 'software-development',
    icon: Shield,
    title: 'Software Development',
    description: 'Custom ERP, CRM, and POS software solutions tailored to automate your workflows and improve organizational efficiency.',
    tags: ['ERP', 'CRM', 'HRMS', 'POS & Billing'],
    details: {
      overview: 'Streamline your enterprise operations with software shaped specifically around your team\'s workflow, not generic off-the-shelf templates.',
      features: [
        'School and Corporate ERP systems',
        'Customer Relationship Management (CRM) tools',
        'POS (Point of Sale) & Inventory Billing software',
        'HRMS and payroll automation frameworks'
      ],
      technologies: ['Electron', 'React', 'Node.js', 'PostgreSQL', 'SQLite', 'REST APIs']
    }
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User research, wireframing, and interactive prototypes centered on usability, aesthetic appeal, and brand alignment.',
    tags: ['Research', 'Wireframes', 'Prototypes', 'Figma'],
    details: {
      overview: 'We translate complex features into straightforward, intuitive user interfaces. Our designs focus on readability, structural hierarchy, and modern aesthetics.',
      features: [
        'In-depth User Research & User Persona mapping',
        'High-fidelity Wireframes and clickable interactive prototypes',
        'Comprehensive style guides and brand design systems',
        'A/B testing, usability audits, and layout optimization'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'CSS Grid', 'Tailwind CSS']
    }
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Cloud hosting, architecture design, server deployment, and database migrations to guarantee uptime, scalability, and security.',
    tags: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
    details: {
      overview: 'Deploy your applications on scalable, secure, and modern cloud infrastructure that minimizes downtime and handles user traffic bursts smoothly.',
      features: [
        'Cloud infrastructure setup (AWS, Google Cloud, Azure)',
        'Secure Database migrations & configurations',
        'CI/CD pipeline implementation and automated backups',
        'Performance optimization and cloud cost management'
      ],
      technologies: ['Amazon Web Services', 'Google Cloud Platform', 'Microsoft Azure', 'Docker', 'GitHub Actions']
    }
  },
  {
    id: 'digital-marketing',
    icon: Target,
    title: 'Digital Marketing',
    description: 'SEO strategy, pay-per-click management, content marketing, and brand identity strategies to expand your online reach.',
    tags: ['SEO', 'PPC', 'Social Media', 'Branding'],
    details: {
      overview: 'Get discovered by your ideal audience. We construct marketing strategies focused on search visibility, lead acquisition, and consistent brand messaging.',
      features: [
        'On-page and Off-page Search Engine Optimization (SEO)',
        'Targeted Google Search & Social Media PPC campaigns',
        'Consistent social media calendar management and branding',
        'Google Analytics setup and marketing ROI audit reports'
      ],
      technologies: ['Google Analytics', 'Google Ads', 'SEMrush', 'Meta Ads Manager', 'Mailchimp']
    }
  }
];
