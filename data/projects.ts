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
  // ============================================
  // TEMPLATE: Copy this structure to add a new project
  // ============================================
  // {
  //   id: "unique-id",
  //   title: "Your Project Name",
  //   description: "Brief description of what the project does and its key features.",
  //   image: "/your-project-image.jpg",  // Place image in /public folder
  //   technologies: ["Technology 1", "Technology 2", "Technology 3"],
  //   githubUrl: "https://github.com/yourusername/project-name",  // Optional
  //   liveUrl: "https://yourproject.com",  // Optional
  //   featured: true,  // Optional
  // },

  // ============================================
  // YOUR PROJECTS: Replace examples with your own
  // ============================================
  
  {
    id: "1",
    title: "Example Project 1",
    description: "A modern web application built with Next.js and TypeScript. This project demonstrates best practices in modern web development.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: "/placeholder-project-1.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  
  {
    id: "2",
    title: "Example Project 2",
    description: "A full-stack application with REST API and modern UI. Features include user authentication, database integration, and responsive design.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    image: "/placeholder-project-2.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  
  {
    id: "3",
    title: "Example Project 3",
    description: "Mobile-first responsive design with advanced animations. Built with a focus on user experience and smooth interactions.",
    technologies: ["React", "Framer Motion", "CSS", "TypeScript"],
    image: "/placeholder-project-3.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  
  {
    id: "4",
    title: "Example Project 4",
    description: "Real-time collaborative tool with WebSocket integration. Enables multiple users to work together in real-time.",
    technologies: ["WebSocket", "Node.js", "React", "TypeScript"],
    image: "/placeholder-project-4.jpg",
    githubUrl: "https://github.com",
    // Note: This project doesn't have a liveUrl - it's optional!
    featured: false,
  },
  
  {
    id: "5",
    title: "Example Project 5",
    description: "Data visualization dashboard with interactive charts. Transforms complex data into intuitive visual representations.",
    technologies: ["D3.js", "React", "TypeScript", "Chart.js"],
    image: "/placeholder-project-5.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },

  // ============================================
  // ADD MORE PROJECTS BELOW
  // ============================================
  // Copy the template above and paste here to add more projects
  
];
