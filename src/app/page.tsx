import { BiFoodMenu, BiCalendar } from "react-icons/bi";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-var(--navbar-height))] bg-background-secondary">
      <main className="container mx-auto px-4 flex-grow mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Happy Meals</h1>
          <p className="text-xl text-foreground/80">
            Discover delicious recipes and plan your meals easily
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Link
            href="/recipes"
            className="group p-8 bg-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <BiFoodMenu className="text-3xl text-primary group-hover:text-primary-dark transition-colors" />
              <div>
                <h2 className="text-xl font-semibold text-foreground">Recipes</h2>
                <p className="text-foreground/80">Explore our delicious and easy-to-make recipes</p>
              </div>
            </div>
          </Link>

          <Link
            href="/meal-plans"
            className="group p-8 bg-background rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <BiCalendar className="text-3xl text-primary group-hover:text-primary-dark transition-colors" />
              <div>
                <h2 className="text-xl font-semibold text-foreground">Meal Plans</h2>
                <p className="text-foreground/80">Organize your weekly meals efficiently</p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      <footer className="py-8 border-t border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-foreground/80">© 2025 Happy Meals. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://github.com/your-repo-url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-dark transition-colors"
              >
                GitHub Repository
              </a>
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-dark transition-colors"
              >
                Author on GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
