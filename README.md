# Room Booker

A modern, responsive room booking application built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Deepakeon/stay-bnb.git
cd stay-bnb
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/
│   ├── booking/          # Booking-related components
│   ├── layout/           # Layout and navigation
│   ├── room/             # Room display components
│   └── ui/               # Reusable UI components
├── pages/                # Page components
├── store/                # State management
├── hooks/                # Custom hooks
├── types/                # TypeScript type definitions
├── data/                 # Mock data and utilities
└── lib/                  # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Architecture

This application follows modern React patterns with a focus on:

- **Component Composition**: Reusable, composable components
- **State Management**: Centralized state with Zustand
- **Type Safety**: Full TypeScript coverage

For detailed architecture decisions, see [architecture-notes.txt](./architecture-notes.txt).

## License

MIT License - see LICENSE file for details.