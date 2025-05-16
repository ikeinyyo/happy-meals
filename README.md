# Happy Meals

Happy Meals is a modern web application built with Next.js that helps you manage your recipes and meal planning. The application provides a clean and intuitive interface for discovering new recipes and organizing your weekly meals.

## Features

- Browse and discover delicious recipes
- Create and manage meal plans
- Responsive design that works on all devices
- Dark and light theme support
- User authentication system

## Tech Stack

- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS
- React Icons
- pnpm (optional, can also use npm or yarn)

## Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx   # Root layout
│   ├── page.tsx     # Home page
│   ├── recipes/     # Recipes section
│   └── meal-plans/  # Meal plans section
├── features/         # Reusable features
│   └── navBar/      # Navigation bar component
└── components/       # Shared components
```

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
