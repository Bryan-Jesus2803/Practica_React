interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "destructive";
    rounded?: boolean;
}

export const Button = ({ variant = "primary", rounded = false, children }: ButtonProps) => {
    let roundedClass = rounded ? "rounded-full" : "rounded-md";

    let className = `${roundedClass} bg-indigo-600 px-4 py-2 m-2 text-sm font-semibold text-white hover:opacity-50 transition-all duration-200`;

    if (variant === "outline") {
        className = "rounded-md bg-white px-4 py-2 m-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-500 hover:bg-yellow-100 transition-all duration-200";
    } else if (variant === "destructive") {
        className = "rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-all duration-200";
    }

    return (
        <button className={className}>
            {children}
        </button>
    );
};