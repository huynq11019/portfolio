# Huy NQ — Backend & Full-Stack Software Engineer Portfolio

Personal portfolio website for **Nguyen Quang Huy (Huy NQ)**, showcasing scalable backend architectures, distributed systems, RESTful APIs with Java & Spring Boot, and modern cross-platform solutions (Angular, TypeScript, Flutter).

Live Demo / Production: [https://huynq.is-a.dev](https://huynq.is-a.dev) or [https://huynq11019.github.io](https://huynq11019.github.io)

---

## 🚀 Tech Stack Highlights

- **Framework**: [Astro v4](https://astro.build/) — Lightning fast, zero-JS by default static site generator.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) — Customized dark tech palette (`#080C14`), glassmorphic panels, and neon glow hover states.
- **Typography & Art Direction**: Crafted with [Taste-Skill](https://github.com/leonxlnx/taste-skill) principles — Swiss neo-grotesk typography ([Switzer](https://www.fontshare.com/fonts/switzer)), ambient 60–120 FPS cursor spotlight, and interactive typewriter keywords.
- **Featured Projects**: Real open-source repositories from `@huynq11019` (`conversion-plf`, `P2P-Chat-App`, `pose-guide`).
- **Icons**: Clean, inline accessible SVGs (0 kB external dependency footprint).
- **Deployment**: Automated GitHub Pages deployment via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18.14.1 or higher)
- npm (v9 or higher)

### Setup & Run

1. Clone or navigate into the repository:
   ```bash
   cd huynq11019.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:4321` to preview.

4. Build production static bundle:
   ```bash
   npm run build
   ```
   Output files will be generated in `dist/`.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment to GitHub Pages

This portfolio includes a pre-configured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes the website upon pushing to the `main` branch.

### Step-by-Step Push Instructions

1. **Create Repository on GitHub**:
   - Go to [GitHub New Repository](https://github.com/new).
   - Set Repository Name to: `huynq11019.github.io`
   - Set Visibility to: **Public**
   - Do **NOT** initialize with README, .gitignore, or license (already included locally).
   - Click **Create repository**.

2. **Connect Remote and Push**:
   ```bash
   cd huynq11019.github.io

   # Ensure default branch is main
   git branch -M main

   # Add GitHub remote origin (if not already set)
   git remote add origin https://github.com/huynq11019/huynq11019.github.io.git 2>/dev/null || git remote set-url origin https://github.com/huynq11019/huynq11019.github.io.git

   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages via Actions**:
   - Navigate to your repository: `https://github.com/huynq11019/huynq11019.github.io`
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - The workflow `Deploy to GitHub Pages` will trigger and publish the website.

4. **Custom Domain (`huynq.is-a.dev`)**:
   - Handled automatically via `public/CNAME` containing `huynq.is-a.dev`.
   - Connected via the pull request to `is-a-dev/register`.

---

## 📄 License

MIT © 2026 Huy NQ.
