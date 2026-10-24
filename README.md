# Huy NQ — Senior Software Engineer & Engineering Leader Portfolio

Personal portfolio website for **Nguyen Quang Huy (Huy NQ)**, showcasing 7+ years of engineering leadership, scalable backend architectures, distributed systems, and team leadership across tier-1 technology organizations (Tiki, Trusting Social, VNPay, GIMO).

Live Demo / Production: [https://huynq.is-a.dev](https://huynq.is-a.dev) or [https://huynq11019.github.io](https://huynq11019.github.io)

---

## 🚀 Tech Stack Highlights

- **Framework**: [Astro 4](https://astro.build/) — Fast, zero-JS by default static site generator.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling with customized editorial aesthetic, warm dark palette, and fluid typography.
- **Design Philosophy**: Crafted with [Taste-Skill](https://github.com/taste-skill) principles — editorial dark theme (`#090A0F`), subtle borders (`#1F2437`), gold/amber high-contrast accents (`#F59E0B`), serif display headings (`Newsreader`), and clean monospace accents (`JetBrains Mono`).
- **Icons**: [Lucide Icons](https://lucide.dev/) for crisp, scalable UI iconography.
- **Deployment**: Automated GitHub Pages deployment via GitHub Actions.

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

4. **Custom Domain (Optional / Configured for `huynq.is-a.dev`)**:
   - A custom domain can be configured under **Settings** > **Pages** > **Custom domain** with `huynq.is-a.dev`.
   - Ensure the CNAME / DNS records point to `huynq11019.github.io`.

---

## 📄 License

MIT © 2026 Huy NQ.
