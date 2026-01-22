# MS - Vue 3 TypeScript App

A modern Vue 3 TypeScript application built with Vite, pnpm, Vue Router, and Nuxt UI 4.4.

## Features

- ⚡️ **Vue 3** - Composition API and `<script setup>`
- 🦾 **TypeScript** - Type safety out of the box
- 📦 **Vite** - Fast development and building
- 🎨 **Nuxt UI 4.4** - Beautiful UI components
- 🛣️ **Vue Router** - Client-side routing
- 🎯 **TailwindCSS v4** - Utility-first CSS framework
- 📦 **pnpm** - Fast, disk space efficient package manager
- 🚀 **GitHub Pages** - Automated deployment via GitHub Actions

## Tech Stack

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Vue Router](https://router.vuejs.org/) - Official router for Vue.js
- [Nuxt UI](https://ui.nuxt.com/) - UI Library for Modern Web Apps
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Development

### Prerequisites

- Node.js >= 20.19.0 or >= 22.12.0
- pnpm

### Installation

```bash
# Install pnpm if you haven't
npm install -g pnpm

# Install dependencies
pnpm install
```

### Development Server

```bash
# Start dev server at http://localhost:5173/ms/
pnpm dev
```

### Build

```bash
# Build for production
pnpm build
```

### Preview

```bash
# Preview production build
pnpm preview
```

## Deployment

This app is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

The GitHub Actions workflow:
1. Checks out the code
2. Sets up pnpm and Node.js
3. Installs dependencies
4. Builds the application
5. Deploys to GitHub Pages

## Project Structure

```
ms/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images and styles
│   ├── components/             # Vue components
│   ├── router/                 # Vue Router configuration
│   ├── views/                  # Page components
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue                 # Root component
│   ├── main.ts                 # App entry point
│   └── style.css               # Global styles
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── postcss.config.js           # PostCSS configuration
```

## License

MIT
