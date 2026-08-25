# Swati Paul — Frontend Developer Portfolio

A modern, high-end portfolio website built with **Next.js**, **Tailwind CSS**, and **Three.js** animations — inspired by premium web design aesthetics.

## Features

- **Three.js Hero Animation** — Interactive 3D bracket geometry with floating particles
- **Smooth Scroll Animations** — Framer Motion powered section reveals
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Project Showcase** — Expandable project cards with live demo links
- **Skills & Experience** — Animated skill bars, education, and work history
- **Contact Form** — Get-in-touch section with form validation
- **FAQ Accordion** — Common questions about working together

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Configured for Netlify with the Next.js plugin. Push to your repo and connect to Netlify for automatic deployments.

## Project Structure

```
app/           → Next.js App Router (layout, page, globals)
components/    → React components (Header, Hero, Projects, etc.)
data/          → Portfolio content and configuration
public/        → Static assets (images, resume PDF)
```

## Customization

Edit `data/portfolio.ts` to update personal info, projects, skills, testimonials, and FAQ content.
