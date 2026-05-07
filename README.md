# Librify Book

A modern book search and wishlist web application where users can search books via the [OpenLibrary API](https://openlibrary.org/developers/api), view details & ratings, and save favorites to a personal wishlist backed by MongoDB.

## Tech Stack

| Category | Technology | Why |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) | Server + client rendering, file-based routing, built-in API routes, Turbopack for fast dev builds |
| **Language** | TypeScript (strict) | Type safety across the entire codebase, better DX with autocomplete and refactoring |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) | Utility-first, zero-runtime CSS, fast prototyping, consistent design system |
| **Data Fetching** | [TanStack Query v5](https://tanstack.com/query) | Declarative data fetching with caching, stale-while-revalidate, optimistic updates, deduplication |
| **Icons** | [Lucide React](https://lucide.dev) | Tree-shakeable, consistent icon set, lightweight |
| **Animations** | [@dotlottie/react-player](https://dotlottie.io) | Lightweight Lottie animations for loading & empty states, better UX than static text |
| **Database** | [MongoDB](https://mongodb.com) + [Mongoose 9](https://mongoosejs.com) | Flexible schema for wishlist documents, fast reads, easy setup |
| **Package Manager** | [Bun](https://bun.sh) | Blazing fast installs, native TypeScript support, compatible with Node.js ecosystem |
| **Testing** | [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com) | Unit & integration tests for services, components, and API routes |
| **DevOps** | Docker + Docker Compose | Containerized app for consistent development and deployment |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+
- MongoDB instance (local or [Atlas](https://mongodb.com/atlas))

### Environment

Copy the example env file and fill in your MongoDB connection string:

```bash
cp .env.example .env.local
```

**.env.local:**
```env
MONGODB_URI=mongodb://localhost:27017/librify-book
```

### Install & Run

```bash
# Install dependencies
bun install

# Start development server (TurboPack)
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

```bash
bun run dev        # Start dev server
bun run build      # Production build
bun run start      # Start production server
bun run lint       # Run ESLint
bun run test       # Run Jest test suite
bun run test:watch # Run tests in watch mode
```

### Docker

```bash
docker-compose up --build
```

## Project Structure

```
travelio-book/
├── app/
│   ├── api/wishlist/route.ts    # POST & GET /api/wishlist
│   ├── wishlist/page.tsx        # Wishlist page
│   ├── page.tsx                 # Home / search page
│   ├── layout.tsx               # Root layout
│   └── providers/               # React Query client provider
├── components/
│   ├── BookCard.tsx             # Book card with wishlist button
│   ├── LottieState.tsx          # Reusable loading/empty state animation
│   └── StarRating.tsx           # Star rating with partial fill
├── services/
│   └── bookService.ts           # OpenLibrary API + Wishlist API calls
├── lib/
│   ├── api-error.ts             # CustomApiError + error handler
│   └── mongodb.ts               # MongoDB connection singleton
├── models/
│   └── Wishlist.ts              # Mongoose wishlist schema
├── types/
│   └── index.ts                 # Shared TypeScript types
├── __tests__/                   # Jest test suites
├── public/lottie/               # Lottie animation JSON files
├── Dockerfile
├── docker-compose.yml
└── jest.config.ts
```

## Features

- **Book Search** — Search by title or author via OpenLibrary API with debounced input
- **Star Ratings** — Visual rating with partial fill based on actual score
- **Wishlist** — Add/remove books to a personal MongoDB-backed wishlist
- **Auto-refetch** — Wishlist data auto-updates after adding a book via TanStack Query invalidation
- **Lottie Animations** — Smooth loading spinner and empty state illustrations
- **Responsive** — Mobile-friendly grid layout with Tailwind CSS
- **Error Handling** — Custom `ApiError` class with typed error codes and user-friendly messages
- **Unit Tests** — Jest + Testing Library for services, API routes, and components
- **AI Tools** - im using opencode to help me fix issue and build this readme or documentation