const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-500",

    outline:
      "border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;