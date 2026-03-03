/**
 * PROJECT DATA CONFIGURATION
 * 
 * This file contains all your project information.
 * Simply edit the projects array below to add, remove, or modify your projects.
 * 
 * INSTRUCTIONS:
 * 1. Replace the example projects with your own
 * 2. For each project, fill in the required fields (id, title, description, image, technologies)
 * 3. Optional fields can be omitted (githubUrl, liveUrl, featured, longDescription)
 * 4. Save the file and the changes will appear on your portfolio
 * 
 * IMAGE SETUP:
 * - Add your project images to the /public folder
 * - Reference them as "/your-image-name.jpg" in the image field
 * - Supported formats: .jpg, .jpeg, .png, .webp
 * - Recommended size: 800x600px or similar aspect ratio
 */

export interface Project {
  /** Unique identifier for the project (e.g., "1", "2", "project-name") */
  id: string;
  
  /** Project title displayed on the card */
  title: string;
  
  /** Short description (2-3 sentences) shown on the project card */
  description: string;
  
  /** Optional: Longer detailed description (currently not displayed, reserved for future use) */
  longDescription?: string;
  
  /** Image path relative to /public folder (e.g., "/my-project.jpg") */
  image: string;
  
  /** Array of technology names/tags (e.g., ["React", "TypeScript", "Node.js"]) */
  technologies: string[];
  
  /** Optional: GitHub repository URL */
  githubUrl?: string;
  
  /** Optional: Live demo/production URL */
  liveUrl?: string;
  
  /** Optional: Set to true to highlight as featured (currently all projects are shown) */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "training-app",
    title: "Training App",
    description: "A progressive web app for tracking daily workouts and building consistency, featuring offline support, data persistence on device, and an intuitive UI.",
    longDescription: "The Training App is a client-side progressive web application designed for seamless workout tracking. It offers full offline capabilities, ensuring data remains persistent on the user's device without server interaction. The app focuses on a clear, intuitive user interface for logging exercises, tracking progress, and visualizing training contributions over time. Built with modern web technologies, it emphasizes performance, privacy, and user control over data.",
    image: "/training-app.png",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "Offline-first",
      "Local Storage"
    ],
    liveUrl: "https://main-training-app.naokiondawork.workers.dev/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    featured: true,
  },
  {
    id: "study-hour-calendar",
    title: "Study Hour Calendar",
    description: "A refined tool designed to help scholars visually track and manage their study time and learning progress. Features calendar view, achievement statistics, progress trends, CSV export, and bulk record management.",
    longDescription: "The Study Hour Calendar is a modern, practical full-stack project designed to visualize and analyze study time with a strong emphasis on performance, maintainability, and future scalability. It operates primarily as a client-side application using localStorage for simplicity and speed, while remaining backend-ready for future expansion. The application delivers a fast, intuitive calendar interface with robust data visualization and long-term maintainability.",
    image: "/study-hour-calendar.png",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Vitest",
      "ESLint"
    ],
    githubUrl: "https://github.com/naokiwork/idea7-school-tracker",
    liveUrl: "https://idea7-tau.vercel.app/",
    featured: true,
  },
  
  {
    id: "category-search",
    title: "Category Search",
    description: "A fully static, client-side quiz web app built for speed, privacy, and long-term maintainability. Features static site generation, modern UI with smooth animations, data visualization with Recharts, and elegant Japanese typography.",
    longDescription: "This application is a fully static, client-side quiz web app built with Next.js 14, React 18, and TypeScript. It uses Static Site Generation (SSG) for instant load speed, SEO friendliness, and CDN compatibility. All logic runs in the browser, ensuring complete user privacy and zero backend costs. The UI features Tailwind CSS for clean, responsive design and Framer Motion for smooth animations, with optimized Japanese serif font (Noto Serif JP) for a refined aesthetic.",
    image: "/category-search.png",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Noto Serif JP",
      "Cloudflare Pages"
    ],
    githubUrl: "https://github.com/naokiwork",
    liveUrl: "https://9e55ea38.my-category.pages.dev",
    featured: true,
  },
  
  {
    id: "habit-grid",
    title: "Habit Grid",
    description: "A modern, client-side habit tracking application designed with a strong emphasis on performance, type safety, UI quality, and long-term maintainability. Features React 18, Vite, Tailwind CSS, Radix UI, and shadcn/ui components.",
    longDescription: "HabitGrid is a modern, client-side habit tracking application built with React 18 + TypeScript for scalable, type-safe component architecture. It uses Vite for exceptionally fast development experience, Tailwind CSS + Radix UI + shadcn/ui for fully customizable and accessible UI, React Hook Form + Zod for performant form handling with strong validation, and date-fns/Recharts for lightweight date calculations and clear visualizations. The application emphasizes performance with tree-shakable dependencies, optimized builds, and fast global delivery via Cloudflare Pages.",
    image: "/habit-grid.png",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "date-fns",
      "Recharts",
      "ESLint",
      "TypeScript ESLint"
    ],
    githubUrl: "https://github.com/naokiwork/habit-tracker-101",
    liveUrl: "https://bb6088ac.habitgrid-7h8.pages.dev",
    featured: true,
  },
  
  {
    id: "stock-prediction-app",
    title: "Stock Prediction App",
    description: "A web-based application that leverages AI to forecast future prices of stocks, indices, and commodities. Combines historical market data with real-time news analysis to provide price predictions up to six months ahead with clear reasoning and visual explanations.",
    longDescription: "Stock Prediction App is a full-stack AI application that demonstrates full-stack AI application design, integration of financial data APIs, and explainable AI in a real-world domain. The frontend (Next.js) runs on Cloudflare Pages and communicates via HTTPS with a FastAPI backend deployed on Google Cloud Run. The backend aggregates market price data from yfinance, news data from NewsAPI, and AI-driven analysis and forecasting via OpenAI. The processed results are returned to the frontend and displayed through interactive charts and explanatory cards. Key features include AI-based price prediction using historical trends and news sentiment, interactive data visualization, explainable AI output with natural-language reasoning, real-time data integration, responsive UI, and browser notifications for significant price movements.",
    image: "/stock-prediction-app.png",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "Radix UI",
      "Python 3.11+",
      "FastAPI",
      "OpenAI API",
      "yfinance",
      "NewsAPI",
      "Docker",
      "Google Cloud Run",
      "Cloudflare Pages"
    ],
    githubUrl: "https://github.com/naokiwork",
    liveUrl: "https://f8db7d78.stock-prediction-frontend.pages.dev/",
    featured: true,
  },
];
