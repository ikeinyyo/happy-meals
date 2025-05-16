import {
    MdRamenDining,
    MdWbTwilight,
    MdWbSunny,
    MdNightsStay,
    MdOutlineNoMeals,
    MdAccessTimeFilled
} from "react-icons/md";
import { GiPotato, GiJellyBeans, GiFruitBowl, GiMeal } from "react-icons/gi";
import { FaFish, FaEgg, FaBreadSlice, FaDrumstickBite } from "react-icons/fa";
import { FaCow, FaWheatAwn } from "react-icons/fa6";
import { BiSolidBowlRice } from "react-icons/bi";

const getMealTypeIcon = (type: string) => {
    const icons = {
        breakfast: <MdWbTwilight className="text-primary" title="Breakfast" />,
        lunch: <MdWbSunny className="text-primary" title="Lunch" />,
        dinner: <MdNightsStay className="text-primary" title="Dinner" />,
        snack: <GiFruitBowl className="text-primary" title="Snack" />,
        both: <MdAccessTimeFilled className="text-primary" title="Luch/Dinner" />,
        all: <GiMeal className="text-primary" title="All meal types" />
    };
    return icons[type as keyof typeof icons];
};

const getCarbohydrateIcon = (type: string) => {
    const icons = {
        pasta: <MdRamenDining className="text-primary" title="Pasta" />,
        rice: <BiSolidBowlRice className="text-primary" title="Rice" />,
        bread: <FaBreadSlice className="text-primary" title="Bread" />,
        legume: <GiJellyBeans className="text-primary" title="Legume" />,
        potato: <GiPotato className="text-primary" title="Potato" />,
        none: <MdOutlineNoMeals className="text-primary" title="No carbohydrate" />,
        all: <FaWheatAwn className="text-primary" title="All carbohydrates" />
    };
    return icons[type as keyof typeof icons];
};

const getProteinIcon = (type: string) => {
    const icons = {
        fish: <FaFish className="text-primary" title="Fish" />,
        meat: <FaDrumstickBite className="text-primary" title="Meat" />,
        egg: <FaEgg className="text-primary" title="Egg" />,
        none: <MdOutlineNoMeals className="text-primary" title="No protein" />,
        all: <FaCow className="text-primary" title="All proteins" />
    };
    return icons[type as keyof typeof icons];
};

export { getMealTypeIcon, getCarbohydrateIcon, getProteinIcon };
