## Modern Project Management Application

# Overview

This is an open-source, modern project management application built using the latest web technologies. Inspired by Jira and Linear, it provides an intuitive, high-performance workspace for teams to track issues, manage tasks, and collaborate effectively. The application is designed for efficiency, automation, and seamless user experience.

# Tech Stack

* Frontend: Next.js, React 19, ShadCN (for modern UI components)
* Backend: Express.js, TRPC (for type-safe API communication)
* Database: PostgreSQL with Drizzle ORM
* Caching & Queues: Redis for real-time performance
* Monorepo Management: Turborepo with pnpm

# Features

* 🔄 Automatic Issue Tracker: AI-powered detection of bugs and issues in ongoing tasks.
* 📝 Kanban Board: Drag-and-drop interface for managing tasks and workflows.
* 💡 Brainstorming Notes & Ideation Area: A space for teams to collaborate, document ideas, and refine concepts.
* ⚡ Real-time Collaboration: Instant updates across users using WebSockets.
* 📊 Advanced Analytics & Reporting: Gain insights into productivity, task progress, and team efficiency.
* 🔗 Deep Integrations: Connect with GitHub, Slack, and other productivity tools.
* 🔄 Recurring Tasks & Automations: Set up workflow automations and task reminders.
* ✅ Task Dependencies & Prioritization: Easily set blockers and priorities to optimize workflows.
* 🔒 Role-Based Access Control (RBAC): Granular permission settings for team members.
* 🌍 Multi-Tenant Support: Manage multiple organizations or teams within a single workspace.

# Installation & Deployment

Prerequisites

* Node.js & pnpm
* PostgreSQL & Redis
* Turborepo setup

# Clone & Setup
```
git clone https://github.com/Manudasari265/pmp
cd pmp
pnpm install
```
# Run Locally

``` pnpm dev ```
# Deploy to Production
```docker-compose up --build -d```

Roadmap & Future Enhancements

AI-powered task estimation & risk assessment
Mobile App using React Native
Dark Mode & Custom Themes
Gantt Charts for timeline visualization
**Public API for third-party integrations


## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
