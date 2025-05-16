'use client';

import Select from "react-select";
import { getCarbohydrateIcon } from "../icons";
import { CustomOption, OptionWithIcon, SingleValueWithIcon, classNames } from "./CustomSelect";

export const CarbohydrateSelect = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => {
    const options: CustomOption[] = [
        { value: "", icon: getCarbohydrateIcon("all"), label: "All carbohydrates" },
        { value: "pasta", icon: getCarbohydrateIcon("pasta"), label: "Pasta" },
        { value: "rice", icon: getCarbohydrateIcon("rice"), label: "Rice" },
        { value: "bread", icon: getCarbohydrateIcon("bread"), label: "Bread" },
        { value: "legume", icon: getCarbohydrateIcon("legume"), label: "Legume" },
        { value: "potato", icon: getCarbohydrateIcon("potato"), label: "Potato" },
        { value: "none", icon: getCarbohydrateIcon("none"), label: "None" },
    ];

    return (
        <Select
            instanceId="carbohydrate-select"
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
