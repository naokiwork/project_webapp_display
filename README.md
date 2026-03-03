     1|# Portfolio Webapp
     2|
     3|A modern, GitHub-inspired portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This project showcases your projects in a clean, professional, and visually appealing way.
     4|
     5|## Features
     6|
     7|- 🎨 **GitHub-Inspired Dark Mode Design** - Deep navy blue background (#0d1117) with clean, professional aesthetics
     8|- ✨ **Smooth Animations** - Framer Motion powered scroll animations and transitions
     9|- 📱 **Fully Responsive** - Mobile-first design that works beautifully on all devices
    10|- ⚡ **Fast & Optimized** - Built with Next.js 16 App Router for optimal performance
    11|- 🎯 **Modern Tech Stack** - TypeScript, Tailwind CSS, and Lucide React icons
    12|- 🔍 **Easy to Customize** - Project data stored in a simple TypeScript file
    13|
    14|## Tech Stack
    15|
    16|- **Framework:** Next.js 16 (App Router)
    17|- **Language:** TypeScript
    18|- **Styling:** Tailwind CSS
    19|- **Animations:** Framer Motion
    20|- **Icons:** Lucide React
    21|- **Deployment:** Cloudflare Workers / Pages
    22|
    23|## Getting Started
    24|
    25|### Prerequisites
    26|
    27|- Node.js 18+ installed
    28|- npm or yarn package manager
    29|
    30|### Installation
    31|
    32|1. Clone the repository:
    33|```bash
    34|git clone https://github.com/naokiwork/project_webapp_display.git
    35|cd project_webapp_display
    36|```
    37|
    38|2. Install dependencies:
    39|```bash
    40|npm install
    41|```
    42|
    43|3. Run the development server:
    44|```bash
    45|npm run dev
    46|```
    47|
    48|4. Open [http://localhost:3000](http://localhost:3000) in your browser.
    49|
    50|## Customization
    51|
    52|### Adding Your Projects
    53|
    54|**Quick Edit:** Simply open `data/projects.ts` and edit the projects array. The file contains detailed comments and examples to guide you.
    55|
    56|**Detailed Guide:** See `data/PROJECTS_GUIDE.md` for a comprehensive guide on editing projects.
    57|
    58|**Quick Steps:**
    59|1. Add your project images to the `/public` folder
    60|2. Open `data/projects.ts`
    61|3. Edit the `projects` array - replace examples with your own projects
    62|4. Save the file and see your changes!
    63|
    64|```typescript
    65|{
    66|  id: "1",
    67|  title: "Your Project Name",
    68|  description: "Brief description of your project",
    69|  image: "/your-image.jpg",  // Image must be in /public folder
    70|  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    71|  githubUrl: "https://github.com/yourusername/project",  // Optional
    72|  liveUrl: "https://yourproject.com",  // Optional
    73|}
    74|```
    75|
    76|### Updating Personal Information
    77|
    78|1. **Hero Section** - Edit `components/Hero.tsx`:
    79|   - Update your name
    80|   - Update your bio/description
    81|   - Update social media links (GitHub, LinkedIn, Email)
    82|
    83|2. **Contact Section** - Edit `components/Contact.tsx`:
    84|   - Update email address
    85|   - Update social media links
    86|
    87|### Styling
    88|
    89|The project uses Tailwind CSS with custom colors inspired by GitHub's design system. Main colors are defined in `app/globals.css`:
    90|
    91|- Background: `#0d1117` (dark navy)
    92|- Foreground: `#c9d1d9` (light gray)
    93|- Accent: `#58a6ff` (blue)
    94|- Border: `#30363d` (dark gray)
    95|
    96|You can customize these in the CSS file or extend Tailwind's theme in `tailwind.config.ts`.
    97|
    98|## Project Structure
    99|
   100|```
   101|project_webapp_display/
   102|├── app/
   103|│   ├── globals.css          # Global styles and CSS variables
   104|│   ├── layout.tsx           # Root layout component
   105|│   └── page.tsx             # Home page
   106|├── components/
   107|│   ├── Hero.tsx             # Hero section component
   108|│   ├── Navigation.tsx       # Navigation header
   109|│   ├── ProjectCard.tsx      # Individual project card
   110|│   ├── ProjectGrid.tsx      # Projects grid layout
   111|│   └── Contact.tsx          # Contact section
   112|├── data/
   113|│   └── projects.ts          # Project data
   114|├── .cursorrules             # Cursor AI coding guidelines
   115|└── package.json             # Dependencies
   116|```
   117|
   118|## Build for Production
   119|
   120|### Cloudflare Workers / Pages
   121|
   122|**Cloudflare Build Settings:**
   123|- **Build command:** `npm run cf:build`
   124|- **Build output directory:** `.open-next`
   125|- **Root directory:** Project root
   126|
   127|**Local / CI Reproducibility:**
   128|```bash
   129|npm ci
   130|npm run cf:build
   131|npm run cf:deploy
   132|```
   133|
   134|### Other Deployment Options
   135|
   136|- **Vercel:** Refer to previous versions of this README or Vercel documentation for Next.js deployment.
   137|- **Netlify:** Similar to Vercel, import your GitHub repo
   138|- **Self-hosted:** Build the project and serve the `out` directory (if using static export)
   139|
   140|## Design Philosophy
   141|
   142|This portfolio is inspired by GitHub's UI/UX principles:
   143|
   144|- **High Information Density** - Display all important information clearly
   145|- **Clean Visual Hierarchy** - Use spacing and typography to guide the eye
   146|- **Contextual Information** - Always show relevant details (tech stack, links, etc.)
   147|- **Dark Mode First** - Professional dark theme that's easy on the eyes
   148|- **Smooth Interactions** - Subtle animations enhance the user experience
   149|- **Responsive Design** - Works perfectly on all screen sizes
   150|
   151|## License
   152|
   153|MIT License - see [LICENSE](LICENSE) file for details
   154|
   155|## Credits
   156|
   157|- Design inspiration from GitHub's UI/UX
   158|- Built with [Next.js](https://nextjs.org/)
   159|- Icons from [Lucide](https://lucide.dev/)
   160|- Animations with [Framer Motion](https://www.framer.com/motion/)
   161|
   162|---
   163|
   164|**Note:** Remember to update all placeholder content (name, bio, project data, social links) with your own information before deploying!
   165|