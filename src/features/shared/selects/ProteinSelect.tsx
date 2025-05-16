'use client';

import Select from "react-select";
import { getProteinIcon } from "../icons";
import { CustomOption, OptionWithIcon, SingleValueWithIcon, classNames } from "./CustomSelect";

export const ProteinSelect = ({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) => {
    const options: CustomOption[] = [
        { value: "", icon: getProteinIcon("all"), label: "All proteins" },
        { value: "fish", icon: getProteinIcon("fish"), label: "Fish" },
        { value: "meat", icon: getProteinIcon("meat"), label: "Meat" },
        { value: "egg", icon: getProteinIcon("egg"), label: "Egg" },
        { value: "none", icon: getProteinIcon("none"), label: "None" },
    ];

    return (
        <Select
            instanceId="protein-select"
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
