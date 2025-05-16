"use client";

import { useMeals } from "@/features/meals/useMeals";
import { MealList } from "@/features/meals/MealList";
import { SearchForm } from "@/features/meals/search/SearchForm";
import { useState } from "react";

export default function Recipes() {
    const [filters, setFilters] = useState({
        search: "",
        type: "",
        carbohydrate: "",
        protein: "",
    });

    const { meals, loading } = useMeals();
    const filteredMeals = meals.filter(meal => {
        const matchesSearch = meal.name.toLowerCase().includes(filters.search.toLowerCase());
        const matchesType = !filters.type || meal.type === filters.type;
        const matchesCarbohydrate = !filters.carbohydrate || meal.carbohydrate === filters.carbohydrate;
        const matchesProtein = !filters.protein || meal.protein === filters.protein;
        return matchesSearch && matchesType && matchesCarbohydrate && matchesProtein;
    });

    return (
        <div className="flex">
            <div className="w-1/5 bg-background p-4">
                <SearchForm filters={filters} setFilters={setFilters} />
            </div>

            <div className="w-4/5 bg-background-secondary p-4 min-h-[calc(100vh-var(--navbar-height))]">
                <h2 className="text-xl font-bold mb-4">Recipes</h2>
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <MealList meals={filteredMeals} />
                )}
            </div>
        </div>
    );
}
