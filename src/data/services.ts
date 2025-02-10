import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Custom Website Development',
    description: 'Tailored web solutions that drive growth and engagement',
    price: {
      start: 2999,
      end: 9999
    },
    features: [
      'Responsive Design',
      'CMS Integration',
      'SEO Optimization',
      '3 Months Support',
      'Performance Optimization',
      'Security Implementation'
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
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services',
    price: {
      start: 1999,
      end: 7999
    },
    features: [
      'Cloud Migration',
      '24/7 Monitoring',
      'Auto-scaling Setup',
      'Backup & Recovery',
      'Security Configuration',
      'Cost Optimization'
    ],
    reviews: [
      {
        id: '2',
        author: 'Sarah Johnson',
        rating: 5,
        comment: 'Their cloud migration service was seamless and professional.',
        date: '2024-02-10'
      }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Creative design solutions for your brand identity',
    price: {
      start: 999,
      end: 4999
    },
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Marketing Materials',
      'Social Media Graphics',
      'Print Design',
      'Packaging Design'
    ],
    reviews: [
      {
        id: '3',
        author: 'Mike Wilson',
        rating: 5,
        comment: 'Outstanding creativity and attention to detail in their design work.',
        date: '2024-02-08'
      }
    ]
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions for digital products',
    price: {
      start: 1499,
      end: 5999
    },
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'User Testing',
      'Interface Design',
      'Design Systems'
    ],
    reviews: [
      {
        id: '4',
        author: 'Emily Chen',
        rating: 5,
        comment: 'They transformed our app with an intuitive and beautiful design.',
        date: '2024-02-05'
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights',
    price: {
      start: 2499,
      end: 8999
    },
    features: [
      'Data Visualization',
      'Predictive Analytics',
      'Business Intelligence',
      'Custom Dashboards',
      'Real-time Analytics',
      'Performance Metrics'
    ],
    reviews: [
      {
        id: '5',
        author: 'David Brown',
        rating: 5,
        comment: 'Their analytics solutions helped us make data-driven decisions effectively.',
        date: '2024-02-01'
      }
    ]
  }
]; 