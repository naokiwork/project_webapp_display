# Portfolio Webapp

A modern, GitHub-inspired portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project showcases your projects in a clean, professional, and visually appealing way.

## Features

- 🎨 **GitHub-Inspired Dark Mode Design** - Deep navy blue background (#0d1117) with clean, professional aesthetics
- ✨ **Smooth Animations** - Framer Motion powered scroll animations and transitions
- 📱 **Fully Responsive** - Mobile-first design that works beautifully on all devices
- ⚡ **Fast & Optimized** - Built with Next.js 14 App Router for optimal performance
- 🎯 **Modern Tech Stack** - TypeScript, Tailwind CSS, and Lucide React icons
- 🔍 **Easy to Customize** - Project data stored in a simple TypeScript file

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/naokiwork/project_webapp_display.git
cd project_webapp_display
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Projects

**Quick Edit:** Simply open `data/projects.ts` and edit the projects array. The file contains detailed comments and examples to guide you.

**Detailed Guide:** See `data/PROJECTS_GUIDE.md` for a comprehensive guide on editing projects.

**Quick Steps:**
1. Add your project images to the `/public` folder
2. Open `data/projects.ts`
3. Edit the `projects` array - replace examples with your own projects
4. Save the file and see your changes!

```typescript
{
  id: "1",
  title: "Your Project Name",
  description: "Brief description of your project",
  image: "/your-image.jpg",  // Image must be in /public folder
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/yourusername/project",  // Optional
  liveUrl: "https://yourproject.com",  // Optional
}
```

### Updating Personal Information

1. **Hero Section** - Edit `components/Hero.tsx`:
   - Update your name
   - Update your bio/description
   - Update social media links (GitHub, LinkedIn, Email)

2. **Contact Section** - Edit `components/Contact.tsx`:
   - Update email address
   - Update social media links

### Styling

The project uses Tailwind CSS with custom colors inspired by GitHub's design system. Main colors are defined in `app/globals.css`:

- Background: `#0d1117` (dark navy)
- Foreground: `#c9d1d9` (light gray)
- Accent: `#58a6ff` (blue)
- Border: `#30363d` (dark gray)

You can customize these in the CSS file or extend Tailwind's theme in `tailwind.config.ts`.

## Project Structure

```
project_webapp_display/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Hero.tsx             # Hero section component
│   ├── Navigation.tsx       # Navigation header
│   ├── ProjectCard.tsx      # Individual project card
│   ├── ProjectGrid.tsx      # Projects grid layout
│   └── Contact.tsx          # Contact section
├── data/
│   └── projects.ts          # Project data
├── .cursorrules             # Cursor AI coding guidelines
└── package.json             # Dependencies
```

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy your site
4. Your site will be live with a URL like `your-project.vercel.app`

### Other Deployment Options

- **Netlify:** Similar to Vercel, import your GitHub repo
- **Self-hosted:** Build the project and serve the `out` directory (if using static export)

## Design Philosophy

This portfolio is inspired by GitHub's UI/UX principles:

- **High Information Density** - Display all important information clearly
- **Clean Visual Hierarchy** - Use spacing and typography to guide the eye
- **Contextual Information** - Always show relevant details (tech stack, links, etc.)
- **Dark Mode First** - Professional dark theme that's easy on the eyes
- **Smooth Interactions** - Subtle animations enhance the user experience
- **Responsive Design** - Works perfectly on all screen sizes

## License

MIT License - see [LICENSE](LICENSE) file for details

## Credits

- Design inspiration from GitHub's UI/UX
- Built with [Next.js](https://nextjs.org/)
- Icons from [Lucide](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Note:** Remember to update all placeholder content (name, bio, project data, social links) with your own information before deploying!
