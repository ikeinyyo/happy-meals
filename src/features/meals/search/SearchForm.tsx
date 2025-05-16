'use client';

import { CarbohydrateSelect } from "@/features/shared/selects/CarbohydrateSelect";
import { MealTypeSelect } from "@/features/shared/selects/MealTypeSelect";
import { ProteinSelect } from "@/features/shared/selects/ProteinSelect";
import { useEffect, useState } from "react";

type Props = {
    filters: {
        search: string;
        type: string;
        carbohydrate: string;
        protein: string;
    };
    setFilters: (filters: Props["filters"]) => void;
};

const SearchForm = ({ filters, setFilters }: Props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const clearFilters = () => {
        setFilters({
            search: "",
            type: "",
            carbohydrate: "",
            protein: "",
        });
    };

    if (!mounted) return null;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Meal Filters</h2>
                <button
                    onClick={clearFilters}
                    className="text-primary hover:text-foreground transition-colors"
                >
                    Clear filters
                </button>
            </div>

            <input
                type="text"
                placeholder="Search meals..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <MealTypeSelect
                value={filters.type}
                onChange={(type) => setFilters({ ...filters, type })}
            />

            <CarbohydrateSelect
                value={filters.carbohydrate}
                onChange={(carbohydrate) => setFilters({ ...filters, carbohydrate })}
            />

            <ProteinSelect
                value={filters.protein}
                onChange={(protein) => setFilters({ ...filters, protein })}
            />
        </div>
    );
};

export { SearchForm };
