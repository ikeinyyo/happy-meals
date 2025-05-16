"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

type Props = {
    avatarUrl?: string;
}

const UserButton = ({ avatarUrl }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        console.log("Logout");
    };

    return (
        <div ref={dropdownRef}>
            <button
                className="flex items-center justify-center w-8 h-8 bg-primary-light rounded-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                {avatarUrl ? (
                    <Image
                        src={avatarUrl}
                        alt="User avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                ) : (
                    <FaUser className="w-4 h-4 text-foreground" />
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 border border-foreground">
                    <button
                        className="block w-full text-left px-4 py-2 text-foreground hover:bg-primary-light"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export { UserButton };
