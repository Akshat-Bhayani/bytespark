import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'react-18-features',
    title: "Getting Started with React 18",
    description: "Learn about the latest features in React 18 and how to implement them.",
    content: `React 18 brings exciting new features that improve performance and user experience. 
    In this article, we'll explore Concurrent Rendering, Automatic Batching, and new Hooks...`,
    image: "/blog/react.jpg",
    tags: ["React", "JavaScript"],
    date: "May 15, 2024",
    author: "John Doe"
  },
  {
    id: 'cloud-computing-2024',
    title: "Cloud Computing Trends 2024",
    description: "Explore the latest trends in cloud computing and their impact on businesses.",
    content: `The cloud computing landscape is evolving rapidly. Let's dive into the key trends 
    shaping the industry in 2024, including multi-cloud strategies, serverless computing...`,
    image: "/blog/cloud.jpg",
    tags: ["Cloud", "AWS"],
    date: "May 12, 2024",
    author: "Jane Smith"
  },
  {
    id: 'uiux-design-principles',
    title: "UI/UX Design Principles",
    description: "Essential principles for creating user-friendly interfaces.",
    content: `Good design is crucial for user engagement. In this comprehensive guide, 
    we'll cover the fundamental principles of UI/UX design that every designer should know...`,
    image: "/blog/uiux.jpg",
    tags: ["UI/UX", "Design"],
    date: "May 10, 2024",
    author: "Mike Johnson"
  },
  {
    id: 'typescript-best-practices',
    title: "TypeScript Best Practices",
    description: "Learn how to write better TypeScript code with these best practices.",
    content: `TypeScript has become the standard for large-scale JavaScript applications. 
    Here are the best practices that will help you write more maintainable TypeScript code...`,
    image: "/blog/typescript.jpg",
    tags: ["TypeScript", "JavaScript"],
    date: "May 8, 2024",
    author: "Sarah Williams"
  }
]; 