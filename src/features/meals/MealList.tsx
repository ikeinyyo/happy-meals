import { Meal } from "./domain";
import { MealItem } from "./list/MealItem";
import { MdNoMeals } from "react-icons/md";

type Props = {
    meals: Meal[];
}

const MealList = ({ meals }: Props) => {
    if (meals.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)]">
                <MdNoMeals className="text-4xl text-primary mb-4" />
                <p className="text-foreground text-center">No meals found matching your filters</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-y-auto max-h-[calc(100vh-120px)] pb-8">
            {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </div>
    );
};

export { MealList }