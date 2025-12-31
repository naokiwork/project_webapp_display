# How to Edit Your Projects

This guide will help you easily add, edit, or remove projects from your portfolio.

## Quick Start

1. Open `data/projects.ts` in your code editor
2. Find the `projects` array
3. Edit, add, or remove project objects
4. Save the file
5. Your changes will appear automatically when you run `npm run dev`

## Project Structure

Each project follows this structure:

```typescript
{
  id: "unique-id",                    // Required: Unique identifier
  title: "Project Name",              // Required: Project title
  description: "Project description", // Required: 2-3 sentence description
  image: "/project-image.jpg",        // Required: Path to image in /public folder
  technologies: ["Tech1", "Tech2"],   // Required: Array of technologies
  githubUrl: "https://...",           // Optional: GitHub repository URL
  liveUrl: "https://...",             // Optional: Live demo URL
  featured: true,                     // Optional: Featured status (currently not used)
}
```

## Step-by-Step Instructions

### Adding a New Project

1. **Prepare your image:**
   - Save your project screenshot/image to the `/public` folder
   - Recommended size: 800x600px or similar aspect ratio
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Name it something clear like `my-project.jpg`

2. **Add the project entry:**
   - Copy the template from the top of `projects.ts`
   - Paste it into the `projects` array
   - Fill in all the fields:

```typescript
{
  id: "6",  // Use a unique number or name
  title: "My Awesome Project",
  description: "This project does amazing things. It solves real problems and uses cutting-edge technology.",
  image: "/my-project.jpg",  // The filename you saved in /public
  technologies: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/my-project",
  liveUrl: "https://myproject.com",
  featured: true,
}
```

### Editing an Existing Project

1. Find the project object in the `projects` array
2. Change any field you want:
   - Update the title
   - Change the description
   - Add/remove technologies
   - Update URLs
   - Change the image path

### Removing a Project

1. Find the project object (the `{...}` block)
2. Delete the entire object, including the comma after it
3. Make sure the remaining projects are properly separated by commas

### Changing Project Images

1. Add your new image to the `/public` folder
2. Update the `image` field in the project object:
   ```typescript
   image: "/new-image-name.jpg"
   ```
3. The old image can remain in `/public` (it won't hurt), or you can delete it

## Field Details

### Required Fields

- **`id`**: A unique string identifier. Can be a number ("1", "2") or a name ("my-project")
- **`title`**: The project name displayed on the card (keep it concise, 1-4 words)
- **`description`**: A brief description (2-3 sentences) that explains what the project does
- **`image`**: Path to the image file in `/public` folder (must start with `/`)
- **`technologies`**: Array of technology names. Use clear, recognizable names like "React", "TypeScript", "Python"

### Optional Fields

- **`githubUrl`**: Full URL to your GitHub repository
- **`liveUrl`**: Full URL to the live/production version of your project
- **`longDescription`**: Currently not displayed (reserved for future features)
- **`featured`**: Currently not used (all projects are shown)

## Examples

### Minimal Project (Required Fields Only)
```typescript
{
  id: "minimal",
  title: "Simple Project",
  description: "A simple project that does something useful.",
  image: "/simple.jpg",
  technologies: ["HTML", "CSS", "JavaScript"],
}
```

### Full Featured Project
```typescript
{
  id: "full-featured",
  title: "Complete Application",
  description: "A full-stack application with authentication, database, and real-time features. Built with modern best practices.",
  image: "/full-app.jpg",
  technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
  githubUrl: "https://github.com/username/complete-app",
  liveUrl: "https://complete-app.vercel.app",
  featured: true,
}
```

### Project Without Live Demo
```typescript
{
  id: "no-demo",
  title: "Backend API",
  description: "RESTful API for managing user data. Includes authentication and authorization.",
  image: "/api.jpg",
  technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  githubUrl: "https://github.com/username/backend-api",
  // No liveUrl - that's fine! Only GitHub link will show
}
```

## Tips

- **Keep descriptions concise**: 2-3 sentences work best for the card layout
- **Use clear technology names**: "React" is better than "react.js" or "ReactJS"
- **Organize by importance**: Put your best/most impressive projects first
- **Update regularly**: Keep your portfolio fresh by adding new projects
- **Test your links**: Make sure GitHub and live URLs work before publishing

## Troubleshooting

**Project doesn't show up:**
- Check for syntax errors (missing commas, brackets)
- Make sure the project object is inside the `projects` array
- Verify all required fields are present

**Image doesn't display:**
- Make sure the image file is in the `/public` folder
- Check that the image path starts with `/`
- Verify the filename matches exactly (case-sensitive on some systems)
- Try restarting the dev server (`npm run dev`)

**Type errors:**
- Make sure all string values are in quotes
- Arrays should use square brackets `[]`
- Objects should use curly braces `{}`

## Need Help?

- Check the example projects in `projects.ts` for reference
- Look at the interface definition at the top of the file
- Make sure your code matches the structure of the examples

