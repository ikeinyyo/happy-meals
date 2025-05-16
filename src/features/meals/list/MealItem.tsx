import { Meal } from "../domain";
import { getMealTypeIcon, getCarbohydrateIcon, getProteinIcon } from "../../shared/icons";

type Props = {
    meal: Meal;
}

const MealItem = ({ meal }: Props) => {
    return (
        <div className="relative p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                    {getMealTypeIcon(meal.type)}
                </div>
                <h2 className="text-base font-semibold text-foreground max-h-12 line-clamp-2" title={meal.name}>{meal.name}</h2>
            </div>
            <p className="mb-8 max-h-12 line-clamp-2 text-foreground" title={meal.description}>{meal.description}</p>
            <div className="absolute bottom-4 right-4 flex gap-4 justify-end">
                {meal.carbohydrate !== 'none' && (
                    <div className="flex items-center gap-2">
                        {getCarbohydrateIcon(meal.carbohydrate)}
                        <span className="text-sm capitalize">{meal.carbohydrate}</span>
                    </div>
                )}
                {meal.protein !== 'none' && (
                    <div className="flex items-center gap-2">
                        {getProteinIcon(meal.protein)}
                        <span className="text-sm capitalize">{meal.protein}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export { MealItem }