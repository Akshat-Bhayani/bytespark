import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    price: {
      start: 2999
    },
    features: [
      'Responsive Design',
      'Modern Frameworks (React, Next.js)',
      'CMS Integration',
      'SEO Optimization',
      'Performance Optimization',
      '3 Months Support'
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'Tailwind CSS',
      'Styled Components',
      'GraphQL',
      'REST APIs'
    ],
    reviews: [
      {
        id: '1',
        author: 'John Smith',
        rating: 5,
        comment: 'Excellent service and professional team! They delivered our website ahead of schedule.',
        date: '2024-02-15'
      }
    ]
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    price: {
      start: 4999
    },
    features: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'App Store Deployment',
      'Push Notifications',
      'Offline Functionality',
      '6 Months Support'
    ],
    technologies: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Dart',
      'Firebase',
      'Redux',
      'SQLite',
      'Push Notifications',
      'App Store Connect'
    ],
    reviews: [
      {
        id: '2',
        author: 'Sarah Johnson',
        rating: 5,
        comment: 'They created an amazing mobile app that exceeded our expectations.',
        date: '2024-02-12'
      }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and deployment solutions',
    price: {
      start: 3999
    },
    features: [
      'Cloud Migration',
      'AWS/Azure/GCP Setup',
      '24/7 Monitoring',
      'Auto-scaling Configuration',
      'Backup & Recovery',
      'Security Implementation'
    ],
    technologies: [
      'AWS',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'CloudWatch',
      'CloudFormation',
      'Nginx'
    ],
    reviews: [
      {
        id: '3',
        author: 'Mike Wilson',
        rating: 5,
        comment: 'Their cloud migration service was seamless and cost-effective.',
        date: '2024-02-10'
      }
    ]
  },
  {
    id: 'ai-ml-services',
    title: 'AI/ML Services',
    description: 'Artificial Intelligence and Machine Learning solutions for business automation',
    price: {
      start: 5999
    },
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Integration',
      'Custom AI Solutions'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenAI GPT',
      'Hugging Face',
      'OpenCV',
      'Pandas',
      'NumPy',
      'Jupyter'
    ],
    reviews: [
      {
        id: '4',
        author: 'Emily Chen',
        rating: 5,
        comment: 'Their AI solutions automated our processes and improved efficiency significantly.',
        date: '2024-02-08'
      }
    ]
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions for exceptional digital experiences',
    price: {
      start: 1999
    },
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Interface Design',
      'User Testing',
      'Design Systems',
      'Responsive Design'
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'Adobe Creative Suite',
      'Framer',
      'InVision',
      'Principle',
      'Zeplin',
      'Miro',
      'Hotjar'
    ],
    reviews: [
      {
        id: '5',
        author: 'David Brown',
        rating: 5,
        comment: 'They transformed our app with an intuitive and beautiful design.',
        date: '2024-02-05'
      }
    ]
  },
  {
    id: 'seo-optimisation',
    title: 'SEO Optimisation',
    description: 'Search Engine Optimization to improve visibility and rankings',
    price: {
      start: 1299
    },
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO',
      'Link Building',
      'Local SEO',
      'Performance Tracking'
    ],
    technologies: [
      'Google Analytics',
      'Google Search Console',
      'SEMrush',
      'Ahrefs',
      'Moz',
      'Screaming Frog',
      'Google Tag Manager',
      'Yoast SEO',
      'Schema.org',
      'Google PageSpeed'
    ],
    reviews: [
      {
        id: '6',
        author: 'Lisa Anderson',
        rating: 5,
        comment: 'Their SEO strategies significantly improved our search rankings and organic traffic.',
        date: '2024-02-03'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence',
    price: {
      start: 1799
    },
    features: [
      'Social Media Marketing',
      'Content Marketing',
      'PPC Campaigns',
      'Email Marketing',
      'Brand Strategy',
      'Analytics & Reporting'
    ],
    technologies: [
      'Google Ads',
      'Facebook Ads',
      'HubSpot',
      'Mailchimp',
      'Hootsuite',
      'Buffer',
      'Google Analytics',
      'Canva',
      'Adobe Creative Suite',
      'WordPress'
    ],
    reviews: [
      {
        id: '7',
        author: 'Robert Taylor',
        rating: 5,
        comment: 'Their digital marketing campaigns boosted our brand awareness and lead generation.',
        date: '2024-02-01'
      }
    ]
  }
]; 