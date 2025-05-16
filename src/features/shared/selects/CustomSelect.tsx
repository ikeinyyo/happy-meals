import {
    ClassNamesConfig,
    components,
    OptionProps,
    SingleValueProps,
} from "react-select";
import type { JSX } from "react";

export type CustomOption = {
    value: string;
    label: string;
    icon: JSX.Element;
}

const OptionWithIcon = (props: OptionProps<CustomOption, false>) => (
    <components.Option {...props}>
        <div className="flex items-center gap-2">
            {props.data.icon}
            <span>{props.data.label}</span>
        </div>
    </components.Option>
);

const SingleValueWithIcon = (
    props: SingleValueProps<CustomOption, false>
) => (
    <components.SingleValue {...props}>
        <div className="flex items-center gap-2">
            {props.data.icon}
            <span className="text-foreground">{props.data.label}</span>
        </div>
    </components.SingleValue>
);

const classNames: ClassNamesConfig<CustomOption, false> = {
    control: () => "bg-background border border-gray-300 rounded-md",
    menu: () => "bg-background border border-gray-300 rounded-md shadow-md",
    menuList: () => "bg-background",
    option: ({ isFocused, isSelected }) =>
        [
            "cursor-pointer px-4 py-2 flex items-center gap-2",
            isSelected ? "bg-red-500 text-white" : "",
            isFocused && !isSelected ? "bg-red-100 text-red-700" : "text-red-500",
        ]
            .filter(Boolean)
            .join(" "),
    singleValue: () => "bg-background text-red-500",
    placeholder: () => "bg-background text-red-400",
    indicatorsContainer: () => "bg-background text-red-500",
    dropdownIndicator: () => "text-red-500",
    indicatorSeparator: () => "bg-red-300",
    container: () => "bg-background",
    valueContainer: () => "bg-background",
};

export { OptionWithIcon, SingleValueWithIcon, classNames };