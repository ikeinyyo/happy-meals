'use client';

import Select from "react-select";
import { getMealTypeIcon } from "../icons";
import { classNames, CustomOption, OptionWithIcon, SingleValueWithIcon } from "./CustomSelect";

export const MealTypeSelect = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => {
    const options: CustomOption[] = [
        { value: "", icon: getMealTypeIcon("all"), label: "All types" },
        { value: "lunch", icon: getMealTypeIcon("lunch"), label: "Lunch" },
        { value: "dinner", icon: getMealTypeIcon("dinner"), label: "Dinner" },
        { value: "both", icon: getMealTypeIcon("both"), label: "Lunch & Dinner" },
        { value: "breakfast", icon: getMealTypeIcon("breakfast"), label: "Breakfast" },
        { value: "snack", icon: getMealTypeIcon("snack"), label: "Snack" },
    ];

    return (
        <Select
            instanceId="meal-type-select"
            value={options.find((opt) => opt.value === value)}
            onChange={(selected) => onChange(selected?.value || "")}
            options={options}
            components={{ Option: OptionWithIcon, SingleValue: SingleValueWithIcon }}
            className="w-full"
            classNamePrefix="select"
            classNames={classNames}
        />
    );
};
