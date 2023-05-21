type ButtonProps = {
    title: string;
    path: string;
    target?: string;
}

export default function Button({ title, path, target }: ButtonProps) {

    // Let's save on horizontal scrolls by putting the button class names into an array. 
    const buttonClassNames = [
        "font-mono",
        "text-paynes-grey",
        "dark:text-slate-300",
        "bg-slate-50",
        "dark:bg-slate-600",
        "block",
        "px-4",
        "py-2",
        "border-solid",
        "border-2",
        "border-periwinkle",
        "dark:border-gunmetal",
        "rounded-xl",
        "shadow-periwinkle",
        "hover:shadow-periwinkle-hover",
        "dark:shadow-gunmetal",
        "dark:hover:shadow-gunmetal-hover",
        "transition-all",
        "top-0",
        "left-0",
        "relative",
        "hover:top-0.5",
        "hover:-left-0.5",
        "hover:after:top-px",
        "hover:after:-left-0.5",
        "hover:before:-bottom-0.5",
        "hover:before:right-px",
        "active:top-[3px]",
        "active:-left-[3px]",
    ];
    
    return (
        <a href={path} className={buttonClassNames.join(" ")} target={target || "_self"}>
            {title}
        </a>
    )
}