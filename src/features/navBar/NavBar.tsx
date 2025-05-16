"use client";

import { UserButton } from "./userButton/UserButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    pages: { title: string; href: string }[];
}

const NavBar = ({ pages }: Props) => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between px-6 py-2 bg-primary shadow-sm">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-xl font-bold text-foreground-secondary mr-8">Happy Meals</h1>
                </Link>
                {pages.map((page) => (
                    <Link
                        key={page.title}
                        href={page.href}
                        className={`mx-2 px-2 py-1 font-bold rounded text-foreground-secondary hover:bg-primary-light hover:text-primary-dark ${pathname === page.href ? "bg-primary-dark text-foreground" : ""}`}
                    >
                        {page.title}
                    </Link>
                ))}
            </div>
            <div className="relative">
                <UserButton />
            </div>
        </nav>
    );
};

export { NavBar };