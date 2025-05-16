export type MealType = "breakfast" | "lunch" | "dinner" | "snack" | "both";

export type CarbohydrateType = "legume" | "rice" | "potato" | "bread" | "pasta" | "none";

export type ProteinType = "fish" | "meat" | "egg" | "none";

export type IngredientUnitType = "g" | "ml" | "unit" | "none";

export type Ingredient = {
    name: string;
    quantity: string;
    unit: IngredientUnitType;
}

export type Meal = {    
    id: string;
    name: string;
    description: string;
    type: MealType;
    carbohydrate: CarbohydrateType;
    protein: ProteinType;
    ingredients: Ingredient[];
    steps: string[];
}    