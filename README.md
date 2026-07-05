# Gega Base

Gega Base is a Next.js app for creating lightweight email signup pages. Users can design a hosted template, publish a shareable link, collect email submissions, review subscriber records, and export those records as CSV.

## Features

- Visual template builder with editable title, description, image, colors, and button style.
- Free template draft flow that stores an in-progress template locally before login.
- Supabase email/password authentication.
- User dashboard for creating, editing, sharing, and deleting templates.
- Public template pages at `/:id` for collecting subscriber emails.
- Subscriber stats table with total count, recent submissions, and CSV export.
- Light/dark theme support with Tailwind CSS and Radix UI components.

## Tech Stack

- Next.js 13 App Router
- React 18
- TypeScript
- Supabase Auth, database, and storage
- Tailwind CSS
- Radix UI primitives

## Getting Started

Install dependencies:

```bash
yarn install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add the required values:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_WEBSITE_NAME=http://localhost:3000
```

Run the development server:

```bash
yarn dev
```

Open `http://localhost:3000`.

## Supabase Setup

The app expects Supabase Auth to be enabled and uses public tables for templates, user profiles, and collected emails. It also reads uploaded template images from the `profiles` storage bucket.

At minimum, configure:

- `users` table for user profile data.
- `templates` table with `id`, `name`, `parent`, and `body` fields.
- `emails` table for collected addresses with `email`, `template_id`, `parent`, and `created_at` fields.
- Row-level security policies that allow users to manage their own templates and email records.

## Scripts

- `yarn dev` - start the local development server.
- `yarn build` - create a production build.
- `yarn start` - run the production server.
- `yarn lint` - run Next.js linting.
