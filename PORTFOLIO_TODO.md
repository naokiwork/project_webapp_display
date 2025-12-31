# Portfolio Webapp Development To-Do List

A structured checklist to build a portfolio website using Cursor AI, from a blank folder to a live site.

---

## Phase 1: The Foundation

Before opening Cursor, decide "what" you're building.

- [ ] **Curate Projects:** Pick 3–5 projects that show your best work.
- [ ] **Gather Assets:** Collect high-res screenshots, GIFs of your UI, and links to GitHub repos or live demos.
- [ ] **Choose Your Tech Stack:** For 2025, the recommended "modern" stack is **Next.js** (Framework), **Tailwind CSS** (Styling), and **Lucide React** (Icons).

---

## Phase 2: Project Setup (In Cursor)

Once you have Cursor installed, follow these steps to initialize your app:

- [ ] **Initialize Next.js:** Open a terminal in Cursor and run:
  ```bash
  npx create-next-app@latest . --typescript --tailwind --app
  ```
- [ ] **Create a `.cursorrules` file:** This is a "cheat code" for Cursor. Create this file in your root directory and tell it your preferred coding style (e.g., "Use functional components," "Use Shadcn UI components").
- [ ] **Install UI Libraries:** Ask Cursor to install **Shadcn UI** or **Framer Motion** for those smooth 2025-style animations.

---

## Phase 3: Building with AI (The "Composer" Phase)

Use `Cmd + I` (or `Ctrl + I`) to open **Composer** and follow this prompt sequence:

- [ ] **Step 1: The Hero Section.**
  - **Prompt:** "Create a modern, dark-mode hero section with my name, a brief bio, and a 'View Projects' button that scrolls down."

- [ ] **Step 2: The Project Grid.**
  - **Prompt:** "Build a responsive grid component for my projects. Each project should be a card with an image, title, tech stack tags, and links to 'GitHub' and 'Live Demo'."

- [ ] **Step 3: Project Data.**
  - **Prompt:** "Create a `projects.ts` file in a `/data` folder to store my project details so I can easily update them later."

- [ ] **Step 4: Smooth Animations.**
  - **Prompt:** "Use Framer Motion to add a 'fade-in' effect when the user scrolls to the project section."

---

## Phase 4: Refinement & Launch

Don't just ship the AI's first draft; polish it until it feels unique.

- [ ] **Responsive Check:** Ask Cursor: "Check if the project grid looks good on mobile and fix any overlapping text."
- [ ] **Contact Form:** Add a simple contact section or link to your LinkedIn/Email.
- [ ] **Deploy to Vercel:**
  1. Push your code to GitHub.
  2. Connect your GitHub to [Vercel](https://vercel.com).
  3. It will automatically deploy and give you a live URL.

---

## Pro Tips for Cursor Users

- **Error Debugging:** When you run into an error, don't just copy-paste it. Highlight the error in the terminal, press `Cmd + L`, and ask: **"Why is this happening and how do I fix it?"** Cursor will explain the logic so you actually learn while building.

- **Resources:**
  - [Cursor AI Portfolio Website Tutorial](https://www.youtube.com/watch?v=q94AFjQlETw) - This video provides a practical walkthrough of using Cursor to clone and customize a portfolio template, which is a great way to see the AI in action.

---

## Notes

**Would you like me to write a specific `.cursorrules` file for you to help the AI write better code for this project?**

